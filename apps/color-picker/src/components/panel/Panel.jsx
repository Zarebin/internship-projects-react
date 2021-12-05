import { useState } from 'react';
import Pallete from '../pallete';
import './panel.scss';

const Panel = () => {
    const [currentColor, setCurrentColor] = useState("#ff0000");
    const [palletColor, setPalletColor] = useState("#ff0000")

    return ( 
        <div className="panel">
            {/* <div className="title">Color Picker</div> */}
            <div className="palletWrapper">
                <div className="wrapperLeft" style={{backgroundColor: `${currentColor}`}} />
                <div className="wrapperRight">
                    <Pallete color={currentColor} 
                        palletColor={palletColor} 
                        setCurrent={setCurrentColor} 
                        setPalletColor={setPalletColor} />
                </div>
                
            </div>
        </div>
     );
}
 
export default Panel;