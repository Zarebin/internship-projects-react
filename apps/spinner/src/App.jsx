import React, { useEffect, useState } from "zarkit/react";
import "./App.scss";
import Spinner from "./spinner"
import ChanceWheel from "./chance-wheel"


function App() {
  const [list, setList] = useState([1,2,3,4,5,6]);
  const [isSpinner, setIsSpinner] = useState(false);
   

  //router
  function toggleSpinner() {
    setIsSpinner(!isSpinner);
  }

  //switch//
  //its not complete yet,it should be more costomized
  const accordion = event => {
    const value = event.target.value;
    var temp = [];
    for (var i = 1; i <= Number(value); i++) {
      temp.push(i);
    }
    setList(temp);
  };

function buildOptions() {
    var arr = [];
    for (let i = 2; i <= 20; i++) {
        arr.push(<option key={i} value={i}> number {i}</option>)
    }
    return arr; 
}
  return (
    <div className="App">
      <div class="header">
        <div class="toggle">
          <label class="label">Number</label>
          <label class="switch">
            <input type="checkbox" id="switch" onClick={toggleSpinner}></input>
            <span class="slider round"></span>
          </label>
          <label class="label">Fidget</label>
        </div>
        {!isSpinner && (
          <div class="dropdown">
            <select class="dropbtn" onChange={accordion}>
            <option value="" selected disabled hidden>Wheel size </option>
            {buildOptions()}
            </select>
          </div>
        )}
      </div>

      <div class="containar">
        <div>
          {!isSpinner && <ChanceWheel list={list} />}
          {isSpinner && <Spinner />}
        </div>
      </div>
    </div>
  );
}
export default App;
