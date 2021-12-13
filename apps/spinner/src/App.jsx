import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Spinner from "./spinner"
import ChanceWheel from "./chance-wheel"
import { useState } from "react/cjs/react.development";

function App(){

const [state, setState] = useState({
value: 6 , 
isSpinner:false
})

//router
function routeChange(){
  if(!state.isSpinner){
     setState({...state,isSpinner:true})
  }
  else{
     setState({...state,isSpinner:false})
  }
  
}
useEffect(()=>{console.log(state.isSpinner);});

//switch//
//its not complete yet,it should be more costomized 
const accordion = event => {
    const value = event.target.value;
    setState({ ...state,value })
    console.log(state.value);
    var  n = event.target.value;
    var temp = [];   
    for (var i = 1; i <= Number(n); i++) { 
      temp.push(i);
  }
}

    return (
      <div className="App">
      
        <div class="header">
            <div class="toggle">
                <label class="label">Number</label>
                <label class="switch" >
                <input type="checkbox" id="switch" onClick={routeChange}></input>
                <span class="slider round"></span>
                </label>
                <label class="label">Fidget</label>
            </div>
          {!state.isSpinner && <div class="dropdown">
                <select class="dropbtn" onChange={accordion}>
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
                
            </div>}
            
</div>
         
        <div class="containar">
       <div>
         {!state.isSpinner && <ChanceWheel value={state.value}/>}
         {state.isSpinner &&  <Spinner/>}
          </div> 
          </div>
        
       
      </div>
    );
}
export default App;
