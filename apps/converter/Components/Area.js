import React , {ReactDOM} from "react";
function AreaFunc(val,madeSelection_1,madeSelection_2) {
    var result,formulvalue;
    if (madeSelection_1 === madeSelection_2 ) {
         //formulvalue = '<span ><b>فرمول: </b></span> کیلومتر = کیلومتر';
        result = val;
        
    }else if (madeSelection_1 ==='Square kilometer' && madeSelection_2==='Square meter') {
             //formulvalue = '<span ><b>فرمول: </b></span> مترمربع = کیلومترمربع ×  (1e+6)';
            result = val * (1e+6);
    }else if (madeSelection_1 ==='Square kilometer' && madeSelection_2==='Square mile') {
             //formulvalue = '<span ><b>فرمول: </b></span> مایل مربع = کیلومترمربع ÷  (2.59)';
            result = val / (2.59);

    }
    else if (madeSelection_1 ==='Square kilometer' && madeSelection_2==='Square yard') {
             //formulvalue = '<span ><b>فرمول: </b></span> یارد مربع = کیلومترمربع ×  (1.196e+6)';
            result = val * (1.196e+6);

    }else if (madeSelection_1 ==='Square kilometer' && madeSelection_2==='Square foot') {
             //formulvalue = '<span ><b>فرمول: </b></span> فوت مربع = کیلومترمربع ×  (1.076e+7)';
            result = val * (1.076e+7);

    }else if (madeSelection_1 ==='Square kilometer' && madeSelection_2==='Square inch') {
             //formulvalue = '<span ><b>فرمول: </b></span> اینچ مربع = کیلومترمربع ×  (1.076e+7)';
            result = val * (1.076e+7);

    }else if (madeSelection_1 ==='Square kilometer' && madeSelection_2==='Hectare') {
             //formulvalue = '<span ><b>فرمول: </b></span> هکتار  = کیلومترمربع ×  (100)';
            result = val * (100);

    }else if (madeSelection_1 ==='Square kilometer' && madeSelection_2==='Acre') {
             //formulvalue = '<span ><b>فرمول: </b></span> جریب  = کیلومترمربع ×  (247)';
            result = val * (247);

    }else if (madeSelection_1 ==='Square meter' && madeSelection_2==='Square kilometer') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب  = کیلومترمربع ×  (247)';
        result = val / (1e+6);

} else if (madeSelection_1 ==='Square meter' && madeSelection_2==='Square mile') {
             //formulvalue = '<span ><b>فرمول: </b></span> مایل مربع = متر مربع ÷  (2.59)';
            result = val / (2.59e+6);

    }else if (madeSelection_1 ==='Square meter' && madeSelection_2==='Square yard') {
             //formulvalue = '<span ><b>فرمول: </b></span> یارد مربع  = متر مربع ×  (1.196)';
            result = val * (1.196);

    }else if (madeSelection_1 ==='Square meter' && madeSelection_2==='Square foot') {
             //formulvalue = '<span ><b>فرمول: </b></span> فوت مربع  = متر مربع ×  (10.764)';
            result = val * (10.764);

    }else if (madeSelection_1 ==='Square meter' && madeSelection_2==='Square inch') {
             //formulvalue = '<span ><b>فرمول: </b></span> اینچ مربع  = متر مربع ×  (1550)';
            result = val * (1550);

    }else if (madeSelection_1 ==='Square meter' && madeSelection_2==='Hectare') {
             //formulvalue = '<span ><b>فرمول: </b></span> هکتار = متر مربع ÷  (10000)';
            result = val / (10000);

    }else if (madeSelection_1 ==='Square meter' && madeSelection_2==='َAcre') {
             //formulvalue = '<span ><b>فرمول: </b></span> جریب = متر مربع ÷  (4047)';
            result = val / (4047);

    }else if (madeSelection_1 ==='Square mile' && madeSelection_2==='َSquare kilometer') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = متر مربع ÷  (4047)';
        result = val * (2.59);

    }else if (madeSelection_1 ==='Square mile' && madeSelection_2==='Square meter') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = متر مربع ÷  (4047)';
        result = val * (2.59e+6);

    }else if (madeSelection_1 ==='Square mile' && madeSelection_2==='Square yard') {
             //formulvalue = '<span ><b>فرمول: </b></span> یارد مربع = مایل مربع ×  (3.098e+6)';
            result = val * (3.098e+6);

    }
    else if (madeSelection_1 ==='Square mile' && madeSelection_2==='Square foot') {
             //formulvalue = '<span ><b>فرمول: </b></span> فوت مربع = مایل مربع ×  (2.788e+7)';
            result = val * (2.788e+7);

    }else if (madeSelection_1 ==='Square mile' && madeSelection_2==='Square inch') {
             //formulvalue = '<span ><b>فرمول: </b></span> اینچ مربع = مایل مربع ×  (4.014e+9)';
            result = val * (4.014e+9);

    }else if (madeSelection_1 ==='Square mile' && madeSelection_2==='Hectare') {
             //formulvalue = '<span ><b>فرمول: </b></span> هکتار  = مایل مربع ×  (259)';
            result = val * (259);

    }else if (madeSelection_1 ==='Square mile' && madeSelection_2==='َAcre') {
             //formulvalue = '<span ><b>فرمول: </b></span> جریب = مایل مربع ×  (640)';
            result = val * (640);

    }else if (madeSelection_1 ==='Square yard' && madeSelection_2==='Square kilometer') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = مایل مربع ×  (640)';
        result = val / (1.196e+6);

    }else if (madeSelection_1 ==='Square yard' && madeSelection_2==='Square meter') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = مایل مربع ×  (640)';
        result = val / (1.196);

    }else if (madeSelection_1 ==='Square yard' && madeSelection_2==='Square mile') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = مایل مربع ×  (640)';
        result = val / (3.098e+6);

    }else if (madeSelection_1 ==='Square yard' && madeSelection_2==='Square foot') {
             //formulvalue = '<span ><b>فرمول: </b></span> فوت مربع = یارد مربع ×  (9)';
            result = val * (9);

    }else if (madeSelection_1 ==='Square yard' && madeSelection_2==='Square inch') {
             //formulvalue = '<span ><b>فرمول: </b></span> اینچ مربع = یارد مربع ×  (1296)';
            result = val * (1296);

    }else if (madeSelection_1 ==='Square yard' && madeSelection_2==='Hectare') {
             //formulvalue = '<span ><b>فرمول: </b></span> هکتار  = یارد مربع ×  (1296)';
            result = val / (11960);

    }else if (madeSelection_1 ==='Square yard' && madeSelection_2==='َAcre') {
             //formulvalue = '<span ><b>فرمول: </b></span> جریب = یارد مربع ÷  (4840)';
            result = val / (4840);

    }else if (madeSelection_1 ==='Square yard' && madeSelection_2==='َAcre') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = یارد مربع ÷  (4840)';
        result = val / (4840);

    }else if (madeSelection_1 ==='Square foot' && madeSelection_2==='Square kilometer') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = یارد مربع ÷  (4840)';
        result = val / (4840);

    }else if (madeSelection_1 ==='Square foot' && madeSelection_2==='Square meter') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = یارد مربع ÷  (4840)';
        result = val / (4840);

    }else if (madeSelection_1 ==='Square foot' && madeSelection_2==='Square mile') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = یارد مربع ÷  (4840)';
        result = val / (4840);

    }else if (madeSelection_1 ==='Square foot' && madeSelection_2==='Square yard') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = یارد مربع ÷  (4840)';
        result = val / (4840);

    }else if (madeSelection_1 ==='Square foot' && madeSelection_2==='Square inch') {
             //formulvalue = '<span ><b>فرمول: </b></span> اینچ مربع = فوت مربع ×  (144)';
            result = val * (144);

    }else if (madeSelection_1 ==='Square foot' && madeSelection_2==='Hectare') {
             //formulvalue = '<span ><b>فرمول: </b></span> هکتار  = فوت مربع ÷  (107639)';
            result = val * (107639);

    }else if (madeSelection_1 ==='Square foot' && madeSelection_2==='َAcre') {
             //formulvalue = '<span ><b>فرمول: </b></span> جریب = فوت مربع ÷  (43560)';
            result = val / (43560);

    }else if (madeSelection_1 ==='Square inch' && madeSelection_2==='Square kilometer') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = فوت مربع ÷  (43560)';
        result = val / (1.55e+9);

    }else if (madeSelection_1 ==='Square inch' && madeSelection_2==='Square meter') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = فوت مربع ÷  (43560)';
        result = val / (1550);

    }else if (madeSelection_1 ==='Square inch' && madeSelection_2==='Square mile') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = فوت مربع ÷  (43560)';
        result = val / (4.014e+9);

    }else if (madeSelection_1 ==='Square inch' && madeSelection_2==='Square yard') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = فوت مربع ÷  (43560)';
        result = val / (1296);

    }else if (madeSelection_1 ==='Square inch' && madeSelection_2==='Square foot') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = فوت مربع ÷  (43560)';
        result = val / (144);

    }else if (madeSelection_1 ==='Square inch' && madeSelection_2==='Hectare') {
             //formulvalue = '<span ><b>فرمول: </b></span> هکتار = اینچ مربع ÷  (1.55e+7)';
            result = val / (1.55e+7);

    }else if (madeSelection_1 ==='Square inch' && madeSelection_2==='َAcre') {
             //formulvalue = '<span ><b>فرمول: </b></span> جریب = اینچ مربع ÷  (1.55e+7)';
            result = val / (1.55e+7);

    }else if (madeSelection_1 ==='Hectare' && madeSelection_2==='Square kilometer') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = اینچ مربع ÷  (1.55e+7)';
        result = val / (100);

    }else if (madeSelection_1 ==='Hectare' && madeSelection_2==='Square meter') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = اینچ مربع ÷  (1.55e+7)';
        result = val * (10000);

    }else if (madeSelection_1 ==='Hectare' && madeSelection_2==='Square mile') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = اینچ مربع ÷  (1.55e+7)';
        result = val / (259);

    }else if (madeSelection_1 ==='Hectare' && madeSelection_2==='Square yard') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = اینچ مربع ÷  (1.55e+7)';
        result = val * (11960);

    }else if (madeSelection_1 ==='Hectare' && madeSelection_2==='Square foot') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = اینچ مربع ÷  (1.55e+7)';
        result = val * (107639);

    }else if (madeSelection_1 ==='Hectare' && madeSelection_2==='Square inch') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = اینچ مربع ÷  (1.55e+7)';
        result = val * (1.55e+7);

    }else if (madeSelection_1 ==='Hectare' && madeSelection_2==='Hectare') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = اینچ مربع ÷  (1.55e+7)';
        result = val / (1.55e+7);

    }else if (madeSelection_1 ==='Hectare' && madeSelection_2==='َAcre') {
             //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
            result = val * (2.471);

    }else if (madeSelection_1 ==='َAcre' && madeSelection_2==='Square kilometer') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (2.471);

    }else if (madeSelection_1 ==='َAcre' && madeSelection_2==='Square meter') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (2.471);

    }else if (madeSelection_1 ==='َAcre' && madeSelection_2==='Square mile') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (2.471);

    }else if (madeSelection_1 ==='َAcre' && madeSelection_2==='Square yard') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (2.471);

    }else if (madeSelection_1 ==='َAcre' && madeSelection_2==='Square foot') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (2.471);

    }else if (madeSelection_1 ==='َAcre' && madeSelection_2==='Square inch') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (2.471);

    }else if (madeSelection_1 ==='َAcre' && madeSelection_2==='Hectare') {
         //formulvalue = '<span ><b>فرمول: </b></span> جریب = هکتار  ÷  (2.471)';
        result = val * (2.471);

    }
    const setstate={result:result, formule: formulvalue}
    return setstate
}


export default AreaFunc;

