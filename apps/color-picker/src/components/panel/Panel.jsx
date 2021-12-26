// import React, { useState, useRef, useEffect } from 'zarkit/react';
import React, { useState, useRef, useEffect } from 'react';
import Palette from '../palette';
import Slider from '../slider';
import * as convertors  from '../../core/convertors';
import '@webcomponents/webcomponentsjs/webcomponents-loader'
import '@material/mwc-textfield'
import './panel.scss';

const Panel = () => {
    const [currentColor, setCurrentColor] = useState({h:44,s:100,l:50});
    const [offset, setOffset] = useState({
        offsetX: 0,
        offsetY: 0
    })
    const [clicked, setClicked] = useState(true)
    const [currentField, setCurrentField] = useState("") 

    const rgbField = useRef(null)
    const hexField = useRef(null)
    const hslField = useRef(null)
    const hsvField = useRef(null)
    const cmykField = useRef(null)
    
    const applyWithHEX = (e) =>{
        setClicked(false)
        setCurrentField("hex")

        const h = e.target.value;

        if(h.match(`^#?([0-9a-f]{3}){1,2}$`)){
            setCurrentColor(convertors.HEXtoHSL(h))
            const hsv= convertors.RGBtoHSV(convertors.HEXtoRGB(h))
            setOffset({offsetX: hsv.s*442/100, offsetY: 230 - hsv.v*230/100 })
        }
    }

    const applyWithRGB = (e) =>{
        setClicked(false)
        setCurrentField("rgb")
        const rgb = e.target.value;
        
        if(rgb.match(`^(25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9])([,|\\s]+)(25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9])([,|\\s]+)(25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9])$`)){

            let array  = rgb.split(/[ ,]+/)
            array = [parseInt(array[0],10), parseInt(array[1],10), parseInt(array[2],10)]
            setCurrentColor(convertors.RGBtoHSL(array))

            const hsv= convertors.RGBtoHSV(array)
            setOffset({offsetX: hsv.s*442/100, offsetY: 230 - hsv.v*230/100 })
            
        }
    }

    const applyWithCMYK = (e) =>{
        setClicked(false)
        setCurrentField("cmyk")

        let cmyk = e.target.value;
        
        if(cmyk.match(`^((100|[1-9][0-9]|[0-9])%?([,|\\s]+)){3}(100|[1-9][0-9]|[0-9])%?$`))
        {
            cmyk = cmyk.split(/[ ,]+/)
            cmyk =[
                parseInt(cmyk[0], 10),
                parseInt(cmyk[1], 10),
                parseInt(cmyk[2], 10),
                parseInt(cmyk[3], 10)
            ]

            const hsl = convertors.CMYKtoHSL(cmyk)
            setCurrentColor(hsl)
            const hsv = convertors.HSLtoHSV(hsl).row
            setOffset({offsetX: hsv.s*442/100, offsetY: 230 - hsv.v*230/100 })

        }   
    }

    const applyWithHSV = (e) =>{
        setClicked(false)
        setCurrentField("hsv")
        let hsv = e.target.value;
        
        if(hsv.match(`^(360|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\u00B0?([,|\\s]+)(100|[1-9][0-9]|[0-9])%?([,|\\s]+)(100|[1-9][0-9]|[0-9])%?$`)){
            hsv = hsv.split(/[ ,]+/)
            hsv =[
                    parseInt(hsv[0],10),
                    parseInt(hsv[1],10)/100,
                    parseInt(hsv[2],10)/100
                ]
                
            const hsl=convertors.HSVtoHSL(hsv)
            setCurrentColor(hsl)
            setOffset({offsetX: hsv[1]*442, offsetY: 230 - hsv[2]*230 })
        }
    }

    const applyWithHSL = (e) =>{
        setClicked(false)
        setCurrentField("hsl")
        let hsl = e.target.value;
        
        if(hsl.match(`^(360|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\u00B0?([,|\\s]+)(100|[1-9][0-9]|[0-9])%?([,|\\s]+)(50|[1-4][0-9]|[0-9])%?$`)){
            hsl = hsl.split(/[ ,]+/)
            hsl = { 
                    h: parseInt(hsl[0],10),
                    s: parseInt(hsl[1],10),
                    l: parseInt(hsl[2],10)
                }
        
            setCurrentColor(hsl)
            const hsv = convertors.HSLtoHSV(hsl).row
            setOffset({offsetX: hsv.s*442/100, offsetY: 230 - hsv.v*230/100 })
        }
    }

    const updateHEX = ()=>{
        hexField.current.value = convertors.HSLToHex(currentColor)
    }
    const updateRGB = ()=>{
        const rgb = convertors.HSLToRGB([currentColor.h, currentColor.s, currentColor.l])
        rgbField.current.value = `${rgb[0]}, ${rgb[1]}, ${rgb[2]}`
    }
    const updateCMYK = ()=>{
        cmykField.current.value = convertors.HSLtoCMYK(currentColor)
    }
    const updateHSV = ()=>{
        hsvField.current.value = convertors.HSLtoHSV(currentColor).formated
        
    }
    const updateHSL = ()=>{
        hslField.current.value = 
            `${Math.round(currentColor.h)}\u00B0, ${Math.round(currentColor.s)}%, ${Math.round(currentColor.l)}%`
    }

    
    useEffect(() => {
        hexField.current.onkeyup = applyWithHEX;
        rgbField.current.onkeyup = applyWithRGB;
        cmykField.current.onkeyup = applyWithCMYK;
        hsvField.current.onkeyup = applyWithHSV;
        hslField.current.onkeyup = applyWithHSL;

        // setOffset({offsetX: Math.floor(Math.random() * 442) + 1, offsetY:Math.floor(Math.random() * 230) + 1})
    }, [])

    useEffect(() => {
        switch (currentField) {
            case "hex":
                updateRGB();
                updateCMYK();
                updateHSV();
                updateHSL();
                hexField.current.onblur = () => {
                    updateHEX()
                    setCurrentField("")
                };
                break;
            case "rgb":
                updateHEX();
                updateCMYK();
                updateHSV();
                updateHSL();
                rgbField.current.onblur = () => {
                    updateRGB()
                    setCurrentField("")
                };
                break;
            case "cmyk":
                updateHEX();
                updateRGB();
                updateHSV();
                updateHSL();
                cmykField.current.onblur = () => {
                    updateCMYK()
                    setCurrentField("")
                };
                break;
            case "hsv":
                updateHEX();
                updateRGB();
                updateCMYK();
                updateHSL();
                hsvField.current.onblur = () => {
                    updateHSV()
                    setCurrentField("")
                };
                break;
            case "hsl":
                updateHEX();
                updateRGB();
                updateCMYK();
                updateHSV();
                hslField.current.onblur = () => {
                    updateHSL()
                    setCurrentField("")
                };
                break;
            default:
                updateHEX();
                updateRGB();
                updateCMYK();
                updateHSV();
                updateHSL();
                break;
        }
    }, [currentColor])

    return ( 
        <div className="panel">
            <h3 className="title">انتخاب رنگ</h3>
            <div className="paletteWrapper">
                <div className="wrapperLeft" 
                    style={{backgroundColor: `hsl(${currentColor.h},${currentColor.s}%, ${currentColor.l}%)`}} 
                />
                <div className="wrapperRight">
                    <Palette 
                        color={currentColor} 
                        setCurrent={setCurrentColor} 
                        offset = {offset}
                        setOffset={setOffset}
                        clicked={clicked}
                        setClicked={setClicked}
                    />
                </div>
            </div>

            <div className="sliderWrapper">
                <Slider 
                    color={currentColor}
                    setCurrentColor={setCurrentColor}
                    clicked={clicked}
                    setClicked={setClicked}
                />
            </div>

            <div className="dataWrapper">
                <div className="hex">
                    <mwc-textfield  
                        ref = {hexField}
                        label="HEX" 
                        outlined 
                        value = " "
                    />
                </div >
                <div className="rgbAndOthers">
                    <mwc-textfield 
                        ref = {rgbField}
                        label="RGB" 
                        outlined 
                        value = " "
                    />
                </div>
                <div className="rgbAndOthers">
                    <mwc-textfield 
                        ref={cmykField}
                        label="CMYK" 
                        outlined 
                        value=" "
                    />
                </div>
                
                <div className="rgbAndOthers">
                    <mwc-textfield 
                        ref={hsvField}
                        label="HSV" 
                        outlined 
                        value= " "
                    />
                </div>
                <div className="rgbAndOthers">
                    <mwc-textfield 
                        ref={hslField}
                        label="HSL" 
                        outlined 
                        value= " "
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Panel;