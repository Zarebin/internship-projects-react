import React, { useEffect , useState } from "zarkit/react";
import "./chance-wheel.scss";

function ChanceWheel(props) {
  const [radius, setRadius] = useState(45); // PIXELS
  const [rotate, setRotate] = useState(0);  // DEGREES
  const [easeOut, setEaseOut] = useState(0); // SECONDS
  const [angle, setAngle] = useState(0);  // RADIANS
  const [top, setTop] = useState(null); // INDEX
  const [offset, setoffset] = useState(null); // RADIANS
  const [net, setNet] = useState(null);  // RADIANS
  const [spinning, setSpinning] = useState( true); //status
  const [list, setList] = useState([]); //list


  useEffect(() => {
    renderWheel();
  });

  function renderWheel() {
    // determine number/size of sectors that need to created
    let numOptions = props.list.length;
    let arcSize = (2 * Math.PI) / numOptions;
    /* setState({
      angle: arcSize
    });*/

    // get index of starting position of selector
    topPosition(numOptions, arcSize);
    // dynamically generate sectors from state list
    let angle = 0;
    for (let i = 0; i < numOptions; i++) {
      let text = props.list[i];
      renderSector(i + 1, text, angle, arcSize, getColor(numOptions, i));
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

    /*  setState({
    top: topSpot - 1,
    offset: degreesOff
    });*/
  };

  function renderSector(index, text, start, arc, color) {
    // create canvas arc for each list element
    let canvas = document.getElementById("wheel");
    let ctx = canvas.getContext("2d");
    let x = canvas.width / 2;
    let y = canvas.height / 2;
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
    if (size % 2 == 1) {
      n = n % 3;
      switch (n) {
        case 0:
          return "#2bdbc6";
        case 1:
          return "#b4f8ee";
        case 2:
          return "#5ecfbc";
      }
    } else {
      n = n % 2;
      switch (n) {
        case 0:
          return "#2bdbc6";
        case 1:
          return "#b4f8ee";
      }
    }
  }

  const spin = () => {
    // set random spin degree and ease out time
    // set state variables to initiate animation
    let randomSpin = Math.floor(Math.random() * 900) + 500;
    console.log(randomSpin);
    setRotate(randomSpin);
    setEaseOut(2);
    setSpinning(true);
    console.log("spin", spinning);
    // calcalute result after wheel stops spinning
    setTimeout(() => {
      //getResult(randomSpin);
    }, 2000);
  };


  const reset = () => {
    // reset wheel and result
    setRotate(0);
    setEaseOut(0);
    setSpinning(false);
    console.log("reset", spinning);
  };

  return (
    <div className="App">
      <div class="containar">
        <div>
          {" "}
          <label for="wheel" id="selector">
            &#9660;
          </label>
        </div>
        <div>
          <canvas
            id="wheel"
            width="300"
            height="300"
            style={{
              WebkitTransform: `rotate(${rotate}deg)`,
              WebkitTransition: `-webkit-transform ${easeOut}s ease-out`,
            }}
          />
        </div>
      </div>

      <div class="footer">
        {spinning ? (
          <button type="button" id="reset" onClick={reset}>
            reset
          </button>
        ) : (
          <button type="button" id="spin" onClick={spin}>
            spin
          </button>
        )}
      </div>
    </div>
  );
}
export default ChanceWheel;
