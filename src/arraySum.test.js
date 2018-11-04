import { arraySum } from './arraySum';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(arraySum()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(arraySum()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(arraySum()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(arraySum()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { arraySum(); }).toThrow();
 */

describe('arraySum', () => {
  it('arraySum - Enteros positivos', () => {
    expect(arraySum([1, 2, 3])).toEqual(6);
  });

  it('arraySum - Enteros negativos', () => {
    expect(arraySum([-1, -2, -3])).toEqual(-6);
  });

  it('arraySum - Array vacios', () => {
    expect(arraySum([])).toEqual(0);
  });

  it('arraySum - El parametro no es un array', () => {
    expect(() => { arraySum(123); }).toThrow();
    expect(() => { arraySum("abc"); }).toThrow();
  });

  it('arraySum - El parametro no es un array de numeros', () => {
    expect(() => { arraySum(['a', 'b', 'c']); }).toThrow();
    expect(() => { arraySum([1, 'b', 'c']); }).toThrow();
  });
});
