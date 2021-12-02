import React from "react";
import ReactDOM from "react-dom";
import "./chance-wheel.css";


class App extends React.Component {
  //CHANGE TO CONST 
  state = {
    value: "" , 
    list: [ 1, 2, 3, 4, 5, 6],//SIZE OF WHEEL
    radius: 45, // PIXELS
    rotate: 0, // DEGREES
    easeOut: 0, // SECONDS
    angle: 0, // RADIANS
    top: null, // INDEX
    offset: null, // RADIANS
    net: null, // RADIANS
    result: null, // INDEX
    spinning: false
  };
  
 
  componentDidMount() {
    // generate canvas wheel on load
    this.renderWheel();
  }
  
  componentDidUpdate(){
    //check all updates
    this.renderWheel();
  }


//switch//
//its not complete yet,it should be more costomized 
  accordion = event => {
    const value = event.target.value;
    this.setState({ value })
    console.log(this.state.value);
    var  n = event.target.value;
    var temp = [];   
    for (var i = 1; i <= Number(n); i++) { 
      temp.push(i);
  }
   this.setState({list : temp})
    console.log(this.state.list);
    this.renderWheel();
  }

 

  renderWheel() {
    // determine number/size of sectors that need to created
    let numOptions = this.state.list.length;
    let arcSize = (2 * Math.PI) / numOptions;
   /* this.setState({
      angle: arcSize
    });*/

    // get index of starting position of selector
    this.topPosition(numOptions, arcSize);
    // dynamically generate sectors from state list
    let angle = 0;
    for (let i = 0; i < numOptions; i++) {
      let text = this.state.list[i];
      this.renderSector(i + 1, text, angle, arcSize, this.getColor(numOptions,i));
      angle += arcSize;
    }
  }

  topPosition = (num, angle) => {
    // set starting index and angle based on list length
    // works upto 9 options
    let topSpot = null;
    let degreesOff = null;
    if (num === 9) {
      topSpot = 7;
      degreesOff = Math.PI / 2 - angle * 2;
    } else if (num === 8) {
      topSpot = 6;
      degreesOff = 0;
    } else if (num <= 7 && num > 4) {
      topSpot = num - 1;
      degreesOff = Math.PI / 2 - angle;
    } else if (num === 4) {
      topSpot = num - 1;
      degreesOff = 0;
    } else if (num <= 3) {
      topSpot = num;
      degreesOff = Math.PI / 2;
    }

    // this.setState({
    //   top: topSpot - 1,
    //   offset: degreesOff
    // });
  };

  renderSector(index, text, start, arc, color) {
    // create canvas arc for each list element
    let canvas = document.getElementById("wheel");
    let ctx = canvas.getContext("2d");
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let radius = this.state.radius;
    let startAngle = start;
    let endAngle = start + arc;
    let angle = index * arc;
    let baseSize = radius * 3.33;
    let textRadius = baseSize - 90;

    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle, false);
    ctx.lineWidth = radius * 2;
    ctx.strokeStyle = color;

    ctx.font = "12px Arial";
    ctx.fillStyle = "black";
    ctx.stroke();

    ctx.save();
    ctx.translate(
      baseSize + Math.cos(angle - arc / 2) * textRadius,
      baseSize + Math.sin(angle - arc / 2) * textRadius
    );
    ctx.rotate(angle - arc / 2 + Math.PI / 2);
    ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
    ctx.restore();
  }

  getColor(size, n) {
    // base on the pieces number they would be colored
    //it could be better (mostahab)
    if(size % 2 == 1){
      n = n % 3;
      switch(n){
        case 0 :
          return '#2bdbc6';
        case 1:
          return '#b4f8ee'
        case 2:   
          return  '#5ecfbc'
      }
    }
    else{
      n = n % 2;
      switch(n){
        case 0 :
          return '#2bdbc6';
        case 1:
          return '#b4f8ee'
     }    
  }
}
    
 

  spin = () => {
    // set random spin degree and ease out time
    // set state variables to initiate animation
    let randomSpin = Math.floor(Math.random() * 900) + 500;
    this.setState({
      rotate: randomSpin,
      easeOut: 2,
      spinning: true
    });

    // calcalute result after wheel stops spinning
    setTimeout(() => {
      this.getResult(randomSpin);
    }, 2000);
  };

  getResult = spin => {

    const { angle, top, offset, list } = this.state;
    let netRotation = ((spin % 360) * Math.PI) / 180; // RADIANS
    let travel = netRotation + offset;
    let count = top + 1;
    while (travel > 0) {
      travel = travel - angle;
      count--;
    }
    let result;
    if (count >= 0) {
      result = count;
    } else {
      result = list.length + count;
    }

    // set state variable to display result
    this.setState({
      net: netRotation,
      result: result
    });
  };



  render() {
    return (
      <div className="App">
      
        <div class="header">
            <div class="toggle">
                <label class="label">Number</label>
                <label class="switch" onClick={this.routeChange}>
                <input type="checkbox" id="switch"></input>
                <span class="slider round"></span>
                </label>
                <label class="label">Fidget</label>
            </div>
            <div class="dropdown">
                <select class="dropbtn" onChange={this.accordion}>
                    <option value="" selected disabled hidden>Wheel size</option>
                    <option class='dropdown-content'  value="2">number 2</option>
                    <option class='dropdown-content'  value="3">number 3</option>
                    <option class='dropdown-content'  value="4">number 4</option>
                    <option class='dropdown-content'  value="5">number 5</option>
                    <option class='dropdown-content'  value="6">number 6</option>
                    <option class='dropdown-content'  value="7">number 7</option>
                    <option class='dropdown-content'  value="8">number 8</option>
                    <option class='dropdown-content'  value="9">number 9</option>
                    <option class='dropdown-content'  value="10">number 10</option>
                    <option class='dropdown-content'  value="11">number 11</option>
                    <option class="dropdown-content"  value="12">number 12</option>
                    <option class='dropdown-content'  value="13">number 13</option>
                    <option class='dropdown-content'  value="14">number 14</option>
                    <option class='dropdown-content'  value="15">number 15</option>
                    <option class='dropdown-content'  value="16">number 16</option>
                    <option class='dropdown-content'  value="17">number 17</option>
                    <option class='dropdown-content'  value="18">number 18</option>
                    <option class='dropdown-content'  value="19">number 19</option>
                    <option class='dropdown-content'  value="20">number 20</option>
                </select>
                
            </div>

         </div>
        <div class="containar">
        <div> <label for="wheel" id="selector">&#9660;</label></div>
       <div><canvas id="wheel" width="300" height="300"
          style={{
           WebkitTransform: `rotate(${this.state.rotate}deg)`,
            WebkitTransition: `-webkit-transform ${
              this.state.easeOut
            }s ease-out`
          }}/></div> 
          </div>
        <div class="footer">
         <button type="button" id="spin" onClick={this.spin}>SPIN </button> 
        </div>   
        
      {/*
     {this.state.spinning ? (
          <button type="button" id="spin" onClick={this.reset}>
            spin
          </button>
        ) : (
          <button type="button" id="spin" onClick={this.spin}>reset </button>
        )}
        <div class="display">
          <span id="readout">
            YOU WON:{"  "}
            <span id="result">{this.state.list[this.state.result]}</span>
          </span>
        </div>*/}
       
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);







