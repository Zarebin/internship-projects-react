// import React, {useState, useRef } from 'zarkit/react';
import React, {useState, useRef } from 'react';
import Pointer from '../pointer';
import './slider.scss'

const Slider = ({color, setCurrentColor, clicked, setClicked}) => {

    const [offset,setOffset] = useState({
        offsetX: 0,
        offsetY: 0
    })

    const hue = useRef(null)
    
    const click = (e)=>{
        const inDivX = e.clientX-hue.current.parentElement.offsetLeft;

        setOffset({...offset, offsetX: inDivX})
    }

    return ( 
        <div className="sliderContainer" >
            <Pointer 
                color={color}
                offset={offset} 
                setOffset={setOffset} 
                clicked={clicked}
                setClicked={setClicked} 
                setCurrentColor={setCurrentColor} 
                horizontal="true"

            />
            <div className="slider" ref={hue} onMouseDown={click}/>
        </div>
     );
}
 
export default Slider;