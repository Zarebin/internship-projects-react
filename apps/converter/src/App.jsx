/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'zarkit/react';
import '@webcomponents/webcomponentsjs/webcomponents-loader';
import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-textfield';
import Selection from './Selections';
import './style.scss';
import TopSelection from './Topselection';

// eslint-disable-next-line func-names
const App = function () {
  const [topSelectVal, setTopSelectVal] = useState('length');
  const [src, setSrc] = useState('');
  const [dest, setDest] = useState('');
  const [query1, setQuery1] = useState('1');
  const [query2, setQuery2] = useState('100');
  console.log('appsrc',src);
  return (
    <div id="whole">
      <div id="full">
        <div id="header">
          <TopSelection
            topSelectVal={topSelectVal}
            setTopSelectVal={setTopSelectVal}
            setSrc={setSrc}
            setDest={setDest}
          />
        </div>

        <div id="bottom">
          <Selection
            id="value"
            src={src}
            setSrc={setSrc}
            dest={dest}
            setDest={setDest}
            query1={query1}
            setQuery1={setQuery1}
            query2={query2}
            setQuery2={setQuery2}
            topSelectVal={topSelectVal}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
