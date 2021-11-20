 
import React  from "react";
function PressureFunc(val,madeSelection_1,madeSelection_2) {
    var result,formulvalue;
    if (madeSelection_1 === madeSelection_2 ) {
          result=val;
    }else if (madeSelection_1 ==='Bar' && madeSelection_2==='Pascal') {
        result= val *(100000);
                
    }else if (madeSelection_1 ==='Bar' && madeSelection_2==='pound per square inch') {
        result= val *(14.504);
                
    }else if (madeSelection_1 ==='Bar' && madeSelection_2==='Standard atmosphere') {
        result= val *(1000);
                
    }else if (madeSelection_1 ==='Bar' && madeSelection_2==='Torr') {
        result= val /(1.013);
                
    }
    //Pascal to ...
    else if (madeSelection_1 ==='Pascal' && madeSelection_2==='Bar') {
        result= val /(100000);
                
    }else if (madeSelection_1 ==='Pascal' && madeSelection_2==='pound per square inch') {
        result= val /(6895);
                
    }else if (madeSelection_1 ==='Pascal' && madeSelection_2==='Standard atmosphere') {
        result= val /(101325);
                
    }else if (madeSelection_1 ==='Pascal' && madeSelection_2==='Torr') {
        result= val /(133);
                
    }
    // pound per square inch to ...
    else if (madeSelection_1 ==='pound per square inch' && madeSelection_2==='Bar') {
        result= val /(14.504);
                
    }else if (madeSelection_1 ==='pound per square inch' && madeSelection_2==='Pascal') {
        result= val *(6895);
                
    }else if (madeSelection_1 ==='pound per square inch' && madeSelection_2==='Standard atmosphere') {
        result= val /( 14.696);
                
    }else if (madeSelection_1 ==='pound per square inch' && madeSelection_2==='Torr') {
        result= val *(51.715);
                
    }
    //Standard atmosphere to ...
    else if (madeSelection_1 ==='Standard atmosphere' && madeSelection_2==='Bar') {
        result= val *(1.013);
                
    }else if (madeSelection_1 ==='Standard atmosphere' && madeSelection_2==='Pascal') {
        result= val *(101325);
                
    }else if (madeSelection_1 ==='Standard atmosphere' && madeSelection_2==='pound per square inch') {
        result= val *(14.696);
                
    }else if (madeSelection_1 ==='Standard atmosphere' && madeSelection_2==='Torr') {
        result= val *(760);
                
    }
    //Torr to ...
    else if (madeSelection_1 ==='Torr' && madeSelection_2==='Bar') {
        result= val /(750);
                
    }else if (madeSelection_1 ==='Torr' && madeSelection_2==='Pascal') {
        result= val *(133);
                
    }else if (madeSelection_1 ==='Torr' && madeSelection_2==='pound per square inch') {
        result= val /(51.715);
                
    }else if (madeSelection_1 ==='Torr' && madeSelection_2==='Standard atmosphere') {
        result= val /(760);
                
    }    
                                        




    const setstate={result:result, formule:formulvalue}
    return setstate



    
}
export default PressureFunc;



