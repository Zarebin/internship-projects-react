import React  from "react";
import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-textfield';
import Lengthfunc from "../Components/length";
import AreaFunc from "../Components/Area";
import DataFunc from "../Components/Datatransferrate";
import DigitalStoragefunc from "../Components/DigitalStorage";
import Energyfunc from "../Components/Energy ";
import FrequencyFunc from "../Components/Frequency ";
import MassFunc from "../Components/Mass ";
import PressureFunc from "../Components/Pressure";
import SpeedFunc from "../Components/Speed ";
import TemperatureFunc from "../Components/Temperature ";
import TimeFunc from "../Components/Time";
class Selection extends React.Component {
    constructor(props) {
        super(props);

    this.Lengthfunc = Lengthfunc.bind(this);
    this.AreaFunc = AreaFunc.bind(this);
    this.DataFunc = DataFunc.bind(this);
    this.DigitalStoragefunc = DigitalStoragefunc.bind(this);
    this.Energyfunc = Energyfunc.bind(this);
    this.FrequencyFunc = FrequencyFunc.bind(this);
    this.MassFunc = MassFunc.bind(this);
    this.PressureFunc = PressureFunc.bind(this);
    this.SpeedFunc = SpeedFunc.bind(this);
    this.TemperatureFunc = TemperatureFunc.bind(this);
    this.TimeFunc = TimeFunc.bind(this);

    this.state = {query1 : ' ' , query2 : ' ', src:'',dest:'',formule:''};
    }


    p= (e) =>  {
            var src,des,valsrc,valdest,result,madeSelection_1,madeSelection_2,pin;
            var topselect=this.props.selectid;
            if (e.target.id==='value') {
                if (topselect==='Length'){ 
                    const newState =this.Lengthfunc(e.target.value,this.state.src,this.state.dest);
                    this.setState({query2: newState.result});
                    
                    }  
                else if(topselect==='Area') {
                    const newState =this.AreaFunc(e.target.value,this.state.src,this.state.dest);
                        this.setState({query2: newState.result});
                    }
                else if (topselect==='Data Transfer Rate'){const newState =this.DataFunc(e.target.value,this.state.src,this.state.dest);
                        this.setState({query2: newState.result});
                }
                else if (topselect==='Digital Storage'){const newState =this.DigitalStoragefunc(e.target.value,this.state.src,this.state.dest);
                    this.setState({query2: newState.result});

                }else if (topselect==='Energy'){const newState =this.Energyfunc(e.target.value,this.state.src,this.state.dest);
                    this.setState({query2: newState.result});

                }else if (topselect==='Frequency'){const newState =this.FrequencyFunc(e.target.value,this.state.src,this.state.dest);
                    this.setState({query2: newState.result});

                }else if (topselect==='Mass'){const newState =this.MassFunc(e.target.value,this.state.src,this.state.dest);
                    this.setState({query2: newState.result});

                }else if (topselect==='Pressure'){const newState =this.PressureFunc(e.target.value,this.state.src,this.state.dest);
                    this.setState({query2: newState.result});

                }else if (topselect==='Speed'){const newState =this.SpeedFunc(e.target.value,this.state.src,this.state.dest);
                    this.setState({query2: newState.result});

                }else if (topselect==='Temperature'){const newState =this.TemperatureFunc(e.target.value,this.state.src,this.state.dest);
                    this.setState({query2: newState.result});

                }else if (topselect==='Time'){const newState =this.TimeFunc(e.target.value,this.state.src,this.state.dest);
                    this.setState({query2: newState.result});

                }

            } else {
                if (topselect==='Length'){ 
                    const newState =this.Lengthfunc(e.target.value,this.state.dest,this.state.src);
                    this.setState({query1: newState.result});
                    
                }else if(topselect==='Area') {
                    const newState =this.AreaFunc(e.target.value,this.state.dest,this.state.src);
                        this.setState({query1: newState.result});
                }
                else if (topselect==='Data Transfer Rate'){const newState =this.DataFunc(e.target.value,this.state.dest,this.state.src);
                        console.log(topselect);
                        this.setState({query1: newState.result});
                        console.log('hjhnk,jgj',newState);
                }
                else if (topselect==='Digital Storage'){const newState =this.DigitalStoragefunc(e.target.value,this.state.dest,this.state.src);
                    this.setState({query1: newState.result});

                }else if (topselect==='Energy'){const newState =this.Energyfunc(e.target.value,this.state.dest,this.state.src);
                    this.setState({query1: newState.result});

                }else if (topselect==='Frequency'){const newState =this.FrequencyFunc(e.target.value,this.state.dest,this.state.src);
                    this.setState({query1: newState.result});

                }else if (topselect==='Mass'){const newState =this.MassFunc(e.target.value,this.state.dest,this.state.src);
                    this.setState({query1: newState.result});

                }else if (topselect==='Pressure'){const newState =this.PressureFunc(e.target.value,this.state.dest,this.state.src);
                    this.setState({query1: newState.result});

                }else if (topselect==='Speed'){const newState =this.SpeedFunc(e.target.value,this.state.dest,this.state.src);
                    this.setState({query1: newState.result});

                }else if (topselect==='Temperature'){const newState =this.TemperatureFunc(e.target.value,this.state.dest,this.state.src);
                    this.setState({query1: newState.result});

                }else if (topselect==='Time'){const newState =this.TimeFunc(e.target.value,this.state.dest,this.state.src);
                    this.setState({query1: newState.result});

                }
            }

            }

    render () {
        return(
            <div id='bottom' className='pic'>
            
            <div id='left'>
            <mwc-textfield  outlined type='number' id='value' placeholder='1' 
            value={this.state.query1}
            onInput={this.p}
            ></mwc-textfield>
            <mwc-select outlined label="src" type="number"  selectid="Selection" value={this.state.src} onClick={e => this.setState({src : e.target.value})}>
                                {/* <!-- Area -->  */}
                                <mwc-list-item class='Area' value='Square kilometer' selected >کیلومتر مربع</mwc-list-item>
                                <mwc-list-item class='Area' value='Square meter'>متر مربع</mwc-list-item>
                                <mwc-list-item class='Area' value='Square mile'>مایل مربع</mwc-list-item>
                                <mwc-list-item class='Area' value='Square yard'>یارد مربع</mwc-list-item>
                                <mwc-list-item class='Area' value='Square foot'>پای مربع</mwc-list-item>
                                <mwc-list-item class='Area' value='Square inch'>اینچ مربع</mwc-list-item>
                                <mwc-list-item class='Area' value='Hectare'>هکتار</mwc-list-item>
                                <mwc-list-item class='Area' value='Acre'>Acre</mwc-list-item>
                                {/* <!-- Data Transfer Rate  --> */}
                                <mwc-list-item class='Data Transfer Rate' value='Bit per second'>بیت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='Data Transfer Rate' value='Kilobit per second'>کیلوبیت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='Data Transfer Rate' value='Kilobyte per second'>کیلوبایت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='Data Transfer Rate' value='Kibibit per second'>کیبی بیت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='Data Transfer Rate' value='Megabit per second'>مگابیت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='Data Transfer Rate' value='Megabyte per second'>مگابایت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='Data Transfer Rate' value='Mebibit per second'>مبی بیت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='Data Transfer Rate' value='Gigabit per second'>گیگابیت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='Data Transfer Rate' value='Gigabyte per second'>گیگابایت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='Data Transfer Rate' value='Gibibit per second'>گیبی بیت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='Data Transfer Rate' value='Terabit per second'>ترابیت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='Data Transfer Rate' value='Terabyte per second'>ترابایت بر ثانیه</mwc-list-item>
                                <mwc-list-item class='Data Transfer Rate' value='Tebibit per second'>تبی بیت بر ثانیه</mwc-list-item>
                                {/* <!-- Digital Storage --> */}
                                <mwc-list-item class='Digital Storage' value='Bit'>بیت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Kilobit'>کیلو بیت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Kibibit'>کیبی بیت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Megabit'>مگا بیت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Mebibit'>مبی بیت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Gigabit'>گیگا بیت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Gibibit'>گیگی بیت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Terabit'>ترا بیت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Tebibit'>تبی بیت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Petabit'>پتی بیت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Pebibit'>پبی بیت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Byte'>بایت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Kilobyte'>کیلو بایت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Kibibyte'>کیبی بایت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Megabyte'>مگا بایت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Mebibyte'>مبی بایت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Gigabyte'>گیگا بایت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Gibibyte'>گیگی بایت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Terabyte'>ترا بایت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Tebibyte'>تبی بایت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Petabyte'>پتا بایت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Pebibyte'>پبی بایت</mwc-list-item>
                                {/* <!-- Energy -->  */}
                                <mwc-list-item class='Energy' value='Joule'>ژول</mwc-list-item>
                                <mwc-list-item class='Energy' value='Kilojoule'>کیلوژول</mwc-list-item>
                                <mwc-list-item class='Energy' value='Gram calorie'>گرم کالری</mwc-list-item>
                                <mwc-list-item class='Energy' value='Kilocalorie'>کیلو کالری</mwc-list-item>
                                <mwc-list-item class='Energy' value='Watt hour'>وات ساعت</mwc-list-item>
                                <mwc-list-item class='Energy' value='kilowatt hour'>کیلووات ساعت</mwc-list-item>
                                <mwc-list-item class='Energy' value='Electronvolt'>الکترون ولت</mwc-list-item>
                                <mwc-list-item class='Energy' value='Foot-pound'>پوند-فوت</mwc-list-item>
                                {/* <!-- Frequency --> */}
                                <mwc-list-item class='Frequency' value='Hertz'>هرتز</mwc-list-item>
                                <mwc-list-item class='Frequency' value='Kilohertz'>کیلوهرتز</mwc-list-item>
                                <mwc-list-item class='Frequency' value='Megahertz'>مگاهرتز</mwc-list-item>
                                <mwc-list-item class='Frequency' value='Gigahertz'>گیگاهرتز</mwc-list-item>
                                {/* <!-- Fuel Economy --> 
                                <mwc-list-item class='Fuel Economy' value='Miles per gallon'>Miles per gallon</mwc-list-item>
                                <mwc-list-item class='Fuel Economy' value='Miles per gallon'>Miles per gallon (Imperial)</mwc-list-item>
                                <mwc-list-item class='Fuel Economy' value='Kilometer per liter'>Kilometer per liter</mwc-list-item>
                                <mwc-list-item class='Fuel Economy' value='Liter per 100 kilometers'>Liter per 100 kilometers</mwc-list-item> */}
                                {/* <!-- Length -->  */}
                                <mwc-list-item class='Length' value='kilometre' >کیلومتر</mwc-list-item>
                                <mwc-list-item class='Length'value='Meter'>متر</mwc-list-item>
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
                                {/* <!-- Plane Angle --> */}
                                {/* <mwc-list-item class='Plane Angle' value='Degree'>Degree</mwc-list-item>
                                <mwc-list-item class='Plane Angle' value='Gradian'>Gradian</mwc-list-item>
                                <mwc-list-item class='Plane Angle' value='Milliradian'>Milliradian</mwc-list-item>
                                <mwc-list-item class='Plane Angle' value='Minute of arc'>Minute of arc</mwc-list-item>
                                <mwc-list-item class='Plane Angle' value='Radian'>Radian</mwc-list-item>
                                <mwc-list-item class='Plane Angle' value='Second of arc'>Second of arc</mwc-list-item> */}
                                {/* <!-- Pressure --> */}
                                <mwc-list-item class='Pressure' value='Bar'>بار</mwc-list-item>
                                <mwc-list-item class='Pressure' value='Pascal'>پاسکال</mwc-list-item>
                                <mwc-list-item class='Pressure' value='pound per square inch'>پوند در اینچ مربع</mwc-list-item>
                                <mwc-list-item class='Pressure' value='Standard atmosphere'>اتمسفر استاندارد</mwc-list-item>
                                <mwc-list-item class='Pressure' value='Torr'>تور</mwc-list-item>
                                {/* <!-- Speed --> */}
                                <mwc-list-item class='Speed' value='Miles per hour'>مایل در ساعت</mwc-list-item>
                                <mwc-list-item class='Speed' value='Foot per second'>ف.ت در ثانیه</mwc-list-item>
                                <mwc-list-item class='Speed' value='Meter per second'>متر در ثانیه</mwc-list-item>
                                <mwc-list-item class='Speed' value='Kilometer per hour'>کیلومتر در ساعت</mwc-list-item>
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
                                {/* <!-- Volume --> */}
                                {/* <mwc-list-item class='Volume' value='US liquid gallon'>US liquid gallon</mwc-list-item>
                                <mwc-list-item class='Volume' value='US liquid quart'>US liquid quart</mwc-list-item>
                                <mwc-list-item class='Volume' value='US liquid pint'>US liquid pint</mwc-list-item>
                                <mwc-list-item class='Volume' value='US legal cup'>US legal cup</mwc-list-item>
                                <mwc-list-item class='Volume' value='fluid ounce'>fluid ounce</mwc-list-item>
                                <mwc-list-item class='Volume' value='US tablespoon'>US tablespoon</mwc-list-item>
                                <mwc-list-item class='Volume' value='US teaspoon'>US teaspoon</mwc-list-item>
                                <mwc-list-item class='Volume' value='Cubic meter'>Cubic meter</mwc-list-item>
                                <mwc-list-item class='Volume' value='Liter'>Liter</mwc-list-item>
                                <mwc-list-item class='Volume' value='Milliliter'>Milliliter</mwc-list-item>
                                <mwc-list-item class='Volume' value='Imperial gallon'>Imperial gallon</mwc-list-item>
                                <mwc-list-item class='Volume' value='imp. quart'>imp. quart</mwc-list-item>
                                <mwc-list-item class='Volume' value='Imperial pint'>Imperial pint</mwc-list-item>
                                <mwc-list-item class='Volume' value='Imperial cup'>Imperial cup</mwc-list-item>
                                <mwc-list-item class='Volume' value='fluid ounce'>fluid ounce</mwc-list-item>
                                <mwc-list-item class='Volume' value='Imperial tablespoon'>Imperial tablespoon</mwc-list-item>
                                <mwc-list-item class='Volume' value='Imperial teaspoon'>Imperial teaspoon</mwc-list-item>
                                <mwc-list-item class='Volume' value='Cubic foot'>Cubic foot</mwc-list-item>
                                <mwc-list-item class='Volume' value='Cubic inch'>Cubic inch</mwc-list-item> */}
                            </mwc-select>
            </div>
            <div id='center'>=</div> 
            <div id='right'>
            <mwc-textfield  outlined type={this.props.type} id='convertedOutput' placeholder='1' 
            value={this.state.query2}
            onInput={this.p}
            ></mwc-textfield>
            <mwc-select outlined type="number" id="convertedOutput" selectid="Selection2" value={this.state.dest} onClick={e => this.setState({dest : e.target.value})}>
                                {/* <!-- Area -->  */}
                                <mwc-list-item class='Area' value='Square kilometer' selected >کیلومتر مربع</mwc-list-item>
                                <mwc-list-item class='Area' value='Square meter'>متر مربع</mwc-list-item>
                                <mwc-list-item class='Area' value='Square mile'>مایل مربع</mwc-list-item>
                                <mwc-list-item class='Area' value='Square yard'>یارد مربع</mwc-list-item>
                                <mwc-list-item class='Area' value='Square foot'>پای مربع</mwc-list-item>
                                <mwc-list-item class='Area' value='Square inch'>اینچ مربع</mwc-list-item>
                                <mwc-list-item class='Area' value='Hectare'>هکتار</mwc-list-item>
                                <mwc-list-item class='Area' value='Acre'>Acre</mwc-list-item>
                                {/* <!-- Data Transfer Rate  --> */}
                                <mwc-list-item class='Data Transfer Rate' value='Bit per second'>Bit per second</mwc-list-item>
                                <mwc-list-item class='Data Transfer Rate' value='Kilobit per second'>Kilobit per second</mwc-list-item>
                                <mwc-list-item class='Data Transfer Rate' value='Kilobyte per second'>Kilobyte per second</mwc-list-item>
                                <mwc-list-item class='Data Transfer Rate' value='Kibibit per second'>Kibibit per second</mwc-list-item>
                                <mwc-list-item class='Data Transfer Rate' value='Megabit per second'>Megabit per second</mwc-list-item>
                                <mwc-list-item class='Data Transfer Rate' value='Megabyte per second'>Megabyte per second</mwc-list-item>
                                <mwc-list-item class='Data Transfer Rate' value='Mebibit per second'>Mebibit per second</mwc-list-item>
                                <mwc-list-item class='Data Transfer Rate' value='Gigabit per second'>Gigabit per second</mwc-list-item>
                                <mwc-list-item class='Data Transfer Rate' value='Gigabyte per second'>Gigabyte per second</mwc-list-item>
                                <mwc-list-item class='Data Transfer Rate' value='Gibibit per second'>Gibibit per second</mwc-list-item>
                                <mwc-list-item class='Data Transfer Rate' value='Terabit per second'>Terabit per second</mwc-list-item>
                                <mwc-list-item class='Data Transfer Rate' value='Terabyte per second'>Terabyte per second</mwc-list-item>
                                <mwc-list-item class='Data Transfer Rate' value='Tebibit per second'>Tebibit per second</mwc-list-item>
                                {/* <!-- Digital Storage --> */}
                                <mwc-list-item class='Digital Storage' value='Bit'>بیت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Kilobit'>کیلو بیت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Kibibit'>کیبی بیت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Megabit'>مگا بیت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Mebibit'>مبی بیت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Gigabit'>گیگا بیت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Gibibit'>گیگی بیت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Terabit'>ترا بیت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Tebibit'>تبی بیت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Petabit'>پتی بیت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Pebibit'>پبی بیت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Byte'>بایت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Kilobyte'>کیلو بایت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Kibibyte'>کیبی بایت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Megabyte'>مگا بایت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Mebibyte'>مبی بایت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Gigabyte'>گیگا بایت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Gibibyte'>گیگی بایت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Terabyte'>ترا بایت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Tebibyte'>تبی بایت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Petabyte'>پتا بایت</mwc-list-item>
                                <mwc-list-item class='Digital Storage' value='Pebibyte'>پبی بایت</mwc-list-item>
                                {/* <!-- Energy -->  */}
                                <mwc-list-item class='Energy' value='Joule'>ژول</mwc-list-item>
                                <mwc-list-item class='Energy' value='Kilojoule'>کیلوژول</mwc-list-item>
                                <mwc-list-item class='Energy' value='Gram calorie'>گرم کالری</mwc-list-item>
                                <mwc-list-item class='Energy' value='Kilocalorie'>کیلو کالری</mwc-list-item>
                                <mwc-list-item class='Energy' value='Watt hour'>وات ساعت</mwc-list-item>
                                <mwc-list-item class='Energy' value='kilowatt hour'>کیلووات ساعت</mwc-list-item>
                                <mwc-list-item class='Energy' value='Electronvolt'>الکترون ولت</mwc-list-item>
                                <mwc-list-item class='Energy' value='Foot-pound'>پوند-فوت</mwc-list-item>
                                {/* <!-- Frequency --> */}
                                <mwc-list-item class='Frequency' value='Hertz'>هرتز</mwc-list-item>
                                <mwc-list-item class='Frequency' value='Kilohertz'>کیلوهرتز</mwc-list-item>
                                <mwc-list-item class='Frequency' value='Megahertz'>مگاهرتز</mwc-list-item>
                                <mwc-list-item class='Frequency' value='Gigahertz'>گیگاهرتز</mwc-list-item>
                                {/* <!-- Fuel Economy -->  */}
                                {/* <mwc-list-item class='Fuel Economy' value='Miles per gallon'>Miles per gallon</mwc-list-item>
                                <mwc-list-item class='Fuel Economy' value='Miles per gallon'>Miles per gallon (Imperial)</mwc-list-item>
                                <mwc-list-item class='Fuel Economy' value='Kilometer per liter'>Kilometer per liter</mwc-list-item>
                                <mwc-list-item class='Fuel Economy' value='Liter per 100 kilometers'>Liter per 100 kilometers</mwc-list-item> */}
                                {/* <!-- Length -->  */}
                                <mwc-list-item class='Length' value='kilometre' >کیلومتر</mwc-list-item>
                                <mwc-list-item class='Length'value='Meter'>متر</mwc-list-item>
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
                                {/* <!-- Plane Angle --> */}
                                {/* <mwc-list-item class='Plane Angle' value='Degree'>Degree</mwc-list-item>
                                <mwc-list-item class='Plane Angle' value='Gradian'>Gradian</mwc-list-item>
                                <mwc-list-item class='Plane Angle' value='Milliradian'>Milliradian</mwc-list-item>
                                <mwc-list-item class='Plane Angle' value='Minute of arc'>Minute of arc</mwc-list-item>
                                <mwc-list-item class='Plane Angle' value='Radian'>Radian</mwc-list-item>
                                <mwc-list-item class='Plane Angle' value='Second of arc'>Second of arc</mwc-list-item> */}
                                {/* <!-- Pressure --> */}
                                <mwc-list-item class='Pressure' value='Bar'>بار</mwc-list-item>
                                <mwc-list-item class='Pressure' value='Pascal'>پاسکال</mwc-list-item>
                                <mwc-list-item class='Pressure' value='pound per square inch'>پوند در اینچ مربع</mwc-list-item>
                                <mwc-list-item class='Pressure' value='Standard atmosphere'>اتمسفر استاندارد</mwc-list-item>
                                <mwc-list-item class='Pressure' value='Torr'>تور</mwc-list-item>
                                {/* <!-- Speed --> */}
                                <mwc-list-item class='Speed' value='Miles per hour'>مایل در ساعت</mwc-list-item>
                                <mwc-list-item class='Speed' value='Foot per second'>ف.ت در ثانیه</mwc-list-item>
                                <mwc-list-item class='Speed' value='Meter per second'>متر در ثانیه</mwc-list-item>
                                <mwc-list-item class='Speed' value='Kilometer per hour'>کیلومتر در ساعت</mwc-list-item>
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
                                {/* <!-- Volume --> */}
                                {/* <mwc-list-item class='Volume' value='US liquid gallon'>US liquid gallon</mwc-list-item>
                                <mwc-list-item class='Volume' value='US liquid quart'>US liquid quart</mwc-list-item>
                                <mwc-list-item class='Volume' value='US liquid pint'>US liquid pint</mwc-list-item>
                                <mwc-list-item class='Volume' value='US legal cup'>US legal cup</mwc-list-item>
                                <mwc-list-item class='Volume' value='fluid ounce'>fluid ounce</mwc-list-item>
                                <mwc-list-item class='Volume' value='US tablespoon'>US tablespoon</mwc-list-item>
                                <mwc-list-item class='Volume' value='US teaspoon'>US teaspoon</mwc-list-item>
                                <mwc-list-item class='Volume' value='Cubic meter'>Cubic meter</mwc-list-item>
                                <mwc-list-item class='Volume' value='Liter'>Liter</mwc-list-item>
                                <mwc-list-item class='Volume' value='Milliliter'>Milliliter</mwc-list-item>
                                <mwc-list-item class='Volume' value='Imperial gallon'>Imperial gallon</mwc-list-item>
                                <mwc-list-item class='Volume' value='imp. quart'>imp. quart</mwc-list-item>
                                <mwc-list-item class='Volume' value='Imperial pint'>Imperial pint</mwc-list-item>
                                <mwc-list-item class='Volume' value='Imperial cup'>Imperial cup</mwc-list-item>
                                <mwc-list-item class='Volume' value='fluid ounce'>fluid ounce</mwc-list-item>
                                <mwc-list-item class='Volume' value='Imperial tablespoon'>Imperial tablespoon</mwc-list-item>
                                <mwc-list-item class='Volume' value='Imperial teaspoon'>Imperial teaspoon</mwc-list-item>
                                <mwc-list-item class='Volume' value='Cubic foot'>Cubic foot</mwc-list-item>
                                <mwc-list-item class='Volume' value='Cubic inch'>Cubic inch</mwc-list-item> */}
                            </mwc-select>

            </div>
            
            <div >{this.state.formule}</div>

        </div>
            

        )
    }
}
export default Selection;