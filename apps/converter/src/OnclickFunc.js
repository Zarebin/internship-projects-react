import React from "zarkit/react";
function OnclickFunc(){
            var x,x1,list,notlist,notlis,note, index,onlist,testElement;
            x1 = document.querySelector('#myselect').value;
            console.log('xalan',x1);
            list = document.getElementsByClassName(x1);
            notlist=document.querySelectorAll('.pic mwc-list-item');
            console.log(list.length);
            console.log(notlist.length);
            notlis = Object.values(notlist).filter(val => val.className!==x1);
            console.log(notlis.length);
            for (index = 0; index < notlis.length; ++index) {
                notlis[index].style.cssText += 'display:none;';
            }
            for (index = 0; index < list.length; ++index) {
                list[index].style.cssText += 'display:block;';
            }
            
                

}

export default OnclickFunc;