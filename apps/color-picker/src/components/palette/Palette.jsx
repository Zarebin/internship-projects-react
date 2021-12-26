// import React, { useRef } from "zarkit/react";
import React, { useEffect, useRef} from 'react';
import Pointer from "../pointer";
import './palette.scss';

const Palette = ({color, setCurrent, offset, setOffset, setClicked}) => {

    const palette = useRef(null)
    
    const click = (e)=>{
        const inDivX = e.clientX-palette.current.parentElement.offsetLeft;
        const inDivY = e.clientY-palette.current.parentElement.offsetTop;

        setOffset({offsetX: inDivX, offsetY: inDivY})
    }

    return ( 
        <div ref={palette} className="palette" style={{background: `hsl(${color.h}, 100%, 50%)`}} onMouseDown={click}>
            <Pointer color={color}
            offset={offset} setOffset={setOffset} setClicked={setClicked} setCurrentColor={setCurrent}/>
            <div className="saturation-white">
                <div className="saturation-black" />
            </div>
        </div>
        
     );
}
 
export default Palette;