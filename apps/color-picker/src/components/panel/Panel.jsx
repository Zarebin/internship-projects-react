import { useState } from 'react';
import Palette from '../palette';
import './panel.scss';

const Panel = () => {
    const [currentColor, setCurrentColor] = useState("#ff0000");
    const [paletteColor, setPaletteColor] = useState("#ff0000")

    return ( 
        <div className="panel">
            {/* <div className="title">Color Picker</div> */}
            <div className="paletteWrapper">
                <div className="wrapperLeft" style={{backgroundColor: `${currentColor}`}} />
                <div className="wrapperRight">
                    <Palette color={currentColor} 
                        paletteColor={paletteColor} 
                        setCurrent={setCurrentColor} 
                        setPalletColor={setPaletteColor} />
                </div>
                
            </div>
        </div>
     );
}
 
export default Panel;