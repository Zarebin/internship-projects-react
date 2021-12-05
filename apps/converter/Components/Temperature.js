function TemperatureFunc(value, madeSelection1, madeSelection2) {
  let result;
  const val = Number(value);
  if (madeSelection1 === madeSelection2) {
    result = val;
  } else if (madeSelection1 === 'celsius' && madeSelection2 === 'fahrenheit') {
    result = (val * (9.5) + 32);
  } else if (madeSelection1 === 'celsius' && madeSelection2 === 'kelvin') {
    result = (val + (273.15));
  } else if (madeSelection1 === 'fahrenheit' && madeSelection2 === 'celsius') {
    result = (val - (32)) * 5.9;
  } else if (madeSelection1 === 'fahrenheit' && madeSelection2 === 'kelvin') {
    result = ((val - (32)) * 5.9) + 273.15;
  } else if (madeSelection1 === 'kelvin' && madeSelection2 === 'celsius') {
    result = (val - (273.15));
  } else if (madeSelection1 === 'kelvin' && madeSelection2 === 'fahrenheit') {
    result = ((val - (273.15)) * 9.5) + 32;
  }

  return result;
}
export default TemperatureFunc;
