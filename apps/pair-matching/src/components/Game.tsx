import React, {useEffect} from 'zarkit/react';
import {fillIcons, icons} from "./Settings";

function Game(props: any) {

    // Set events
    const cardOnClick = (i: number) => {

        // Ignore invalid clicks
        if (props.flipped.indexOf(i) !== -1) return;
        if (props.flipped.length >= 2) return;

        // Flip the clicked card
        props.setFlipped(props.flipped.concat(i));

    }

    // Event for replay button
    const replay = () => {
        // Set initial values
        fillIcons(props);
        props.setFlipped([...props.icons.keys()]);
        props.setSolved([]);
        props.setTime(0);
        clearInterval(props.timer);
        props.setTimer(undefined);
        // Initialize the timer
        props.setTimer(setInterval(() => {
            props.setTime((t = props.time) => t + 1);
        }, 1000));
        props.setGameState('play');
        // Calculate hint delay time and flip cards till then
        const delay = props.size.split('x')[0]*props.size.split('x')[1] * 100 + 1000;
        setTimeout( () => {
            props.setFlipped([]);
        }, delay);

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
            props.setGameState('won');
            clearInterval(props.timer);
            props.setTimer(undefined);
            // Check for new record
            if (!props.bestTime.hasOwnProperty(props.size) || props.time < parseInt(props.bestTime[props.size])) {
                let newBest = props.bestTime;
                newBest[props.size] = props.time;
                props.setBestTime(newBest);
                localStorage.setItem('pairMatchingBestTime', JSON.stringify(newBest));
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
                <div className="front" />
                <div className="back" dangerouslySetInnerHTML={{__html: icons[props.iconTheme][icon]}}/>
            </div>;
        })
    }

    // game grid
    return (
        <div className={'game size' + props.size.split('x')[0]}>
            {renderCards()}
            {props.gameState === 'init' ? <div className="overlay">
                <mwc-button raised={true} onClick={replay}>شروع بازی</mwc-button>
            </div> : null}
            {props.gameState === 'won' ? <div className="overlay">
                <span>تبریک! شما برنده شدید</span>
                <mwc-button raised={true} onClick={replay}>بازی دوباره</mwc-button>
            </div> : null}
        </div>
    )
}

export default Game;