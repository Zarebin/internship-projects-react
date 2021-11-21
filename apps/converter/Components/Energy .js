import React  from "zarkit/react";
function Energyfunc(val,madeSelection_1,madeSelection_2) {
    var result,formulvalue;
    if (madeSelection_1 === madeSelection_2 ) {
          result=val;
    }else if (madeSelection_1 ==='Joule' && madeSelection_2==='Kilojoule') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val /(1000);
                
    }else if (madeSelection_1 ==='Joule' && madeSelection_2==='Gram calorie') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val /(4.184);
                
    }else if (madeSelection_1 ==='Joule' && madeSelection_2==='Kilocalorie') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val /(4184);
                
    }else if (madeSelection_1 ==='Joule' && madeSelection_2==='Watt hour') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val /(3600);
                
    }else if (madeSelection_1 ==='Joule' && madeSelection_2==='kilowatt hour') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val /( 3.6e+6);
                
    }else if (madeSelection_1 ==='Joule' && madeSelection_2==='Electronvolt') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val * (6.242e+18);
                
    }else if (madeSelection_1 ==='Joule' && madeSelection_2==='Foot-pound') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val /(1.356);
                
    } 
    // Kilojoule to ...
    else if (madeSelection_1 ==='Kilojoule' && madeSelection_2==='Joule') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val *(1000);
                
    }else if (madeSelection_1 ==='Kilojoule' && madeSelection_2==='Gram calorie') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val *(239);
                
    }else if (madeSelection_1 ==='Kilojoule' && madeSelection_2==='Kilocalorie') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val /(4.184);
                
    }else if (madeSelection_1 ==='Kilojoule' && madeSelection_2==='Watt hour') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val /(3.6);
                
    }else if (madeSelection_1 ==='Kilojoule' && madeSelection_2==='kilowatt hour') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val /(3600);
                
    }else if (madeSelection_1 ==='Kilojoule' && madeSelection_2==='Electronvolt') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val * (9.223e+18);
                
    }else if (madeSelection_1 ==='Kilojoule' && madeSelection_2==='Foot-pound') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val *(738);
                
    } 
    // Gram calorie to ...
    else if (madeSelection_1 ==='Gram calorie' && madeSelection_2==='Joule') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val *(4.184);
                
    }else if (madeSelection_1 ==='Gram calorie' && madeSelection_2==='Kilojoule') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val /(239);
                
    }else if (madeSelection_1 ==='Gram calorie' && madeSelection_2==='Kilocalorie') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val /(1000);
                
    }else if (madeSelection_1 ==='Gram calorie' && madeSelection_2==='Watt hour') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val /(860);
                
    }else if (madeSelection_1 ==='Gram calorie' && madeSelection_2==='kilowatt hour') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val /(860421);
                
    }else if (madeSelection_1 ==='Gram calorie' && madeSelection_2==='Electronvolt') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val * (9.223e+18);
                
    }else if (madeSelection_1 ==='Gram calorie' && madeSelection_2==='Foot-pound') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val *( 3.086);
                
    }   
    // Kilocalorie to ...
    else if (madeSelection_1 ==='Kilocalorie' && madeSelection_2==='Joule') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val * (4184);
                
    }else if (madeSelection_1 ==='Kilocalorie' && madeSelection_2==='Kilojoule') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val *(4.184);
                
    }else if (madeSelection_1 ==='Kilocalorie' && madeSelection_2==='Gram calorie') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val *(1000);
                
    }else if (madeSelection_1 ==='Kilocalorie' && madeSelection_2==='Watt hour') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val *(1.162);
                
    }else if (madeSelection_1 ==='Kilocalorie' && madeSelection_2==='kilowatt hour') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val /(860);
                
    }else if (madeSelection_1 ==='Kilocalorie' && madeSelection_2==='Electronvolt') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val * (9.223e+18);
                
    }else if (madeSelection_1 ==='Kilocalorie' && madeSelection_2==='Foot-pound') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val *(3086);
                
    } 
    // Watt hour to ...
    else if (madeSelection_1 ==='Watt hour' && madeSelection_2==='Joule') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val *(3600);
                
    }else if (madeSelection_1 ==='Watt hour' && madeSelection_2==='Kilojoule') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val *(3.6);
                
    }else if (madeSelection_1 ==='Watt hour' && madeSelection_2==='Gram calorie') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val *(860);
                
    }else if (madeSelection_1 ==='Watt hour' && madeSelection_2==='Kilocalorie') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val /(1.162);
                
    }else if (madeSelection_1 ==='Watt hour' && madeSelection_2==='kilowatt hour') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val /(1000);
                
    }else if (madeSelection_1 ==='Watt hour' && madeSelection_2==='Electronvolt') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val * (9.223e+18);
                
    }else if (madeSelection_1 ==='Watt hour' && madeSelection_2==='Foot-pound') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val *(2655);
                
    }     
    //kilowatt hour to ...
    else if (madeSelection_1 ==='kilowatt hour' && madeSelection_2==='Joule') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val *(3.6e+6);
                
    }else if (madeSelection_1 ==='kilowatt hour' && madeSelection_2==='Kilojoule') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val *(3600);
                
    }else if (madeSelection_1 ==='kilowatt hour' && madeSelection_2==='Gram calorie') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val *(860421);
                
    }else if (madeSelection_1 ==='kilowatt hour' && madeSelection_2==='Kilocalorie') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val *(860);
                
    }else if (madeSelection_1 ==='kilowatt hour' && madeSelection_2==='Watt hour') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val *(1000);
                
    }else if (madeSelection_1 ==='kilowatt hour' && madeSelection_2==='Electronvolt') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val * (9.223e+18);
                
    }else if (madeSelection_1 ==='kilowatt hour' && madeSelection_2==='Foot-pound') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val *( 2.655e+6);
                
    }  
    // Electronvolt to ...
    else if (madeSelection_1 ==='Electronvolt' && madeSelection_2==='Joule') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val /(6.242e+18);
                
    }else if (madeSelection_1 ==='Electronvolt' && madeSelection_2==='Kilojoule') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val /(9.223e+18);
                
    }else if (madeSelection_1 ==='Electronvolt' && madeSelection_2==='Gram calorie') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val /(9.223e+18);
                
    }else if (madeSelection_1 ==='Electronvolt' && madeSelection_2==='Kilocalorie') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val /(9.223e+18);
                
    }else if (madeSelection_1 ==='Electronvolt' && madeSelection_2==='Watt hour') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val /( 9.223e+18);
                
    }else if (madeSelection_1 ==='Electronvolt' && madeSelection_2==='kilowatt hour') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val / (9.223e+18
            );
                
    }else if (madeSelection_1 ==='Electronvolt' && madeSelection_2==='Foot-pound') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val /(8.462e+18);
                
    } 
    // Foot-pound to ...
    else if (madeSelection_1 ==='Foot-pound' && madeSelection_2==='Joule') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val *(1.356);
                
    }else if (madeSelection_1 ==='Foot-pound' && madeSelection_2==='Kilojoule') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val /(738);
                
    }else if (madeSelection_1 ==='Foot-pound' && madeSelection_2==='Gram calorie') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val /(3.086);
                
    }else if (madeSelection_1 ==='Foot-pound' && madeSelection_2==='Kilocalorie') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val /(3086);
                
    }else if (madeSelection_1 ==='Foot-pound' && madeSelection_2==='Watt hour') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val /(2655);
                
    }else if (madeSelection_1 ==='Foot-pound' && madeSelection_2==='kilowatt hour') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val * (6.242e+18);
                
    }else if (madeSelection_1 ==='Foot-pound' && madeSelection_2==='Electronvolt') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val /(8.462e+18);
                
    }                 
                                        




    const setstate={result:result, formule:formulvalue}
    return setstate



    
}
export default Energyfunc;



