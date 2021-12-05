import TemperatureFunc from '../Components/Temperature';
import formule from '../data/formula';

function OnclickFunc() {
  let index;
  const topselectionval = document.querySelector('#myselect').value;
  const list = document.getElementsByClassName(topselectionval);
  const notlist = document.querySelectorAll('.pic mwc-list-item');
  const newlist = Object.values(notlist).filter((val) => val.className !== topselectionval);
  for (index = 0; index < newlist.length; index += 1) {
    newlist[index].style.cssText += 'display:none;';
  }
  for (index = 0; index < list.length; index += 1) {
    list[index].style.cssText += 'display:block;';
  }
  document.getElementById('src').value = list[0].value;
  document.getElementById('dest').value = list[1].value;
  const srcval = document.getElementById('src').value;
  const destval = document.getElementById('dest').value;
  const val = document.getElementById('valuesrc').value;
  if (topselectionval === 'temperature') {
    document.getElementById('valuedest').value = TemperatureFunc(val, srcval, destval);
  } else {
    document.getElementById('valuedest').value = val * (formule[topselectionval][srcval] / formule[topselectionval][destval]);
  }
}

export default OnclickFunc;
