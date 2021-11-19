import React , {ReactDOM} from "react";
function Lengthfunc(val,madeSelection_1,madeSelection_2) {
    var result,formulvalue;
    if (madeSelection_1 === madeSelection_2 ) {
        //   formulvalue = 'فرمول:  کیلومتر = کیلومتر';
          result=val;
    }else if (madeSelection_1 ==='kilometre' && madeSelection_2==='Meter') {
        // formulvalue = 'فرمول:  کیلومتر = کیلومتر';
        result= val * 100;
                
    }else if (madeSelection_1 ==='kilometre' && madeSelection_2==='Centimeter') {
                    //formulvalue = '<span ><b>فرمول: </b></span> سانتی متر = کیلومتر × 1000';
                    result = val * 100000;
                     
    }else if (madeSelection_1 ==='kilometre' && madeSelection_2==='Millimetre') {
                    //formulvalue = '<span ><b>فرمول: </b></span> میلی متر = کیلومتر × 10^6';
                    result = val*Math.pow(10, 6);;
                     
               
            }else if (madeSelection_1 ==='kilometre' && madeSelection_2==='micrometres') {
                    //formulvalue = '<span ><b>فرمول: </b></span> میکرو متر = کیلومتر × 10^9';
                    result = val*Math.pow(10, 9);
                     
            
            }else if (madeSelection_1 ==='kilometre' && madeSelection_2==='Nanometre') {
                    //formulvalue = '<span ><b>فرمول: </b></span> نانومتر = کیلومتر × 10^12';
                    result = val*Math.pow(10, 12);
                     
            }else if (madeSelection_1 ==='kilometre' && madeSelection_2==='Mile') {
                    //formulvalue = '<span ><b>فرمول: </b></span> مایل = کیلومتر × 0.621371';
                    result = val / 1.609;
                     
            
            }else if (madeSelection_1 ==='kilometre' && madeSelection_2==='Yard') {
                    //formulvalue = '<span ><b>فرمول: </b></span> یارد = کیلومتر × 1094';
                    result = val* 1094;
            
            }else if (madeSelection_1 ==='kilometre' && madeSelection_2==='Foot') {
                    //formulvalue = '<span ><b>فرمول: </b></span> فوت = کیلومتر × 3281';
                    result = val* 3281;
            
            }else if (madeSelection_1 ==='kilometre' && madeSelection_2==='Inch') {
                    //formulvalue = '<span ><b>فرمول: </b></span> اینچ = کیلومتر × 39370';
                    result = val* 39370;
            
            }
            
            else if (madeSelection_1 ==='Meter' && madeSelection_2==='kilometre') {
            //formulvalue = 'فرمول:  کیلومتر = متر ÷  1000';
            result = val / 1000;
        
    }else if (madeSelection_1 ==='Meter' && madeSelection_2==='Centimeter') {
            //formulvalue = '<span ><b>فرمول: </b></span> سانتیمتر = متر × 100';
            result = val* 100;
    
    }else if (madeSelection_1 ==='Meter' && madeSelection_2==='Millimetre') {
            //formulvalue = '<span ><b>فرمول: </b></span> میلیمتر = متر × 1000';
            result = val* 1000;
    
    }else if (madeSelection_1 ==='Meter' && madeSelection_2==='micrometres') {
            //formulvalue = '<span ><b>فرمول: </b></span> میکرومتر = متر × (1e+6)';
            result = val* (1e+6);
    
    }else if (madeSelection_1 ==='Meter' && madeSelection_2==='Nanometre') {
            //formulvalue = '<span ><b>فرمول: </b></span> نانومتر = متر × (1e+9)';
            result = val* (1e+9);
    
    }else if (madeSelection_1 ==='Meter' && madeSelection_2==='Mile') {
            //formulvalue = '<span ><b>فرمول: </b></span> مایل = متر ÷ (1609)';
            result = val / 1609;
    }else if (madeSelection_1 ==='Meter' && madeSelection_2==='Yard') {
            //formulvalue = '<span ><b>فرمول: </b></span> یارد = متر × (1.094)';
            result = val* (1.094);
    
    }else if (madeSelection_1 ==='Meter' && madeSelection_2==='Foot') {
            //formulvalue = '<span ><b>فرمول: </b></span> فوت = متر × (3.281)';
            result = val* (3.281);
    
    }else if (madeSelection_1 ==='Meter' && madeSelection_2==='Inch') {
            //formulvalue = '<span ><b>فرمول: </b></span> اینچ = متر × (39.37)';
            result = val* (39.37);
    
    }else if (madeSelection_1 ==='Centimeter' && madeSelection_2==='kilometre') {
        //formulvalue = '<span ><b>فرمول: </b></span> اینچ = متر × (39.37)';
        result = val/ 100000;

    }else if (madeSelection_1 ==='Centimeter' && madeSelection_2==='Meter') {
        //formulvalue = '<span ><b>فرمول: </b></span> اینچ = متر × (39.37)';
        result = val/ 100;

    }else if (madeSelection_1 ==='Centimeter' && madeSelection_2==='Millimetre') {
                    //formulvalue = '<span ><b>فرمول: </b></span> میلیمتر = سانتیمتر × (10)';
                    result = val* 10;
            
            }else if (madeSelection_1 ==='Centimeter' && madeSelection_2==='micrometres') {
                    //formulvalue = '<span ><b>فرمول: </b></span> میکرومتر = سانتیمتر × (10000)';
                    result = val* 10000;
            
            }else if (madeSelection_1 ==='Centimeter' && madeSelection_2==='Nanometre') {
                    //formulvalue = '<span ><b>فرمول: </b></span> نانومتر = سانتیمتر × (1e+7)';
                    result = val* (1e+7);
            
            }else if (madeSelection_1 ==='Centimeter' && madeSelection_2==='Mile') {
                    //formulvalue = '<span ><b>فرمول: </b></span> مایل = سانتیمتر ÷ (160934)';
                    result = val / 160934;
            
            }else if (madeSelection_1 ==='Centimeter' && madeSelection_2==='Yard') {
                    //formulvalue = '<span ><b>فرمول: </b></span> یارد = سانتیمتر ÷ ( 91.44)';
                    result = val /  91.44;
            
            }else if (madeSelection_1 ==='Centimeter' && madeSelection_2==='Foot') {
                    //formulvalue = '<span ><b>فرمول: </b></span> فوت = سانتیمتر ÷ (  30.48)';
                    result = val /   30.48;
            
            }else if (madeSelection_1 ==='Centimeter' && madeSelection_2==='Inch') {
                    //formulvalue = '<span ><b>فرمول: </b></span> اینچ = سانتیمتر ÷ (2.54)';
                    result = val /   2.54;
            
            }else if (madeSelection_1 ==='Millimetre' && madeSelection_2==='kilometre') {
                //formulvalue = '<span ><b>فرمول: </b></span> اینچ = سانتیمتر ÷ (2.54)';
                result = val /   1e+6;
        
            }else if (madeSelection_1 ==='Millimetre' && madeSelection_2==='Meter') {
                //formulvalue = '<span ><b>فرمول: </b></span> اینچ = سانتیمتر ÷ (2.54)';
                result = val /   1000;
        
            }else if (madeSelection_1 ==='Millimetre' && madeSelection_2==='Centimeter') {
                //formulvalue = '<span ><b>فرمول: </b></span> اینچ = سانتیمتر ÷ (2.54)';
                result = val /   10;

           }else if (madeSelection_1 ==='Millimetre' && madeSelection_2==='micrometres') {
                            //formulvalue = '<span ><b>فرمول: </b></span> میکرومتر = میلیمتر × (1000)';
                            result = val * 1000;
                    }else if (madeSelection_1 ==='Millimetre' && madeSelection_2==='Nanometre') {
                            //formulvalue = '<span ><b>فرمول: </b></span> نانومتر = میلیمتر × (1e+6)';
                            result = val * (1e+6);
                    }else if (madeSelection_1 ==='Millimetre' && madeSelection_2==='Mile') {
                            //formulvalue = '<span ><b>فرمول: </b></span> مایل = میلیمتر ÷ (1.609e+6)';
                            result = val / (1.609e+6);
                    
                    }else if (madeSelection_1 ==='Millimetre' && madeSelection_2==='Yard') {
                            //formulvalue = '<span ><b>فرمول: </b></span> یارد = میلیمتر ÷ (914)';
                            result = val / (914);
                    
                    }else if (madeSelection_1 ==='Millimetre' && madeSelection_2==='Foot') {
                            //formulvalue = '<span ><b>فرمول: </b></span> فوت = میلیمتر ÷ (305)';
                            result = val / (305);
                    
                    }else if (madeSelection_1 ==='Millimetre' && madeSelection_2==='Inch') {
                            //formulvalue = '<span ><b>فرمول: </b></span> اینچ = میلیمتر ÷ (25.4)';
                            result = val / (25.4);
                    
                    }else if (madeSelection_1 ==='micrometres' && madeSelection_2==='kilometre') {
                        //formulvalue = '<span ><b>فرمول: </b></span> اینچ = میلیمتر ÷ (25.4)';
                        result = val / (1e+9);
                
                     }else if (madeSelection_1 ==='micrometres' && madeSelection_2==='Meter') {
                        //formulvalue = '<span ><b>فرمول: </b></span> اینچ = میلیمتر ÷ (25.4)';
                        result = val / (1e+6);
                
                     }else if (madeSelection_1 ==='micrometres' && madeSelection_2==='Centimeter') {
                        //formulvalue = '<span ><b>فرمول: </b></span> اینچ = میلیمتر ÷ (25.4)';
                        result = val / (10000);
                
                     }else if (madeSelection_1 ==='micrometres' && madeSelection_2==='Millimetre') {
                        //formulvalue = '<span ><b>فرمول: </b></span> اینچ = میلیمتر ÷ (25.4)';
                        result = val / (10);
                
                     }else if (madeSelection_1 ==='micrometres' && madeSelection_2==='Nanometre') {
                                    //formulvalue = '<span ><b>فرمول: </b></span> نانومتر = میکرومتر ×  (1000)';
                                    result = val * (1e+7);
                            
                            }else if (madeSelection_1 ==='micrometres' && madeSelection_2==='Mile') {
                                    //formulvalue = '<span ><b>فرمول: </b></span> مایل = میکرومتر ÷ (1.609e+9)';
                                    result = val / (1.609e+9);
                            
                            }else if (madeSelection_1 ==='micrometres' && madeSelection_2==='Yard') {
                                    //formulvalue = '<span ><b>فرمول: </b></span> یارد = میکرومتر ÷ (914400)';
                                    result = val / (914400);
                            
                            }else if (madeSelection_1 ==='micrometres' && madeSelection_2==='Foot') {
                                    //formulvalue = '<span ><b>فرمول: </b></span> فوت = میکرومتر ÷ (304800)';
                                    result = val / (304800);
                            
                            }else if (madeSelection_1 ==='micrometres' && madeSelection_2==='Inch') {
                                    //formulvalue = '<span ><b>فرمول: </b></span> اینچ = میکرومتر ÷ (25400)';
                                    result = val / (25400);
                            
                            }else if (madeSelection_1 ==='Nanometre' && madeSelection_2==='kilometre') {
                                //formulvalue = '<span ><b>فرمول: </b></span> اینچ = میکرومتر ÷ (25400)';
                                result = val / (1e+12);
                        
                            }else if (madeSelection_1 ==='Nanometre' && madeSelection_2==='Meter') {
                                //formulvalue = '<span ><b>فرمول: </b></span> اینچ = میکرومتر ÷ (25400)';
                                result = val / (1e+9);
                        
                            }else if (madeSelection_1 ==='Nanometre' && madeSelection_2==='Centimeter') {
                                //formulvalue = '<span ><b>فرمول: </b></span> اینچ = میکرومتر ÷ (25400)';
                                result = val / (1e+7);
                        
                            }else if (madeSelection_1 ==='Nanometre' && madeSelection_2==='Millimetre') {
                                //formulvalue = '<span ><b>فرمول: </b></span> اینچ = میکرومتر ÷ (25400)';
                                result = val / (1e+6);
                        
                            }else if (madeSelection_1 ==='Nanometre' && madeSelection_2==='micrometres') {
                                //formulvalue = '<span ><b>فرمول: </b></span> اینچ = میکرومتر ÷ (25400)';
                                result = val / (1000);
                        
                            }else if (madeSelection_1 ==='Nanometre' && madeSelection_2==='Mile') {
                                            //formulvalue = '<span ><b>فرمول: </b></span> مایل = نانومتر ÷ (1.609e+12)';
                                            result = val / (1.609e+12);
                                    }else if (madeSelection_1 ==='Nanometre' && madeSelection_2==='Yard') {
                                            //formulvalue = '<span ><b>فرمول: </b></span> یارد = نانومتر ÷ (9.144e+8)';
                                            result = val / (9.144e+8);
                                    
                                    }else if (madeSelection_1 ==='Nanometre' && madeSelection_2==='Foot') {
                                            //formulvalue = '<span ><b>فرمول: </b></span> فوت = نانومتر ÷ (3.048e+8)';
                                            result = val / (3.048e+8);
                                    
                                    }else if (madeSelection_1 ==='Nanometre' && madeSelection_2==='Inch') {
                                            //formulvalue = '<span ><b>فرمول: </b></span> اینچ = نانومتر ÷ (2.54e+7)';
                                            result = val / (2.54e+7);
                                    
                                    }else if (madeSelection_1 ==='Mile' && madeSelection_2==='kilometre') {
                                        //formulvalue = '<span ><b>فرمول: </b></span> اینچ = نانومتر ÷ (2.54e+7)';
                                        result = val * (1.609);
                                
                                    }else if (madeSelection_1 ==='Mile' && madeSelection_2==='Meter') {
                                        //formulvalue = '<span ><b>فرمول: </b></span> اینچ = نانومتر ÷ (2.54e+7)';
                                        result = val * (1609);
                                
                                    }else if (madeSelection_1 ==='Mile' && madeSelection_2==='Centimeter') {
                                        //formulvalue = '<span ><b>فرمول: </b></span> اینچ = نانومتر ÷ (2.54e+7)';
                                        result = val * (160934);
                                
                                    }else if (madeSelection_1 ==='Mile' && madeSelection_2==='Millimetre') {
                                        //formulvalue = '<span ><b>فرمول: </b></span> اینچ = نانومتر ÷ (2.54e+7)';
                                        result = val * (1.609e+6);
                                
                                    }else if (madeSelection_1 ==='Mile' && madeSelection_2==='micrometres') {
                                        //formulvalue = '<span ><b>فرمول: </b></span> اینچ = نانومتر ÷ (2.54e+7)';
                                        result = val * (1.609e+9);
                                
                                    }else if (madeSelection_1 ==='Mile' && madeSelection_2==='Nanometre') {
                                        //formulvalue = '<span ><b>فرمول: </b></span> اینچ = نانومتر ÷ (2.54e+7)';
                                        result = val * (1.609e+12);
                                
                                    }else if (madeSelection_1 ==='Mile' && madeSelection_2==='Yard') {
                                                    //formulvalue = '<span ><b>فرمول: </b></span> یارد = مایل ×  (1760)';
                                                    result = val * (1760);
                                        }else if (madeSelection_1 ==='Mile' && madeSelection_2==='Foot') {
                                                    //formulvalue = '<span ><b>فرمول: </b></span> فوت = مایل ×  (5280)';
                                                    result = val * (5280);
                                            
                                        }else if (madeSelection_1 ==='Mile' && madeSelection_2==='Inch') {
                                                    //formulvalue = '<span ><b>فرمول: </b></span> اینچ = مایل ×  (63360)';
                                                    result = val * (63360);
                                            
                                        }else if (madeSelection_1 ==='Yard' && madeSelection_2==='kilometre') {
                                                //formulvalue = '<span ><b>فرمول: </b></span> اینچ = مایل ×  (63360)';
                                                result = val / (1094);
                                        
                                        }else if (madeSelection_1 ==='Yard' && madeSelection_2==='Meter') {
                                            //formulvalue = '<span ><b>فرمول: </b></span> اینچ = مایل ×  (63360)';
                                            result = val / (1.094);
                                    
                                        }else if (madeSelection_1 ==='Yard' && madeSelection_2==='Centimeter') {
                                            //formulvalue = '<span ><b>فرمول: </b></span> اینچ = مایل ×  (63360)';
                                            result = val * (91.44);
                                    
                                        }else if (madeSelection_1 ==='Yard' && madeSelection_2==='Millimetre') {
                                            //formulvalue = '<span ><b>فرمول: </b></span> اینچ = مایل ×  (63360)';
                                            result = val * (914);
                                    
                                        }else if (madeSelection_1 ==='Yard' && madeSelection_2==='micrometres') {
                                            //formulvalue = '<span ><b>فرمول: </b></span> اینچ = مایل ×  (63360)';
                                            result = val * (914400);
                                    
                                        }else if (madeSelection_1 ==='Yard' && madeSelection_2==='Nanometre') {
                                            //formulvalue = '<span ><b>فرمول: </b></span> اینچ = مایل ×  (63360)';
                                            result = val * (9.144e+8);
                                    
                                        }else if (madeSelection_1 ==='Yard' && madeSelection_2==='Mile') {
                                            //formulvalue = '<span ><b>فرمول: </b></span> اینچ = مایل ×  (63360)';
                                            result = val / (1760);
                                    
                                        }else if (madeSelection_1 ==='Yard' && madeSelection_2==='Foot') {
                                                    //formulvalue = '<span ><b>فرمول: </b></span> فوت = یارد ×  (3)';
                                                    result = val * (3);
                                            
                                        }else if (madeSelection_1 ==='Yard' && madeSelection_2==='Inch') {
                                                    //formulvalue = '<span ><b>فرمول: </b></span> اینچ = یارد ×  (36)';
                                                    result = val * (36);
                                            
                                        }else if (madeSelection_1 ==='Foot' && madeSelection_2==='kilometre') {
                                            //formulvalue = '<span ><b>فرمول: </b></span> اینچ = یارد ×  (36)';
                                            result = val / (3281);
                                    
                                        }else if (madeSelection_1 ==='Foot' && madeSelection_2==='Meter') {
                                            //formulvalue = '<span ><b>فرمول: </b></span> اینچ = یارد ×  (36)';
                                            result = val / (3.281);
                                    
                                        }else if (madeSelection_1 ==='Foot' && madeSelection_2==='Centimeter') {
                                            //formulvalue = '<span ><b>فرمول: </b></span> اینچ = یارد ×  (36)';
                                            result = val * (30.48);
                                    
                                        }else if (madeSelection_1 ==='Foot' && madeSelection_2==='Millimetre') {
                                            //formulvalue = '<span ><b>فرمول: </b></span> اینچ = یارد ×  (36)';
                                            result = val * (305);
                                    
                                        }else if (madeSelection_1 ==='Foot' && madeSelection_2==='micrometres') {
                                            //formulvalue = '<span ><b>فرمول: </b></span> اینچ = یارد ×  (36)';
                                            result = val * (304800);
                                    
                                        }else if (madeSelection_1 ==='Foot' && madeSelection_2==='Nanometre') {
                                            //formulvalue = '<span ><b>فرمول: </b></span> اینچ = یارد ×  (36)';
                                            result = val * (3.048e+8);
                                    
                                        }else if (madeSelection_1 ==='Foot' && madeSelection_2==='Mile') {
                                            //formulvalue = '<span ><b>فرمول: </b></span> اینچ = یارد ×  (36)';
                                            result = val / (5280);
                                    
                                        }else if (madeSelection_1 ==='Foot' && madeSelection_2==='Yard') {
                                            //formulvalue = '<span ><b>فرمول: </b></span> اینچ = یارد ×  (36)';
                                            result = val / (3);
                                    
                                        }else if (madeSelection_1 ==='Foot' && madeSelection_2==='Inch') {
                                                    //formulvalue = '<span ><b>فرمول: </b></span> اینچ = فوت ×  (12)';
                                                    result = val * (12);
                                            
                                        }else if (madeSelection_1 ==='Inch' && madeSelection_2==='kilometre') {
                                            //formulvalue = '<span ><b>فرمول: </b></span> اینچ = فوت ×  (12)';
                                            result = val / (39370);
                                    
                                        }else if (madeSelection_1 ==='Inch' && madeSelection_2==='Meter') {
                                            //formulvalue = '<span ><b>فرمول: </b></span> اینچ = فوت ×  (12)';
                                            result = val / (39.37);
                                    
                                        }else if (madeSelection_1 ==='Inch' && madeSelection_2==='Centimeter') {
                                            //formulvalue = '<span ><b>فرمول: </b></span> اینچ = فوت ×  (12)';
                                            result = val * (2.54);
                                    
                                        }else if (madeSelection_1 ==='Inch' && madeSelection_2==='Millimetre') {
                                            //formulvalue = '<span ><b>فرمول: </b></span> اینچ = فوت ×  (12)';
                                            result = val * (25.4);
                                    
                                        }else if (madeSelection_1 ==='Inch' && madeSelection_2==='micrometres') {
                                            //formulvalue = '<span ><b>فرمول: </b></span> اینچ = فوت ×  (12)';
                                            result = val * (25400);
                                    
                                        }else if (madeSelection_1 ==='Inch' && madeSelection_2==='Nanometre') {
                                            //formulvalue = '<span ><b>فرمول: </b></span> اینچ = فوت ×  (12)';
                                            result = val * (2.54e+7);
                                    
                                        }else if (madeSelection_1 ==='Inch' && madeSelection_2==='Mile') {
                                            //formulvalue = '<span ><b>فرمول: </b></span> اینچ = فوت ×  (12)';
                                            result = val / (63360);
                                    
                                        }else if (madeSelection_1 ==='Inch' && madeSelection_2==='Yard') {
                                            //formulvalue = '<span ><b>فرمول: </b></span> اینچ = فوت ×  (12)';
                                            result = val / (36);
                                    
                                        }else if (madeSelection_1 ==='Inch' && madeSelection_2==='Foot') {
                                            //formulvalue = '<span ><b>فرمول: </b></span> اینچ = فوت ×  (12)';
                                            result = val / (12);}
                                    
                                        




    const setstate={result:result, formule:formulvalue}
    return setstate



    
}
export default Lengthfunc;



