/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'zarkit/react';
// import React, { useEffect, useRef } from 'react';
import '@webcomponents/webcomponentsjs/webcomponents-loader';
import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-textfield';
// import useForceUpdate from 'use-force-update';
import ConverterFunc from '../Components/Converterfunc';
import items from '../data/selectionitems';

// eslint-disable-next-line func-names
const Selection = function (props) {
  const srcRef = useRef();
  const destRef = useRef();
  const { topSelectVal, src, setSrc, dest, setDest, query1, setQuery1, query2, setQuery2 } = props;
  // const forceUpdate = useForceUpdate();
  // const handleClick = React.useCallback(() => {
  //   forceUpdate();
  // }, [forceUpdate]);
  useEffect(() => {
    srcRef.current.onchange = (e) => {
      if (e.target.value) {
        setSrc(e.target.value);
        console.log('e.target.value', e.target.value);
      }
    };
    destRef.current.onchange = (e) => {
      if (e.target.value) {
        setDest(e.target.value);
      }
    };
  });
  useEffect(() => {
    const newState = ConverterFunc(topSelectVal, query1, src, dest);
    setQuery2(newState);
    // document.querySelector('#src').shadowRoot.querySelector('.mdc-select__selected-text').innerHTML = items[topSelectVal][0].title;
  }, [src, dest]);
  function onInputFunc1(e) {
    setQuery1(e.target.value);
    const newState = ConverterFunc(topSelectVal, e.target.value, src, dest);
    setQuery2(newState);
  }

  function onInputFunc2(e) {
    setQuery2(e.target.value);
    const newState = ConverterFunc(topSelectVal, e.target.value, dest, src);
    setQuery1(newState);
  }
  function renderObject(index) {
    const listItem = items[topSelectVal].map((item, i) => (
      <mwc-list-item
        class={topSelectVal}
        value={item.value}
        key={item.value + index}
        {...(i === index ? { activated: '', selected: ''} : {})}
      >
        {item.title}
      </mwc-list-item>
    ));
    return listItem;
  }
  console.log('outsrc', src);
  console.log('outdest', dest);
  return (
    <div className="pic">
      {/* <div onClick={handleClick}>wre</div> */}
      <div id="left" className="bottomSelections">
        <mwc-textfield
          type="number"
          id="valueSrc"
          placeholder="1"
          value={query1}
          onInput={onInputFunc1}
        />

        <mwc-select type="number" id="src" value={src} ref={srcRef}>
          {renderObject(0)}
        </mwc-select>
      </div>
      <div id="center">=</div>
      <div id="right" className="bottomSelections">
        <mwc-textfield
          type="number"
          id="valueDest"
          placeholder="100"
          value={query2}
          onInput={onInputFunc2}
        />

        <mwc-select type="number" id="dest" value={dest} ref={destRef}>
          {renderObject(1)}
        </mwc-select>
      </div>
    </div>
  );
};

export default Selection;
