import { keysToArray } from './keysToArray';

describe('keysToArray', () => {
  it('keysToArray debe hacer esto...', () => {
    expect(keysToArray({ hola: 'mundo' })).toEqual(['hola']);
  });

  it('keysToArray debe arrojar errores con malos argumentos...', () => {
    expect(() => { keysToArray({}); }).toThrow(); // object without keys
    expect(() => { keysToArray(); }).toThrow();
    expect(() => { keysToArray([90]); }).toThrow();
    expect(() => { keysToArray("what"); }).toThrow();
    expect(() => { keysToArray(true); }).toThrow();
  });
});
