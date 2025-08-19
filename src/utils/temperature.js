
function toCelsius(f) {
  if (typeof f !== 'number' || !Number.isFinite(f)) {
    throw new TypeError('La temperatura debe ser un número finito');
  }
  const celsius = (f - 32) * 5/9;
  return Math.round(celsius * 10) / 10; // Redondeo a 1 decimal
}


function toFahrenheit(c) {
  if (typeof c !== 'number' || !Number.isFinite(c)) {
    throw new TypeError('La temperatura debe ser un número finito');
  }
  const fahrenheit = (c * 9/5) + 32;
  return Math.round(fahrenheit * 10) / 10; // Redondeo a 1 decimal
}

export { toCelsius, toFahrenheit };