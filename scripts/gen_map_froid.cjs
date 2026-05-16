// Génère maps/map_froid.png : version "matin frais" de map.png
// Applique la transformation inverse de la chaleur (plein/soir → frais/matin)
// Inverse de R×1.24-8, G×1.05-8, B×0.61+1
// → R_froid = (R+8)/1.24,  G_froid = (G+8)/1.05,  B_froid = (B-1)/0.61
//
// Usage : utilisé pour les <img class="map-reveal"> dans index.html
// Le filtre CSS time-of-day réchauffe ensuite les deux images (map_vide + map_froid)
// de façon identique, assurant une cohérence colorimétrique parfaite.
const {Jimp} = require('jimp');

async function main() {
  const img = await Jimp.read('maps/map.png');
  const W = img.width, H = img.height;
  console.log(`map.png: ${W}x${H}`);

  const out = img.clone();
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const c = img.getPixelColor(x, y);
      const a =  c        & 0xff;
      const r = (c >> 24) & 0xff;
      const g = (c >> 16) & 0xff;
      const b = (c >>  8) & 0xff;
      const r2 = Math.max(0, Math.min(255, Math.round((r + 8) / 1.24)));
      const g2 = Math.max(0, Math.min(255, Math.round((g + 8) / 1.05)));
      const b2 = Math.max(0, Math.min(255, Math.round((b - 1) / 0.61)));
      const newColor = (r2 * 16777216 + g2 * 65536 + b2 * 256 + a) >>> 0;
      out.setPixelColor(newColor, x, y);
    }
  }
  await out.write('maps/map_froid.png');
  console.log('→ maps/map_froid.png généré');
}

main().catch(console.error);
