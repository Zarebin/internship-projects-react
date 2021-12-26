// import React, { useEffect, useRef} from "zarkit/react";
import React, { useEffect, useRef} from "react";
import './pointer.scss'
import { HSVtoHSL } from "../../core/convertors";

const Pointer = ({color, offset, setOffset, horizontal = false, clicked, setClicked, setCurrentColor}) => {
    const pointer = useRef(null)

    let offsetX;
    let offsetY; 
    let mousedown = false; 
    let stateOffsetX = offset.offsetX
    let stateOffsetY = offset.offsetY

    useEffect(()=>{
        if(!horizontal){
            pointer.current.style.top = `${offset.offsetY-10}px`
            pointer.current.style.left = `${offset.offsetX-10}px`
            setCurrentColor(HSVtoHSL([color.h,stateOffsetX/pointer.current.parentElement.clientWidth, 1-(stateOffsetY/pointer.current.parentElement.clientHeight)]))
        }
        else{
            pointer.current.style.left = `${offset.offsetX-10}px`;
            setCurrentColor({h:Math.round(stateOffsetX*360/580),s: color.s, l:color.l})
        }
    },[offset])

    useEffect(()=>{
        if(!clicked){
            if(horizontal){
                pointer.current.style.left = `${color.h*580/360}px`
            }
        }

    },[color.h])
    
    useEffect(()=>{
        if(horizontal){
            const initialXPos = 
            Math.floor(Math.random() * pointer.current.parentElement.clientWidth) + 1
            
            pointer.current.style.left = `${initialXPos}px`
            pointer.current.style.top = `${-7}px`
            setCurrentColor({h:Math.round(initialXPos*360/580),s: color.s, l:color.l})
            setOffset({offsetX:initialXPos, offsetY:0})
        }
        else{
            setOffset({offsetX:441, offsetY:0})
        }
    }, [])

    const move= e =>
    {
        const inDivX = e.clientX-pointer.current.parentElement.offsetLeft;
        const inDivY = e.clientY-pointer.current.parentElement.offsetTop;

        if(mousedown){
            
            if(inDivX <= pointer.current.parentElement.clientWidth){
                if(inDivX >= 0){
                    pointer.current.style.left = `${inDivX-offsetX}px`
                    stateOffsetX = inDivX;
                }else{
                    pointer.current.style.left = `${-offsetX}px`
                    stateOffsetX = 0
                }
                
            }
            else{
                pointer.current.style.left = 
                    `${pointer.current.parentElement.clientWidth-offsetX}px` 
                stateOffsetX = pointer.current.parentElement.clientWidth;

            }
            
            if(!horizontal){
                if(inDivY<= pointer.current.parentElement.clientHeight){
                    if(inDivY >=0){
                        pointer.current.style.top = `${inDivY-offsetY}px`;
                        stateOffsetY = inDivY
                    }else{
                        pointer.current.style.top = `${-offsetY}px`;
                        stateOffsetY = 0
                    }
    
                }
                else{
                    pointer.current.style.top = 
                        `${pointer.current.parentElement.clientHeight-offsetY}px`
                    stateOffsetY = pointer.current.parentElement.clientHeight
                }

                // setCurrentColor(HSVtoHSL([color.h,stateOffsetX/pointer.current.parentElement.clientWidth, 1-(stateOffsetY/pointer.current.parentElement.clientHeight)]))
            }else{
                stateOffsetY = 0
                
            }

            setOffset({ offsetX: stateOffsetX, offsetY: stateOffsetY})
        }
    }

    const add= e =>
    {
        mousedown=true;
        setClicked(true)
        const inDivX = e.clientX-pointer.current.parentElement.offsetLeft;
        const inDivY = e.clientY-pointer.current.parentElement.offsetTop;

        

        // For mobile devices:
        // const inDivX = e.touches[0].clientX-pointer.current.parentElement.offsetLeft;
        // const inDivY = e.touches[0].clientY-pointer.current.parentElement.offsetTop;


        setOffset({offsetX: inDivX, offsetY: inDivY})

        offsetX = pointer.current.clientWidth/2;
        offsetY = pointer.current.clientHeight/2;

        pointer.current.style.left = `${inDivX-8}px`
        if(!horizontal){
            pointer.current.style.top = `${inDivY-8}px`
        }

        window.addEventListener('mousemove',move)
        // window.addEventListener('touchmove',move)

        
    }

    const remove= ()=>{
        mousedown=false;
    }

    window.addEventListener("mouseup", remove)

    
    return ( 
        <div className="pointer"
        ref={pointer}
        onMouseDown={add}
        onMouseUp={remove} 
        // onTouchStart={add}
        // onTouchEnd={remove}
        style={{backgroundColor: !horizontal?`hsl(${color.h},${color.s}%, ${color.l}%)`: `hsl(${color.h},100%, 50%)` }}
        />

    );
}
 
export default Pointer;