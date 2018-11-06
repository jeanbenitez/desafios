import { lisp } from './lisp';

/*
 * I'm probably misusing terminology here, but function calls in Lisp take the form of lists, enclosed in brackets (), where the first item is the name of the function, and the other items are its arguments.

Create a function that takes a lisp expression as a string, and returns the result of evaluating the expression.
An expression can be:

 - An integer, like "42"
 - A function call, like ""(add 19 23)"
 - Arguments to function calls can be other function calls, like "(add (mul 4 4) (div 52 2))"

Your program should know how to execute the following functions:
 - "(add a b)" returns a + b
 - "(sub a b)" returns a - b
 - "(mul a b)" returns a * b
 - "(div a b)" returns a / b. The input will always be constructed so that the result of the division is an integer.
 - "(sqrt x)" returns the square root of x.

To make it a little bit easier, the input string will not contain negative numbers.
 */

describe('lisp', () => {
  it('Returns a simple number', () => {
    expect(lisp("31415926535")).toEqual(31415926535)
  });

  it('Handles a simple addition', () => {
    expect(lisp("(add 9 128)").toEqual(137))
  });

  it('Handles a simple subtraction', () => {
    expect(lisp("(sub 1337 40)").toEqual(1297))
  });
  
  it('Handles a simple multiplication', () => {
    expect(lisp("(mul 9 13)").toEqual(117))
  });
  
  it('Handles a simple square root', () => {
    expect(lisp("(sqrt 144)").toEqual(12))
  });
  
  it('Handles a more complex expression', () => {
    expect(lisp("(sqrt (add (sqrt (mul 25 (div 18 2))) (sub 12345678 12345677)))").toEqual(4))
  });
});
