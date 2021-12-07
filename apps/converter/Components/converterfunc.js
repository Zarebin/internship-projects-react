import formule from '../data/formula';

function ConverterFunc(topSelect, val, madeSelection1, madeSelection2) {
  let result;
  const value = Number(val);
  if (madeSelection1 === madeSelection2) {
    result = value * 1;
  } else if (typeof formule[topSelect][madeSelection1][madeSelection2] === 'function') {
    result = formule[topSelect][madeSelection1][madeSelection2](value);
  } else {
    result = value * (formule[topSelect][madeSelection1] / formule[topSelect][madeSelection2]);
  }
  return result;
}
export default ConverterFunc;
