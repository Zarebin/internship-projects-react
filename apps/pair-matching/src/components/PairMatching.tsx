import React, {useState} from 'zarkit/react';
import './PairMatching.scss';
import Settings from "./Settings";
import Game from "./Game";

function PairMatching() {

    // Define game states
    const [icons, setIcons] = useState([]);
    const [iconTheme, setIconTheme] = useState('christmas');
    const [size, setSize] = useState(6);
    const [flipped, setFlipped] = useState([]);
    const [solved, setSolved] = useState([]);
    const [time, setTime] = useState(0);
    const [bestTime, setBestTime] = useState(localStorage.getItem('bestTime'));

    // Game dom
    return (
        <div className="wrapper pair-matching">
            <Settings
                icons={icons} setIcons={setIcons}
                iconTheme={iconTheme} setIconTheme={setIconTheme}
                size={size} setSize={setSize}
                setFlipped={setFlipped} setSolved={setSolved}
                time={time} setTime={setTime}
                bestTime={bestTime} setBestTime={setBestTime}
            />
            <Game
                icons={icons} setIcons={setIcons}
                size={size}
                iconTheme={iconTheme} setIconTheme={setIconTheme}
                flipped={flipped} setFlipped={setFlipped}
                solved={solved} setSolved={setSolved}
                time={time} setTime={setTime}
                bestTime={bestTime} setBestTime={setBestTime}
            />
        </div>
    )
}

export default PairMatching;
