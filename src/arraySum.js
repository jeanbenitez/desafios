export const arraySum = (arr) => {
  if (!Array.isArray(arr) || arr.some(i => i !== +i)) {
    throw new Error();
  }
  return arr.reduce((a,b) => a + b, 0);
};
