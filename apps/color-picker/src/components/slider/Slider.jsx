import { useEffect, useRef, useState } from 'react';
import Pointer from '../pointer';
import './slider.scss'


const Slider = ({setPaletteColor, paletteColor}) => {
    const sliderConvas = useRef(null)

    const [offset,setOffset] = useState({
        offsetX: 0,
        offsetY: 0
    })

    const changeColor = () =>{
        let rgbColor;
        
        if(offset.offsetX !== 0){
            const ColorCtx = sliderConvas.current.getContext('2d');
            const imageData = ColorCtx.getImageData(offset.offsetX, 0, 1, 1).data;
            rgbColor = `rgb(${imageData[0]},${imageData[1]},${imageData[2]})`;
        }
        else{
            rgbColor = `rgb(255,0,0)`;
        }
        // console.log("slider", imageData)
        
        
        setPaletteColor(rgbColor)
    }


    useEffect(() => {
        const ColorCtx = sliderConvas.current.getContext('2d')
        ColorCtx.rect(0, 0, 580, 10);
        const grd1 = ColorCtx.createLinearGradient(0, 0, 580, 0);
        grd1.addColorStop(0, 'rgba(255, 0, 0, 1)');
        grd1.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
        grd1.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
        grd1.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
        grd1.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
        grd1.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
        grd1.addColorStop(1, 'rgba(255, 0, 0, 1)');
        ColorCtx.fillStyle = grd1;
        ColorCtx.fill();

    },[])

    // function click(e) {
    //     const ColorCtx = sliderConvas.current.getContext('2d')
    //     const x = e.clientX-sliderConvas.current.parentElement.offsetLeft;
    //     const imageData = ColorCtx.getImageData(x, 0, 1, 1).data;
    //     const rgbColor = `rgb(${imageData[0]}, ${imageData[1]}, ${imageData[2]})`;
    //     setPaletteColor(rgbColor)
    // }
    
    useEffect(()=>{

        if(offset.offsetX !== 0){
            changeColor()
        }

    }, [offset])

    return ( 
        <div className="sliderContainer">
            <Pointer offset={offset} setOffset={setOffset} color={paletteColor} horizontal="true"/>
            <canvas 
                ref={sliderConvas} 
                width="580" 
                height="10"
                className="slider"
                // onClick={click}
            />
        </div>
     );
}
 
export default Slider;