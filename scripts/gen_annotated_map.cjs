// Génère map_annotated.png — carte avec numéros sur chaque zone pour brief ChatGPT
const { Jimp, loadFont } = require('jimp');
const fs = require('fs');

const polygons = JSON.parse(fs.readFileSync('./zone_polygons.json', 'utf8'));

// Polygon coordinates are in 900×675 CSS space; image is 1536×1024
const CW = 900, CH = 675;

const ANNOTATIONS = [
  { id: 'welfare',      n: 1 },
  { id: 'bat1',         n: 2 },
  { id: 'cantina',      n: 3 },
  { id: 'playroom_ext', n: 4 },
  { id: 'tente_cer',    n: 5 },
  { id: 'mixroom',      n: 6 },
  { id: 'pmu',          n: 7 },
  { id: 'bat2',         n: 8 },
  { id: 'bulle_nego',   n: 9 },
];

function centroid(polygonStr) {
  const pts = polygonStr
    .replace('polygon(', '').replace(')', '')
    .split(',')
    .map(p => {
      const [x, y] = p.trim().split(' ').map(v => parseFloat(v));
      return { x, y };
    });
  return {
    x: pts.reduce((s, p) => s + p.x, 0) / pts.length,
    y: pts.reduce((s, p) => s + p.y, 0) / pts.length,
  };
}

async function run() {
  const img = await Jimp.read('./maps/map.png');
  const W = img.bitmap.width;
  const H = img.bitmap.height;
  const SX = W / CW;
  const SY = H / CH;
  console.log(`Image: ${W}×${H}, scale: ${SX.toFixed(3)}×${SY.toFixed(3)}`);

  for (const ann of ANNOTATIONS) {
    const poly = polygons[ann.id];
    if (!poly) { console.warn('missing polygon:', ann.id); continue; }
    const c = centroid(poly);
    const x = Math.round(c.x * SX);
    const y = Math.round(c.y * SY);
    console.log(`Zone ${ann.id}: CSS (${c.x.toFixed(0)}, ${c.y.toFixed(0)}) → img (${x}, ${y})`);

    const r = 36;
    for (let dy = -r; dy <= r; dy++) {
      for (let dx = -r; dx <= r; dx++) {
        const d2 = dx * dx + dy * dy;
        if (d2 <= r * r) {
          const px = x + dx, py = y + dy;
          if (px >= 0 && py >= 0 && px < W && py < H) {
            const color = d2 >= (r - 4) * (r - 4) ? 0x000000FF : 0xDD1111FF;
            img.setPixelColor(color, px, py);
          }
        }
      }
    }
  }

  const fontPath = require('path').join(
    __dirname, '../node_modules/@jimp/plugin-print/dist/fonts/open-sans/open-sans-32-white/open-sans-32-white.fnt'
  );
  const font = await loadFont(fontPath);

  for (const ann of ANNOTATIONS) {
    const poly = polygons[ann.id];
    if (!poly) continue;
    const c = centroid(poly);
    const x = Math.round(c.x * SX);
    const y = Math.round(c.y * SY);
    img.print({ font, x: x - 10, y: y - 18, text: String(ann.n) });
  }

  await img.write('./maps/map_annotated.png');
  console.log('Saved: maps/map_annotated.png');
}

run().catch(e => { console.error(e); process.exit(1); });
