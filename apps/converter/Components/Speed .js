 
import React , {ReactDOM} from "react";
function SpeedFunc(val,madeSelection_1,madeSelection_2) {
    var result,formulvalue;
    if (madeSelection_1 === madeSelection_2 ) {
          result=val;
    }else if (madeSelection_1 ==='Miles per hour' && madeSelection_2==='Foot per second') {
        result= val *(1.467);
                
    }else if (madeSelection_1 ==='Miles per hour' && madeSelection_2==='Meter per second') {
        result= val /(2.237);
                
    }else if (madeSelection_1 ==='Miles per hour' && madeSelection_2==='Kilometer per hour') {
        result= val *(1.609);
                
    }else if (madeSelection_1 ==='Miles per hour' && madeSelection_2==='Knot') {
        result= val /(1.151);
                
    }
    //Foot per second to ...
    else if (madeSelection_1 ==='Foot per second' && madeSelection_2==='Miles per hour') {
        result= val /(1.467);
                
    }else if (madeSelection_1 ==='Foot per second' && madeSelection_2==='Meter per second') {
        result= val /(3.281);
                
    }else if (madeSelection_1 ==='Foot per second' && madeSelection_2==='Kilometer per hour') {
        result= val *(1.097);
                
    }else if (madeSelection_1 ==='Foot per second' && madeSelection_2==='Knot') {
        result= val /(1.688);
                
    } 
    //Meter per second to ...
    else if (madeSelection_1 ==='Meter per second' && madeSelection_2==='Miles per hour') {
        result= val *(2.237);
                
    }else if (madeSelection_1 ==='Meter per second' && madeSelection_2==='Foot per second') {
        result= val *(3.281);
                
    }else if (madeSelection_1 ==='Meter per second' && madeSelection_2==='Kilometer per hour') {
        result= val *(3.6);
                
    }else if (madeSelection_1 ==='Meter per second' && madeSelection_2==='Knot') {
        result= val *(1.944);
                
    }
    //Kilometer per hour to ...
    else if (madeSelection_1 ==='Kilometer per hour' && madeSelection_2==='Miles per hour') {
        result= val /(1.609);
                
    }else if (madeSelection_1 ==='Kilometer per hour' && madeSelection_2==='Foot per second') {
        result= val /( 1.097);
                
    }else if (madeSelection_1 ==='Kilometer per hour' && madeSelection_2==='Meter per second') {
        result= val /(3.6);
                
    }else if (madeSelection_1 ==='Kilometer per hour' && madeSelection_2==='Knot') {
        result= val /(1.852);
                
    }
    //Knot to ...
    else if (madeSelection_1 ==='Knot' && madeSelection_2==='Miles per hour') {
        result= val *(1.151);
                
    }else if (madeSelection_1 ==='Knot' && madeSelection_2==='Foot per second') {
        result= val *(1.688);
                
    }else if (madeSelection_1 ==='Knot' && madeSelection_2==='Meter per second') {
        result= val /(1.944);
                
    }else if (madeSelection_1 ==='Knot' && madeSelection_2==='Kilometer per hour') {
        result= val *(1.852);
                
    }                                    




    const setstate={result:result, formule:formulvalue}
    return setstate



    
}
export default SpeedFunc;



