import formule from '../data/formula';

function OnclickFunc() {
  let index;
  const topSelectionVal = document.querySelector('#mySelect').value;
  const list = document.getElementsByClassName(topSelectionVal);
  const notList = document.querySelectorAll('.pic mwc-list-item');
  const newList = Object.values(notList).filter((val) => val.className !== topSelectionVal);
  for (index = 0; index < newList.length; index += 1) {
    newList[index].style.cssText += 'display:none;';
  }
  for (index = 0; index < list.length; index += 1) {
    list[index].style.cssText += 'display:block;';
  }
  document.getElementById('src').value = list[0].value;
  document.getElementById('dest').value = list[1].value;
  const srcVal = document.getElementById('src').value;
  const destVal = document.getElementById('dest').value;
  const val = document.getElementById('valueSrc').value;
  if (topSelectionVal === 'temperature') {
    document.getElementById('valueDest').value = formule[topSelectionVal][srcVal][destVal](val);
  } else {
    document.getElementById('valueDest').value =
      val * (formule[topSelectionVal][srcVal] / formule[topSelectionVal][destVal]);
  }
}

export default OnclickFunc;
