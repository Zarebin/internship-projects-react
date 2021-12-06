
import formule from '../data/formula';

function Converterfunc(topselect, val, madeselection1, madeselection2) {
  let result;
  if (madeselection1 === madeselection2) { result = val * 1; } 
  else if (topselect === 'temperature') { result = formule[topselect][madeselection1][madeselection2](val) } 
  else {
    result = val * (formule[topselect][madeselection1] / formule[topselect][madeselection2]);
  }
  return result;
}
export default Converterfunc;
