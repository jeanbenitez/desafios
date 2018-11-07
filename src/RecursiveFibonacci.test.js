import { RecursiveFibonacci } from './RecursiveFibonacci';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(RecursiveFibonacci()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(RecursiveFibonacci()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(RecursiveFibonacci()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(RecursiveFibonacci()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { RecursiveFibonacci(); }).toThrow();
 */

describe('RecursiveFibonacci', () => {
  it('RecursiveFibonacci debe hacer esto...', () => {
    expect(RecursiveFibonacci(9).toEqual([0,1,1,2,3,5,8,13,21,34]))
  });

  it('RecursiveFibonacci debe hacer esto otro...', () => {
    expect(() => { RecursiveFibonacci('9'); }).toThrow();
    expect(() => { RecursiveFibonacci(0); }).toThrow();
    expect(() => { RecursiveFibonacci('asdas'); }).toThrow();
    expect(() => { RecursiveFibonacci(true); }).toThrow();
    expect(() => { RecursiveFibonacci({}); }).toThrow();
    expect(() => { RecursiveFibonacci([]); }).toThrow();
  });
});
