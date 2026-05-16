// Génère les images time-of-day dans maps/tod/
// 4 étapes : 8h (t=0), 12h (t=0.5), 16h (t=0.866), 20h (t=1.0)
// Sources : maps/map_vide.png (terrain) et maps/map_froid.png (bâtiments)
// Formule (interpolation linéaire des paramètres RGB à t=1) :
//   R' = R × (1 + 0.24t) - 8t
//   G' = G × (1 + 0.05t) - 8t
//   B' = B × (1 - 0.39t) + t
const {Jimp} = require('jimp');
const fs = require('fs');

const STEPS = [
  { hour: '8h',  t: 0     },
  { hour: '12h', t: 0.5   },
  { hour: '16h', t: 0.866 },
  { hour: '20h', t: 1.0   },
];

function applyWarm(img, t) {
  const out = img.clone();
  const W = img.width, H = img.height;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const c = img.getPixelColor(x, y);
      const a =  c        & 0xff;
      const r = (c >> 24) & 0xff;
      const g = (c >> 16) & 0xff;
      const b = (c >>  8) & 0xff;
      if (t === 0) continue; // no change at t=0
      const r2 = Math.max(0, Math.min(255, Math.round(r * (1 + 0.24 * t) - 8 * t)));
      const g2 = Math.max(0, Math.min(255, Math.round(g * (1 + 0.05 * t) - 8 * t)));
      const b2 = Math.max(0, Math.min(255, Math.round(b * (1 - 0.39 * t) + t)));
      const newColor = (r2 * 16777216 + g2 * 65536 + b2 * 256 + a) >>> 0;
      out.setPixelColor(newColor, x, y);
    }
  }
  return out;
}

async function main() {
  if (!fs.existsSync('maps/tod')) fs.mkdirSync('maps/tod');

  const [terrain, bat] = await Promise.all([
    Jimp.read('maps/map_vide.png'),
    Jimp.read('maps/map_froid.png'),
  ]);
  console.log(`terrain: ${terrain.width}x${terrain.height}`);
  console.log(`bat:     ${bat.width}x${bat.height}`);

  for (const step of STEPS) {
    console.log(`\nGénération étape ${step.hour} (t=${step.t})...`);

    const tImg = applyWarm(terrain, step.t);
    await tImg.write(`maps/tod/terrain_${step.hour}.png`);
    console.log(`  → maps/tod/terrain_${step.hour}.png`);

    const bImg = applyWarm(bat, step.t);
    await bImg.write(`maps/tod/bat_${step.hour}.png`);
    console.log(`  → maps/tod/bat_${step.hour}.png`);
  }

  console.log('\nTous les fichiers TOD générés.');
}

main().catch(console.error);
