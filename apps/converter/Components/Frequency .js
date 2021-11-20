import React  from "react";
function FrequencyFunc(val,madeSelection_1,madeSelection_2) {
    var result,formulvalue;
    if (madeSelection_1 === madeSelection_2 ) {
          result=val;
    }else if (madeSelection_1 ==='Hertz' && madeSelection_2==='Kilohertz') {
        result= val /(1000);
                
    }else if (madeSelection_1 ==='Hertz' && madeSelection_2==='Megahertz') {
        result= val /(1e+6);
                
    }else if (madeSelection_1 ==='Hertz' && madeSelection_2==='Gigahertz') {
        result= val /(1e+9);
                
    }  
    //Kilohertz to ...
    else if (madeSelection_1 ==='Kilohertz' && madeSelection_2==='Hertz') {
        result= val *(1000);
                
    }else if (madeSelection_1 ==='Kilohertz' && madeSelection_2==='Megahertz') {
        result= val /(1000);
                
    }else if (madeSelection_1 ==='Kilohertz' && madeSelection_2==='Gigahertz') {
        result= val /(1e+6);
                
    } 
    // Megahertz to ...
    else if (madeSelection_1 ==='Megahertz' && madeSelection_2==='Hertz') {
        result= val *(1e+6);
                
    }else if (madeSelection_1 ==='Megahertz' && madeSelection_2==='Kilohertz') {
        result= val *(1000);
                
    }else if (madeSelection_1 ==='Megahertz' && madeSelection_2==='Gigahertz') {
        result= val /(1000);
                
    }
    //Gigahertz to ...
    else if (madeSelection_1 ==='Gigahertz' && madeSelection_2==='Hertz') {
        result= val *(1e+9);
                
    }else if (madeSelection_1 ==='Gigahertz' && madeSelection_2==='Kilohertz') {
        result= val *(1e+6);
                
    }else if (madeSelection_1 ==='Gigahertz' && madeSelection_2==='Megahertz') {
        result= val *(1000);
                
    }         
                                        




    const setstate={result:result, formule:formulvalue}
    return setstate



    
}
export default FrequencyFunc;



