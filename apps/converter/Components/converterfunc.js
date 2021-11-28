import React  from "zarkit/react";
const {formule} = require('../data/formula.js');
import TemperatureFunc from "./Temperature ";
function converterfunc(topselect,val,madeSelection_1,madeSelection_2) {
    var result;
    if (madeSelection_1 === madeSelection_2 ){result=val*1} 
    else if (topselect=='Temperature'){result=TemperatureFunc(val,madeSelection_1,madeSelection_2)}
    else{
        result=val * (formule[topselect][madeSelection_1]/formule[topselect][madeSelection_2])
    
    }
    return result   
}
export default converterfunc;

