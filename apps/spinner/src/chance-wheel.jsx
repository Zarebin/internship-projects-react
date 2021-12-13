import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import ReactDOM from "react-dom";
import "./chance-wheel.css";



function ChanceWheel (props){

  const [state, setState] = useState({
    radius: 45, // PIXELS
    rotate: 0, // DEGREES
    easeOut: 0, // SECONDS
    angle: 0, // RADIANS
    top: null, // INDEX
    offset: null, // RADIANS
    net: null, // RADIANS
    result: null, // INDEX
    spinning: false
    })

  let list = [1,2,3,4,5,6];
   
 
   useEffect(()=>{renderWheel()});
  /*componentDidMount() {
    // generate canvas wheel on load
    this.renderWheel();
  }
  
  componentDidUpdate(){
    //check all updates at momment 
    this.renderWheel();
  }*/


//switch//
//its not complete yet,it should be more costomized 
const accordion = () =>{
    var  n = props.value;
    var temp = [];   
    for (var i = 1; i <= Number(n); i++) { 
      temp.push(i);
  }
    list = temp;
    console.log(state);
}

 

function renderWheel() {
    accordion()
    // determine number/size of sectors that need to created
    let numOptions = props.value;
    let arcSize = (2 * Math.PI) / numOptions;
   /* this.setState({
      angle: arcSize
    });*/

    // get index of starting position of selector
     topPosition(numOptions, arcSize);
    // dynamically generate sectors from state list
    let angle = 0;
    for (let i = 0; i < numOptions; i++) {
      let text = list[i];
      renderSector(i + 1, text, angle, arcSize, getColor(numOptions,i));
      angle += arcSize;
    }
  }

const topPosition = (num, angle) => {
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

function renderSector(index, text, start, arc, color) {
    // create canvas arc for each list element
    let canvas = document.getElementById("wheel");
    let ctx = canvas.getContext("2d");
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let radius = state.radius;
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

function getColor(size, n) {
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
    

const spin = () => {
    // set random spin degree and ease out time
    // set state variables to initiate animation
    let randomSpin = Math.floor(Math.random() * 900) + 500;
    setState({
      rotate: randomSpin,
      easeOut: 2,
      spinning: true
      
    });
    // calcalute result after wheel stops spinning
    setTimeout(() => {
      getResult(randomSpin);
    }, 2000);
  };

const getResult = spin => {

    const { angle, top, offset, list } = state;
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
    setState({
      net: netRotation,
      result: result
    });
  };


    return (
      <div className="App">
  
        <div class="containar">
        <div> <label for="wheel" id="selector">&#9660;</label></div>
       <div><canvas id="wheel" width="300" height="300"
          style={{
           WebkitTransform: `rotate(${state.rotate}deg)`,
            WebkitTransition: `-webkit-transform ${
              state.easeOut
            }s ease-out`
          }}/></div> 
          </div>
        <div class="footer">
         <button type="button" id="spin" onClick={spin}>SPIN </button> 
        </div>        
      </div>
    );
}  
export default ChanceWheel;








