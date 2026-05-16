// Génère deux cartes pour comparaison visuelle :
// 1. map_vide_chaud.png  → terrain vide, ton chaud/soir  (map_vide + transform warm)
// 2. map_froid.png       → bâtiments visibles, ton froid/matin (map + transform inverse)
// Output dans noc/comparaisons/
const {Jimp} = require('jimp');
const fs = require('fs');

// Transformation cool→warm (d'après analyse colorimétrique sur zone champ_ble)
const TW = { R: { a: 1.24, b: -8 }, G: { a: 1.05, b: -8 }, B: { a: 0.61, b: 1 } };
// Transformation inverse warm→cool
const TC = {
  R: { a: 1 / TW.R.a, b: -TW.R.b / TW.R.a },
  G: { a: 1 / TW.G.a, b: -TW.G.b / TW.G.a },
  B: { a: 1 / TW.B.a, b: -TW.B.b / TW.B.a },
};

function applyTransform(src, t) {
  const out = src.clone();
  const W = src.width, H = src.height;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const c = src.getPixelColor(x, y);
      const alpha = c & 0xff;
      const r = (c >> 24) & 0xff, g = (c >> 16) & 0xff, b = (c >> 8) & 0xff;
      const r2 = Math.max(0, Math.min(255, Math.round(r * t.R.a + t.R.b)));
      const g2 = Math.max(0, Math.min(255, Math.round(g * t.G.a + t.G.b)));
      const b2 = Math.max(0, Math.min(255, Math.round(b * t.B.a + t.B.b)));
      out.setPixelColor((r2 * 16777216 + g2 * 65536 + b2 * 256 + alpha) >>> 0, x, y);
    }
  }
  return out;
}

async function main() {
  if (!fs.existsSync('noc/comparaisons')) fs.mkdirSync('noc/comparaisons', {recursive: true});

  const [mapFull, mapVide] = await Promise.all([
    Jimp.read('map.png'), Jimp.read('map_vide.png'),
  ]);

  console.log('Génération map_vide_chaud (terrain vide, ton chaud)…');
  const videChaud = applyTransform(mapVide, TW);
  await videChaud.write('noc/comparaisons/map_vide_chaud.png');
  console.log('→ noc/comparaisons/map_vide_chaud.png');

  console.log('Génération map_froid (bâtiments, ton froid)…');
  const mapFroid = applyTransform(mapFull, TC);
  await mapFroid.write('noc/comparaisons/map_froid.png');
  console.log('→ noc/comparaisons/map_froid.png');

  // Bonus : les 4 variantes en miniature (450x338) dans une grille 2x2
  const CW = 450, CH = 338;
  const grid = new Jimp({width: CW * 2 + 2, height: CH * 2 + 2, color: 0x333333ff});
  const imgs = [
    {img: mapVide,   label: 'vide_froid (original)'},
    {img: videChaud, label: 'vide_chaud'},
    {img: mapFull,   label: 'full_chaud (original)'},
    {img: mapFroid,  label: 'full_froid'},
  ];
  for (const [i, {img, label}] of imgs.entries()) {
    const col = i % 2, row = Math.floor(i / 2);
    const resized = img.clone().resize({w: CW, h: CH});
    for (let y = 0; y < CH; y++)
      for (let x = 0; x < CW; x++)
        grid.setPixelColor(resized.getPixelColor(x, y), col * (CW + 1) + x, row * (CH + 1) + y);
    console.log(`  ${i + 1}/4 ${label}`);
  }
  await grid.write('noc/comparaisons/grille_4variantes.png');
  console.log('→ noc/comparaisons/grille_4variantes.png  [vide_froid | vide_chaud / full_chaud | full_froid]');
}

main().catch(console.error);
