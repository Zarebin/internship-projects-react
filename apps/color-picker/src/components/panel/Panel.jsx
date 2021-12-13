import { useRef, useState, useEffect } from 'react';
import Palette from '../palette';
import Slider from '../slider';
import * as convertors  from '../../core/convertors';
import '@webcomponents/webcomponentsjs/webcomponents-loader'
import '@material/mwc-textfield'
import './panel.scss';

const Panel = () => {
    const [currentColor, setCurrentColor] = useState("#ff0000");
    const [paletteColor, setPaletteColor] = useState("#ff0000");
    const [rgbArray, setRgbArray] = useState([0,0,0,1])
    const rgbField = useRef(null)
    const [offset, setOffset] = useState({
        offsetX: 0,
        offsetY: 0
    })

    const rgbTest = (e) =>{
        
        const rgb = e.target.value;
        
        if(rgb.match(`^(25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9]), ?(25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9]), ?(25[0-5]|2[0-4][0-9]|1[0-9]?[0-9]?|[1-9][0-9]?|[0-9])$`)){
            // console.log(rgb)
            
            let array  = rgb.split(",")
            array = [parseInt(array[0],10), parseInt(array[1],10), parseInt(array[2],10)]
            setRgbArray(array)
            const mainColor = convertors.HSLToRGB([convertors.getH(array),100,50])
            // if(mainColor[0] === 255){
            //     if(mainColor[1] === 0){
            //         setOffset({offsetX: ((255-array[1])*650)/255, offsetY:255-array[0]})
            //     }else{
            //         setOffset({offsetX: Math.round(((255-array[2])*441)/255), offsetY:255-array[0]})
            //         console.log(Math.round(((255-array[2])*441)/255))   
            //     }
            // }else if(mainColor[1]===255){
            //     if(mainColor[0] === 0){
            //         setOffset({offsetX: ((255-array[0])*650)/255, offsetY:255-array[1]})
            //     }
            //     else{
            //         setOffset({offsetX: ((255-array[2])*650)/255, offsetY:255-array[1]})
            //     }

            // }else
            //     if(mainColor[0] === 0){
            //         setOffset({offsetX: ((255-array[0])*650)/255, offsetY:255-array[2]})
            //     }else{
            //         setOffset({offsetX: ((255-array[1])*650)/255, offsetY:255-array[2]})
            //     }
            

            setPaletteColor(`rgb(${mainColor[0]}, ${mainColor[1]}, ${mainColor[2]})`)
            // const hsv= convertors.RGBtoHSV(array)
            
        }
    }

    useEffect(() => {
        rgbField.current.onkeyup = rgbTest;
    }, [])


    return ( 
        <div className="panel">
            <h3 className="title">انتخاب رنگ</h3>
            <div className="paletteWrapper">
                <div className="wrapperLeft" 
                    style={{backgroundColor: `${currentColor}`}} 
                />
                <div className="wrapperRight">
                    <Palette color={currentColor} 
                        paletteColor={paletteColor} 
                        setCurrent={setCurrentColor} 
                        setPalletColor={setPaletteColor} 
                        rgbArray = {rgbArray}
                        setRgbArray={setRgbArray}
                        offset = {offset}
                        setOffset={setOffset}
                    />
                </div>
            </div>

            <div className="sliderWrapper">
                <Slider 
                    setPaletteColor={setPaletteColor} 
                    paletteColor={paletteColor} />
            </div>

            <div className="dataWrapper">
                <div className="hex">
                    <mwc-textfield  
                        label="HEX" 
                        outlined 
                        value={convertors.RGBtoHex(rgbArray)}
                    />
                </div >
                <div className="rgbAndOthers">
                    <mwc-textfield 
                        ref = {rgbField}
                        label="RGB" 
                        outlined 
                        value={`${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]}`}
                        
                    />
                </div>
                <div className="rgbAndOthers">
                    <mwc-textfield 
                        label="CMYK" 
                        outlined 
                        value={convertors.RGBtoCMYK(rgbArray)}
                    />
                </div>
                
                <div className="rgbAndOthers">
                    <mwc-textfield 
                        label="HSV" 
                        outlined 
                        value={convertors.RGBtoHSV(rgbArray)}
                    />
                </div>
                <div className="rgbAndOthers">
                    <mwc-textfield 
                        label="HSL" 
                        outlined 
                        value={convertors.RGBtoHSL(rgbArray)}
                    />
                </div>
            </div>
        </div>
     );
}
 
export default Panel;