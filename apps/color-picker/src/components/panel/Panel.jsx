import { useState } from 'react';
import Palette from '../palette';
import Slider from '../slider';
import * as convertors  from '../../core/convertors';
import './panel.scss';

const Panel = () => {
    const [currentColor, setCurrentColor] = useState("#ff0000");
    const [paletteColor, setPaletteColor] = useState("#ff0000");
    const [rgbArray, setRgbArray] = useState([0,0,0,1])

    return ( 
        <div className="panel">
            <h3 className="title">انتخاب رنگ</h3>
            <div className="paletteWrapper">
                <div className="wrapperLeft" style={{backgroundColor: `${currentColor}`}} />
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
                <Slider setPaletteColor={setPaletteColor} paletteColor={paletteColor} />
            </div>

            <div className="dataWrapper">

                <p className="hex">HEX:  {convertors.RGBtoHex(rgbArray)}</p>
                <p className="rgbAndOthers">RGB:  {currentColor}</p>
                <p className="cmyk">CMYK:  {convertors.RGBtoCMYK(rgbArray)}</p>
                <p className="rgbAndOthers">HSV:  {convertors.RGBtoHSV(rgbArray)[0]}
                    <span>&#176;</span>, {" "}
                    {convertors.RGBtoHSV(rgbArray)[1]}%, {" "}
                    {convertors.RGBtoHSV(rgbArray)[2]}%
                </p>
                <p className="rgbAndOthers">HSL:  {convertors.RGBtoHSL(rgbArray)[0]}
                    <span>&#176;</span>, {" "}
                    {convertors.RGBtoHSL(rgbArray)[1]}%, {" "}
                    {convertors.RGBtoHSL(rgbArray)[2]}%
                </p>
            </div>
        </div>
     );
}
 
export default Panel;