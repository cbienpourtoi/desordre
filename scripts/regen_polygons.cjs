// Script réutilisable : map_limites.png → polygones → index.html + previews noc/
const {Jimp} = require('jimp');
const fs = require('fs');

async function main() {
  const [mapFull, mapVide, limites] = await Promise.all([
    Jimp.read('maps/map.png'), Jimp.read('maps/map_vide.png'), Jimp.read('maps/map_limites.png'),
  ]);
  const IW=limites.width, IH=limites.height, CW=900, CH=675;
  const SX=IW/CW, SY=IH/CH;

  const walls = new Uint8Array(IW*IH);
  let wc=0;
  for(let y=0;y<IH;y++) for(let x=0;x<IW;x++) {
    const c=limites.getPixelColor(x,y);
    if(((c>>24)&0xff)>180&&((c>>16)&0xff)>180&&((c>>8)&0xff)>180){walls[y*IW+x]=1;wc++;}
  }
  console.log('Murs blancs:', wc);

  const ZONES=[
    {id:'welfare',cx:705,cy:538},{id:'bulle_nego',cx:482,cy:415},
    {id:'playroom_ext',cx:158,cy:261},{id:'tente_cer',cx:207,cy:471},
    {id:'mixroom',cx:410,cy:514},{id:'bat1',cx:485,cy:205},
    {id:'bat2',cx:658,cy:253},{id:'cantina',cx:785,cy:303},{id:'pmu',cx:412,cy:168},
    // zones périphériques (pas de bâtiments)
    {id:'champ_ble',cx:65,cy:65},{id:'camping',cx:70,cy:610},
    {id:'pins',cx:835,cy:620},{id:'parking',cx:700,cy:60},
  ];

  const NUM_RAYS=72, MAX_R=Math.round(Math.sqrt(CW*CW+CH*CH)*SX);
  if(!fs.existsSync('noc')) fs.mkdirSync('noc');
  const fullS=mapFull.clone().resize({w:CW,h:CH});
  const videS=mapVide.clone().resize({w:CW,h:CH});
  const polygons={};

  for(const {id,cx,cy} of ZONES) {
    const sx=Math.round(cx*SX), sy=Math.round(cy*SY);
    const ptsImg=[];
    for(let i=0;i<NUM_RAYS;i++) {
      const a=2*Math.PI*i/NUM_RAYS, ca=Math.cos(a), sa=Math.sin(a);
      let hx=sx+Math.round(MAX_R*ca), hy=sy+Math.round(MAX_R*sa);
      for(let d=3;d<=MAX_R;d++) {
        const nx=Math.round(sx+d*ca), ny=Math.round(sy+d*sa);
        if(nx<0||nx>=IW||ny<0||ny>=IH){hx=Math.max(0,Math.min(IW-1,nx));hy=Math.max(0,Math.min(IH-1,ny));break;}
        if(walls[ny*IW+nx]){hx=nx;hy=ny;break;}
      }
      ptsImg.push([hx,hy]);
    }

    const ptsCss=ptsImg.map(([x,y])=>[
      Math.max(0,Math.min(CW,Math.round(x/SX*10)/10)),
      Math.max(0,Math.min(CH,Math.round(y/SY*10)/10)),
    ]);
    polygons[id]='polygon('+ptsCss.map(([x,y])=>x+'px '+y+'px').join(', ')+')';

    const dists=ptsCss.map(([px,py])=>Math.sqrt((px-cx)**2+(py-cy)**2));
    const avg=Math.round(dists.reduce((s,d)=>s+d,0)/dists.length);
    console.log(id+': moy='+avg+'px min='+Math.round(Math.min(...dists))+'px max='+Math.round(Math.max(...dists))+'px');

    // Scanline fill
    const minY=Math.max(0,Math.min(...ptsImg.map(p=>p[1]))), maxY=Math.min(IH-1,Math.max(...ptsImg.map(p=>p[1])));
    const mask=new Uint8Array(IW*IH);
    for(let y=minY;y<=maxY;y++){
      const xs=[];
      for(let i=0;i<ptsImg.length;i++){
        const[x1,y1]=ptsImg[i],[x2,y2]=ptsImg[(i+1)%ptsImg.length];
        if((y1<=y&&y<y2)||(y2<=y&&y<y1)) xs.push(x1+(y-y1)/(y2-y1)*(x2-x1));
      }
      xs.sort((a,b)=>a-b);
      for(let i=0;i<xs.length-1;i+=2){
        const x0=Math.max(0,Math.round(xs[i])),x1=Math.min(IW-1,Math.round(xs[i+1]));
        for(let x=x0;x<=x1;x++) mask[y*IW+x]=1;
      }
    }
    const out=videS.clone();
    for(let y=0;y<CH;y++) for(let x=0;x<CW;x++){
      const ix=Math.min(IW-1,Math.round(x*SX)),iy=Math.min(IH-1,Math.round(y*SY));
      if(mask[iy*IW+ix]) out.setPixelColor(fullS.getPixelColor(x,y),x,y);
    }
    await out.write('noc/preview_'+id+'.png');
    console.log('  → noc/preview_'+id+'.png');
  }

  // Injecter dans index.html
  let html=fs.readFileSync('index.html','utf8');
  for(const [id,poly] of Object.entries(polygons)){
    const re1=new RegExp('(id="reveal-'+id+'"[^>]+style="[^"]*clip-path:)polygon\\([^)]+\\)','g');
    const re2=new RegExp('(id="reveal-night-'+id+'"[^>]+style="[^"]*clip-path:)polygon\\([^)]+\\)','g');
    html=html.replace(re1,(m,p)=>p+poly).replace(re2,(m,p)=>p+poly);
  }
  fs.writeFileSync('index.html', html);
  fs.writeFileSync('zone_polygons.json', JSON.stringify(polygons, null, 2));
  console.log('\nindex.html + zone_polygons.json mis à jour');
}
main().catch(console.error);
