export const keysToArray = (obj) => {
  
  if (obj.constructor === Object && Object.keys(obj).length !== 0) {
    let array = new Array
    for (let key in obj) {
      array.push(key)
    }
    return array
  }
  throw new Error(`Parámetro inválido ${obj.constructor}`)
};
