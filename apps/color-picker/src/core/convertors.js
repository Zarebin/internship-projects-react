export function HSVtoHSL(hsvArray) {
    // both hsv and hsl values are in [0, 1]
    const h = hsvArray[0]
    let s = hsvArray[1]
    const v = hsvArray[2]

    const l = (2 - s) * v / 2;

    if (l !== 0) {
        if (l === 1) {
            s = 0;
        } else if (l < 0.5) {
            s = s * v / (l * 2);
        } else {
            s = s * v / (2 - l * 2);
        }
    }

    return {h, s:s*100 , l:l*100};
}

export function HSLtoHSV(hsl){
    let {s,l} = hsl
    let v;
    let sv;

    s/=100
    l/=100

    if(l<1-l){
        v= l+s*l
    }
    else{
        v = l+ s*(1-l)
    }

    if(v===0){
        sv=0
    }else{
        sv = 2*(1-l/v)
    }

    v*=100
    sv*=100

    return {formated:`${Math.round(hsl.h)}\u00B0, ${Math.round(sv)}%, ${Math.round(v)}%`,row:{h:hsl.h,s:sv,v}}
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

    h *=  60;
    
    if (h < 0)
        h += 360;

    l = (cmax + cmin) / 2;

    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return {h,s,l};
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

    // const degree = "\u00B0"

    return {h,s,v};
      
}

export function RGBtoHex(rgbArray){

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
export function HEXtoRGB(h) {
    let r = 0
    let g = 0 
    let b = 0
  
    // 3 digits
    if (h.length === 4) {
        r = `0x${h[1]}${h[1]}`;
        g = `0x${h[2]}${h[2]}`;
        b = `0x${h[3]}${h[3]}`;

    }else if(h.length === 3){
        r = `0x${h[0]}${h[0]}`;
        g = `0x${h[1]}${h[1]}`;
        b = `0x${h[2]}${h[2]}`;

    // 6 digits
    } else if (h.length === 7) {
        r = `0x${h[1]}${h[2]}`;
        g = `0x${h[3]}${h[4]}`;
        b = `0x${h[5]}${h[6]}`;

    } else if (h.length === 6){
        r = `0x${h[0]}${h[1]}`;
        g = `0x${h[2]}${h[3]}`;
        b = `0x${h[4]}${h[5]}`;
    }

    return [r,g,b];
}

export function HEXtoHSL(h){
    const rgb = HEXtoRGB(h)
    return RGBtoHSL(rgb)
}


export function RGBtoCMYK(rgbArray){
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
    
    c = Math.round(c * 100);
    m = Math.round(m * 100);
    y = Math.round(y * 100);
    k = Math.round(k * 100);
    
    c = Number.isNaN(c) ? 0 : c;
    m = Number.isNaN(m) ? 0 : m;
    y = Number.isNaN(y) ? 0 : y;
    k = Number.isNaN(k) ? 0 : k;
    
    return `${c}%, ${m}%, ${y}%, ${k}%`
}

export function CMYKtoRGB(cmykArray, normalized){
    let c = cmykArray[0]
    let m = cmykArray[1]
    let y = cmykArray[2]
    let k = cmykArray[3]

    c /= 100;
    m /= 100;
    y /= 100;
    k /= 100;
    
    c = c * (1 - k) + k;
    m = m * (1 - k) + k;
    y = y * (1 - k) + k;
    
    let r = 1 - c;
    let g = 1 - m;
    let b = 1 - y;
    
    if(!normalized){
        r = Math.round(255 * r);
        g = Math.round(255 * g);
        b = Math.round(255 * b);
    }
    
    return {r,g,b}
}

export function HSLToHex(hsl){
    const rgb = HSLToRGB([hsl.h, hsl.s, hsl.l])
    return RGBtoHex(rgb)

}
export function HSLtoCMYK(hsl){
    const rgb = HSLToRGB([hsl.h, hsl.s, hsl.l])
    return RGBtoCMYK(rgb)
}

export function CMYKtoHSL(cmykArray){
    const rgb = CMYKtoRGB(cmykArray)
    return RGBtoHSL([rgb.r,rgb.g,rgb.b])
}
