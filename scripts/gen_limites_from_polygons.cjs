// Génère maps/map_limites.png à partir de zone_polygons.json
// Les polygones CSS (900×675) sont rasterisés en lignes blanches (épaisseur 3px)
// sur fond noir à la résolution native de l'image source (1536×1024).
// Ensuite lancer : node scripts/regen_polygons.cjs
const { Jimp } = require('jimp');
const fs = require('fs');

const CW = 900, CH = 675;
const IW = 1536, IH = 1024;
const SX = IW / CW, SY = IH / CH;
const LINE_W = 3; // épaisseur des lignes (px dans l'image 1536×1024)
const WHITE = 0xffffffff;

function parsePolygon(polyStr) {
  return polyStr
    .replace('polygon(', '').replace(')', '')
    .split(',')
    .map(p => {
      const [x, y] = p.trim().split(' ').map(v => parseFloat(v));
      return [Math.round(x * SX), Math.round(y * SY)];
    });
}

// Algorithme de Bresenham avec épaisseur
function drawLine(img, x0, y0, x1, y1) {
  const dx = Math.abs(x1 - x0), dy = Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;
  while (true) {
    // Dessiner un carré de LINE_W × LINE_W centré sur le point
    const r = Math.floor(LINE_W / 2);
    for (let dy2 = -r; dy2 <= r; dy2++) {
      for (let dx2 = -r; dx2 <= r; dx2++) {
        const px = x0 + dx2, py = y0 + dy2;
        if (px >= 0 && px < IW && py >= 0 && py < IH) img.setPixelColor(WHITE, px, py);
      }
    }
    if (x0 === x1 && y0 === y1) break;
    const e2 = 2 * err;
    if (e2 > -dy) { err -= dy; x0 += sx; }
    if (e2 < dx)  { err += dx; y0 += sy; }
  }
}

async function main() {
  const polygons = JSON.parse(fs.readFileSync('./zone_polygons.json', 'utf8'));
  const img = new Jimp({ width: IW, height: IH, color: 0x000000ff });

  for (const [id, polyStr] of Object.entries(polygons)) {
    const pts = parsePolygon(polyStr);
    for (let i = 0; i < pts.length; i++) {
      const [x0, y0] = pts[i];
      const [x1, y1] = pts[(i + 1) % pts.length];
      drawLine(img, x0, y0, x1, y1);
    }
    console.log(`${id} : ${pts.length} points`);
  }

  await img.write('maps/map_limites.png');
  console.log('\nmaps/map_limites.png régénéré depuis zone_polygons.json');
  console.log('Lance maintenant : node scripts/regen_polygons.cjs');
}
main().catch(console.error);
