import React , {ReactDOM} from "react";
function DigitalStoragefunc(val,madeSelection_1,madeSelection_2) {
    var result,formulvalue;
    if (madeSelection_1 === madeSelection_2 ) {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val;
        
    }else if (madeSelection_1 ==='Bit' && madeSelection_2==='َKilobit') {
             //formulvalue = '<span ><b>فرمول: </b></span> کیلوبیت = بیت  ×  (2.471)';
            result = val / (1000);
        
    }else if (madeSelection_1 ==='Bit' && madeSelection_2==='Kibibit') {
             //formulvalue = '<span ><b>فرمول: </b></span> کیبی بیت = بیت  ×  (1024)';
            result = val / (1024);
        
    }else if (madeSelection_1 ==='Bit' && madeSelection_2==='Megabit') {
             //formulvalue = '<span ><b>فرمول: </b></span> مگابیت = بیت  ×  (1e+6)';
            result = val / (1e+6);
        
    }else if (madeSelection_1 ==='Bit' && madeSelection_2==='Mebibit') {
             //formulvalue = '<span ><b>فرمول: </b></span> مبی بیت = بیت  ×  (1.049e+6)';
            result = val / (1.049e+6);
        
    }else if (madeSelection_1 ==='Bit' && madeSelection_2==='Gigabit') {
             //formulvalue = '<span ><b>فرمول: </b></span> گیگابیت = بیت  ×  (1e+9)';
            result = val / (1e+9);
        
    }else if (madeSelection_1 ==='Bit' && madeSelection_2==='Gibibit') {
             //formulvalue = '<span ><b>فرمول: </b></span> گیبی بیت = بیت  ×  (1.074e+9)';
            result = val / (1.074e+9);
        
    }else if (madeSelection_1 ==='Bit' && madeSelection_2==='Terabit') {
             //formulvalue = '<span ><b>فرمول: </b></span> ترابیت = بیت  ×  (1e+12)';
            result = val / (1e+12);
        
    }else if (madeSelection_1 ==='Bit' && madeSelection_2==='Tebibit') {
             //formulvalue = '<span ><b>فرمول: </b></span> تبی بیت = بیت  ×  (1.1e+12)';
            result = val / (1.1e+12);
        
    }else if (madeSelection_1 ==='Bit' && madeSelection_2==='Petabit') {
             //formulvalue = '<span ><b>فرمول: </b></span> پتی بیت = بیت  ×  (1e+15)';
            result = val / (1e+15);
        
    }else if (madeSelection_1 ==='Bit' && madeSelection_2==='Pebibit') {
             //formulvalue = '<span ><b>فرمول: </b></span> پبی بیت = بیت  ×  (1.126e+15)';
            result = val / (1.126e+15);
        
    }else if (madeSelection_1 ==='Bit' && madeSelection_2==='Byte') {
             //formulvalue = '<span ><b>فرمول: </b></span> بایت  = بیت  ×  (8)';
            result = val / (8);
        
    }else if (madeSelection_1 ==='Bit' && madeSelection_2==='Kilobyte') {
             //formulvalue = '<span ><b>فرمول: </b></span> کیلوبایت  = بیت  ×  (8000)';
            result = val / (8000);
        
    }else if (madeSelection_1 ==='Bit' && madeSelection_2==='Kibibyte') {
             //formulvalue = '<span ><b>فرمول: </b></span> کیبی بایت  = بیت  ×  (8192)';
            result = val / (8192);
        
    }else if (madeSelection_1 ==='Bit' && madeSelection_2==='Megabyte') {
             //formulvalue = '<span ><b>فرمول: </b></span> مگابایت  = بیت  ×  (8e+6)';
            result = val / (8e+6);
        
    }else if (madeSelection_1 ==='Bit' && madeSelection_2==='Mebibyte') {
             //formulvalue = '<span ><b>فرمول: </b></span> مبی بایت  = بیت  ×  (8.389e+6)';
            result = val / (8.389e+6);
        
    }else if (madeSelection_1 ==='Bit' && madeSelection_2==='Gigabyte') {
             //formulvalue = '<span ><b>فرمول: </b></span> گیگابایت  = بیت  ×  (8e+9)';
            result = val / (8e+9);
        
    }else if (madeSelection_1 ==='Bit' && madeSelection_2==='Gibibyte') {
             //formulvalue = '<span ><b>فرمول: </b></span> گیبی بایت  = بیت  ×  (8.59e+9)';
            result = val / (8.59e+9);
        
    }else if (madeSelection_1 ==='Bit' && madeSelection_2==='Terabyte') {
             //formulvalue = '<span ><b>فرمول: </b></span> ترابایت  = بیت  ×  (8e+12)';
            result = val / (8e+12);
        
    }else if (madeSelection_1 ==='Bit' && madeSelection_2==='Tebibyte') {
             //formulvalue = '<span ><b>فرمول: </b></span> تبی بایت  = بیت  ×  (8.796e+12)';
            result = val / (8.796e+12);
        
    }else if (madeSelection_1 ==='Bit' && madeSelection_2==='Petabyte') {
             //formulvalue = '<span ><b>فرمول: </b></span> پتابایت  = بیت  ×  (8e+15)';
            result = val / (8e+15);
        
    }else if (madeSelection_1 ==='Bit' && madeSelection_2==='Pebibyte') {
             //formulvalue = '<span ><b>فرمول: </b></span> پبی بایت  = بیت  ×  (9.007e+15)';
            result = val / (9.007e+15);
        
    }

    // kilobit to ...
    else if (madeSelection_1 ==='Kilobit' && madeSelection_2==='Bit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیبی بیت  = کیلوبیت  ×  (1.024)';
       result = val * (1000);
    }else if (madeSelection_1 ==='Kilobit' && madeSelection_2==='Kibibit') {
             //formulvalue = '<span ><b>فرمول: </b></span> کیبی بیت  = کیلوبیت  ×  (1.024)';
            result = val / (1.024);
    }else if (madeSelection_1 ==='Kilobit' && madeSelection_2==='Megabit') {
             //formulvalue = '<span ><b>فرمول: </b></span> مگابیت  = کیلوبیت  ×  (1000)';
            result = val / (1000);
        
    }else if (madeSelection_1 ==='Kilobit' && madeSelection_2==='Mebibit') {
             //formulvalue = '<span ><b>فرمول: </b></span> مبی بیت  = کیلوبیت  ×  (1049)';
            result = val / (1049);
        
    }else if (madeSelection_1 ==='Kilobit' && madeSelection_2==='Gigabit') {
             //formulvalue = '<span ><b>فرمول: </b></span> گیگابیت  = کیلوبیت  ×  (1e+6)';
            result = val / (1e+6);
        
    }else if (madeSelection_1 ==='Kilobit' && madeSelection_2==='Gibibit') {
             //formulvalue = '<span ><b>فرمول: </b></span> گیگی بیت  = کیلوبیت  ×  (1.074e+6)';
            result = val / (1.074e+6);
        
    }else if (madeSelection_1 ==='Kilobit' && madeSelection_2==='Terabit') {
             //formulvalue = '<span ><b>فرمول: </b></span> ترا بیت  = کیلوبیت  ×  (1e+9)';
            result = val / (1e+9);
        
    }else if (madeSelection_1 ==='Kilobit' && madeSelection_2==='Tebibit') {
             //formulvalue = '<span ><b>فرمول: </b></span> تبی بیت  = کیلوبیت  ×  (1.1e+9)';
            result = val / (1.1e+9);
        
    }else if (madeSelection_1 ==='Kilobit' && madeSelection_2==='Petabit') {
             //formulvalue = '<span ><b>فرمول: </b></span> پتی بیت  = کیلوبیت  ×  (1e+12)';
            result = val / (1e+12);
        
    }else if (madeSelection_1 ==='Bit' && madeSelection_2==='Pebibit') {
             //formulvalue = '<span ><b>فرمول: </b></span> پبی بیت  = کیلوبیت  ×  (1.126e+12)';
            result = val / (1.126e+12);
        
    }else if (madeSelection_1 ==='Kilobit' && madeSelection_2==='Byte') {
             //formulvalue = '<span ><b>فرمول: </b></span> پبی بیت  = کیلوبیت  ÷  (125)';
            result = val * (125);
        
    }else if (madeSelection_1 ==='Kilobit' && madeSelection_2==='Kilobyte') {
             //formulvalue = '<span ><b>فرمول: </b></span> کیلو بیت  = کیلوبیت  ×  (8)';
            result = val / (8);
        
    }else if (madeSelection_1 ==='Kilobit' && madeSelection_2==='Kibibyte') {
             //formulvalue = '<span ><b>فرمول: </b></span> کیبی بیت  = کیلوبیت  ×  (8.192)';
            result = val / (8.192);
        
    }else if (madeSelection_1 ==='Kilobit' && madeSelection_2==='Megabyte') {
             //formulvalue = '<span ><b>فرمول: </b></span> مگا بایت  = کیلوبیت  ×  (8000)';
            result = val / (8000);
        
    }else if (madeSelection_1 ==='Kilobit' && madeSelection_2==='Mebibyte') {
             //formulvalue = '<span ><b>فرمول: </b></span> مبی بایت  = کیلوبیت  ×  (8389)';
            result = val / (8389);
    }else if (madeSelection_1 ==='Kilobit' && madeSelection_2==='Gigabyte') {
             //formulvalue = '<span ><b>فرمول: </b></span> گیگا بایت  = کیلوبیت  ×  (8e+6)';
            result = val / (8e+6);
        
    }else if (madeSelection_1 ==='Kilobit' && madeSelection_2==='Gibibyte') {
             //formulvalue = '<span ><b>فرمول: </b></span> گیبی بایت  = کیلوبیت  ×  (8.59e+6)';
            result = val / (8.59e+6);
        
    }else if (madeSelection_1 ==='Kilobit' && madeSelection_2==='Terabyte') {
             //formulvalue = '<span ><b>فرمول: </b></span> ترا بایت  = کیلوبیت  ×  (8e+9)';
            result = val / (8e+9);
        
    }else if (madeSelection_1 ==='Kilobit' && madeSelection_2==='Tebibyte') {
             //formulvalue = '<span ><b>فرمول: </b></span> تبی بایت  = کیلوبیت  ×  (8.796e+9)';
            result = val / (8.796e+9);
        
    }else if (madeSelection_1 ==='Kilobit' && madeSelection_2==='Petabyte') {
             //formulvalue = '<span ><b>فرمول: </b></span> پتا بایت  = کیلوبیت  ×  (8e+12)';
            result = val / (8e+12);
        
    }else if (madeSelection_1 ==='Kilobit' && madeSelection_2==='Pebibyte') {
             //formulvalue = '<span ><b>فرمول: </b></span> پبی بایت  = کیلوبیت  ×  (9.007e+12)';
            result = val / (9.007e+12);
        
    }
    // Kibibit to ...
    else if (madeSelection_1 ==='Kibibit' && madeSelection_2==='Bit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * 1024;
       
    }else if (madeSelection_1 ==='Kibibit' && madeSelection_2==='Kilobit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * 1.024;
       
    }else if (madeSelection_1 ==='Kibibit' && madeSelection_2==='Megabit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / 977;
       
    }else if (madeSelection_1 ==='Kibibit' && madeSelection_2==='Mebibit') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / 1024;
        
    }else if (madeSelection_1 ==='Kibibit' && madeSelection_2==='Gigabit') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / 976562;
        
    }else if (madeSelection_1 ==='Kibibit' && madeSelection_2==='Gibibit') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / 1.049e+6;
        
    }else if (madeSelection_1 ==='Kibibit' && madeSelection_2==='Terabit') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val /(9.766e+8);
        
    }else if (madeSelection_1 ==='Kibibit' && madeSelection_2==='Tebibit') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val/ (1.074e+9);
        
    }else if (madeSelection_1 ==='Kibibit' && madeSelection_2==='Petabit') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val/(9.766e+11);
        
    }else if (madeSelection_1 ==='Kibibit' && madeSelection_2==='Pebibit') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val /(1.1e+12);
        
    }else if (madeSelection_1 ==='Kibibit' && madeSelection_2==='Byte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val * 128;
        
    }else if (madeSelection_1 ==='Kibibit' && madeSelection_2==='Kilobyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (7.812);
        
    }else if (madeSelection_1 ==='Megabit' && madeSelection_2==='Kibibyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / 8;
        
    }else if (madeSelection_1 ==='Kibibit' && madeSelection_2==='Megabyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / 7813;
        
    }else if (madeSelection_1 ==='Kibibit' && madeSelection_2==='Mebibyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / 8192;
        
    }else if (madeSelection_1 ==='Kibibit' && madeSelection_2==='Gigabyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val /(7.812e+6);
        
    }else if (madeSelection_1 ==='Kibibit' && madeSelection_2==='Gibibyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val /(8.389e+6);
        
    }else if (madeSelection_1 ==='Kibibit' && madeSelection_2==='Terabyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (7.812e+9);
        
    }else if (madeSelection_1 ==='Kibibit' && madeSelection_2==='Tebibyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / ( 8.59e+9);
        
    }else if (madeSelection_1 ==='Kibibit' && madeSelection_2==='Petabyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (7.812e+12);
         
        
    }else if (madeSelection_1 ==='Kibibit' && madeSelection_2==='Pebibyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (8.796e+12);
         
        
    }
    // Megabit to ...
    else if (madeSelection_1 ==='Megabit' && madeSelection_2==='Bit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1e+6);
        
       
   }else if (madeSelection_1 ==='Megabit' && madeSelection_2==='Kilobit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * 1000;
       
      
  }else if (madeSelection_1 ==='Megabit' && madeSelection_2==='Kibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * 977;
       
      
  }else if (madeSelection_1 ==='Megabit' && madeSelection_2==='Gigabit') {
   //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
  result = val / 1000;
   
  
   }else if (madeSelection_1 ==='Megabit' && madeSelection_2==='Gibibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / 1074;
        
       
   }else if (madeSelection_1 ==='Megabit' && madeSelection_2==='Terabit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1e+6);
        
       
   }else if (madeSelection_1 ==='Megabit' && madeSelection_2==='Tebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.1e+6);
        
       
   }else if (madeSelection_1 ==='Megabit' && madeSelection_2==='Petabit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1e+9);
        
       
   }else if (madeSelection_1 ==='Megabit' && madeSelection_2==='Pebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.126e+9);
        
       
   }else if (madeSelection_1 ==='Megabit' && madeSelection_2==='Byte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (125000);
        
       
   }else if (madeSelection_1 ==='Megabit' && madeSelection_2==='Kilobyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * 125;
        
       
   }else if (madeSelection_1 ==='Megabit' && madeSelection_2==='Kibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * 122;
        
       
   }else if (madeSelection_1 ==='Megabit' && madeSelection_2==='Megabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / 8;
        
       
   }else if (madeSelection_1 ==='Megabit' && madeSelection_2==='Mebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (8.389);
        
       
   }else if (madeSelection_1 ==='Megabit' && madeSelection_2==='Gigabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / 8000;
        
       
   }else if (madeSelection_1 ==='Megabit' && madeSelection_2==='Gibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / 8590;
        
       
   }else if (madeSelection_1 ==='Megabit' && madeSelection_2==='Terabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (8e+6);
        
       
   }else if (madeSelection_1 ==='Megabit' && madeSelection_2==='Tebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (8.796e+6);
        
       
   }else if (madeSelection_1 ==='Megabit' && madeSelection_2==='Petabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (8e+9);
        
       
   }else if (madeSelection_1 ==='Megabit' && madeSelection_2==='Pebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (9.007e+9);
        
       
   }
    // Mebibit to ...
    else if (madeSelection_1 ==='Mebibit' && madeSelection_2==='Bit') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val * (1.049e+6);
         
        
    }else if (madeSelection_1 ==='Mebibit' && madeSelection_2==='Kilobit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * 1049;
        
       
   }else if (madeSelection_1 ==='Mebibit' && madeSelection_2==='Kibibit') {
    //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
   result = val * 1024;
    
   
    }else if (madeSelection_1 ==='Mebibit' && madeSelection_2==='Megabit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * 1.049;
        
       
   }else if (madeSelection_1 ==='Mebibit' && madeSelection_2==='Gigabit') {
    //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
   result = val / 954;
    
   
    }else if (madeSelection_1 ==='Mebibit' && madeSelection_2==='Gibibit') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val/ 1024;
         
        
    }else if (madeSelection_1 ==='Mebibit' && madeSelection_2==='Terabit') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / 953674;
         
        
    }else if (madeSelection_1 ==='Mebibit' && madeSelection_2==='Tebibit') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (1.049e+6);
         
        
    }else if (madeSelection_1 ==='Mebibit' && madeSelection_2==='Petabit') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (9.537e+8);
         
        
    }else if (madeSelection_1 ==='Mebibit' && madeSelection_2==='Pebibit') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (1.074e+9);
         
        
    }else if (madeSelection_1 ==='Mebibit' && madeSelection_2==='Byte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val * 131072;
         
        
    }else if (madeSelection_1 ==='Mebibit' && madeSelection_2==='Kilobyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val * 131;
         
        
    }else if (madeSelection_1 ==='Mebibit' && madeSelection_2==='Kibibyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val * 128;
         
        
    }else if (madeSelection_1 ==='Mebibit' && madeSelection_2==='Megabyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (7.629);
         
        
    }else if (madeSelection_1 ==='Mebibit' && madeSelection_2==='Mebibyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / 8;
         
        
    }else if (madeSelection_1 ==='Mebibit' && madeSelection_2==='Gigabyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / 7629;
         
        
    }else if (madeSelection_1 ==='Mebibit' && madeSelection_2==='Gibibyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / 8192;
         
        
    }else if (madeSelection_1 ==='Mebibit' && madeSelection_2==='Terabyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (7.629e+6);
         
        
    }else if (madeSelection_1 ==='Mebibit' && madeSelection_2==='Tebibyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (8.389e+6);
         
        
    }else if (madeSelection_1 ==='Mebibit' && madeSelection_2==='Petabyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (7.629e+9);
         
        
    }else if (madeSelection_1 ==='Mebibit' && madeSelection_2==='Pebibyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (8.59e+9);
         
        
    }
    //Gigabit to ...
    else if (madeSelection_1 ==='Gigabit' && madeSelection_2==='Bit') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val * (1e+9);
         
        
    }else if (madeSelection_1 ==='Gigabit' && madeSelection_2==='Kilobit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1e+6);
        
       
   }else if (madeSelection_1 ==='Gigabit' && madeSelection_2==='Kibibit') {
    //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
   result = val * 976563;
    
   
    }else if (madeSelection_1 ==='Gigabit' && madeSelection_2==='Megabit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * 1000;
        
       
    }else if (madeSelection_1 ==='Gigabit' && madeSelection_2==='Mebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * 954;
        
       
    }else if (madeSelection_1 ==='Gigabit' && madeSelection_2==='Gibibit') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / 1.074;
         
        
    }else if (madeSelection_1 ==='Gigabit' && madeSelection_2==='Terabit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / 1000;
        
       
    }else if (madeSelection_1 ==='Gigabit' && madeSelection_2==='Tebibit') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / 1100;
         
        
    }else if (madeSelection_1 ==='Mebibit' && madeSelection_2==='Petabit') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (1e+6);
         
        
    }else if (madeSelection_1 ==='Gigabit' && madeSelection_2==='Pebibit') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (1.126e+6);
         
        
    }else if (madeSelection_1 ==='Gigabit' && madeSelection_2==='Byte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val * 1.25e+8;
         
        
    }else if (madeSelection_1 ==='Gigabit' && madeSelection_2==='Kilobyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val * 125000;
         
        
    }else if (madeSelection_1 ==='Gigabit' && madeSelection_2==='Kibibyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val * 122070;
         
        
    }else if (madeSelection_1 ==='Gigabit' && madeSelection_2==='Megabyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val * 125;
         
        
    }else if (madeSelection_1 ==='Gigabit' && madeSelection_2==='Mebibyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val * 119;
         
        
    }else if (madeSelection_1 ==='Gigabit' && madeSelection_2==='Gigabyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / 8;
         
        
    }else if (madeSelection_1 ==='Gigabit' && madeSelection_2==='Gibibyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (8.59);
         
        
    }else if (madeSelection_1 ==='Gigabit' && madeSelection_2==='Terabyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (8000);
         
        
    }else if (madeSelection_1 ==='Gigabit' && madeSelection_2==='Tebibyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / 8796;
         
        
    }else if (madeSelection_1 ==='Gigabit' && madeSelection_2==='Petabyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / 8e+6;
         
        
    }else if (madeSelection_1 ==='Gigabit' && madeSelection_2==='Pebibyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (9.007e+6);
         
        
    }
    //Gibibit to ...
    else if (madeSelection_1 ==='Gibibit' && madeSelection_2==='Bit') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val * (1.074e+9);
         
        
    }else if (madeSelection_1 ==='Gibibit' && madeSelection_2==='Kilobit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1.074e+6);
        
       
    }else if (madeSelection_1 ==='Gibibit' && madeSelection_2==='Kibibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1.049e+6);
        
       
    }else if (madeSelection_1 ==='Gibibit' && madeSelection_2==='Mebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1024);
        
       
    }else if (madeSelection_1 ==='Gibibit' && madeSelection_2==='Gigabit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1.074);
        
       
    }else if (madeSelection_1 ==='Gibibit' && madeSelection_2==='Terabit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (931);
        
       
    }else if (madeSelection_1 ==='Gibibit' && madeSelection_2==='Tebibit') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (1024);
         
        
    }else if (madeSelection_1 ==='Gibibit' && madeSelection_2==='Petabit') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / 931323;
         
        
    }else if (madeSelection_1 ==='GibibitGibibit' && madeSelection_2==='Pebibit') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (1.049e+6);
         
        
    }else if (madeSelection_1 ==='Gibibit' && madeSelection_2==='Byte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val * (1.342e+8);
         
        
    }else if (madeSelection_1 ==='Gibibit' && madeSelection_2==='Kilobyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val * (134218);
         
        
    }else if (madeSelection_1 ==='Gibibit' && madeSelection_2==='Kibibyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val * (131072);
         
        
    }else if (madeSelection_1 ==='Gibibit' && madeSelection_2==='Megabyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val * (134);
         
        
    }else if (madeSelection_1 ==='Gibibit' && madeSelection_2==='Mebibyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val * 128;
         
        
    }else if (madeSelection_1 ==='Gibibit' && madeSelection_2==='Gigabyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (7.451);
         
        
    }else if (madeSelection_1 ==='Gibibit' && madeSelection_2==='Gibibyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (8);
         
        
    }else if (madeSelection_1 ==='Gibibit' && madeSelection_2==='Terabyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (7451);
         
        
    }else if (madeSelection_1 ==='Gibibit' && madeSelection_2==='Tebibyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (8192);
         
        
    }else if (madeSelection_1 ==='Gibibit' && madeSelection_2==='Petabyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (7.451e+6);
         
        
    }else if (madeSelection_1 ==='Gibibit' && madeSelection_2==='Pebibyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (8.389e+6);
         
        
    }
    // Terabit to ...
    else if (madeSelection_1 ==='Terabit' && madeSelection_2==='Bit') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val * 1e+12;
         
        
    }else if (madeSelection_1 ==='Terabit' && madeSelection_2==='Kilobit') {
        //formulvalue (= '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1e+9);
        
       
    }else if (madeSelection_1 ==='Terabit' && madeSelection_2==='Kibibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (9.766e+8);
        
       
    }else if (madeSelection_1 ==='Terabit' && madeSelection_2==='Megabit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1e+6);
        
       
    }else if (madeSelection_1 ==='Terabit' && madeSelection_2==='Mebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (953674);
        
       
    }else if (madeSelection_1 ==='Terabit' && madeSelection_2==='Gigabit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * ( 1000);
        
       
    }else if (madeSelection_1 ==='Terabit' && madeSelection_2==='Gibibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * ( 931);
        
       
    }else if (madeSelection_1 ==='Terabit' && madeSelection_2==='Tebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.1);
        
       
    }else if (madeSelection_1 ==='Terabit' && madeSelection_2==='Petabit') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (1000);
         
        
    }else if (madeSelection_1 ==='Terabit' && madeSelection_2==='Pebibit') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (1126);
         
        
    }else if (madeSelection_1 ==='Terabit' && madeSelection_2==='Byte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val * (1.25e+11);
         
        
    }else if (madeSelection_1 ==='Terabit' && madeSelection_2==='Kilobyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val *(1.25e+8);
         
        
    }else if (madeSelection_1 ==='Terabit' && madeSelection_2==='Kibibyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val * (1.221e+8);
         
        
    }else if (madeSelection_1 ==='Terabit' && madeSelection_2==='Megabyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val *(125000);
         
        
    }else if (madeSelection_1 ==='Terabit' && madeSelection_2==='Mebibyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val *(119209);
         
        
    }else if (madeSelection_1 ==='Terabit' && madeSelection_2==='Gigabyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val *(125);
         
        
    }else if (madeSelection_1 ==='Terabit' && madeSelection_2==='Gibibyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val *(116);
         
        
    }else if (madeSelection_1 ==='Terabit' && madeSelection_2==='Terabyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (8);
         
        
    }else if (madeSelection_1 ==='Terabit' && madeSelection_2==='Tebibyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (8.796);
         
        
    }else if (madeSelection_1 ==='Terabit' && madeSelection_2==='Petabyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val/(8000);
         
        
    }else if (madeSelection_1 ==='Terabit' && madeSelection_2==='Pebibyte') {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val / (9007);
         
        
    }
    //Tebibit to ...
    else if (madeSelection_1 ==='Tebibit' && madeSelection_2==='Bit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1.1e+12);
        
       
   }else if (madeSelection_1 ==='Tebibit' && madeSelection_2==='Kilobit') {
       //formulvalue (= '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (1.1e+9);
       
      
   }else if (madeSelection_1 ==='Tebibit' && madeSelection_2==='Kibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (1.074e+9);
       
      
   }else if (madeSelection_1 ==='Tebibit' && madeSelection_2==='Megabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (1.1e+6);
       
      
   }else if (madeSelection_1 ==='Tebibit' && madeSelection_2==='Mebibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (1.049e+6);
       
      
   }else if (madeSelection_1 ==='Tebibit' && madeSelection_2==='Gigabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (1100);
       
      
   }else if (madeSelection_1 ==='Tebibit' && madeSelection_2==='Gibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * ( 1024);
       
      
   }else if (madeSelection_1 ==='Tebibit' && madeSelection_2==='Terabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (1.1);
       
      
   }else if (madeSelection_1 ==='Tebibit' && madeSelection_2==='Petabit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (909);
        
       
   }else if (madeSelection_1 ==='Tebibit' && madeSelection_2==='Pebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1024);
        
       
   }else if (madeSelection_1 ==='Tebibit' && madeSelection_2==='Byte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1.374e+11);
        
       
   }else if (madeSelection_1 ==='Tebibit' && madeSelection_2==='Kilobyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1.374e+8);
        
       
   }else if (madeSelection_1 ==='Tebibit' && madeSelection_2==='Kibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1.342e+8);
        
       
   }else if (madeSelection_1 ==='Tebibit' && madeSelection_2==='Megabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(137439);
        
       
   }else if (madeSelection_1 ==='Tebibit' && madeSelection_2==='Mebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(131072);
        
       
   }else if (madeSelection_1 ==='Tebibit' && madeSelection_2==='Gigabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(137);
        
       
   }else if (madeSelection_1 ==='Tebibit' && madeSelection_2==='Gibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(128);
        
       
   }else if (madeSelection_1 ==='Tebibit' && madeSelection_2==='Terabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (7.276);
        
       
   }else if (madeSelection_1 ==='Tebibit' && madeSelection_2==='Tebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (8);
        
       
   }else if (madeSelection_1 ==='Tebibit' && madeSelection_2==='Petabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val/(7276);
        
       
   }else if (madeSelection_1 ==='Tebibit' && madeSelection_2==='Pebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (8192);
        
       
   }
    //Petabit to ...
    else if (madeSelection_1 ==='Petabit' && madeSelection_2==='Bit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1e+15);
        
       
   }else if (madeSelection_1 ==='Petabit' && madeSelection_2==='Kilobit') {
       //formulvalue (= '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (1e+12);
       
      
   }else if (madeSelection_1 ==='Petabit' && madeSelection_2==='Kibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (9.766e+11);
       
      
   }else if (madeSelection_1 ==='Petabit' && madeSelection_2==='Megabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (1e+9);
       
      
   }else if (madeSelection_1 ==='Petabit' && madeSelection_2==='Mebibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (9.537e+8);
       
      
   }else if (madeSelection_1 ==='Petabit' && madeSelection_2==='Gigabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (1e+6);
       
      
   }else if (madeSelection_1 ==='Petabit' && madeSelection_2==='Gibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * ( 931323);
       
      
   }else if (madeSelection_1 ==='Petabit' && madeSelection_2==='Terabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (1000);
       
      
   }else if (madeSelection_1 ==='Petabit' && madeSelection_2==='Tebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (909);
        
       
   }else if (madeSelection_1 ==='Petabit' && madeSelection_2==='Pebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.126);
        
       
   }else if (madeSelection_1 ==='Petabit' && madeSelection_2==='Byte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1.25e+14);
        
       
   }else if (madeSelection_1 ==='Petabit' && madeSelection_2==='Kilobyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *( 1.25e+11);
        
       
   }else if (madeSelection_1 ==='Petabit' && madeSelection_2==='Kibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1.221e+11);
        
       
   }else if (madeSelection_1 ==='Petabit' && madeSelection_2==='Megabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1.25e+8);
        
       
   }else if (madeSelection_1 ==='Petabit' && madeSelection_2==='Mebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1.192e+8);
        
       
   }else if (madeSelection_1 ==='Tebibit' && madeSelection_2==='Gigabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(125000);
        
       
   }else if (madeSelection_1 ==='Petabit' && madeSelection_2==='Gibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(116415);
        
       
   }else if (madeSelection_1 ==='Petabit' && madeSelection_2==='Terabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (125);
        
       
   }else if (madeSelection_1 ==='Petabit' && madeSelection_2==='Tebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (114);
        
       
   }else if (madeSelection_1 ==='Petabit' && madeSelection_2==='Petabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val/(8);
        
       
   }else if (madeSelection_1 ==='Petabit' && madeSelection_2==='Pebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (9.007);
        
       
   }
    //pebibit to ...
    else if (madeSelection_1 ==='pebibit' && madeSelection_2==='Bit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1.126e+15);
        
       
   }else if (madeSelection_1 ==='pebibit' && madeSelection_2==='Kilobit') {
       //formulvalue (= '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (1.126e+12);
       
      
   }else if (madeSelection_1 ==='pebibit' && madeSelection_2==='Kibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (1.1e+12);
       
      
   }else if (madeSelection_1 ==='pebibit' && madeSelection_2==='Megabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (1.126e+9);
       
      
   }else if (madeSelection_1 ==='pebibit' && madeSelection_2==='Mebibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (1.074e+9);
       
      
   }else if (madeSelection_1 ==='pebibit' && madeSelection_2==='Gigabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (1.126e+6);
       
      
   }else if (madeSelection_1 ==='pebibit' && madeSelection_2==='Gibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (1.049e+6);
       
      
   }else if (madeSelection_1 ==='pebibit' && madeSelection_2==='Terabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (1126);
       
      
   }else if (madeSelection_1 ==='pebibit' && madeSelection_2==='Tebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1024);
        
       
   }else if (madeSelection_1 ==='pebibit' && madeSelection_2==='Petabit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.126);
        
       
   }else if (madeSelection_1 ==='Petabit' && madeSelection_2==='Byte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1.25e+14);
        
       
   }else if (madeSelection_1 ==='pebibit' && madeSelection_2==='Kilobyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val /(1000);
        
       
   }else if (madeSelection_1 ==='pebibit' && madeSelection_2==='Kibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1024);
        
       
   }else if (madeSelection_1 ==='pebibit' && madeSelection_2==='Megabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val /(1e+6);
        
       
   }else if (madeSelection_1 ==='pebibit' && madeSelection_2==='Mebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val /(1.049e+6);
        
       
   }else if (madeSelection_1 ==='pebibit' && madeSelection_2==='Gigabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val /(1e+9);
        
       
   }else if (madeSelection_1 ==='pebibit' && madeSelection_2==='Gibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val /(1.074e+9);
        
       
   }else if (madeSelection_1 ==='pebibit' && madeSelection_2==='Terabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1e+12);
        
       
   }else if (madeSelection_1 ==='pebibit' && madeSelection_2==='Tebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.1e+12);
        
       
   }else if (madeSelection_1 ==='pebibit' && madeSelection_2==='Petabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val/(1e+15);
        
       
   }else if (madeSelection_1 ==='pebibit' && madeSelection_2==='Pebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.126e+15);
        
       
   }
    //Byte to ...
    else if (madeSelection_1 ==='Byte' && madeSelection_2==='Bit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * ( 8);
        
       
   }else if (madeSelection_1 ==='Byte' && madeSelection_2==='Kilobit') {
       //formulvalue (= '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val / (125);
       
      
   }else if (madeSelection_1 ==='Byte' && madeSelection_2==='Kibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val / (128);
       
      
   }else if (madeSelection_1 ==='Byte' && madeSelection_2==='Megabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val / (125000);
       
      
   }else if (madeSelection_1 ==='Byte' && madeSelection_2==='Mebibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val / (131072);
       
      
   }else if (madeSelection_1 ==='Byte' && madeSelection_2==='Gigabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val / (1.25e+8);
       
      
   }else if (madeSelection_1 ==='Byte' && madeSelection_2==='Gibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val / (1.342e+8);
       
      
   }else if (madeSelection_1 ==='Byte' && madeSelection_2==='Terabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val / (1.25e+11);
       
      
   }else if (madeSelection_1 ==='Byte' && madeSelection_2==='Tebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.374e+11);
        
       
   }else if (madeSelection_1 ==='Byte' && madeSelection_2==='Petabit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.25e+14);
        
       
   }else if (madeSelection_1 ==='Byte' && madeSelection_2==='Pebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.407e+14);
        
       
   }else if (madeSelection_1 ==='Byte' && madeSelection_2==='Kilobyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val /(1000);
        
       
   }else if (madeSelection_1 ==='Byte' && madeSelection_2==='Kibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1024);
        
       
   }else if (madeSelection_1 ==='Byte' && madeSelection_2==='Megabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val /(1e+6);
        
       
   }else if (madeSelection_1 ==='Byte' && madeSelection_2==='Mebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val /(1.049e+6);
        
       
   }else if (madeSelection_1 ==='Byte' && madeSelection_2==='Gigabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val /(1e+9);
        
       
   }else if (madeSelection_1 ==='Byte' && madeSelection_2==='Gibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val /(1.074e+9);
        
       
   }else if (madeSelection_1 ==='Byte' && madeSelection_2==='Terabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1e+12);
        
       
   }else if (madeSelection_1 ==='Byte' && madeSelection_2==='Tebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.1e+12);
        
       
   }else if (madeSelection_1 ==='Byte' && madeSelection_2==='Petabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val/(1e+15);
        
       
   }else if (madeSelection_1 ==='Byte' && madeSelection_2==='Pebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.126e+15);
        
       
   }
    // Kilobyte to ...
    else if (madeSelection_1 ==='Kilobyte' && madeSelection_2==='Bit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (8000);
        
       
   }else if (madeSelection_1 ==='Kilobyte' && madeSelection_2==='Kilobit') {
       //formulvalue (= '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (8);
       
      
   }else if (madeSelection_1 ==='Kilobyte' && madeSelection_2==='Kibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (7.812);
       
      
   }else if (madeSelection_1 ==='Kilobyte' && madeSelection_2==='Megabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val / (125);
       
      
   }else if (madeSelection_1 ==='Kilobyte' && madeSelection_2==='Mebibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val / (131);
       
      
   }else if (madeSelection_1 ==='Kilobyte' && madeSelection_2==='Gigabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val / (125000);
       
      
   }else if (madeSelection_1 ==='Kilobyte' && madeSelection_2==='Gibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val / (134218);
       
      
   }else if (madeSelection_1 ==='Kilobyte' && madeSelection_2==='Terabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val / (1.25e+8);
       
      
   }else if (madeSelection_1 ==='Kilobyte' && madeSelection_2==='Tebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.374e+8);
        
       
   }else if (madeSelection_1 ==='Kilobyte' && madeSelection_2==='Petabit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.25e+11);
        
       
   }else if (madeSelection_1 ==='Kilobyte' && madeSelection_2==='Pebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.407e+11);
        
       
   }else if (madeSelection_1 ==='Kilobyte' && madeSelection_2==='Byte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1000);
        
       
   }else if (madeSelection_1 ==='Kilobyte' && madeSelection_2==='Kibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.024);
        
       
   }else if (madeSelection_1 ==='Kilobyte' && madeSelection_2==='Megabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val /(1000);
        
       
   }else if (madeSelection_1 ==='Kilobyte' && madeSelection_2==='Mebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val /(1049);
        
       
   }else if (madeSelection_1 ==='Kilobyte' && madeSelection_2==='Gigabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val /(1e+6);
        
       
   }else if (madeSelection_1 ==='Kilobyte' && madeSelection_2==='Gibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val /(1.074e+6);
        
       
   }else if (madeSelection_1 ==='Kilobyte' && madeSelection_2==='Terabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1e+9);
        
       
   }else if (madeSelection_1 ==='Kilobyte' && madeSelection_2==='Tebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.1e+9);
        
       
   }else if (madeSelection_1 ==='Kilobyte' && madeSelection_2==='Petabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val/(1e+12);
        
       
   }else if (madeSelection_1 ==='Kilobyte' && madeSelection_2==='Pebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.126e+12);
        
       
   }
    //Kibibibyte to ...
    else if (madeSelection_1 ==='Kibibibyte' && madeSelection_2==='Bit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (8192);
        
       
   }else if (madeSelection_1 ==='Kibibibyte' && madeSelection_2==='Kilobit') {
       //formulvalue (= '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (8.192);
       
      
   }else if (madeSelection_1 ==='Kibibibyte' && madeSelection_2==='Kibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * ( 8);
       
      
   }else if (madeSelection_1 ==='Kibibibyte' && madeSelection_2==='Megabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val / (122);
       
      
   }else if (madeSelection_1 ==='Kibibibyte' && madeSelection_2==='Mebibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val / (128);
       
      
   }else if (madeSelection_1 ==='Kibibibyte' && madeSelection_2==='Gigabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val / (122070);
       
      
   }else if (madeSelection_1 ==='Kibibibyte' && madeSelection_2==='Gibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val / (131072);
       
      
   }else if (madeSelection_1 ==='Kibibibyte' && madeSelection_2==='Terabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val / (1.221e+8);
       
      
   }else if (madeSelection_1 ==='Kibibibyte' && madeSelection_2==='Tebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.342e+8);
        
       
   }else if (madeSelection_1 ==='Kibibibyte' && madeSelection_2==='Petabit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.221e+11);
        
       
   }else if (madeSelection_1 ==='Kibibibyte' && madeSelection_2==='Pebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.374e+11);
        
       
   }else if (madeSelection_1 ==='Kibibibyte' && madeSelection_2==='Byte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1024);
        
       
   }else if (madeSelection_1 ==='Kibibibyte' && madeSelection_2==='Kilobyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1.024);
        
       
   }else if (madeSelection_1 ==='Kibibibyte' && madeSelection_2==='Megabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val /(977);
        
       
   }else if (madeSelection_1 ==='Kibibibyte' && madeSelection_2==='Mebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val /(1024);
        
       
   }else if (madeSelection_1 ==='Kibibibyte' && madeSelection_2==='Gigabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val /(976562);
        
       
   }else if (madeSelection_1 ==='Kibibibyte' && madeSelection_2==='Gibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val /(1.049e+6);
        
       
   }else if (madeSelection_1 ==='Kibibibyte' && madeSelection_2==='Terabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (9.766e+8);
        
       
   }else if (madeSelection_1 ==='Kibibibyte' && madeSelection_2==='Tebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.074e+9);
        
       
   }else if (madeSelection_1 ==='Kibibibyte' && madeSelection_2==='Petabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val/(9.766e+11);
        
       
   }else if (madeSelection_1 ==='Kibibibyte' && madeSelection_2==='Pebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.1e+12);
        
       
   }
    //Megabyte to ...
    else if (madeSelection_1 ==='Megabyte' && madeSelection_2==='Bit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (8e+6);
        
       
   }else if (madeSelection_1 ==='Megabyte' && madeSelection_2==='Kilobit') {
       //formulvalue (= '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (8000);
       
      
   }else if (madeSelection_1 ==='Megabyte' && madeSelection_2==='Kibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * ( 7813);
       
      
   }else if (madeSelection_1 ==='Megabyte' && madeSelection_2==='Megabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (8);
       
      
   }else if (madeSelection_1 ==='Megabyte' && madeSelection_2==='Mebibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val *(7.629);
       
      
   }else if (madeSelection_1 ==='Megabyte' && madeSelection_2==='Gigabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val / (125);
       
      
   }else if (madeSelection_1 ==='Megabyte' && madeSelection_2==='Gibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val / (134);
       
      
   }else if (madeSelection_1 ==='Megabyte' && madeSelection_2==='Terabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val / (125000);
       
      
   }else if (madeSelection_1 ==='Megabyte' && madeSelection_2==='Tebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (137439);
        
       
   }else if (madeSelection_1 ==='Megabyte' && madeSelection_2==='Petabit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / ( 1.25e+8);
        
       
   }else if (madeSelection_1 ==='Megabyte' && madeSelection_2==='Pebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.407e+8);
        
       
   }else if (madeSelection_1 ==='Megabyte' && madeSelection_2==='Byte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1e+6);
        
       
   }else if (madeSelection_1 ==='Megabyte' && madeSelection_2==='Kilobyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1000);
        
       
   }else if (madeSelection_1 ==='Megabyte' && madeSelection_2==='Kibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val /(977);
        
       
   }else if (madeSelection_1 ==='Megabyte' && madeSelection_2==='Mebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val /(1024);
        
       
   }else if (madeSelection_1 ==='Megabyte' && madeSelection_2==='Gigabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val /(976562);
        
       
   }else if (madeSelection_1 ==='Megabyte' && madeSelection_2==='Gibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val /(1.049e+6);
        
       
   }else if (madeSelection_1 ==='Megabyte' && madeSelection_2==='Terabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (9.766e+8);
        
       
   }else if (madeSelection_1 ==='Megabyte' && madeSelection_2==='Tebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.074e+9);
        
       
   }else if (madeSelection_1 ==='Megabyte' && madeSelection_2==='Petabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val/(9.766e+11);
        
       
   }else if (madeSelection_1 ==='Megabyte' && madeSelection_2==='Pebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.1e+12);
        
       
   }
    //Mebibyte to ...
    else if (madeSelection_1 ==='Mebibyte' && madeSelection_2==='Bit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (8.389e+6);
        
       
    }else if (madeSelection_1 ==='Mebibyte' && madeSelection_2==='Kilobit') {
       //formulvalue (= '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (8389);
       
      
    }else if (madeSelection_1 ==='Mebibyte' && madeSelection_2==='Kibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * ( 8192);
       
      
    }else if (madeSelection_1 ==='Mebibyte' && madeSelection_2==='Megabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (8.389);
       
      
    }else if (madeSelection_1 ==='Mebibyte' && madeSelection_2==='Mebibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val *(8);
       
      
    }else if (madeSelection_1 ==='Mebibyte' && madeSelection_2==='Gigabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val / (119);
       
      
    }else if (madeSelection_1 ==='Mebibyte' && madeSelection_2==='Gibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val / (128);
       
      
    }else if (madeSelection_1 ==='Mebibyte' && madeSelection_2==='Terabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val / (119209);
       
      
    }else if (madeSelection_1 ==='Mebibyte' && madeSelection_2==='Tebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (131072);
        
       
    }else if (madeSelection_1 ==='Mebibyte' && madeSelection_2==='Petabit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.192e+8);
        
       
    }else if (madeSelection_1 ==='Mebibyte' && madeSelection_2==='Pebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.342e+8);
        
       
    }else if (madeSelection_1 ==='Mebibyte' && madeSelection_2==='Byte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1.049e+6);
        
       
    }else if (madeSelection_1 ==='Mebibyte' && madeSelection_2==='Kilobyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1049);
        
       
    }else if (madeSelection_1 ==='Mebibyte' && madeSelection_2==='Kibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1024);
        
       
    }else if (madeSelection_1 ==='Mebibyte' && madeSelection_2==='Megabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1.049);
        
       
    }else if (madeSelection_1 ==='Mebibyte' && madeSelection_2==='Gigabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val /(954);
        
       
    }else if (madeSelection_1 ==='Mebibyte' && madeSelection_2==='Gibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val /(1024);
        
       
    }else if (madeSelection_1 ==='Mebibyte' && madeSelection_2==='Terabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (953674);
        
       
    }else if (madeSelection_1 ==='Mebibyte' && madeSelection_2==='Tebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.049e+6);
        
       
    }else if (madeSelection_1 ==='Mebibyte' && madeSelection_2==='Petabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val/(9.537e+8);
        
       
    }else if (madeSelection_1 ==='Mebibyte' && madeSelection_2==='Pebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.074e+9);
        
       
    }
    //Gigabyte to ...
    else if (madeSelection_1 ==='Gigabyte' && madeSelection_2==='Bit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * ( 8e+9);
        
       
    }else if (madeSelection_1 ==='Gigabyte' && madeSelection_2==='Kilobit') {
       //formulvalue (= '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (8e+6);
       
      
    }else if (madeSelection_1 ==='Gigabyte' && madeSelection_2==='Kibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * ( 7.812e+6);
       
      
    }else if (madeSelection_1 ==='Gigabyte' && madeSelection_2==='Megabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (7629);
       
      
    }else if (madeSelection_1 ==='Gigabyte' && madeSelection_2==='Mebibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val *( 7629);
       
      
    }else if (madeSelection_1 ==='Gigabyte' && madeSelection_2==='Gigabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (8);
       
      
    }else if (madeSelection_1 ==='Gigabyte' && madeSelection_2==='Gibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (8);
       
      
    }else if (madeSelection_1 ==='Gigabyte' && madeSelection_2==='Terabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val / (125);
       
      
    }else if (madeSelection_1 ==='Gigabyte' && madeSelection_2==='Tebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (137);
        
       
    }else if (madeSelection_1 ==='Gigabyte' && madeSelection_2==='Petabit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (125000);
        
       
    }else if (madeSelection_1 ==='Gigabyte' && madeSelection_2==='Pebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (140737);
        
       
    }else if (madeSelection_1 ==='Gigabyte' && madeSelection_2==='Byte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1e+9);
        
       
    }else if (madeSelection_1 ==='Gigabyte' && madeSelection_2==='Kilobyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1e+6);
        
       
    }else if (madeSelection_1 ==='Gigabyte' && madeSelection_2==='Kibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(976563);
        
       
    }else if (madeSelection_1 ==='Gigabyte' && madeSelection_2==='Megabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1000);
        
       
    }else if (madeSelection_1 ==='Gigabyte' && madeSelection_2==='Mebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(954);
        
       
    }else if (madeSelection_1 ==='Gigabyte' && madeSelection_2==='Gibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val /(1024);
        
       
    }else if (madeSelection_1 ==='Gigabyte' && madeSelection_2==='Terabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (953674);
        
       
    }else if (madeSelection_1 ==='Gigabyte' && madeSelection_2==='Tebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.049e+6);
        
       
    }else if (madeSelection_1 ==='Gigabyte' && madeSelection_2==='Petabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val/(9.537e+8);
        
       
    }else if (madeSelection_1 ==='Gigabyte' && madeSelection_2==='Pebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.074e+9);
        
       
    }
    //Gibibyte to ...
    else if (madeSelection_1 ==='Gibibyte' && madeSelection_2==='Bit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (8.59e+9);
        
       
    }else if (madeSelection_1 ==='Gibibyte' && madeSelection_2==='Kilobit') {
       //formulvalue (= '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (8.59e+6);
       
      
    }else if (madeSelection_1 ==='Gibibyte' && madeSelection_2==='Kibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (8.389e+6);
       
      
    }else if (madeSelection_1 ==='Gibibyte' && madeSelection_2==='Megabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (8192);
       
      
    }else if (madeSelection_1 ==='Gibibyte' && madeSelection_2==='Mebibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val *(8192);
       
      
    }else if (madeSelection_1 ==='Gibibyte' && madeSelection_2==='Gigabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (8.59);
       
      
    }else if (madeSelection_1 ==='Gibibyte' && madeSelection_2==='Gibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (8);
       
      
    }else if (madeSelection_1 ==='Gibibyte' && madeSelection_2==='Terabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val / (116);
       
      
    }else if (madeSelection_1 ==='Gibibyte' && madeSelection_2==='Tebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (128);
        
       
    }else if (madeSelection_1 ==='Gibibyte' && madeSelection_2==='Petabit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (116415);
        
       
    }else if (madeSelection_1 ==='Gibibyte' && madeSelection_2==='Pebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (131072);
        
       
    }else if (madeSelection_1 ==='Gibibyte' && madeSelection_2==='Byte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1.074e+9);
        
       
    }else if (madeSelection_1 ==='Gibibyte' && madeSelection_2==='Kilobyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1.074e+6);
        
       
    }else if (madeSelection_1 ==='Gibibyte' && madeSelection_2==='Kibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1.049e+6);
        
       
    }else if (madeSelection_1 ==='Gibibyte' && madeSelection_2==='Megabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1074);
        
       
    }else if (madeSelection_1 ==='Gibibyte' && madeSelection_2==='Mebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1024);
        
       
    }else if (madeSelection_1 ==='Gibibyte' && madeSelection_2==='Gigabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1.074);
        
       
    }else if (madeSelection_1 ==='Gibibyte' && madeSelection_2==='Terabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (931);
        
       
    }else if (madeSelection_1 ==='Gibibyte' && madeSelection_2==='Tebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1024);
        
       
    }else if (madeSelection_1 ==='Gibibyte' && madeSelection_2==='Petabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val/(931323);
        
       
    }else if (madeSelection_1 ==='Gibibyte' && madeSelection_2==='Pebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.049e+6);
        
       
    }
    //Terabyte to ...
    else if (madeSelection_1 ==='Terabyte' && madeSelection_2==='Bit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (8e+12);
        
       
    }else if (madeSelection_1 ==='Terabyte' && madeSelection_2==='Kilobit') {
       //formulvalue (= '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (8e+9);
       
      
    }else if (madeSelection_1 ==='Terabyte' && madeSelection_2==='Kibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * ( 7.812e+9);
       
      
    }else if (madeSelection_1 ==='Terabyte' && madeSelection_2==='Megabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (8e+6);
       
      
    }else if (madeSelection_1 ==='Terabyte' && madeSelection_2==='Mebibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val *(7.629e+6);
       
      
    }else if (madeSelection_1 ==='Terabyte' && madeSelection_2==='Gigabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (8000);
       
      
    }else if (madeSelection_1 ==='Terabyte' && madeSelection_2==='Gibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (7451);
       
      
    }else if (madeSelection_1 ==='Terabyte' && madeSelection_2==='Terabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (8);
       
      
    }else if (madeSelection_1 ==='Terabyte' && madeSelection_2==='Tebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (7.276);
        
       
    }else if (madeSelection_1 ==='Terabyte' && madeSelection_2==='Petabit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (125);
        
       
    }else if (madeSelection_1 ==='Terabyte' && madeSelection_2==='Pebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (141);
        
       
    }else if (madeSelection_1 ==='Terabyte' && madeSelection_2==='Byte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1e+12);
        
       
    }else if (madeSelection_1 ==='Terabyte' && madeSelection_2==='Kilobyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * ( 1e+9);
        
       
    }else if (madeSelection_1 ==='Terabyte' && madeSelection_2==='Kibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(9.766e+8);
        
       
    }else if (madeSelection_1 ==='Terabyte' && madeSelection_2==='Megabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1e+6);
        
       
    }else if (madeSelection_1 ==='Terabyte' && madeSelection_2==='Mebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(953674);
        
       
    }else if (madeSelection_1 ==='Terabyte' && madeSelection_2==='Gigabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1000);
        
       
    }else if (madeSelection_1 ==='Terabyte' && madeSelection_2==='Gibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (931);
        
       
    }else if (madeSelection_1 ==='Terabyte' && madeSelection_2==='Tebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.1);
        
       
    }else if (madeSelection_1 ==='Terabyte' && madeSelection_2==='Petabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val/(1000);
        
       
    }else if (madeSelection_1 ==='Terabyte' && madeSelection_2==='Pebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1126);
        
       
    }
    // Tebibyte to ...
    else if (madeSelection_1 ==='Tebibyte' && madeSelection_2==='Bit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (8.796e+12);
        
       
    }else if (madeSelection_1 ==='Tebibyte' && madeSelection_2==='Kilobit') {
       //formulvalue (= '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (8.796e+9);
       
      
    }else if (madeSelection_1 ==='Tebibyte' && madeSelection_2==='Kibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * ( 8.59e+9);
       
      
    }else if (madeSelection_1 ==='Tebibyte' && madeSelection_2==='Megabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (8.796e+6);
       
      
    }else if (madeSelection_1 ==='Tebibyte' && madeSelection_2==='Mebibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val *(8.389e+6);
       
      
    }else if (madeSelection_1 ==='Tebibyte' && madeSelection_2==='Gigabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (8796);
       
      
    }else if (madeSelection_1 ==='Tebibyte' && madeSelection_2==='Gibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (8192);
       
      
    }else if (madeSelection_1 ==='Tebibyte' && madeSelection_2==='Terabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (8.796);
       
      
    }else if (madeSelection_1 ==='Tebibyte' && madeSelection_2==='Tebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (8);
        
       
    }else if (madeSelection_1 ==='Tebibyte' && madeSelection_2==='Petabit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (114);
        
       
    }else if (madeSelection_1 ==='Tebibyte' && madeSelection_2==='Pebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (128);
        
       
    }else if (madeSelection_1 ==='Tebibyte' && madeSelection_2==='Byte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1.1e+12);
        
       
    }else if (madeSelection_1 ==='Tebibyte' && madeSelection_2==='Kilobyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1.1e+9);
        
       
    }else if (madeSelection_1 ==='Tebibyte' && madeSelection_2==='Kibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1.074e+9);
        
       
    }else if (madeSelection_1 ==='Tebibyte' && madeSelection_2==='Megabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1.1e+6);
        
       
    }else if (madeSelection_1 ==='Tebibyte' && madeSelection_2==='Mebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1.049e+6);
        
       
    }else if (madeSelection_1 ==='Tebibyte' && madeSelection_2==='Gigabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1100);
        
       
    }else if (madeSelection_1 ==='Tebibyte' && madeSelection_2==='Gibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1024);
        
       
    }else if (madeSelection_1 ==='Tebibyte' && madeSelection_2==='Terabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1.1);
        
       
    }else if (madeSelection_1 ==='Tebibyte' && madeSelection_2==='Petabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val/(909);
        
       
    }else if (madeSelection_1 ==='Tebibyte' && madeSelection_2==='Pebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1024);
        
       
    }
    // Petabyte to ...
    else if (madeSelection_1 ==='Petabyte' && madeSelection_2==='Bit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (8e+15);
        
       
    }else if (madeSelection_1 ==='Petabyte' && madeSelection_2==='Kilobit') {
       //formulvalue (= '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (8e+12);
       
      
    }else if (madeSelection_1 ==='Petabyte' && madeSelection_2==='Kibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * ( 7.812e+12);
       
      
    }else if (madeSelection_1 ==='Petabyte' && madeSelection_2==='Megabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (8e+9);
       
      
    }else if (madeSelection_1 ==='Petabyte' && madeSelection_2==='Mebibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val *( 7.629e+9);
       
      
    }else if (madeSelection_1 ==='Petabyte' && madeSelection_2==='Gigabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * ( 8e+6);
       
      
    }else if (madeSelection_1 ==='Petabyte' && madeSelection_2==='Gibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (7.451e+6);
       
      
    }else if (madeSelection_1 ==='Petabyte' && madeSelection_2==='Terabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (8000);
       
      
    }else if (madeSelection_1 ==='Petabyte' && madeSelection_2==='Tebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (7276);
        
       
    }else if (madeSelection_1 ==='Petabyte' && madeSelection_2==='Petabit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (8);
        
       
    }else if (madeSelection_1 ==='Petabyte' && madeSelection_2==='Pebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (7.105);
        
       
    }else if (madeSelection_1 ==='Petabyte' && madeSelection_2==='Byte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1e+15);
        
       
    }else if (madeSelection_1 ==='Petabyte' && madeSelection_2==='Kilobyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1e+12);
        
       
    }else if (madeSelection_1 ==='Petabyte' && madeSelection_2==='Kibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(9.766e+11);
        
       
    }else if (madeSelection_1 ==='Petabyte' && madeSelection_2==='Megabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1e+9);
        
       
    }else if (madeSelection_1 ==='Petabyte' && madeSelection_2==='Mebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *( 9.537e+8);
        
       
    }else if (madeSelection_1 ==='Petabyte' && madeSelection_2==='Gigabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1e+6);
        
       
    }else if (madeSelection_1 ==='Petabyte' && madeSelection_2==='Gibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (931323);
        
       
    }else if (madeSelection_1 ==='Petabyte' && madeSelection_2==='Terabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.049e+6);
        
       
    }else if (madeSelection_1 ==='Petabyte' && madeSelection_2==='Tebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val*(1000);
        
       
    }else if (madeSelection_1 ==='Petabyte' && madeSelection_2==='Pebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val / (1.126);
        
       
    }
    //Pebibyte to ...
    else if (madeSelection_1 ==='Pebibyte' && madeSelection_2==='Bit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (9.007e+15);
        
       
    }else if (madeSelection_1 ==='Pebibyte' && madeSelection_2==='Kilobit') {
       //formulvalue (= '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (9.007e+12);
       
      
    }else if (madeSelection_1 ==='Pebibyte' && madeSelection_2==='Kibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * ( 8.796e+12);
       
      
    }else if (madeSelection_1 ==='Pebibyte' && madeSelection_2==='Megabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (9.007e+9);
       
      
    }else if (madeSelection_1 ==='Pebibyte' && madeSelection_2==='Mebibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val *( 8.59e+9);
       
      
    }else if (madeSelection_1 ==='Pebibyte' && madeSelection_2==='Gigabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (9.007e+6);
       
      
    }else if (madeSelection_1 ==='Pebibyte' && madeSelection_2==='Gibibit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * (8.389e+6);
       
      
    }else if (madeSelection_1 ==='Pebibyte' && madeSelection_2==='Terabit') {
       //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
      result = val * ( 9007);
       
      
    }else if (madeSelection_1 ==='Pebibyte' && madeSelection_2==='Tebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (8192);
        
       
    }else if (madeSelection_1 ==='Pebibyte' && madeSelection_2==='Petabit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * ( 9.007);
        
       
    }else if (madeSelection_1 ==='Pebibyte' && madeSelection_2==='Pebibit') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (8);
        
       
    }else if (madeSelection_1 ==='Pebibyte' && madeSelection_2==='Byte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1.126e+15);
        
       
    }else if (madeSelection_1 ==='Pebibyte' && madeSelection_2==='Kilobyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1.126e+12);
        
       
    }else if (madeSelection_1 ==='Pebibyte' && madeSelection_2==='Kibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1.1e+12);
        
       
    }else if (madeSelection_1 ==='Pebibyte' && madeSelection_2==='Megabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1.126e+9);
        
       
    }else if (madeSelection_1 ==='Pebibyte' && madeSelection_2==='Mebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * ( 1.074e+9);
        
       
    }else if (madeSelection_1 ==='Pebibyte' && madeSelection_2==='Gigabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val *(1.126e+6);
        
       
    }else if (madeSelection_1 ==='Pebibyte' && madeSelection_2==='Gibibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1.049e+6);
        
       
    }else if (madeSelection_1 ==='Pebibyte' && madeSelection_2==='Terabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1126);
        
       
    }else if (madeSelection_1 ==='Pebibyte' && madeSelection_2==='Tebibyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val*(1024);
        
       
    }else if (madeSelection_1 ==='Pebibyte' && madeSelection_2==='Petabyte') {
        //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
       result = val * (1.126);
        
       
    }


    const setstate={result:result, formule:formulvalue}
    return setstate

}

export default DigitalStoragefunc;

