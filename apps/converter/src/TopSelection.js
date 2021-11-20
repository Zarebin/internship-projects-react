import React  from "react";
import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-textfield';
import OnclickFunc from "./OnclickFunc";
import Selection from "./selections";
class TopSelection extends React.Component {
    constructor(props) {
        super(props);

    this.state = {a : ' ' }
    }
    
    componentDidMount(){
        document.querySelector('#myselect').onchange=function(e){
            {OnclickFunc()}
        }
    }

    render () {
        return(
            <div id='top'>
                <div id='header'>
                <mwc-select outlined label="Select unit" id={this.props.id} value={this.state.a} onClick={e => this.setState({a : e.target.value})}>
                            {/* <mwc-list-item selected>Select unit</mwc-list-item> */}
                            <mwc-list-item value="Area">مساحت</mwc-list-item>
                            <mwc-list-item value="Data Transfer Rate" > انتقال داده</mwc-list-item>
                            <mwc-list-item value="Digital Storage"  >ذحیره دیجیتال </mwc-list-item>
                            <mwc-list-item value="Energy">انرژی</mwc-list-item>
                            <mwc-list-item value="Frequency">فرکانس</mwc-list-item>
                            {/* <mwc-list-item value="Fuel Economy">Fuel Economy</mwc-list-item> */}
                            <mwc-list-item value="Length" >طول</mwc-list-item>
                            <mwc-list-item value="Mass">جرم</mwc-list-item>
                            {/* <mwc-list-item value="Plane Angle">Plane Angle</mwc-list-item> */}
                            <mwc-list-item value="Pressure">فشار</mwc-list-item>
                            <mwc-list-item value="Speed">سرعت</mwc-list-item>
                            <mwc-list-item value="Temperature">دما</mwc-list-item>
                            <mwc-list-item value="Time">زمان</mwc-list-item>
                            {/* <mwc-list-item value="Volume">Volume</mwc-list-item> */}
                </mwc-select>
                </div>

                <div  >
                        <Selection  id="value"  selectid={this.state.a}/>
                 </div>


            </div>
            

            

        )
    }
}
export default TopSelection;