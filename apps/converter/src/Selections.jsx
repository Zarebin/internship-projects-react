import React, { useState, useEffect } from 'zarkit/react';
import '@webcomponents/webcomponentsjs/webcomponents-loader';
import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-textfield';
import Converterfunc from '../Components/Converterfunc';
import items from '../data/selectionitems';

const Selection = function (props) {
  const [query1, setquery1] = useState('1');
  const [query2, setquery2] = useState('100');
  const [src, setsrc] = useState('meter');
  const [dest, setdest] = useState('centimeter');
  const srcref = React.createRef();
  const {selectid} = props;
  useEffect(() => {
    srcref.current.onchange = (e) => {
      setsrc(e.target.value);
      console.log('e.target.value', e.target.value);
      console.log('src', src);
      // console.log('dest', dest);
      // const newState = Converterfunc(props.selectid, query1, src, dest);
      // console.log('newState', newState);
      // setquery2(newState);
      // console.log('query2', query2);
    };
    // ;
    // document.querySelector('#dest').onchange = (e) => {
    //   setdest(e.target.value);
    //   const newState = Converterfunc(props.selectid, query1, src, dest);
    //   setquery2(newState);
    // };
  }, []);

  function oninputfunc1(e) {
    setquery1(e.target.value);
    const newState = Converterfunc(selectid, e.target.value, src, dest);
    setquery2(newState);
  }

  function oninputfunc2(e) {
    setquery2(e.target.value);
    const newState = Converterfunc(selectid, e.target.value, dest, src);
    setquery1(newState);
  }

  function renderObject() {
    let listitems = [];
    for (const [key, arr] of Object.entries(items)) {
      const listitem = arr.map((item) => (
        <mwc-list-item class={key} value={item.value}>
          {item.title}
        </mwc-list-item>
      ));
      listitems = [...listitems, listitem];
    }
    return listitems;
  }

  return (
    <div className="pic">
      <div id="left" className="bottom-selections">
        <mwc-textfield
          type="number"
          id="valuesrc"
          placeholder="1"
          value={query1}
          onInput={oninputfunc1}
        />

        <mwc-select id="src" type="number" selectid="selection" value={src} ref={srcref}>
          {renderObject()}
        </mwc-select>
      </div>
      <div id="center">=</div>
      <div id="right" className="bottom-selections">
        <mwc-textfield
          type="number"
          id="valuedest"
          placeholder="100"
          value={query2}
          onInput={oninputfunc2}
        />

        <mwc-select type="number" id="dest" selectid="selection2" value={dest}>
          {renderObject()}
        </mwc-select>
      </div>
    </div>
  );
};

export default Selection;
