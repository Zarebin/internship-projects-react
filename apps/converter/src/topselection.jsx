/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'zarkit/react';
import '@webcomponents/webcomponentsjs/webcomponents-loader';
import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-textfield';
import items from '../data/selectionitems';

// eslint-disable-next-line func-names
const topSelectValion = function (props) {
  const { topSelectVal, setSrc, setDest, setTopSelectVal } = props;
  const selectionRef = useRef();
  useEffect(() => {
    setSrc(items[topSelectVal][0].value);
    setDest(items[topSelectVal][1].value);
    console.log('topselectionsrc', items[topSelectVal][0].value);
  }, [topSelectVal]);
  useEffect(() => {
    selectionRef.current.onchange = (e) => {
      setTopSelectVal(e.target.value);
      console.log('setTopSelectVal', e.target.value);
    };
  });

  return (
    <div className="top">
      <mwc-select id="mySelect" value={topSelectVal} ref={selectionRef}>
        <mwc-list-item value="area">مساحت</mwc-list-item>
        <mwc-list-item value="dataTransferRate"> انتقال داده</mwc-list-item>
        <mwc-list-item value="digitalStorage">ذخیره دیجیتال </mwc-list-item>
        <mwc-list-item value="energy">انرژی</mwc-list-item>
        <mwc-list-item value="frequency">فرکانس</mwc-list-item>
        <mwc-list-item value="length" selected>
          طول
        </mwc-list-item>
        <mwc-list-item value="mass">جرم</mwc-list-item>
        <mwc-list-item value="pressure">فشار</mwc-list-item>
        <mwc-list-item value="speed">سرعت</mwc-list-item>
        <mwc-list-item value="temperature">دما</mwc-list-item>
        <mwc-list-item value="time">زمان</mwc-list-item>
      </mwc-select>
    </div>
  );
};

export default topSelectValion;
