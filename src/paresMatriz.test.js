import { paresMatriz } from './paresMatriz';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(paresMatriz()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(paresMatriz()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(paresMatriz()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(paresMatriz()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { paresMatriz(); }).toThrow();
 */

describe('paresMatriz', () => {
  it('paresMatriz debe hacer esto...', () => {
    expect(paresMatriz([[4,1], [1,6]])).toEqual([8,1,1,12]);
    expect(paresMatriz([[5,6,10], [1,6,4],[2,8,9]])).toEqual([5,12,20,1,12,8,4,16,9]);
  });

  it('paresMatriz Debe arrojar un error con los siguientes parametros incorrectos', () => {
    expect(() => paresMatriz([[1,1], [2,1], [1,4]])).toThrow(); // Matrix no cuadrada
  });
});
