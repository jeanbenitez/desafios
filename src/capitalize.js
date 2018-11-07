export const capitalize = (data) => {
  let dat = data.toLowerCase();
  if (data.constructor === String) {
    if (data.length <= 0)
      throw "Cadena vacía";
    return dat.replace(/^\w/, (c) => c.toUpperCase());
  } else throw `Argumento inválido, no se reciben ${data.constructor}.`;
};
