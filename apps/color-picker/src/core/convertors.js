export function RGBtoHex( rgbArray ){

    let r = rgbArray[0].toString(16)
    let g = rgbArray[1].toString(16)
    let b = rgbArray[2].toString(16)

    if (r.length === 1)
    r = `0${r}`;
    if (g.length === 1)
        g = `0${g}`;
    if (b.length === 1)
        b = `0${b}`;

    return `#${r}${g}${b}`;
    
}

export function RGBtoHSL( rgbArray ){

    let r = rgbArray[0]
    let g = rgbArray[1]
    let b = rgbArray[2]

    r /= 255;
    g /= 255;
    b /= 255;

    const cmin = Math.min(r,g,b)
    const cmax = Math.max(r,g,b)
    const delta = cmax - cmin
    let h = 0
    let s = 0
    let l = 0

    if (delta === 0)
        h = 0;
    else if (cmax === r)
        h = ((g - b) / delta) % 6;
    else if (cmax === g)
        h = (b - r) / delta + 2;
    else
        h = (r - g) / delta + 4;

    h = Math.round(h * 60);
    
    if (h < 0)
        h += 360;

    l = (cmax + cmin) / 2;

    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    const degree = "\u00B0"

    return `${h}${degree}, ${s}%, ${l}%`;
}


export function RGBtoHSV(rgbArray){

    let r = rgbArray[0]
    let g = rgbArray[1]
    let b = rgbArray[2]

    r /= 255
    g /= 255
    b /= 255;
    
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b);
    let h = max
    let s = max
    let v = max
    const d = max - min;

    s = max === 0 ? 0 : d / max;
    
    if (max === min) {
        h = 0;
    } else {
        switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        default: break;
        }
    
        h = Math.round(h * 60);
    
        if (h < 0)
            h += 360;
    }
    s = +(s * 100).toFixed(1);
    v = +(v * 100).toFixed(1);

    const degree = "\u00B0"

    return `${h}${degree}, ${s}%, ${v}%`;
      
}

export function hsvToRgb(hsvArray) {
    
    const h = hsvArray[0]
    const s = hsvArray[1]
    const v = hsvArray[2]

    let r;
    let g;
    let b;
    const i = Math.floor(h * 6);
    const f = h * 6 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
  
    switch (i % 6) {
      case 0:{  r = v;
                g = t;
                b = p; 
                break;
            }
      case 1: {
                r = q;
                g = v;
                b = p; 
                break;
            }
      case 2: {
                r = p;
                g = v;
                b = t;
                break;
            }
      case 3: {
                r = p;
                g = q;
                b = v; 
                break;
            }
      case 4: {
                r = t;
                g = p;
                b = v; 
                break;
            }
      case 5: {
                r = v;
                g = p;
                b = q; 
                break;
            }
      default: break;
    }
  
    return `rgb(${r*255}, ${g*255}, ${b*255})`;
  }

  export function HSLToRGB(hslArray) {
    const h = hslArray[0]
    let s = hslArray[1]
    let l = hslArray[2]
    s /= 100;
    l /= 100;
  
    const c = (1 - Math.abs(2 * l - 1)) * s
     const   x = c * (1 - Math.abs((h / 60) % 2 - 1))
       const m = l - c/2
      let  r = 0
       let g = 0
       let b = 0;

        if (h >=0 && h < 60) {
            r = c; g = x; b = 0;  
          } else if (h >= 60 && h < 120) {
            r = x; g = c; b = 0;
          } else if (h >= 120 && h < 180) {
            r = 0; g = c; b = x;
          } else if (h>=180 && h < 240) {
            r = 0; g = x; b = c;
          } else if (h >= 240 && h < 300) {
            r = x; g = 0; b = c;
          } else if ( h >= 300 && h < 360) {
            r = c; g = 0; b = x;
          }
          r = Math.round((r + m) * 255);
          g = Math.round((g + m) * 255);
          b = Math.round((b + m) * 255);
        
          return [r,g,b];
  }


export function RGBtoCMYK(rgbArray, normalized){
    const r = rgbArray[0]
    const g = rgbArray[1]
    const b = rgbArray[2]

    let c = 1 - (r / 255);
    let m = 1 - (g / 255);
    let y = 1 - (b / 255);
    let k = Math.min(c, Math.min(m, y));
    
    c = (c - k) / (1 - k);
    m = (m - k) / (1 - k);
    y = (y - k) / (1 - k);
    
    if(!normalized){
        c = Math.round(c * 10000) / 100;
        m = Math.round(m * 10000) / 100;
        y = Math.round(y * 10000) / 100;
        k = Math.round(k * 10000) / 100;
    }
    
    c = Number.isNaN(c) ? 0 : c;
    m = Number.isNaN(m) ? 0 : m;
    y = Number.isNaN(y) ? 0 : y;
    k = Number.isNaN(k) ? 0 : k;
    
    return `${c}%, ${m}%, ${y}%, ${k}%`
}

export function getH(rgbArray){
    let r = rgbArray[0]
    let g = rgbArray[1]
    let b = rgbArray[2]

    r /= 255
    g /= 255
    b /= 255;
    
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b);
    let h = max
    const d = max - min;

    
    if (max === min) {
        h = 0;
    } else {
        switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        default: break;
        }
    
        h = Math.round(h * 60);
    
        if (h < 0)
            h += 360;
    }

    return h;
}