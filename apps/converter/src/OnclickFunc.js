import React from "zarkit/react";
const {formule} = require('../data/formula.js');
import TemperatureFunc from "../Components/Temperature .js";
function OnclickFunc(){
            var topselectionval,list,notlist,newlist,index,srcval,destval,val;
            topselectionval = document.querySelector('#myselect').value;
            console.log('myselect',topselectionval);
            list = document.getElementsByClassName(topselectionval);
            console.log(list[0]);
            notlist=document.querySelectorAll('.pic mwc-list-item');
            newlist = Object.values(notlist).filter(val => val.className!==topselectionval);
            for (index = 0; index < newlist.length; ++index) {
                newlist[index].style.cssText += 'display:none;';
            }
            for (index = 0; index < list.length; ++index) {
                list[index].style.cssText += 'display:block;';
            }
            document.getElementById('src').value=list[0].value;
            document.getElementById('dest').value=list[1].value;
            srcval=document.getElementById('src').value;
            destval=document.getElementById('dest').value;
            val=document.getElementById('valuesrc').value;
            if (topselectionval == 'temperature'){
                document.getElementById('valuedest').value=TemperatureFunc(val,srcval,destval)
            }else{
                document.getElementById('valuedest').value=val * (formule[topselectionval][srcval]/formule[topselectionval][destval]);
            }
            console.log('top',topselectionval);
            console.log('srcval',srcval);
            console.log('destval',destval);
            console.log('val',val);
            
                
            
}

export default OnclickFunc;