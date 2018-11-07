# Desafios Javascript

El objetivo de este repositorio es programar, practicar y aprender Javascript, ademas de obtener toda la práctica de contribuir en un repositorio de código abierto.

## Instalación

0. Asegurate de tener instalado node v8.0.0 o superior, y npm ó yarn.
1. Debes hacer FORK del repositorio. No clones éste repositorio, porq no vas a poder hacer push directos.
2. Clona tu fork y ve al directorio del mismo
3. En la terminal, ejecuta este comando 
```bash
# Instalar dependencias con npm
npm i
```
```bash
# Instalar dependencias con yarn
yarn
```

## Cómo participar?

1. Busca un issue/desafío que esté como **no asignado** aun
2. Implementar una solución pasando los archivos agregados por el lint y por el test (en la terminal usa `npm run lint src/laFuncion.js src/nuevoDesafio.test.js` and `npm run test src/nuevoDesafio.test.js`)
3. Agrega un test case para el nuevo issue/desafío que vayas a proponer. Puedes usar `npm run generate <nombre_funcion>` para crear los dos nuevos archivos que necesitas agregar.
4. Crea un **Pull Request**
5. Crea el issue/desafío que vas a agregar

## Reglas

- Cada PR debe tener **exactamente 3 archivos**: Tu solución, y 2 archivos mas para tu nuevo desafío. Todos los Pull Request que sigan ésta regla podrán ser cerrado **automáticamente**.
- Si demoras mucho tiempo en desarrollar tu solución, se te des-asignará el desafío.
- Asegúrate de que tu solución pase los test y el linter antes de hacer el Pull Request.
- No podrás usar paquetes NPM, ni ninguna libreria externa, tus soluciones deben contener JS puro.

## Archivos

Al correr `npm run generate laFuncion`, generarás dos archivos.

Solo necesitas editar el **test file**, la implementación de la solución al problema que plantées la hará alguien mas! :D

**laFuncion.js**:

```js
export const laFuncion = () => {
  // SE IMPLEMENTARA EN OTRO PR
};
```

**laFuncion.test.js**:

```js
import { laFuncion } from './laFuncion';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(laFuncion()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(laFuncion()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(laFuncion()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(laFuncion()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { laFuncion(); }).toThrow();
 */

describe('laFuncion', () => {
  it('laFuncion debe hacer esto...', () => {
    // TODO Your own assertion here
  });

  it('laFuncion debe hacer esto otro...', () => {
    // TODO Your own assertion here
  });
});
```
