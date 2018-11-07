export const capitalize = (data) => {
  let dat = data.toLowerCase();

  if (typeof data === 'number')
    throw "No se aceptan números";
  if (typeof data === 'object')
    throw "No se aceptan objectos";
  if (typeof data === 'array')
    throw "No se aceptan arreglos";
  if (data.length <= 0)
    throw "Cadena incorrecta";

  return dat.replace(/^\w/, (c) => c.toUpperCase());
};
