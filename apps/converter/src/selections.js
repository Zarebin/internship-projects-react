import React  from "zarkit/react";
import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-textfield';
import converterfunc from '../Components/converterfunc'
class Selection extends React.Component {
    constructor(props) {
    super(props);
    this.converterfunc = converterfunc.bind(this);
    this.state = {query1 : ' 1' , query2 : ' 100', src:'Meter',dest:'Centimeter',formule:''};
    }
    oninputfunc= (e) =>  {
            var src,des,valsrc,valdest,result,madeSelection_1,madeSelection_2,pin;
            var topselect=this.props.selectid;
            console.log('topselect',this.state.src);
            if (e.target.id==='value') { 
                    const newState =this.converterfunc(topselect,e.target.value,this.state.src,this.state.dest);
                    this.setState({query2: newState});

            } else {
                    const newState =this.converterfunc(topselect,e.target.value,this.state.dest,this.state.src);
                    this.setState({query1: newState});
            }

            }


    // z= (e) =>  { 
    //     this.setState({src : e.target.value});
    //     console.log('sds',this.state.query1);
    //     console.log(data[1]);
    // }   
    // _renderObject(){
    //     const p=-1;
	// 	return Object.entries(data).map(([key, value], i) => {
	// 		return (
                
    //             <mwc-list-item class={value[0].class} value={value[0].value}  >{value[0].title}</mwc-list-item>
	// 		)
	// 	})
	// }  

    render () {

        return(
            <div  className='pic'>
            
            <div id='left' class= 'bottom-selections'>
            <mwc-textfield   type='number' id='value' placeholder='1' 
            value={this.state.query1}
            onInput={this.oninputfunc}
            ></mwc-textfield>
            <mwc-select  id='src' type="number"  selectid="Selection" value={this.state.src} onClick={e => this.setState({src : e.target.value})}
            >
                               
                               {/* {this._renderObject()} */}
                                {/* <!-- Area -->  */}
                                <mwc-list-item class='Area' value='Squarekilometer'  >کیلومتر مربع</mwc-list-item>
                                <mwc-list-item class='Area' value='Squaremeter'>متر مربع</mwc-list-item>
                                <mwc-list-item class='Area' value='Squaremile'>مایل مربع</mwc-list-item>
                                <mwc-list-item class='Area' value='Squareyard'>یارد مربع</mwc-list-item>
                                <mwc-list-item class='Area' value='Squarefoot'>پای مربع</mwc-list-item>
                                <mwc-list-item class='Area' value='Squareinch'>اینچ مربع</mwc-list-item>
                                <mwc-list-item class='Area' value='Hectare'>هکتار</mwc-list-item>
                                {/* <!-- Data Transfer Rate  --> */}
                                <mwc-list-item class='DataTransferRate' value='Bitpersecond'>بیت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='DataTransferRate' value='Kilobitpersecond'>کیلوبیت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='DataTransferRate' value='Kilobytepersecond'>کیلوبایت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='DataTransferRate' value='Kibibitpersecond'>کیبی بیت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='DataTransferRate' value='Megabitpersecond'>مگابیت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='DataTransferRate' value='Megabytepersecond'>مگابایت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='DataTransferRate' value='Mebibitpersecond'>مبی بیت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='DataTransferRate' value='Gigabitpersecond'>گیگابیت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='DataTransferRate' value='Gigabytepersecond'>گیگابایت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='DataTransferRate' value='Gibibitpersecond'>گیبی بیت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='DataTransferRate' value='Terabitpersecond'>ترابیت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='DataTransferRate' value='Terabytepersecond'>ترابایت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='DataTransferRate' value='Tebibitpersecond'>تبی بیت بر ثانیه</mwc-list-item>
                                {/* <!-- Digital Storage --> */}
                                <mwc-list-item class='DigitalStorage' value='Bit'>بیت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Kilobit'>کیلو بیت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Kibibit'>کیبی بیت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Megabit'>مگا بیت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Mebibit'>مبی بیت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Gigabit'>گیگا بیت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Gibibit'>گیگی بیت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Terabit'>ترا بیت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Tebibit'>تبی بیت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Petabit'>پتی بیت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Pebibit'>پبی بیت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Byte'>بایت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Kilobyte'>کیلو بایت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Kibibyte'>کیبی بایت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Megabyte'>مگا بایت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Mebibyte'>مبی بایت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Gigabyte'>گیگا بایت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Gibibyte'>گیگی بایت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Terabyte'>ترا بایت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Tebibyte'>تبی بایت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Petabyte'>پتا بایت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Pebibyte'>پبی بایت</mwc-list-item>
                                {/* <!-- Energy -->  */}
                                <mwc-list-item class='Energy' value='Joule'>ژول</mwc-list-item>
                                <mwc-list-item class='Energy' value='Kilojoule'>کیلوژول</mwc-list-item>
                                <mwc-list-item class='Energy' value='Gramcalorie'>گرم کالری</mwc-list-item>
                                <mwc-list-item class='Energy' value='Kilocalorie'>کیلو کالری</mwc-list-item>
                                <mwc-list-item class='Energy' value='Watthour'>وات ساعت</mwc-list-item>
                                <mwc-list-item class='Energy' value='kilowatthour'>کیلووات ساعت</mwc-list-item>
                                <mwc-list-item class='Energy' value='Electronvolt'>الکترون ولت</mwc-list-item>
                                <mwc-list-item class='Energy' value='Footpound'>پوند-فوت</mwc-list-item>
                                {/* <!-- Frequency --> */}
                                <mwc-list-item class='Frequency' value='Hertz'>هرتز</mwc-list-item>
                                <mwc-list-item class='Frequency' value='Kilohertz'>کیلوهرتز</mwc-list-item>
                                <mwc-list-item class='Frequency' value='Megahertz'>مگاهرتز</mwc-list-item>
                                <mwc-list-item class='Frequency' value='Gigahertz'>گیگاهرتز</mwc-list-item>
                                {/* <!-- Length -->  */}
                                <mwc-list-item class='Length' value='kilometre' >کیلومتر</mwc-list-item>
                                <mwc-list-item class='Length'value='Meter' selected>متر</mwc-list-item>
                                <mwc-list-item class='Length' value='Centimeter'>سانتی متر</mwc-list-item>
                                <mwc-list-item class='Length' value='Millimetre'>میلی متر</mwc-list-item>
                                <mwc-list-item class='Length' value='micrometres'>میکرو متر</mwc-list-item>
                                <mwc-list-item class='Length' value='Nanometre'>نانو متر</mwc-list-item>
                                <mwc-list-item class='Length' value='Mile'>مایل</mwc-list-item>
                                <mwc-list-item class='Length' value='Yard'>یارد</mwc-list-item>
                                <mwc-list-item class='Length' value='Foot'>فوت</mwc-list-item>
                                <mwc-list-item class='Length' value='Inch'>اینچ</mwc-list-item>
                                {/* <!-- Mass --> */}
                                <mwc-list-item class='Mass' value='tonne'>تن</mwc-list-item>
                                <mwc-list-item class='Mass' value='Kilogram'>کیلوگرم</mwc-list-item>
                                <mwc-list-item class='Mass' value='Gram'>گرم</mwc-list-item>
                                <mwc-list-item class='Mass' value='Milligram'>میلیگرم</mwc-list-item>
                                <mwc-list-item class='Mass' value='Microgram'>میکروگرم</mwc-list-item>
                                <mwc-list-item class='Mass' value='Pound'>پوند</mwc-list-item>
                                <mwc-list-item class='Mass' value='Ounce'>اونس</mwc-list-item>
                                {/* <!-- Pressure --> */}
                                <mwc-list-item class='Pressure' value='Bar'>بار</mwc-list-item>
                                <mwc-list-item class='Pressure' value='Pascal'>پاسکال</mwc-list-item>
                                <mwc-list-item class='Pressure' value='poundpersquareinch'>پوند در اینچ مربع</mwc-list-item>
                                <mwc-list-item class='Pressure' value='Standardatmosphere'>اتمسفر استاندارد</mwc-list-item>
                                <mwc-list-item class='Pressure' value='Torr'>تور</mwc-list-item>
                                {/* <!-- Speed --> */}
                                <mwc-list-item class='Speed' value='Milesperhour'>مایل در ساعت</mwc-list-item>
                                <mwc-list-item class='Speed' value='Footpersecond'>ف.ت در ثانیه</mwc-list-item>
                                <mwc-list-item class='Speed' value='Meterpersecond'>متر در ثانیه</mwc-list-item>
                                <mwc-list-item class='Speed' value='Kilometerperhour'>کیلومتر در ساعت</mwc-list-item>
                                <mwc-list-item class='Speed' value='Knot'>گره</mwc-list-item>
                                {/* <!-- Temperature --> */}
                                <mwc-list-item class='Temperature' value='Celsius'>سلسیوس</mwc-list-item>
                                <mwc-list-item class='Temperature' value='Fahrenheit'>فارنهایت</mwc-list-item>
                                <mwc-list-item class='Temperature' value='Kelvin'>کلوین</mwc-list-item>
                                {/* <!-- Time --> */}
                                <mwc-list-item class='Time' value='Nanosecond'>نانوثانیه</mwc-list-item>
                                <mwc-list-item class='Time' value='Microsecond'>میکروثانیه</mwc-list-item>
                                <mwc-list-item class='Time' value='Millisecond'>میلی ثانیه</mwc-list-item>
                                <mwc-list-item class='Time' value='Second'>ثانیه</mwc-list-item>
                                <mwc-list-item class='Time' value='Minute'>دقیقه</mwc-list-item>
                                <mwc-list-item class='Time' value='Hour'>ساعت</mwc-list-item>
                                <mwc-list-item class='Time' value='Day'>روز</mwc-list-item>
                                <mwc-list-item class='Time' value='Week'>هفته</mwc-list-item>
                                <mwc-list-item class='Time' value='Month'>ماه</mwc-list-item>
                                <mwc-list-item class='Time' value='Decade'>دهه</mwc-list-item>
                                <mwc-list-item class='Time' value='Century'>قرن</mwc-list-item>
                            </mwc-select>
            </div>
            <div id='center'>=</div> 
            <div id='right' class= 'bottom-selections'>
            <mwc-textfield   type='number' id='convertedOutput' placeholder='100' 
            value={this.state.query2}
            onInput={this.oninputfunc}
            ></mwc-textfield>
            <mwc-select  type="number" id="dest" selectid="Selection2" value={this.state.dest} onClick={e => this.setState({dest : e.target.value})}>
                                 {/* <!-- Area -->  */}
                                 <mwc-list-item class='Area' value='Squarekilometer'  >کیلومتر مربع</mwc-list-item>
                                <mwc-list-item class='Area' value='Squaremeter'>متر مربع</mwc-list-item>
                                <mwc-list-item class='Area' value='Squaremile'>مایل مربع</mwc-list-item>
                                <mwc-list-item class='Area' value='Squareyard'>یارد مربع</mwc-list-item>
                                <mwc-list-item class='Area' value='Squarefoot'>پای مربع</mwc-list-item>
                                <mwc-list-item class='Area' value='Squareinch'>اینچ مربع</mwc-list-item>
                                <mwc-list-item class='Area' value='Hectare'>هکتار</mwc-list-item>
                                {/* <!-- Data Transfer Rate  --> */}
                                <mwc-list-item class='DataTransferRate' value='Bitpersecond'>بیت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='DataTransferRate' value='Kilobitpersecond'>کیلوبیت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='DataTransferRate' value='Kilobytepersecond'>کیلوبایت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='DataTransferRate' value='Kibibitpersecond'>کیبی بیت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='DataTransferRate' value='Megabitpersecond'>مگابیت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='DataTransferRate' value='Megabytepersecond'>مگابایت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='DataTransferRate' value='Mebibitpersecond'>مبی بیت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='DataTransferRate' value='Gigabitpersecond'>گیگابیت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='DataTransferRate' value='Gigabytepersecond'>گیگابایت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='DataTransferRate' value='Gibibitpersecond'>گیبی بیت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='DataTransferRate' value='Terabitpersecond'>ترابیت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='DataTransferRate' value='Terabytepersecond'>ترابایت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='DataTransferRate' value='Tebibitpersecond'>تبی بیت بر ثانیه</mwc-list-item>
                                {/* <!-- Digital Storage --> */}
                                <mwc-list-item class='DigitalStorage' value='Bit'>بیت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Kilobit'>کیلو بیت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Kibibit'>کیبی بیت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Megabit'>مگا بیت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Mebibit'>مبی بیت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Gigabit'>گیگا بیت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Gibibit'>گیگی بیت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Terabit'>ترا بیت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Tebibit'>تبی بیت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Petabit'>پتی بیت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Pebibit'>پبی بیت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Byte'>بایت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Kilobyte'>کیلو بایت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Kibibyte'>کیبی بایت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Megabyte'>مگا بایت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Mebibyte'>مبی بایت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Gigabyte'>گیگا بایت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Gibibyte'>گیگی بایت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Terabyte'>ترا بایت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Tebibyte'>تبی بایت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Petabyte'>پتا بایت</mwc-list-item>
                                <mwc-list-item class='DigitalStorage' value='Pebibyte'>پبی بایت</mwc-list-item>
                                {/* <!-- Energy -->  */}
                                <mwc-list-item class='Energy' value='Joule'>ژول</mwc-list-item>
                                <mwc-list-item class='Energy' value='Kilojoule'>کیلوژول</mwc-list-item>
                                <mwc-list-item class='Energy' value='Gramcalorie'>گرم کالری</mwc-list-item>
                                <mwc-list-item class='Energy' value='Kilocalorie'>کیلو کالری</mwc-list-item>
                                <mwc-list-item class='Energy' value='Watthour'>وات ساعت</mwc-list-item>
                                <mwc-list-item class='Energy' value='kilowatthour'>کیلووات ساعت</mwc-list-item>
                                <mwc-list-item class='Energy' value='Electronvolt'>الکترون ولت</mwc-list-item>
                                <mwc-list-item class='Energy' value='Footpound'>پوند-فوت</mwc-list-item>
                                {/* <!-- Frequency --> */}
                                <mwc-list-item class='Frequency' value='Hertz'>هرتز</mwc-list-item>
                                <mwc-list-item class='Frequency' value='Kilohertz'>کیلوهرتز</mwc-list-item>
                                <mwc-list-item class='Frequency' value='Megahertz'>مگاهرتز</mwc-list-item>
                                <mwc-list-item class='Frequency' value='Gigahertz'>گیگاهرتز</mwc-list-item>
                                {/* <!-- Length -->  */}
                                <mwc-list-item class='Length' value='kilometre' >کیلومتر</mwc-list-item>
                                <mwc-list-item class='Length'value='Meter' >متر</mwc-list-item>
                                <mwc-list-item class='Length' value='Centimeter'selected>سانتی متر</mwc-list-item>
                                <mwc-list-item class='Length' value='Millimetre'>میلی متر</mwc-list-item>
                                <mwc-list-item class='Length' value='micrometres'>میکرو متر</mwc-list-item>
                                <mwc-list-item class='Length' value='Nanometre'>نانو متر</mwc-list-item>
                                <mwc-list-item class='Length' value='Mile'>مایل</mwc-list-item>
                                <mwc-list-item class='Length' value='Yard'>یارد</mwc-list-item>
                                <mwc-list-item class='Length' value='Foot'>فوت</mwc-list-item>
                                <mwc-list-item class='Length' value='Inch'>اینچ</mwc-list-item>
                                {/* <!-- Mass --> */}
                                <mwc-list-item class='Mass' value='tonne'>تن</mwc-list-item>
                                <mwc-list-item class='Mass' value='Kilogram'>کیلوگرم</mwc-list-item>
                                <mwc-list-item class='Mass' value='Gram'>گرم</mwc-list-item>
                                <mwc-list-item class='Mass' value='Milligram'>میلیگرم</mwc-list-item>
                                <mwc-list-item class='Mass' value='Microgram'>میکروگرم</mwc-list-item>
                                <mwc-list-item class='Mass' value='Pound'>پوند</mwc-list-item>
                                <mwc-list-item class='Mass' value='Ounce'>اونس</mwc-list-item>
                                {/* <!-- Pressure --> */}
                                <mwc-list-item class='Pressure' value='Bar'>بار</mwc-list-item>
                                <mwc-list-item class='Pressure' value='Pascal'>پاسکال</mwc-list-item>
                                <mwc-list-item class='Pressure' value='poundpersquareinch'>پوند در اینچ مربع</mwc-list-item>
                                <mwc-list-item class='Pressure' value='Standardatmosphere'>اتمسفر استاندارد</mwc-list-item>
                                <mwc-list-item class='Pressure' value='Torr'>تور</mwc-list-item>
                                {/* <!-- Speed --> */}
                                <mwc-list-item class='Speed' value='Milesperhour'>مایل در ساعت</mwc-list-item>
                                <mwc-list-item class='Speed' value='Footpersecond'>ف.ت در ثانیه</mwc-list-item>
                                <mwc-list-item class='Speed' value='Meterpersecond'>متر در ثانیه</mwc-list-item>
                                <mwc-list-item class='Speed' value='Kilometerperhour'>کیلومتر در ساعت</mwc-list-item>
                                <mwc-list-item class='Speed' value='Knot'>گره</mwc-list-item>
                                {/* <!-- Temperature --> */}
                                <mwc-list-item class='Temperature' value='Celsius'>سلسیوس</mwc-list-item>
                                <mwc-list-item class='Temperature' value='Fahrenheit'>فارنهایت</mwc-list-item>
                                <mwc-list-item class='Temperature' value='Kelvin'>کلوین</mwc-list-item>
                                {/* <!-- Time --> */}
                                <mwc-list-item class='Time' value='Nanosecond'>نانوثانیه</mwc-list-item>
                                <mwc-list-item class='Time' value='Microsecond'>میکروثانیه</mwc-list-item>
                                <mwc-list-item class='Time' value='Millisecond'>میلی ثانیه</mwc-list-item>
                                <mwc-list-item class='Time' value='Second'>ثانیه</mwc-list-item>
                                <mwc-list-item class='Time' value='Minute'>دقیقه</mwc-list-item>
                                <mwc-list-item class='Time' value='Hour'>ساعت</mwc-list-item>
                                <mwc-list-item class='Time' value='Day'>روز</mwc-list-item>
                                <mwc-list-item class='Time' value='Week'>هفته</mwc-list-item>
                                <mwc-list-item class='Time' value='Month'>ماه</mwc-list-item>
                                <mwc-list-item class='Time' value='Decade'>دهه</mwc-list-item>
                                <mwc-list-item class='Time' value='Century'>قرن</mwc-list-item>
                            </mwc-select>

            </div>
            
            <div >{this.state.formule}</div>

        </div>
            

        )
    }
}
export default Selection;