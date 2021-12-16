/* eslint-disable import/no-unresolved */
import React, { useState } from 'zarkit/react';
import '@webcomponents/webcomponentsjs/webcomponents-loader';
import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-textfield';
import onClickFunc from './OnclickFunc';
import Selection from './Selections';
import './style.scss';

// eslint-disable-next-line func-names
const App = function () {
  const [topSelectValue, setTopSelectValue] = useState('length');
  function selectFunc(e) {
    onClickFunc();
    setTopSelectValue(e.target.value);
  }
  return (
    <div id="whole">
      <div id="full">
        <div id="header">
          <mwc-select id="mySelect" value={topSelectValue} onClick={selectFunc}>
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

        <div id="bottom">
          <Selection id="value" selectId={topSelectValue} />
        </div>
      </div>
    </div>
  );
};
export default App;
