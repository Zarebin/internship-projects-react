import React  from "zarkit/react";
import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-textfield';
import OnclickFunc from "./OnclickFunc";
import Selection from "./selections";
import "./style.scss";
class App extends React.Component {
    constructor(props) {
        super(props);

    this.state = {topselectvalue : 'Length' }
    }
    

    selectfunc=(e)=> {
        
        {OnclickFunc()}
        this.setState({topselectvalue : e.target.value});
    }

    
        render () {
            return(

                <div id='whole'>
                        <div id='full'>
                            <div id='header'>
                            <mwc-select  id='myselect' value={this.state.topselectvalue} onClick={this.selectfunc}>
                                        {/* <mwc-list-item selected>Select unit</mwc-list-item> */}
                                        <mwc-list-item value="Area">مساحت</mwc-list-item>
                                        <mwc-list-item value="DataTransferRate" > انتقال داده</mwc-list-item>
                                        <mwc-list-item value="DigitalStorage"  >ذحیره دیجیتال </mwc-list-item>
                                        <mwc-list-item value="Energy">انرژی</mwc-list-item>
                                        <mwc-list-item value="Frequency">فرکانس</mwc-list-item>
                                        {/* <mwc-list-item value="Fuel Economy">Fuel Economy</mwc-list-item> */}
                                        <mwc-list-item value="Length" selected>طول</mwc-list-item>
                                        <mwc-list-item value="Mass">جرم</mwc-list-item>
                                        {/* <mwc-list-item value="Plane Angle">Plane Angle</mwc-list-item> */}
                                        <mwc-list-item value="Pressure">فشار</mwc-list-item>
                                        <mwc-list-item value="Speed">سرعت</mwc-list-item>
                                        <mwc-list-item value="Temperature">دما</mwc-list-item>
                                        <mwc-list-item value="Time">زمان</mwc-list-item>
                                        {/* <mwc-list-item value="Volume">Volume</mwc-list-item> */}
                            </mwc-select>
                            </div>

                            <div  id='bottom'>
                                    <Selection  id="value"  selectid={this.state.topselectvalue}/>
                            </div>


                        </div>
                </div>
        
            )
        }
    }
export default App;
