import { useState } from 'react';
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