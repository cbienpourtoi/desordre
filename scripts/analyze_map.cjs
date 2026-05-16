// analyze_map.cjs — extrait les polygones de chaque zone depuis map.png vs map_vide.png
const { Jimp } = require('jimp');

// Dimensions réelles des images source
const IMG_W = 1535, IMG_H = 1024;
// Dimensions d'affichage CSS
const CSS_W = 900, CSS_H = 675;
const SX = IMG_W / CSS_W; // scale CSS → image
const SY = IMG_H / CSS_H;

const DIFF_THRESHOLD = 25; // delta RGB pour "pixel bâtiment"
const SIMPLIFY_STEP = 4;   // sub-sample pour simplifier le polygone

// Centres des zones en coordonnées CSS (900×675)
const ZONES = {
  welfare:      { cx: 625+80, cy: 478+60 },
  bulle_nego:   { cx: 447+35, cy: 375+40 },
  playroom_ext: { cx: 78+80,  cy: 196+65 },
  tente_cer:    { cx: 127+80, cy: 396+75 },
  mixroom:      { cx: 325+85, cy: 454+60 },
  bat1:         { cx: 410+75, cy: 140+65 },
  bat2:         { cx: 588+70, cy: 188+65 },
  cantina:      { cx: 720+65, cy: 248+55 },
  pmu:          { cx: 377+35, cy: 128+40 },
};

function getColor(img, x, y) {
  const c = img.getPixelColor(x, y);
  return { r: (c >> 24) & 0xff, g: (c >> 16) & 0xff, b: (c >> 8) & 0xff };
}

async function main() {
  console.log(`Scale CSS→image: ${SX.toFixed(3)} × ${SY.toFixed(3)}`);
  console.log('Chargement des images...');
  const [full, vide] = await Promise.all([
    Jimp.read('maps/map.png'),
    Jimp.read('maps/map_vide.png'),
  ]);

  // 1. Masque diff en coordonnées image (IMG_W × IMG_H)
  const diffMask = new Uint8Array(IMG_W * IMG_H);
  let diffCount = 0;
  for (let y = 0; y < IMG_H; y++) {
    for (let x = 0; x < IMG_W; x++) {
      // map.png fait 1536 px, on clamp à 1535
      const fx = Math.min(x, full.width - 1);
      const cf = getColor(full, fx, y);
      const cv = getColor(vide, x, y);
      const delta = Math.abs(cf.r - cv.r) + Math.abs(cf.g - cv.g) + Math.abs(cf.b - cv.b);
      if (delta > DIFF_THRESHOLD) { diffMask[y * IMG_W + x] = 1; diffCount++; }
    }
  }
  console.log(`Diff calculé. Pixels bâtiment: ${diffCount} / ${IMG_W * IMG_H}`);

  // 2. Flood-fill depuis chaque zone
  const zonePolygons = {};
  for (const [zid, { cx, cy }] of Object.entries(ZONES)) {
    // Convertir centre CSS → coordonnées image
    let seedX = Math.round(cx * SX);
    let seedY = Math.round(cy * SY);
    seedX = Math.max(0, Math.min(IMG_W - 1, seedX));
    seedY = Math.max(0, Math.min(IMG_H - 1, seedY));

    // Si pas sur un pixel diff, chercher le plus proche
    if (!diffMask[seedY * IMG_W + seedX]) {
      let found = false;
      outer: for (let r = 1; r <= 80; r++) {
        for (let dy = -r; dy <= r; dy++) {
          for (let dx = -r; dx <= r; dx++) {
            if (Math.abs(dx) === r || Math.abs(dy) === r) {
              const nx = seedX + dx, ny = seedY + dy;
              if (nx >= 0 && nx < IMG_W && ny >= 0 && ny < IMG_H && diffMask[ny * IMG_W + nx]) {
                seedX = nx; seedY = ny; found = true; break outer;
              }
            }
          }
        }
      }
      if (!found) {
        console.warn(`⚠️  ${zid}: aucun pixel bâtiment trouvé`);
        zonePolygons[zid] = null;
        continue;
      }
    }

    // BFS flood-fill (4-connected)
    const visited = new Uint8Array(IMG_W * IMG_H);
    const pixels = [];
    const queue = [[seedX, seedY]];
    visited[seedY * IMG_W + seedX] = 1;
    while (queue.length) {
      const [x, y] = queue.shift();
      pixels.push([x, y]);
      for (const [dx, dy] of [[-1,0],[1,0],[0,-1],[0,1]]) {
        const nx = x+dx, ny = y+dy;
        if (nx >= 0 && nx < IMG_W && ny >= 0 && ny < IMG_H
            && !visited[ny*IMG_W+nx] && diffMask[ny*IMG_W+nx]) {
          visited[ny*IMG_W+nx] = 1;
          queue.push([nx, ny]);
        }
      }
    }
    console.log(`  ${zid}: ${pixels.length} pixels (seed: ${seedX},${seedY} img)`);

    // 3. Contour par scan de lignes → polygone silhouette
    const byRow = new Map();
    for (const [x, y] of pixels) {
      if (!byRow.has(y)) byRow.set(y, [x, x]);
      else {
        const r = byRow.get(y); if (x < r[0]) r[0] = x; if (x > r[1]) r[1] = x;
      }
    }
    const rows = [...byRow.keys()].sort((a,b)=>a-b);
    const left = [], right = [];
    for (let i = 0; i < rows.length; i += SIMPLIFY_STEP) {
      const y = rows[i];
      const [xMin, xMax] = byRow.get(y);
      // Reconvertir coordonnées image → CSS
      left.push([Math.round(xMin / SX), Math.round(y / SY)]);
      right.push([Math.round(xMax / SX), Math.round(y / SY)]);
    }
    zonePolygons[zid] = [...left, ...right.reverse()];
  }

  // 4. Output CSS
  console.log('\n===== CSS clip-path: polygon() =====\n');
  for (const [zid, poly] of Object.entries(zonePolygons)) {
    if (!poly) { console.log(`/* ${zid}: non trouvé */\n`); continue; }
    const pts = poly.map(([x,y]) => `${x}px ${y}px`).join(', ');
    console.log(`/* ${zid} (${poly.length} pts) */`);
    console.log(`'${pts}'`);
    console.log('');
  }
}

main().catch(console.error);