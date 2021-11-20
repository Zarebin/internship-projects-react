import React  from "react";
function DataFunc(val,madeSelection_1,madeSelection_2) {
    var result,formulvalue;
    if (madeSelection_1 === madeSelection_2 ) {
          result=val;    
    }else if (madeSelection_1 ==='Bit per second' && madeSelection_2==='َKilobit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1000);

    }else if (madeSelection_1 ==='Bit per second' && madeSelection_2==='َKilobyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (8000);

    }else if (madeSelection_1 ==='Bit per second' && madeSelection_2==='َKibibit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val / 1024;

    }else if (madeSelection_1 ==='Bit per second' && madeSelection_2==='Megabit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1e+6);

    }else if (madeSelection_1 ==='Bit per second' && madeSelection_2==='Megabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (8e+6);

    }else if (madeSelection_1 ==='Bit per second' && madeSelection_2==='Mebibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1.049e+6);
    }else if (madeSelection_1 ==='Bit per second' && madeSelection_2==='Gigabit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1e+9);
    }else if (madeSelection_1 ==='Bit per second' && madeSelection_2==='Gigabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (8e+9);
    }else if (madeSelection_1 ==='Bit per second' && madeSelection_2==='Gibibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1.074e+9);

    }else if (madeSelection_1 ==='Bit per second' && madeSelection_2==='Terabit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1e+12);

    }else if (madeSelection_1 ==='Bit per second' && madeSelection_2==='Terabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (8e+12);
    }else if (madeSelection_1 ==='Bit per second' && madeSelection_2==='Tebibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1.1e+12);

    }
    // Kilobit per second to ...
    else if (madeSelection_1 ==='Kilobit per second' && madeSelection_2==='َBit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1000);

    }
    else if (madeSelection_1 ==='Kilobit per second' && madeSelection_2==='َKilobyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (8);

    }else if (madeSelection_1 ==='Kilobit per second' && madeSelection_2==='َKibibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1.024);

    }else if (madeSelection_1 ==='Kilobit per second' && madeSelection_2==='Megabit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1000);

    }else if (madeSelection_1 ==='Kilobit per second' && madeSelection_2==='Megabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (8000);

    }else if (madeSelection_1 ==='Kilobit per second' && madeSelection_2==='Mebibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1049);

    }else if (madeSelection_1 ==='Kilobit per second' && madeSelection_2==='Gigabit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1e+6);

    }else if (madeSelection_1 ==='Kilobit per second' && madeSelection_2==='Gigabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (8e+6);

    }else if (madeSelection_1 ==='Kilobit per second' && madeSelection_2==='Gibibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1.074e+6);

    }else if (madeSelection_1 ==='Kilobit per second' && madeSelection_2==='Terabit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1e+9);

    }else if (madeSelection_1 ==='Kilobit per second' && madeSelection_2==='Terabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (8e+9);

    }else if (madeSelection_1 ==='Kilobit per second' && madeSelection_2==='Tebibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1.1e+9);

    }
    // Kilobyte per second to ...
    else if (madeSelection_1 ==='Kilobyte per second' && madeSelection_2==='َBit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (8000);

    }else if (madeSelection_1 ==='Kilobyte per second' && madeSelection_2==='َKilobit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (8);

    }
    else if (madeSelection_1 ==='Kilobyte per second' && madeSelection_2==='َKibibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val * (7.812);

    }else if (madeSelection_1 ==='Kilobyte per second' && madeSelection_2==='Megabit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (125);

    }else if (madeSelection_1 ==='Kilobyte per second' && madeSelection_2==='Megabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1000);

    }else if (madeSelection_1 ==='Kilobyte per second' && madeSelection_2==='Mebibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (131);

    }else if (madeSelection_1 ==='Kilobyte per second' && madeSelection_2==='Gigabit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (125000);

    }else if (madeSelection_1 ==='Kilobyte per second' && madeSelection_2==='Gigabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1e+6);
        

    }else if (madeSelection_1 ==='Kilobyte per second' && madeSelection_2==='Gibibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (134218);

    }else if (madeSelection_1 ==='Kilobyte per second' && madeSelection_2==='Terabit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1.25e+8);

    }else if (madeSelection_1 ==='Kilobyte per second' && madeSelection_2==='Terabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1e+9);
            convertedOutput.value = result;

    }else if (madeSelection_1 ==='Kilobyte per second' && madeSelection_2==='Tebibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1.374e+8);

    }
    // Kibibit per second to ...
    else if (madeSelection_1 ==='Kibibit per second' && madeSelection_2==='Bit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1024);

    }else if (madeSelection_1 ==='Kibibit per second' && madeSelection_2==='Kilobit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1.024);

    }else if (madeSelection_1 ==='Kibibit per second' && madeSelection_2==='Kilobyte per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val / (7.812);

    }else if (madeSelection_1 ==='Kibibit per second' && madeSelection_2==='Megabit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val / (977);

    }else if (madeSelection_1 ==='Kibibit per second' && madeSelection_2==='Megabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (7813);

    }else if (madeSelection_1 ==='Kibibit per second' && madeSelection_2==='Mebibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1024);

    }else if (madeSelection_1 ==='Kibibit per second' && madeSelection_2==='Gigabit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (976562);

    }else if (madeSelection_1 ==='Kibibit per second' && madeSelection_2==='Gigabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (7.812e+6);

    }else if (madeSelection_1 ==='Kibibit per second' && madeSelection_2==='Gibibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1.049e+6);

    }else if (madeSelection_1 ==='Kibibit per second' && madeSelection_2==='Terabit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (9.766e+8);

    }else if (madeSelection_1 ==='Kibibit per second' && madeSelection_2==='Terabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (7.812e+9);

    }else if (madeSelection_1 ==='Kibibit per second' && madeSelection_2==='Tebibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1.074e+9);

    }
    // Megabit per second to ...
    else if (madeSelection_1 ==='Megabit per second' && madeSelection_2==='Bit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1e+6);

    }else if (madeSelection_1 ==='Megabit per second' && madeSelection_2==='Kilobit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1000);

    }else if (madeSelection_1 ==='Megabit per second' && madeSelection_2==='Kilobyte per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (125);

    }else if (madeSelection_1 ==='Megabit per second' && madeSelection_2==='Kibibit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val / (7.812);

    }else if (madeSelection_1 ==='Megabit per second' && madeSelection_2==='Megabyte per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val / (1000);

    }else if (madeSelection_1 ==='Megabit per second' && madeSelection_2==='Mebibit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val / (131);

    }else if (madeSelection_1 ==='Megabit per second' && madeSelection_2==='Gigabit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (125000);

    }else if (madeSelection_1 ==='Megabit per second' && madeSelection_2==='Gigabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1e+6);

    }else if (madeSelection_1 ==='Megabit per second' && madeSelection_2==='Gibibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (134218);

    }else if (madeSelection_1 ==='Megabit per second' && madeSelection_2==='Terabit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1.25e+8);

    }else if (madeSelection_1 ==='Megabit per second' && madeSelection_2==='Terabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1e+9);

    }else if (madeSelection_1 ==='Megabit per second' && madeSelection_2==='Tebibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1.374e+8);

    }
    //Megabyte per second to ...
    else if (madeSelection_1 ==='Megabyte per second' && madeSelection_2==='Bit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (8e+6);

    }else if (madeSelection_1 ==='Megabyte per second' && madeSelection_2==='Kilobit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (8000);

    }else if (madeSelection_1 ==='Megabyte per second' && madeSelection_2==='Kilobyte per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1000);

    }else if (madeSelection_1 ==='Megabyte per second' && madeSelection_2==='Kibibit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * ( 7813);

    }else if (madeSelection_1 ==='Megabyte per second' && madeSelection_2==='Megabit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (8);

    }else if (madeSelection_1 ==='Megabyte per second' && madeSelection_2==='Mebibit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (7.629);

    }else if (madeSelection_1 ==='Megabyte per second' && madeSelection_2==='Gigabit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (125);

    }else if (madeSelection_1 ==='Megabyte per second' && madeSelection_2==='Gigabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1000);

    }else if (madeSelection_1 ==='Megabyte per second' && madeSelection_2==='Gibibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (134);

    }else if (madeSelection_1 ==='Megabyte per second' && madeSelection_2==='Terabit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (125000);

    }else if (madeSelection_1 ==='Megabyte per second' && madeSelection_2==='Terabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1e+6);

    }else if (madeSelection_1 ==='Megabyte per second' && madeSelection_2==='Tebibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (137439);

    }
    //Mebibit per second to ...
    else if (madeSelection_1 ==='Mebibit per second' && madeSelection_2==='Bit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1.049e+6);

    }else if (madeSelection_1 ==='Mebibit per second' && madeSelection_2==='Kilobit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1049);

    }else if (madeSelection_1 ==='Mebibit per second' && madeSelection_2==='Kilobyte per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (131);

    }else if (madeSelection_1 ==='Mebibit per second' && madeSelection_2==='Kibibit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * ( 1024);

    }else if (madeSelection_1 ==='Mebibit per second' && madeSelection_2==='Megabit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1.049);

    }else if (madeSelection_1 ==='Mebibit per second' && madeSelection_2==='Megabyte per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val / (7.629);

    }else if (madeSelection_1 ==='Mebibit per second' && madeSelection_2==='Gigabit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (954);

    }else if (madeSelection_1 ==='Mebibit per second' && madeSelection_2==='Gigabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (7629);

    }else if (madeSelection_1 ==='Mebibit per second' && madeSelection_2==='Gibibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1024);

    }else if (madeSelection_1 ==='Mebibit per second' && madeSelection_2==='Terabit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (953674);

    }else if (madeSelection_1 ==='Mebibit per second' && madeSelection_2==='Terabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (7.629e+6);

    }else if (madeSelection_1 ==='Mebibit per second' && madeSelection_2==='Tebibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1.049e+6);

    }
    // Gigabit per second to ...
    else if (madeSelection_1 ==='Gigabit per second' && madeSelection_2==='Bit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1e+9);

    }else if (madeSelection_1 ==='Gigabit per second' && madeSelection_2==='Kilobit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1e+6);

    }else if (madeSelection_1 ==='Gigabit per second' && madeSelection_2==='Kilobyte per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (125000);

    }else if (madeSelection_1 ==='Gigabit per second' && madeSelection_2==='Kibibit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (976563);

    }else if (madeSelection_1 ==='Gigabit per second' && madeSelection_2==='Megabit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1000);

    }else if (madeSelection_1 ==='Gigabit per second' && madeSelection_2==='Megabyte per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (125);

    }else if (madeSelection_1 ==='Gigabit per second' && madeSelection_2==='Mebibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val * (954);

    }else if (madeSelection_1 ==='Gigabit per second' && madeSelection_2==='Gigabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (7629);

    }else if (madeSelection_1 ==='Gigabit per second' && madeSelection_2==='Gibibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1024);

    }else if (madeSelection_1 ==='Gigabit per second' && madeSelection_2==='Terabit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (953674);

    }else if (madeSelection_1 ==='Gigabit per second' && madeSelection_2==='Terabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (7.629e+6);

    }else if (madeSelection_1 ==='Gigabit per second' && madeSelection_2==='Tebibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1.049e+6);

    }
    //Gigabyte per second to ...
    else if (madeSelection_1 ==='Gigabyte per second' && madeSelection_2==='Bit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * ( 8e+9);

    }else if (madeSelection_1 ==='Gigabyte per second' && madeSelection_2==='Kilobit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (8e+6);

    }else if (madeSelection_1 ==='Gigabyte per second' && madeSelection_2==='Kilobyte per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1e+6);

    }else if (madeSelection_1 ==='Gigabyte per second' && madeSelection_2==='Kibibit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * ( 7.812e+6);

    }else if (madeSelection_1 ==='Gigabyte per second' && madeSelection_2==='Megabit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (8000);

    }else if (madeSelection_1 ==='Gigabyte per second' && madeSelection_2==='Megabyte per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1000);

    }else if (madeSelection_1 ==='Gigabyte per second' && madeSelection_2==='Mebibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val * (7629);

    }else if (madeSelection_1 ==='Gigabyte per second' && madeSelection_2==='Gigabit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val * (8);

    }else if (madeSelection_1 ==='Gigabyte per second' && madeSelection_2==='Gibibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val * ( 7.451);

    }else if (madeSelection_1 ==='Gigabyte per second' && madeSelection_2==='Terabit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (125);

    }else if (madeSelection_1 ==='Gigabyte per second' && madeSelection_2==='Terabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1000);

    }else if (madeSelection_1 ==='Gigabyte per second' && madeSelection_2==='Tebibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (137);

    }
    //Gibibit per second to ..
    else if (madeSelection_1 ==='Gibibit per second' && madeSelection_2==='Bit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1.074e+9);

    }else if (madeSelection_1 ==='Gibibit per second' && madeSelection_2==='Kilobit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1.074e+6);

    }else if (madeSelection_1 ==='Gibibit per second' && madeSelection_2==='Kilobyte per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (134218);

    }else if (madeSelection_1 ==='Gibibit per second' && madeSelection_2==='Kibibit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1.049e+6);

    }else if (madeSelection_1 ==='Gibibit per second' && madeSelection_2==='Megabit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1074);

    }else if (madeSelection_1 ==='Gibibit per second' && madeSelection_2==='Megabyte per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (134);

    }else if (madeSelection_1 ==='Gibibit per second' && madeSelection_2==='Mebibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val * (1024);

    }else if (madeSelection_1 ==='Gibibit per second' && madeSelection_2==='Gigabit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val * (1.074);

    }else if (madeSelection_1 ==='Gibibit per second' && madeSelection_2==='Gigabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (  7.451);

    }else if (madeSelection_1 ==='Gibibit per second' && madeSelection_2==='Terabit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (931);

    }else if (madeSelection_1 ==='Gibibit per second' && madeSelection_2==='Terabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (7451);

    }else if (madeSelection_1 ==='Gibibit per second' && madeSelection_2==='Tebibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1024);

    }
    //Terabit per second to ...
    else if (madeSelection_1 ==='Terabit per second' && madeSelection_2==='Bit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1e+12);

    }else if (madeSelection_1 ==='Terabit per second' && madeSelection_2==='Kilobit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1e+9);

    }else if (madeSelection_1 ==='Terabit per second' && madeSelection_2==='Kilobyte per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1.25e+8);

    }else if (madeSelection_1 ==='Terabit per second' && madeSelection_2==='Kibibit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (9.766e+8);

    }else if (madeSelection_1 ==='Terabit per second' && madeSelection_2==='Megabit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1e+6);

    }else if (madeSelection_1 ==='Terabit per second' && madeSelection_2==='Megabyte per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (125000);

    }else if (madeSelection_1 ==='Terabit per second' && madeSelection_2==='Mebibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val * (953674);

    }else if (madeSelection_1 ==='Terabit per second' && madeSelection_2==='Gigabit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val * (1000);

    }else if (madeSelection_1 ==='Terabit per second' && madeSelection_2==='Gigabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val * (125);

    }else if (madeSelection_1 ==='Terabit per second' && madeSelection_2==='Gibibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val * (931);

    }else if (madeSelection_1 ==='Terabit per second' && madeSelection_2==='Terabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (8);

    }else if (madeSelection_1 ==='Terabit per second' && madeSelection_2==='Tebibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (1.1);

    }
    //Terabyte per second to ...
    else if (madeSelection_1 ==='Terabyte per second' && madeSelection_2==='Bit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (8e+12);

    }else if (madeSelection_1 ==='Terabyte per second' && madeSelection_2==='Kilobit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (8e+9);

    }else if (madeSelection_1 ==='Terabyte per second' && madeSelection_2==='Kilobyte per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1e+9);

    }else if (madeSelection_1 ==='Terabyte per second' && madeSelection_2==='Kibibit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (7.812e+9);

    }else if (madeSelection_1 ==='Terabyte per second' && madeSelection_2==='Megabit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (8e+6);

    }else if (madeSelection_1 ==='Terabyte per second' && madeSelection_2==='Megabyte per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1e+6);

    }else if (madeSelection_1 ==='Terabyte per second' && madeSelection_2==='Mebibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val * (7.629e+6);

    }else if (madeSelection_1 ==='Terabyte per second' && madeSelection_2==='Gigabit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val * (8000);

    }else if (madeSelection_1 ==='Terabyte per second' && madeSelection_2==='Gigabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val * (1000);

    }else if (madeSelection_1 ==='Terabyte per second' && madeSelection_2==='Gibibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val * (7451);

    }else if (madeSelection_1 ==='Terabyte per second' && madeSelection_2==='Terabit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val * (8);

    }else if (madeSelection_1 ==='Terabyte per second' && madeSelection_2==='Tebibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val * (7.276);

    }
    //Tebibit per second to ...
    else if (madeSelection_1 ==='Tebibit per second' && madeSelection_2==='Bit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1.1e+12);

    }else if (madeSelection_1 ==='Tebibit per second' && madeSelection_2==='Kilobit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1.1e+9);

    }else if (madeSelection_1 ==='Tebibit per second' && madeSelection_2==='Kilobyte per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1.374e+8);

    }else if (madeSelection_1 ==='Tebibit per second' && madeSelection_2==='Kibibit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1.074e+9);

    }else if (madeSelection_1 ==='Tebibit per second' && madeSelection_2==='Megabit per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (1.1e+6);

    }else if (madeSelection_1 ==='Tebibit per second' && madeSelection_2==='Megabyte per second') {
        //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (137439);

    }else if (madeSelection_1 ==='Tebibit per second' && madeSelection_2==='Mebibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val * (1.049e+6);

    }else if (madeSelection_1 ==='Tebibit per second' && madeSelection_2==='Gigabit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val * (1100);

    }else if (madeSelection_1 ==='Tebibit per second' && madeSelection_2==='Gigabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val * (137);

    }else if (madeSelection_1 ==='Tebibit per second' && madeSelection_2==='Gibibit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val * (1024);

    }else if (madeSelection_1 ==='Tebibit per second' && madeSelection_2==='Terabit per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val * (1.1);

    }else if (madeSelection_1 ==='Tebibit per second' && madeSelection_2==='Terabyte per second') {
            //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val / (7.276);

    }


    const setstate={result:result, formule: formulvalue}
    return setstate

}

export default DataFunc;

