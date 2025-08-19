import { movingAverage } from '../stats.js';

describe('movingAverage', () => {
  test('calcula correctamente la media móvil con ventana 2', () => {
    expect(movingAverage([10, 20, 30, 40], 2)).toEqual([15.00, 25.00, 35.00]);
  });

  test('calcula correctamente la media móvil con ventana igual al tamaño del arreglo', () => {
    expect(movingAverage([1, 2, 3], 3)).toEqual([2.00]);
  });

  test('redondea correctamente a 2 decimales', () => {
    expect(movingAverage([1, 2, 3, 4], 2)).toEqual([1.5, 2.5, 3.5]);
    expect(movingAverage([1, 2, 4, 8], 2)).toEqual([1.5, 3, 6]);
  });

  test('lanza RangeError cuando la ventana es menor a 2', () => {
    expect(() => movingAverage([1, 2, 3], 1)).toThrow(RangeError);
  });

  test('lanza RangeError cuando la ventana es mayor que el tamaño del arreglo', () => {
    expect(() => movingAverage([1, 2, 3], 4)).toThrow(RangeError);
  });

  test('lanza TypeError cuando la ventana no es un número entero', () => {
    expect(() => movingAverage([1, 2, 3], 2.5)).toThrow(TypeError);
    expect(() => movingAverage([1, 2, 3], '2')).toThrow(TypeError);
  });

  test('lanza TypeError cuando la serie contiene valores no numéricos', () => {
    expect(() => movingAverage([1, 'a', 3], 2)).toThrow(TypeError);
    expect(() => movingAverage([1, NaN, 3], 2)).toThrow(TypeError);
    expect(() => movingAverage([1, Infinity, 3], 2)).toThrow(TypeError);
  });
});
