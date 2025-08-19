import { toCelsius, toFahrenheit } from '../temperature.js';

describe('Temperature Conversion Functions', () => {
  describe('toCelsius', () => {
    test('convierte 32°F a 0°C', () => {
      expect(toCelsius(32)).toBe(0);
    });

    test('convierte 212°F a 100°C', () => {
      expect(toCelsius(212)).toBe(100);
    });

    test('convierte -40°F a -40°C', () => {
      expect(toCelsius(-40)).toBe(-40);
    });

    test('redondea correctamente a 1 decimal', () => {
      expect(toCelsius(70)).toBe(21.1); // 21.111...
      expect(toCelsius(80)).toBe(26.7); // 26.666...
    });

    test('lanza TypeError para entrada no numérica', () => {
      expect(() => toCelsius('no es un número')).toThrow(TypeError);
      expect(() => toCelsius(NaN)).toThrow(TypeError);
      expect(() => toCelsius(Infinity)).toThrow(TypeError);
    });
  });

  describe('toFahrenheit', () => {
    test('convierte 0°C a 32°F', () => {
      expect(toFahrenheit(0)).toBe(32);
    });

    test('convierte 100°C a 212°F', () => {
      expect(toFahrenheit(100)).toBe(212);
    });

    test('convierte -40°C a -40°F', () => {
      expect(toFahrenheit(-40)).toBe(-40);
    });

    test('redondea correctamente a 1 decimal', () => {
      expect(toFahrenheit(20)).toBe(68.0); // 68.0 exacto
      expect(toFahrenheit(37)).toBe(98.6); // 98.6 exacto
    });

    test('lanza TypeError para entrada no numérica', () => {
      expect(() => toFahrenheit('no es un número')).toThrow(TypeError);
      expect(() => toFahrenheit(NaN)).toThrow(TypeError);
      expect(() => toFahrenheit(Infinity)).toThrow(TypeError);
    });
  });
});
