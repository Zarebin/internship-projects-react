import { useEffect, useRef, useState} from 'react';
import Pointer from "../pointer";
import './palette.scss';

const Palette = ({color, paletteColor, setCurrent, setRgbArray}) => {
    const colorCanvas = useRef(null)

    const [offset, setOffset] = useState({
        offsetX: 0,
        offsetY: 0
    })

    
    const changeColor = () =>{

        const ColorCtx = colorCanvas.current.getContext('2d');
        const imageData = ColorCtx.getImageData(offset.offsetX, offset.offsetY, 1, 1).data;
        const rgbColor = `rgb(${imageData[0]},${imageData[1]},${imageData[2]})`;
        
        setCurrent(rgbColor)
        setRgbArray(imageData)
    }

    useEffect(()=>{
        colorCanvas.current.width= colorCanvas.current.parentElement.clientWidth;
        colorCanvas.current.height= colorCanvas.current.parentElement.clientHeight;

        const ColorCtx = colorCanvas.current.getContext('2d');
        
        const gradientH = ColorCtx.createLinearGradient(0, 0, ColorCtx.canvas.width, 0);
        gradientH.addColorStop(0, '#fff');
        gradientH.addColorStop(1, paletteColor);
        ColorCtx.fillStyle = gradientH;
        ColorCtx.fillRect(0, 0, ColorCtx.canvas.width, ColorCtx.canvas.height);

        const gradientV = ColorCtx.createLinearGradient(0, 0, 0, 300);
        gradientV.addColorStop(0, 'rgba(0,0,0,0)');
        gradientV.addColorStop(1, '#000');
        ColorCtx.fillStyle = gradientV;
        ColorCtx.fillRect(0, 0, ColorCtx .canvas.width, ColorCtx.canvas.height); 

        changeColor()

        // console.log(ColorCtx.getImageData(441, 0, 1, 1).data)

    }, [paletteColor])

    useEffect(()=>{

        changeColor()

    }, [offset])

    return ( 
        <div className="palette">
                    
            <Pointer color={color} offset={offset} setOffset={setOffset} />

            <canvas ref={colorCanvas} />

        </div>
        
     );
}
 
export default Palette;