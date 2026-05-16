// Génère map_vide_chaud.png : map_vide.png avec ton chaud (transformation colorimétrique)
// R × 1.24 - 8,  G × 1.05 - 8,  B × 0.61 + 1
const {Jimp} = require('jimp');
const fs = require('fs');

async function main() {
  const [mapFull, mapVide] = await Promise.all([
    Jimp.read('map.png'), Jimp.read('map_vide.png'),
  ]);

  // Paramètres de transformation (calculés depuis analyse colorimétrique sur champ_ble)
  const TRANSFORM = {
    R: { a: 1.24, b: -8 },
    G: { a: 1.05, b: -8 },
    B: { a: 0.61, b:  1 },
  };

  const W = mapVide.width, H = mapVide.height;
  console.log(`map_vide.png: ${W}x${H}`);

  const out = mapVide.clone();
  let changed = 0;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const c = mapVide.getPixelColor(x, y);
      const a = c & 0xff;
      const r = (c >> 24) & 0xff;
      const g = (c >> 16) & 0xff;
      const b = (c >> 8) & 0xff;
      const r2 = Math.max(0, Math.min(255, Math.round(r * TRANSFORM.R.a + TRANSFORM.R.b)));
      const g2 = Math.max(0, Math.min(255, Math.round(g * TRANSFORM.G.a + TRANSFORM.G.b)));
      const b2 = Math.max(0, Math.min(255, Math.round(b * TRANSFORM.B.a + TRANSFORM.B.b)));
      if (r2 !== r || g2 !== g || b2 !== b) {
        const newColor = (r2 * 16777216 + g2 * 65536 + b2 * 256 + a) >>> 0;
        out.setPixelColor(newColor, x, y);
        changed++;
      }
    }
  }
  console.log(`Pixels modifiés: ${changed} / ${W * H}`);
  await out.write('map_vide_chaud.png');
  console.log('→ map_vide_chaud.png généré');

  // Aperçu comparaison : haut-gauche (champ_ble) des 3 versions côte à côte
  // full | vide | vide_chaud
  const CW = 900, CH = 675;
  const CROP_W = 250, CROP_H = 150;
  const fullS = mapFull.clone().resize({w: CW, h: CH});
  const videS = mapVide.clone().resize({w: CW, h: CH});
  const chaudS = out.clone().resize({w: CW, h: CH});

  const comp = new Jimp({width: CROP_W * 3 + 4, height: CROP_H, color: 0x888888ff});
  for (let y = 0; y < CROP_H; y++) {
    for (let x = 0; x < CROP_W; x++) {
      comp.setPixelColor(fullS.getPixelColor(x, y), x, y);
      comp.setPixelColor(videS.getPixelColor(x, y), CROP_W + 2 + x, y);
      comp.setPixelColor(chaudS.getPixelColor(x, y), CROP_W * 2 + 4 + x, y);
    }
  }
  await comp.write('noc/compare_chaud.png');
  console.log('→ noc/compare_chaud.png [map.png | map_vide | map_vide_chaud]');

  // MSE entre map.png et map_vide_chaud dans la zone champ_ble (crop)
  let mseBefore = 0, mseAfter = 0, count = 0;
  for (let y = 0; y < CROP_H; y++) {
    for (let x = 0; x < CROP_W; x++) {
      const cf = fullS.getPixelColor(x, y);
      const cv = videS.getPixelColor(x, y);
      const cc = chaudS.getPixelColor(x, y);
      const fR=(cf>>24)&0xff, fG=(cf>>16)&0xff, fB=(cf>>8)&0xff;
      const vR=(cv>>24)&0xff, vG=(cv>>16)&0xff, vB=(cv>>8)&0xff;
      const cR=(cc>>24)&0xff, cG=(cc>>16)&0xff, cB=(cc>>8)&0xff;
      mseBefore += (fR-vR)**2 + (fG-vG)**2 + (fB-vB)**2;
      mseAfter  += (fR-cR)**2 + (fG-cG)**2 + (fB-cB)**2;
      count++;
    }
  }
  console.log(`\nMSE map.png vs map_vide (avant): ${(mseBefore/count/3).toFixed(1)}`);
  console.log(`MSE map.png vs map_vide_chaud (après): ${(mseAfter/count/3).toFixed(1)}`);
  console.log(`Amélioration: ${((1 - mseAfter/mseBefore)*100).toFixed(1)}%`);
}

main().catch(console.error);
