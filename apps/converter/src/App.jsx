import React from 'zarkit/react';
import '@webcomponents/webcomponentsjs/webcomponents-loader';
import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-textfield';
import OnclickFunc from './OnclickFunc';
import Selection from './Selections';
import './style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { topselectvalue: 'length' };
  }

  selectfunc = (e) => {
    OnclickFunc();
    this.setState({ topselectvalue: e.target.value });
  };

  render() {
    const { topselectvalue } = this.state;
    return (
      <div id="whole">
        <div id="full">
          <div id="header">
            <mwc-select id="myselect" value={topselectvalue} onClick={this.selectfunc}>
              <mwc-list-item value="area">مساحت</mwc-list-item>
              <mwc-list-item value="datatransferrate"> انتقال داده</mwc-list-item>
              <mwc-list-item value="digitalstorage">ذخیره دیجیتال </mwc-list-item>
              <mwc-list-item value="energy">انرژی</mwc-list-item>
              <mwc-list-item value="frequency">فرکانس</mwc-list-item>
              <mwc-list-item value="length" selected>طول</mwc-list-item>
              <mwc-list-item value="mass">جرم</mwc-list-item>
              <mwc-list-item value="pressure">فشار</mwc-list-item>
              <mwc-list-item value="speed">سرعت</mwc-list-item>
              <mwc-list-item value="temperature">دما</mwc-list-item>
              <mwc-list-item value="time">زمان</mwc-list-item>
            </mwc-select>
          </div>

          <div id="bottom">
            <Selection id="value" selectid={topselectvalue} />
          </div>

        </div>
      </div>

    );
  }
}
export default App;