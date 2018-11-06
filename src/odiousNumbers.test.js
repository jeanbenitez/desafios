import {
  odiousNumbers
} from './odiousNumbers';

describe('odiousNumbers', () => {
  it('returns odious numbers for specified range', () => {
    expect(odiousNumbers(0, 50)).toEqual([1, 2, 4, 7, 8, 11, 13, 14, 16, 19, 21, 22, 25, 26, 28, 31, 32, 35, 37, 38, 41, 42, 44, 47, 49, 50]);
    expect(odiousNumbers(30, 80)).toEqual([31, 32, 35, 37, 38, 41, 42, 44, 47, 49, 50, 52, 55, 56, 59, 61, 62, 64, 67, 69, 70, 73, 74, 76, 79]);
    expect(odiousNumbers(1, 2)).toEqual([1, 2]);
  });
});
