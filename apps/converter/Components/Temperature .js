 
import React from "zarkit/react";
function TemperatureFunc(val,madeSelection_1,madeSelection_2) {
    var result,formulvalue;
    val=parseInt(val);
    if (madeSelection_1 === madeSelection_2 ) {
          result=val;
    }else if (madeSelection_1 ==='celsius' && madeSelection_2==='fahrenheit') {
        result= (val * (9.5)+32);
                
    }else if (madeSelection_1 ==='celsius' && madeSelection_2==='kelvin') {
        result= (val + (273.15));
                
    }
    //fahrenheit to ...
    else if (madeSelection_1 ==='fahrenheit' && madeSelection_2==='celsius') {
        result= (val -(32))* 5.9;
                
    }else if (madeSelection_1 ==='fahrenheit' && madeSelection_2==='kelvin') {
        result= ((val - (32))* 5.9)+273.15;
                
    }
    //kelvin to ..
    else if (madeSelection_1 ==='kelvin' && madeSelection_2==='celsius') {
        result= (val -(273.15));
                
    }else if (madeSelection_1 ==='kelvin' && madeSelection_2==='fahrenheit') {
        result= ((val - (273.15))* 9.5)+32;
                
    }
                                        



    return result



    
}
export default TemperatureFunc;



