import React from 'zarkit/react';
import ReactDOM from 'zarkit/react-dom';
import PairMatching from './components/PairMatching';

ReactDOM.render(
    <React.StrictMode>
        <div className="wrapper">
            <PairMatching />
        </div>
    </React.StrictMode>,
    document.getElementById('app')
);
