 
import React  from "zarkit/react";
function TimeFunc(val,madeSelection_1,madeSelection_2) {
    var result,formulvalue;
    if (madeSelection_1 === madeSelection_2 ) {
          result=val;
    }else if (madeSelection_1 ==='Nanosecond' && madeSelection_2==='Microsecond') {
        result= val / (1000);
                
    }else if (madeSelection_1 ==='Nanosecond' && madeSelection_2==='Millisecond') {
        result= val / (1e+6);
                
    }else if (madeSelection_1 ==='Nanosecond' && madeSelection_2==='Second') {
        result= val / (1e+9);
                
    }else if (madeSelection_1 ==='Nanosecond' && madeSelection_2==='Minute') {
        result= val / (6e+10);
                
    }else if (madeSelection_1 ==='Nanosecond' && madeSelection_2==='Hour') {
        result= val / (3.6e+12);
                
    }else if (madeSelection_1 ==='Nanosecond' && madeSelection_2==='Day') {
        result= val / ( 8.64e+13);
                
    }else if (madeSelection_1 ==='Nanosecond' && madeSelection_2==='Week') {
        result= val / (6.048e+14);
                
    }else if (madeSelection_1 ==='Nanosecond' && madeSelection_2==='Month') {
        result= val / ( 2.628e+15);
                
    }else if (madeSelection_1 ==='Nanosecond' && madeSelection_2==='Week') {
        result= val / (6.048e+14);
                
    }else if (madeSelection_1 ==='Nanosecond' && madeSelection_2==='Decade') {
        result= val / (3.154e+17);
                
    }else if (madeSelection_1 ==='Nanosecond' && madeSelection_2==='Century') {
        result= val / (3.154e+18);
                
    }
    //Microsecond to ...
    else if (madeSelection_1 ==='Microsecond' && madeSelection_2==='Nanosecond') {
        result= val * (1000);
                
    }else if (madeSelection_1 ==='Microsecond' && madeSelection_2==='Millisecond') {
        result= val / (1000);
                
    }else if (madeSelection_1 ==='Microsecond' && madeSelection_2==='Second') {
        result= val / (1e+6);
                
    }else if (madeSelection_1 ==='Microsecond' && madeSelection_2==='Minute') {
        result= val / (6e+7);
                
    }else if (madeSelection_1 ==='Microsecond' && madeSelection_2==='Hour') {
        result= val / (3.6e+9);
                
    }else if (madeSelection_1 ==='Microsecond' && madeSelection_2==='Day') {
        result= val / (8.64e+10);
                
    }else if (madeSelection_1 ==='Microsecond' && madeSelection_2==='Week') {
        result= val / (6.048e+11 );
                
    }else if (madeSelection_1 ==='Microsecond' && madeSelection_2==='Month') {
        result= val / (2.628e+12);
                
    }else if (madeSelection_1 ==='Microsecond' && madeSelection_2==='Week') {
        result= val / (6.048e+11);
                
    }else if (madeSelection_1 ==='Microsecond' && madeSelection_2==='Decade') {
        result= val / (3.154e+14);
                
    }else if (madeSelection_1 ==='Microsecond' && madeSelection_2==='Century') {
        result= val / (3.154e+15);
                
    }
    //Millisecond to ...
    else if (madeSelection_1 ==='Millisecond' && madeSelection_2==='Nanosecond') {
        result= val * (1e+6);
                
    }else if (madeSelection_1 ==='Millisecond' && madeSelection_2==='Microsecond') {
        result= val * (1000);
                
    }else if (madeSelection_1 ==='Millisecond' && madeSelection_2==='Second') {
        result= val / (1000);
                
    }else if (madeSelection_1 ==='Millisecond' && madeSelection_2==='Minute') {
        result= val / (60000);
                
    }else if (madeSelection_1 ==='Millisecond' && madeSelection_2==='Hour') {
        result= val / (3.6e+6);
                
    }else if (madeSelection_1 ==='Millisecond' && madeSelection_2==='Day') {
        result= val / (8.64e+7);
                
    }else if (madeSelection_1 ==='Millisecond' && madeSelection_2==='Week') {
        result= val / ( 6.048e+8);
                
    }else if (madeSelection_1 ==='Millisecond' && madeSelection_2==='Month') {
        result= val / (2.628e+9);
                
    }else if (madeSelection_1 ==='Millisecond' && madeSelection_2==='Week') {
        result= val / (6.048e+11);
                
    }else if (madeSelection_1 ==='Millisecond' && madeSelection_2==='Decade') {
        result= val / ( 3.154e+11);
                
    }else if (madeSelection_1 ==='Millisecond' && madeSelection_2==='Century') {
        result= val / (3.154e+12);
                
    }
    //Second to ...
    else if (madeSelection_1 ==='Second' && madeSelection_2==='Nanosecond') {
        result= val * (1e+9);
                
    }else if (madeSelection_1 ==='Second' && madeSelection_2==='Microsecond') {
        result= val * (1e+6);
                
    }else if (madeSelection_1 ==='Second' && madeSelection_2==='Millisecond') {
        result= val * (1000);
                
    }else if (madeSelection_1 ==='Second' && madeSelection_2==='Minute') {
        result= val / (60);
                
    }else if (madeSelection_1 ==='Second' && madeSelection_2==='Hour') {
        result= val / (3600);
                
    }else if (madeSelection_1 ==='Second' && madeSelection_2==='Day') {
        result= val / (86400);
                
    }else if (madeSelection_1 ==='Second' && madeSelection_2==='Week') {
        result= val / (604800);
                
    }else if (madeSelection_1 ==='Second' && madeSelection_2==='Month') {
        result= val / ( 2.628e+6);
                
    }else if (madeSelection_1 ==='Second' && madeSelection_2==='Week') {
        result= val / (6.048e+11);
                
    }else if (madeSelection_1 ==='Second' && madeSelection_2==='Decade') {
        result= val / (3.154e+8);
                
    }else if (madeSelection_1 ==='Second' && madeSelection_2==='Century') {
        result= val / (3.154e+9);
                
    }
    //Minute to ...
    else if (madeSelection_1 ==='Minute' && madeSelection_2==='NanoMinute') {
        result= val * (6e+10);
                
    }else if (madeSelection_1 ==='Minute' && madeSelection_2==='MicroMinute') {
        result= val * (6e+7);
                
    }else if (madeSelection_1 ==='Minute' && madeSelection_2==='MilliMinute') {
        result= val * (60000);
                
    }else if (madeSelection_1 ==='Minute' && madeSelection_2==='Second') {
        result= val * (60);
                
    }else if (madeSelection_1 ==='Minute' && madeSelection_2==='Hour') {
        result= val / (60);
                
    }else if (madeSelection_1 ==='Minute' && madeSelection_2==='Day') {
        result= val / (1440);
                
    }else if (madeSelection_1 ==='Minute' && madeSelection_2==='Week') {
        result= val / (10080);
                
    }else if (madeSelection_1 ==='Minute' && madeSelection_2==='Month') {
        result= val / (43800);
                
    }else if (madeSelection_1 ==='Minute' && madeSelection_2==='Week') {
        result= val / (6.048e+11);
                
    }else if (madeSelection_1 ==='Minute' && madeSelection_2==='Decade') {
        result= val / (5.256e+6);
                
    }else if (madeSelection_1 ==='Minute' && madeSelection_2==='Century') {
        result= val / (5.256e+7);
                
    }
    //Hour to ...
    else if (madeSelection_1 ==='Hour' && madeSelection_2==='NanoHour') {
        result= val * (3.6e+12);
                
    }else if (madeSelection_1 ==='Hour' && madeSelection_2==='MicroHour') {
        result= val * (3.6e+9);
                
    }else if (madeSelection_1 ==='Hour' && madeSelection_2==='MilliHour') {
        result= val * (3.6e+6);
                
    }else if (madeSelection_1 ==='Hour' && madeSelection_2==='Second') {
        result= val * (3600);
                
    }else if (madeSelection_1 ==='Hour' && madeSelection_2==='Minute') {
        result= val * (60);
                
    }else if (madeSelection_1 ==='Hour' && madeSelection_2==='Day') {
        result= val / (24);
                
    }else if (madeSelection_1 ==='Hour' && madeSelection_2==='Week') {
        result= val / (168);
                
    }else if (madeSelection_1 ==='Hour' && madeSelection_2==='Month') {
        result= val / (730);
                
    }else if (madeSelection_1 ==='Hour' && madeSelection_2==='Week') {
        result= val / (6.048e+11);
                
    }else if (madeSelection_1 ==='Hour' && madeSelection_2==='Decade') {
        result= val / (87600);
                
    }else if (madeSelection_1 ==='Hour' && madeSelection_2==='Century') {
        result= val / (876000);
                
    }
    //Day to ...
    else if (madeSelection_1 ==='Day' && madeSelection_2==='NanoDay') {
        result= val * (8.64e+13);
                
    }else if (madeSelection_1 ==='Day' && madeSelection_2==='MicroDay') {
        result= val * (8.64e+10);
                
    }else if (madeSelection_1 ==='Day' && madeSelection_2==='MilliDay') {
        result= val * (8.64e+7);
                
    }else if (madeSelection_1 ==='Day' && madeSelection_2==='Second') {
        result= val * (86400);
                
    }else if (madeSelection_1 ==='Day' && madeSelection_2==='Minute') {
        result= val * (1440);
                
    }else if (madeSelection_1 ==='Day' && madeSelection_2==='Hour') {
        result= val * (24);
                
    }else if (madeSelection_1 ==='Day' && madeSelection_2==='Week') {
        result= val / (7);
                
    }else if (madeSelection_1 ==='Day' && madeSelection_2==='Month') {
        result= val / (30.417);
                
    }else if (madeSelection_1 ==='Day' && madeSelection_2==='Week') {
        result= val / (6.048e+11);
                
    }else if (madeSelection_1 ==='Day' && madeSelection_2==='Decade') {
        result= val / (3650);
                
    }else if (madeSelection_1 ==='Day' && madeSelection_2==='Century') {
        result= val / (36500);
                
    }
    //Week to ...
    else if (madeSelection_1 ==='Week' && madeSelection_2==='NanoWeek') {
        result= val * (6.048e+14);
                
    }else if (madeSelection_1 ==='Week' && madeSelection_2==='MicroWeek') {
        result= val * ( 6.048e+11);
                
    }else if (madeSelection_1 ==='Week' && madeSelection_2==='MilliWeek') {
        result= val * ( 6.048e+8);
                
    }else if (madeSelection_1 ==='Week' && madeSelection_2==='Second') {
        result= val * (604800);
                
    }else if (madeSelection_1 ==='Week' && madeSelection_2==='Minute') {
        result= val * (10080);
                
    }else if (madeSelection_1 ==='Week' && madeSelection_2==='Hour') {
        result= val * (168);
                
    }else if (madeSelection_1 ==='Week' && madeSelection_2==='Day') {
        result= val * (7);
                
    }else if (madeSelection_1 ==='Week' && madeSelection_2==='Month') {
        result= val / (4.345);
                
    }else if (madeSelection_1 ==='Week' && madeSelection_2==='Decade') {
        result= val / (521);
                
    }else if (madeSelection_1 ==='Week' && madeSelection_2==='Century') {
        result= val / (5214);
                
    }
    //Month to ...
    else if (madeSelection_1 ==='Month' && madeSelection_2==='NanoMonth') {
        result= val * (2.628e+15);
                
    }else if (madeSelection_1 ==='Month' && madeSelection_2==='MicroMonth') {
        result= val * (2.628e+12);
                
    }else if (madeSelection_1 ==='Month' && madeSelection_2==='MilliMonth') {
        result= val * ( 2.628e+9);
                
    }else if (madeSelection_1 ==='Month' && madeSelection_2==='Second') {
        result= val * ( 2.628e+6);
                
    }else if (madeSelection_1 ==='Month' && madeSelection_2==='Minute') {
        result= val * (43800);
                
    }else if (madeSelection_1 ==='Month' && madeSelection_2==='Hour') {
        result= val * (730);
                
    }else if (madeSelection_1 ==='Month' && madeSelection_2==='Day') {
        result= val * (30.417);
                
    }else if (madeSelection_1 ==='Month' && madeSelection_2==='Week') {
        result= val * (4.345);
                
    }else if (madeSelection_1 ==='Month' && madeSelection_2==='Decade') {
        result= val / (120);
                
    }else if (madeSelection_1 ==='Month' && madeSelection_2==='Century') {
        result= val / (1200);
                
    }
    //Decade to ...
    else if (madeSelection_1 ==='Decade' && madeSelection_2==='NanoDecade') {
        result= val * (3.154e+17);
                
    }else if (madeSelection_1 ==='Decade' && madeSelection_2==='MicroDecade') {
        result= val * (3.154e+14);
                
    }else if (madeSelection_1 ==='Decade' && madeSelection_2==='MilliDecade') {
        result= val * (3.154e+11);
                
    }else if (madeSelection_1 ==='Decade' && madeSelection_2==='Second') {
        result= val * (3.154e+8);
                
    }else if (madeSelection_1 ==='Decade' && madeSelection_2==='Minute') {
        result= val * ( 5.256e+6);
                
    }else if (madeSelection_1 ==='Decade' && madeSelection_2==='Hour') {
        result= val * (87600);
                
    }else if (madeSelection_1 ==='Decade' && madeSelection_2==='Day') {
        result= val * (3650);
                
    }else if (madeSelection_1 ==='Decade' && madeSelection_2==='Week') {
        result= val * (521);
                
    }else if (madeSelection_1 ==='Decade' && madeSelection_2==='Month') {
        result= val * (120);
                
    }else if (madeSelection_1 ==='Decade' && madeSelection_2==='Century') {
        result= val / (10);
                
    }
    //Century to ...
    else if (madeSelection_1 ==='Century' && madeSelection_2==='NanoCentury') {
        result= val * (3.154e+18);
                
    }else if (madeSelection_1 ==='Century' && madeSelection_2==='MicroCentury') {
        result= val * (3.154e+15);
                
    }else if (madeSelection_1 ==='Century' && madeSelection_2==='MilliCentury') {
        result= val * (3.154e+12);
                
    }else if (madeSelection_1 ==='Century' && madeSelection_2==='Second') {
        result= val * (3.154e+9);
                
    }else if (madeSelection_1 ==='Century' && madeSelection_2==='Minute') {
        result= val * (5.256e+7);
                
    }else if (madeSelection_1 ==='Century' && madeSelection_2==='Hour') {
        result= val * (876000);
                
    }else if (madeSelection_1 ==='Century' && madeSelection_2==='Day') {
        result= val * (36500);
                
    }else if (madeSelection_1 ==='Century' && madeSelection_2==='Week') {
        result= val * (5214);
                
    }else if (madeSelection_1 ==='Century' && madeSelection_2==='Month') {
        result= val * (1200);
                
    }else if (madeSelection_1 ==='Century' && madeSelection_2==='Decade') {
        result= val * (10);
                
    }






    

                                        




    const setstate={result:result, formule:formulvalue}
    return setstate



    
}
export default TimeFunc;



