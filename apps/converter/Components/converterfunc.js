import React  from "zarkit/react";
const {formule} = require('../data/formule.js');
import TemperatureFunc from "./Temperature ";
function converterfunc(topselect,val,madeSelection_1,madeSelection_2) {
    var result,formulvalue;
    if (madeSelection_1 === madeSelection_2 ){result=val} 
    else if (topselect=='Temperature'){result=TemperatureFunc(val,madeSelection_1,madeSelection_2)}
    else{
        formule[topselect][madeSelection_1][madeSelection_2] ?
        result=val * (formule[topselect][madeSelection_1][madeSelection_2])
        :result=val / (formule[topselect][madeSelection_2][madeSelection_1])
    
    }
    return result   
}
export default converterfunc;

