// Génère des prévisualisations composites : terrain + bâtiments avec la même teinte horaire
const {Jimp} = require('jimp');
const fs = require('fs');

function rgb2lab(r,g,b){let rl=r/255,gl=g/255,bl=b/255;rl=rl>0.04045?Math.pow((rl+0.055)/1.055,2.4):rl/12.92;gl=gl>0.04045?Math.pow((gl+0.055)/1.055,2.4):gl/12.92;bl=bl>0.04045?Math.pow((bl+0.055)/1.055,2.4):bl/12.92;let X=rl*0.4124+gl*0.3576+bl*0.1805,Y=rl*0.2126+gl*0.7152+bl*0.0722,Z=rl*0.0193+gl*0.1192+bl*0.9505;X/=0.95047;Z/=1.08883;const f=t=>t>0.008856?Math.cbrt(t):7.787*t+16/116;return[116*f(Y)-16,500*(f(X)-f(Y)),200*(f(Y)-f(Z))];}
function lab2rgb(L,A,B){const fy=(L+16)/116,fx=A/500+fy,fz=fy-B/200;const cube=t=>t>0.206897?t*t*t:(t-16/116)/7.787;let X=cube(fx)*0.95047,Y=cube(fy),Z=cube(fz)*1.08883;let r=X*3.2406-Y*1.5372-Z*0.4986,g=-X*0.9689+Y*1.8758+Z*0.0415,b=X*0.0557-Y*0.2040+Z*1.0570;const gm=v=>v>0.0031308?1.055*Math.pow(v,1/2.4)-0.055:12.92*v;return[r,g,b].map(v=>Math.max(0,Math.min(255,Math.round(gm(Math.max(0,v))*255))));}
function rgb2hsl(r,g,b){r/=255;g/=255;b/=255;const max=Math.max(r,g,b),min=Math.min(r,g,b);let h=0,s=0,l=(max+min)/2;if(max!==min){const d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);switch(max){case r:h=((g-b)/d+(g<b?6:0))/6;break;case g:h=((b-r)/d+2)/6;break;case b:h=((r-g)/d+4)/6;break;}}return[h*360,s*100,l*100];}
function hsl2rgb(h,s,l){s/=100;l/=100;h/=360;const hue2rgb=(p,q,t)=>{if(t<0)t+=1;if(t>1)t-=1;if(t<1/6)return p+(q-p)*6*t;if(t<1/2)return q;if(t<2/3)return p+(q-p)*(2/3-t)*6;return p;};if(s===0)return[l,l,l].map(v=>Math.round(v*255));const q=l<0.5?l*(1+s):l+s-l*s,p=2*l-q;return[hue2rgb(p,q,h+1/3),hue2rgb(p,q,h),hue2rgb(p,q,h-1/3)].map(v=>Math.round(v*255));}

function transformPx(r,g,b,t,dL,dA,dB,dSat){
  const[L,A,B2]=rgb2lab(r,g,b);
  const[r2,g2,b2]=lab2rgb(L+t*dL,A+t*dA,B2+t*dB);
  const[h,s,l]=rgb2hsl(r2,g2,b2);
  const sNew=Math.max(0,Math.min(100,s+t*dSat));
  const[r3,g3,b3]=hsl2rgb(h,sNew,l);
  return(r3*16777216+g3*65536+b3*256+255)>>>0;
}

function buildMask(polyStr,W,H){
  const pts=[...polyStr.matchAll(/([\d.]+)px\s+([\d.]+)px/g)].map(m=>[parseFloat(m[1]),parseFloat(m[2])]);
  const mask=new Uint8Array(W*H);
  const minY=Math.max(0,Math.floor(Math.min(...pts.map(p=>p[1])))),maxY=Math.min(H-1,Math.ceil(Math.max(...pts.map(p=>p[1]))));
  for(let y=minY;y<=maxY;y++){
    const xs=[];
    for(let i=0;i<pts.length;i++){const[x1,y1]=pts[i],[x2,y2]=pts[(i+1)%pts.length];if((y1<=y&&y<y2)||(y2<=y&&y<y1))xs.push(x1+(y-y1)/(y2-y1)*(x2-x1));}
    xs.sort((a,b)=>a-b);
    for(let i=0;i<xs.length-1;i+=2){const x0=Math.max(0,Math.round(xs[i])),x1=Math.min(W-1,Math.round(xs[i+1]));for(let x=x0;x<=x1;x++)mask[y*W+x]=1;}
  }
  return mask;
}

async function main(){
  const dir='noc/comparaisons';
  if(!fs.existsSync(dir))fs.mkdirSync(dir,{recursive:true});

  const[mapFull,mapVide]=await Promise.all([Jimp.read('map.png'),Jimp.read('map_vide.png')]);
  const CW=900,CH=675;
  const fullS=mapFull.clone().resize({w:CW,h:CH});
  const videS=mapVide.clone().resize({w:CW,h:CH});

  // Deltas Lab depuis zone champ_ble
  let dL=0,dA=0,dB=0,dSat=0,n=0;
  for(let y=0;y<140;y++)for(let x=0;x<220;x++){
    const cf=fullS.getPixelColor(x,y),cv=videS.getPixelColor(x,y);
    const fR=(cf>>24)&0xff,fG=(cf>>16)&0xff,fB=(cf>>8)&0xff;
    const vR=(cv>>24)&0xff,vG=(cv>>16)&0xff,vB=(cv>>8)&0xff;
    const[lf,af,bf]=rgb2lab(fR,fG,fB),[lv,av,bv]=rgb2lab(vR,vG,vB);
    const[,sf]=rgb2hsl(fR,fG,fB),[,sv]=rgb2hsl(vR,vG,vB);
    dL+=lf-lv;dA+=af-av;dB+=bf-bv;dSat+=sf-sv;n++;
  }
  dL/=n;dA/=n;dB/=n;dSat/=n;
  console.log(`Deltas: ΔL*=${dL.toFixed(2)} Δa*=${dA.toFixed(2)} Δb*=${dB.toFixed(2)} ΔSat=${dSat.toFixed(1)}%`);

  // Masque tous bâtiments (9 zones avec bâtiments uniquement, pas périphériques)
  const polygons=JSON.parse(fs.readFileSync('zone_polygons.json','utf8'));
  const BAT_ZONES=['welfare','bulle_nego','playroom_ext','tente_cer','mixroom','bat1','bat2','cantina','pmu'];
  const allMask=new Uint8Array(CW*CH);
  for(const zid of BAT_ZONES){
    const m=buildMask(polygons[zid],CW,CH);
    for(let i=0;i<CW*CH;i++)if(m[i])allMask[i]=1;
  }

  const MOMENTS=[
    {t:-0.40,nom:'05h00_aube_bleue'},
    {t: 0.00,nom:'09h00_matin'},
    {t: 0.35,nom:'13h00_midi'},
    {t: 0.65,nom:'17h00_aprem'},
    {t: 1.00,nom:'20h00_soir'},
    {t: 1.30,nom:'22h00_crepuscule'},
  ];

  console.log('\nGénération composites (terrain + bâtiments, même transformation)…');
  for(const{t,nom}of MOMENTS){
    process.stdout.write(`  ${nom}… `);
    const out=new Jimp({width:CW,height:CH,color:0x000000ff});
    for(let y=0;y<CH;y++)for(let x=0;x<CW;x++){
      // Pixel source : bâtiment → map.png, sinon → map_vide.png
      const src=allMask[y*CW+x]?fullS:videS;
      const c=src.getPixelColor(x,y);
      const r=(c>>24)&0xff,g=(c>>16)&0xff,b=(c>>8)&0xff;
      out.setPixelColor(transformPx(r,g,b,t,dL,dA,dB,dSat),x,y);
    }
    await out.write(`${dir}/composite_${nom}.png`);
    console.log('✓');
  }
  console.log(`\nDans ${dir}/composite_*.png`);
  console.log('Tous les bâtiments sont présents, avec la même teinte que le terrain.');
  console.log('(En jeu, les bâtiments non débloqués seront cachés — mais la fusion sera identique.)');
}
main().catch(console.error);
