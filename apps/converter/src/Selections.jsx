/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'zarkit/react';
import '@webcomponents/webcomponentsjs/webcomponents-loader';
import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-textfield';
import ConverterFunc from '../Components/Converterfunc';
import items from '../data/selectionitems';
// eslint-disable-next-line func-names
const Selection = function (props) {
  const [query1, setQuery1] = useState('1');
  const [query2, setQuery2] = useState('100');
  const [src, setSrc] = useState('meter');
  const [dest, setDest] = useState('centiMeter');
  const srcRef = React.createRef();
  const destRef = React.createRef();
  const { selectId } = props;
  useEffect(() => {
    srcRef.current.onchange = (e) => {
      setSrc(e.target.value);
    };
    destRef.current.onchange = (e) => {
      setDest(e.target.value);
    };
  }, []);
  useEffect(() => {
    const newState = ConverterFunc(selectId, query1, src, dest);
      setQuery2(newState);
  }, [src, dest]);

  function onInputFunc1(e) {
    setQuery1(e.target.value);
    const newState = ConverterFunc(selectId, e.target.value, src, dest);
    setQuery2(newState);
  }

  function onInputFunc2(e) {
    setQuery2(e.target.value);
    const newState = ConverterFunc(selectId, e.target.value, dest, src);
    setQuery1(newState);
  }

  function renderObject() {
    let listItems = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, arr] of Object.entries(items)) {
      const listItem = arr.map((item) => (
        <mwc-list-item class={key} value={item.value}>
          {item.title}
        </mwc-list-item>
      ));
      listItems = [...listItems, listItem];
    }
    return listItems;
  }

  return (
    <div className="pic">
      <div id="left" className="bottomSelections">
        <mwc-textfield
          type="number"
          id="valueSrc"
          placeholder="1"
          value={query1}
          onInput={onInputFunc1}
        />

        <mwc-select id="src" type="number" selectid="selection" value={src} ref={srcRef}>
          {renderObject()}
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

        <mwc-select type="number" id="dest" selectid="selection2" value={dest} ref={destRef}>
          {renderObject()}
        </mwc-select>
      </div>
    </div>
  );
};

export default Selection;
