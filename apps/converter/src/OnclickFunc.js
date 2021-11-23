import React from "zarkit/react";
function OnclickFunc(){
            var x,x1,list,notlist,notlis,note, index,onlist,testElement;
            x1 = document.querySelector('#myselect').value;
            list = document.getElementsByClassName(x1);
            notlist=document.querySelectorAll('.pic mwc-list-item');
            document.getElementById('src').value=list[0].value;
            document.getElementById('dest').value=list[1].value;
            notlis = Object.values(notlist).filter(val => val.className!==x1);
            for (index = 0; index < notlis.length; ++index) {
                notlis[index].style.cssText += 'display:none;';
            }
            for (index = 0; index < list.length; ++index) {
                list[index].style.cssText += 'display:block;';
            }
            
                

}

export default OnclickFunc;