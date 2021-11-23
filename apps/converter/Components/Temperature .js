 
import React from "zarkit/react";
function TemperatureFunc(val,madeSelection_1,madeSelection_2) {
    var result,formulvalue;
    val=parseInt(val);
    if (madeSelection_1 === madeSelection_2 ) {
          result=val;
    }else if (madeSelection_1 ==='Celsius' && madeSelection_2==='Fahrenheit') {
        result= (val * (9.5)+32);
                
    }else if (madeSelection_1 ==='Celsius' && madeSelection_2==='Kelvin') {
        result= (val + (273.15));
                
    }
    //Fahrenheit to ...
    else if (madeSelection_1 ==='Fahrenheit' && madeSelection_2==='Celsius') {
        result= (val -(32))* 5.9;
                
    }else if (madeSelection_1 ==='Fahrenheit' && madeSelection_2==='Kelvin') {
        result= ((val - (32))* 5.9)+273.15;
                
    }
    //Kelvin to ..
    else if (madeSelection_1 ==='Kelvin' && madeSelection_2==='Celsius') {
        result= (val -(273.15));
                
    }else if (madeSelection_1 ==='Kelvin' && madeSelection_2==='Fahrenheit') {
        result= ((val - (273.15))* 9.5)+32;
                
    }
                                        



    return result



    
}
export default TemperatureFunc;



