function movingAverage(series, window) {
  // Validar que la serie sea un arreglo
  if (!Array.isArray(series)) {
    throw new TypeError('La serie debe ser un arreglo');
  }

  // Validar que la ventana sea un número entero
  if (typeof window !== 'number' || !Number.isInteger(window)) {
    throw new TypeError('La ventana debe ser un número entero');
  }

  // Validar el rango de la ventana
  if (window < 2 || window > series.length) {
    throw new RangeError('La ventana debe estar entre 2 y la longitud de la serie');
  }

  // Validar que todos los elementos sean números
  if (!series.every(element => typeof element === 'number' && Number.isFinite(element))) {
    throw new TypeError('Todos los elementos de la serie deben ser números finitos');
  }

  const result = [];
  
  // Calcular la media móvil
  for (let i = 0; i <= series.length - window; i++) {
    const windowSlice = series.slice(i, i + window);
    const sum = windowSlice.reduce((acc, val) => acc + val, 0);
    const average = sum / window;
    // Redondear a 2 decimales
    result.push(Math.round(average * 100) / 100);
  }

  return result;
}

export { movingAverage };