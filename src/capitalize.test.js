import { capitalize } from './capitalize';

describe('capitalize', () => {
  it('Debe convertir el primer carácter de una cadena a mayúsculas y minúsculas a todos los demás caracteres', () => {
    expect(capitalize('hello World')).toEqual('Hello world');
    expect(capitalize('uNiversiDAD del MAGDaLENa')).toEqual('Universidad del magdalena');
  });

  it('Debe arrojar un error con los siguientes parametros incorrectos', () => {
    expect(() => capitalize('')).toThrow();
    expect(() => capitalize(1)).toThrow();
    expect(() => capitalize(['foo'])).toThrow();
    expect(() => capitalize({ bar: 1 })).toThrow();
  });
});
