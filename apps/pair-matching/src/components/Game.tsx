import React, {useEffect, useState} from 'zarkit/react';
import {fillIcons, icons} from "./Settings";

function Game(props: any) {

    const [gameState, setGameState] = useState('play');

    // Set events
    const cardOnClick = (i: number) => {

        // Ignore invalid clicks
        if (props.flipped.indexOf(i) !== -1) return;
        if (props.flipped.length === 2) return;

        // Flip the clicked card
        props.setFlipped(props.flipped.concat(i));

        // Initialize the timer of not already
        if (!window.timerPairMatching) {
            window.timerPairMatching = setInterval(() => {
                props.setTime((t = props.time) => t + 1);
            }, 1000);

        }

    }

    // Event for replay button
    const replay = () => {
        props.setFlipped([]);
        props.setSolved([]);
        props.setTime(0);
        clearInterval(window.timerPairMatching);
        window.timerPairMatching = undefined;
        setGameState('play');
        setTimeout(() => fillIcons(props), 500);
    }

    // checking flipped cards are the same?
    useEffect(() => {
        if (props.flipped.length === 2) {
            setTimeout(() => {
                // check if flipped cards do match
                if (props.icons[props.flipped[0]] === props.icons[props.flipped[1]]) {
                    props.setSolved(props.solved.concat(props.flipped[0], props.flipped[1]))
                }
                // flip cards back again
                props.setFlipped([]);

            }, 500);
        }
    }, [props.flipped]);

    // Check victory
    useEffect(() => {
        // Check if all cards are solved
        if (props.solved.length !== 0 && props.solved.length === props.icons.length) {
            setGameState('won');
            clearInterval(window.timerPairMatching);
            // Check for new record
            if (!props.bestTime || props.time < parseInt(props.bestTime)) {
                console.log('time: ', props.time);
                props.setBestTime(props.time);
                localStorage.setItem('bestTime', props.time);
            }
        }
    }, [props.solved]);


    const renderCards = () => {
        // Loop over cards and render
        return props.icons.map((icon: any, i: number) => {

            // check state of the cards
            const flipped = props.flipped.indexOf(i) !== -1 ? ' flipped' : '';
            const solved = props.solved.indexOf(i) !== -1 ? ' solved' : '';

            // render card with its state class
            return <div className={'card' + flipped + solved} data-name={icon} key={'card' + i}
                        onClick={() => cardOnClick(i)}>
                <div className="front"></div>
                <div className="back" dangerouslySetInnerHTML={{__html: icons[props.iconTheme][icon]}}/>
            </div>;
        })
    }

    // game grid
    return (
        <div className={'game size' + props.size}>
            {renderCards()}
            {gameState === 'won' ? <div class="overlay">
                <span>تبریک! شما برنده شدید</span>
                <mwc-button raised class="replay" onClick={replay}>بازی دوباره</mwc-button>
            </div> : null}
        </div>
    )
}

export default Game;