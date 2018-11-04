import { keysToArray } from './keysToArray';er

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(keysToArray()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(keysToArray()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(keysToArray()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(keysToArray()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { keysToArray(); }).toThrow();
 */

describe('keysToArray', () => {
  it('keysToArray debe hacer esto...', () => {
    expect(keysToArray({ hola: 'mundo' })).toEqual(['hola']);
  });

  it('keysToArray debe arrojar errores con malos argumentos...', () => {
    expect(() => { keysToArray(); }).toThrow();
    expect(() => { keysToArray([90]); }).toThrow();
    expect(() => { keysToArray("what"); }).toThrow();
  });
});
