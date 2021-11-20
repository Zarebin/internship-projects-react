 
import React  from "react";
function MassFunc(val,madeSelection_1,madeSelection_2) {
    var result,formulvalue;
    if (madeSelection_1 === madeSelection_2 ) {
          result=val;
    }else if (madeSelection_1 ==='tonne' && madeSelection_2==='Kilogram') {
        result= val *(1000);
                
    }else if (madeSelection_1 ==='tonne' && madeSelection_2==='Gram') {
        result= val *(1e+6);
                
    }else if (madeSelection_1 ==='tonne' && madeSelection_2==='Milligram') {
        result= val *(1e+9);
                
    }else if (madeSelection_1 ==='tonne' && madeSelection_2==='Microgram') {
        result= val *(1e+12);
                
    }else if (madeSelection_1 ==='tonne' && madeSelection_2==='Pound') {
        result= val *(2205);
                
    }else if (madeSelection_1 ==='tonne' && madeSelection_2==='Ounce') {
        result= val *(35274);
                
    }
    //Kilogram to ..
    else if (madeSelection_1 ==='Kilogram' && madeSelection_2==='tonne') {
        result= val /(1000);
                
    }else if (madeSelection_1 ==='Kilogram' && madeSelection_2==='Gram') {
        result= val *(1000);
                
    }else if (madeSelection_1 ==='Kilogram' && madeSelection_2==='Milligram') {
        result= val *(1e+6);
                
    }else if (madeSelection_1 ==='Kilogram' && madeSelection_2==='Microgram') {
        result= val *(1e+9);
                
    }else if (madeSelection_1 ==='Kilogram' && madeSelection_2==='Pound') {
        result= val *(2.205);
                
    }else if (madeSelection_1 ==='Kilogram' && madeSelection_2==='Ounce') {
        result= val *(35.274);
                
    } 
    // Gram to ...
    else if (madeSelection_1 ==='Gram' && madeSelection_2==='tonne') {
        result= val /(1e+6);
                
    }else if (madeSelection_1 ==='Gram' && madeSelection_2==='Kilogram') {
        result= val /(1000);
                
    }else if (madeSelection_1 ==='Gram' && madeSelection_2==='Milligram') {
        result= val *(1000);
                
    }else if (madeSelection_1 ==='Gram' && madeSelection_2==='Microgram') {
        result= val *(1e+6);
                
    }else if (madeSelection_1 ==='Gram' && madeSelection_2==='Pound') {
        result= val /(454);
                
    }else if (madeSelection_1 ==='Gram' && madeSelection_2==='Ounce') {
        result= val /( 28.35);
                
    }
    //Milligram to ...
    else if (madeSelection_1 ==='Milligram' && madeSelection_2==='tonne') {
        result= val /(1e+9);
                
    }else if (madeSelection_1 ==='Milligram' && madeSelection_2==='Kilogram') {
        result= val /(1e+6);
                
    }else if (madeSelection_1 ==='Milligram' && madeSelection_2==='Gram') {
        result= val *(1000);
                
    }else if (madeSelection_1 ==='Milligram' && madeSelection_2==='Microgram') {
        result= val *(1000);
                
    }else if (madeSelection_1 ==='Milligram' && madeSelection_2==='Pound') {
        result= val /(453592);
                
    }else if (madeSelection_1 ==='Milligram' && madeSelection_2==='Ounce') {
        result= val /(28350);
                
    }
    //Microgram to ...
    else if (madeSelection_1 ==='Microgram' && madeSelection_2==='tonne') {
        result= val /(1e+12);
                
    }else if (madeSelection_1 ==='Microgram' && madeSelection_2==='Kilogram') {
        result= val /(1e+9);
                
    }else if (madeSelection_1 ==='Microgram' && madeSelection_2==='Gram') {
        result= val /(1e+6);
                
    }else if (madeSelection_1 ==='Microgram' && madeSelection_2==='Milligram') {
        result= val /(1000);
                
    }else if (madeSelection_1 ==='Microgram' && madeSelection_2==='Pound') {
        result= val /(4.536e+8);
                
    }else if (madeSelection_1 ==='Microgram' && madeSelection_2==='Ounce') {
        result= val /(2.835e+7);
                
    }  
    //Pound to ...
    else if (madeSelection_1 ==='Pound' && madeSelection_2==='tonne') {
        result= val /(2205);
                
    }else if (madeSelection_1 ==='Pound' && madeSelection_2==='Kilogram') {
        result= val /(2.205);
                
    }else if (madeSelection_1 ==='Pound' && madeSelection_2==='Gram') {
        result= val *(454);
                
    }else if (madeSelection_1 ==='Pound' && madeSelection_2==='Milligram') {
        result= val *(453592);
                
    }else if (madeSelection_1 ==='Pound' && madeSelection_2==='Microgram') {
        result= val * (4.536e+8);
                
    }else if (madeSelection_1 ==='Pound' && madeSelection_2==='Ounce') {
        result= val *(16);
                
    }
    //Ounce to ...
    else if (madeSelection_1 ==='Ounce' && madeSelection_2==='tonne') {
        result= val /(35274);
                
    }else if (madeSelection_1 ==='Ounce' && madeSelection_2==='Kilogram') {
        result= val /(35.274);
                
    }else if (madeSelection_1 ==='Ounce' && madeSelection_2==='Gram') {
        result= val *( 28.35);
                
    }else if (madeSelection_1 ==='Ounce' && madeSelection_2==='Milligram') {
        result= val *(28350);
                
    }else if (madeSelection_1 ==='Ounce' && madeSelection_2==='Microgram') {
        result= val * (2.835e+7);
                
    }else if (madeSelection_1 ==='Ounce' && madeSelection_2==='Pound') {
        result= val *(16);
                
    }             
                                        




    const setstate={result:result, formule:formulvalue}
    return setstate



    
}
export default MassFunc;



