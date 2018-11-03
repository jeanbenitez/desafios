import { diaSemana } from './diaSemana';

describe('diaSemana', () => {
  it('diaSemana', () => {
    expect(diaSemana('Wed', 2)).toEqual('Fri');
    expect(diaSemana('Sat', 23)).toEqual('Mon');
    expect(diaSemana('Tue', 0)).toEqual('Tue');
  });

  it('diaSemana - argumentos invalidos', () => {
    expect(() => diaSemana('hello', 33)).toThrow();
    expect(() => diaSemana('Sat')).toThrow();
    expect(() => diaSemana()).toThrow();
  });
});
