// Spectre journée : transforme map_vide (terrain seul) en Lab à différentes heures
// Les bâtiments apparaissent d'un coup (clip-path), indépendamment de la couleur.
const {Jimp} = require('jimp');
const fs = require('fs');

function rgb2lab(r, g, b) {
  let rl=r/255, gl=g/255, bl=b/255;
  rl=rl>0.04045?Math.pow((rl+0.055)/1.055,2.4):rl/12.92;
  gl=gl>0.04045?Math.pow((gl+0.055)/1.055,2.4):gl/12.92;
  bl=bl>0.04045?Math.pow((bl+0.055)/1.055,2.4):bl/12.92;
  let X=rl*0.4124+gl*0.3576+bl*0.1805,Y=rl*0.2126+gl*0.7152+bl*0.0722,Z=rl*0.0193+gl*0.1192+bl*0.9505;
  X/=0.95047; Z/=1.08883;
  const f=t=>t>0.008856?Math.cbrt(t):7.787*t+16/116;
  return [116*f(Y)-16, 500*(f(X)-f(Y)), 200*(f(Y)-f(Z))];
}
function lab2rgb(L, A, B) {
  const fy=(L+16)/116,fx=A/500+fy,fz=fy-B/200;
  const cube=t=>t>0.206897?t*t*t:(t-16/116)/7.787;
  let X=cube(fx)*0.95047,Y=cube(fy),Z=cube(fz)*1.08883;
  let r=X*3.2406-Y*1.5372-Z*0.4986,g=-X*0.9689+Y*1.8758+Z*0.0415,b=X*0.0557-Y*0.2040+Z*1.0570;
  const gm=v=>v>0.0031308?1.055*Math.pow(v,1/2.4)-0.055:12.92*v;
  return [r,g,b].map(v=>Math.max(0,Math.min(255,Math.round(gm(Math.max(0,v))*255))));
}
function rgb2hsl(r,g,b){r/=255;g/=255;b/=255;const max=Math.max(r,g,b),min=Math.min(r,g,b);let h=0,s=0,l=(max+min)/2;if(max!==min){const d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);switch(max){case r:h=((g-b)/d+(g<b?6:0))/6;break;case g:h=((b-r)/d+2)/6;break;case b:h=((r-g)/d+4)/6;break;}}return[h*360,s*100,l*100];}
function hsl2rgb(h,s,l){s/=100;l/=100;h/=360;const hue2rgb=(p,q,t)=>{if(t<0)t+=1;if(t>1)t-=1;if(t<1/6)return p+(q-p)*6*t;if(t<1/2)return q;if(t<2/3)return p+(q-p)*(2/3-t)*6;return p;};if(s===0)return[l,l,l].map(v=>Math.round(v*255));const q=l<0.5?l*(1+s):l+s-l*s,p=2*l-q;return[hue2rgb(p,q,h+1/3),hue2rgb(p,q,h),hue2rgb(p,q,h-1/3)].map(v=>Math.round(v*255));}

async function main() {
  const dir = 'noc/comparaisons';
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, {recursive:true});

  const [mapFull, mapVide] = await Promise.all([Jimp.read('map.png'), Jimp.read('map_vide.png')]);
  const CW=900, CH=675;
  const fullS = mapFull.clone().resize({w:CW,h:CH});
  const videS = mapVide.clone().resize({w:CW,h:CH});

  // Mesurer les deltas Lab dans la zone champ_ble (sans bâtiments, coin haut-gauche)
  let dL=0, dA=0, dB=0, dSat=0, n=0;
  for (let y=0; y<140; y++) for (let x=0; x<220; x++) {
    const cf=fullS.getPixelColor(x,y), cv=videS.getPixelColor(x,y);
    const fR=(cf>>24)&0xff,fG=(cf>>16)&0xff,fB=(cf>>8)&0xff;
    const vR=(cv>>24)&0xff,vG=(cv>>16)&0xff,vB=(cv>>8)&0xff;
    const [lf,af,bf]=rgb2lab(fR,fG,fB), [lv,av,bv]=rgb2lab(vR,vG,vB);
    const [,sf]=rgb2hsl(fR,fG,fB), [,sv]=rgb2hsl(vR,vG,vB);
    dL+=lf-lv; dA+=af-av; dB+=bf-bv; dSat+=sf-sv; n++;
  }
  dL/=n; dA/=n; dB/=n; dSat/=n;
  console.log(`Deltas Lab (soir vs matin): ΔL*=${dL.toFixed(2)} Δa*=${dA.toFixed(2)} Δb*=${dB.toFixed(2)} ΔSat=${dSat.toFixed(1)}%`);
  console.log('→ La différence principale est la saturation (+19%) et le virage rouge/jaune en Lab\n');

  // Spectre : appliquer t*deltas à map_vide (terrain uniquement, pas de bâtiments)
  const MOMENTS = [
    {t:-0.40, nom:'05h00_aube_bleue'},
    {t:-0.15, nom:'07h00_matin_frais'},
    {t: 0.00, nom:'09h00_matin'},       // = map_vide.png
    {t: 0.35, nom:'13h00_midi'},
    {t: 0.65, nom:'17h00_aprem'},
    {t: 1.00, nom:'20h00_soir'},        // ≈ map.png (terrain)
    {t: 1.30, nom:'22h00_crepuscule'},
  ];

  for (const {t, nom} of MOMENTS) {
    process.stdout.write(`  ${nom} (t=${t.toFixed(2)})… `);
    const out = new Jimp({width:CW,height:CH,color:0x000000ff});
    for (let y=0; y<CH; y++) for (let x=0; x<CW; x++) {
      const c = videS.getPixelColor(x,y);
      const r=(c>>24)&0xff, g=(c>>16)&0xff, b=(c>>8)&0xff;
      // Décaler en Lab
      const [L,A,B2] = rgb2lab(r,g,b);
      const [r2,g2,b2] = lab2rgb(L+t*dL, A+t*dA, B2+t*dB);
      // Ajuster saturation en HSL
      const [h,s,l] = rgb2hsl(r2,g2,b2);
      const sNew = Math.max(0, Math.min(100, s + t*dSat));
      const [r3,g3,b3] = hsl2rgb(h, sNew, l);
      out.setPixelColor((r3*16777216+g3*65536+b3*256+255)>>>0, x, y);
    }
    await out.write(`${dir}/${nom}.png`);
    console.log('✓');
  }
  console.log(`\nRésultat dans ${dir}/`);
  console.log('→ Ce sont les fonds de carte (terrain vide) aux différentes heures.');
  console.log('→ Les bâtiments s\'ajoutent par-dessus via clip-path (apparition instantanée).');
  console.log('\nProchaine étape : CSS filter animé pour que les révélations aient aussi la bonne teinte.');
}
main().catch(console.error);
