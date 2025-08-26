console.log("Exercise 3");

// Write a program to calculate factorial of a number using reduce and using for loops

// 6! = 6*5*4*3*2*1

let a = 6;
function factorial(number) {
  let arr = Array.from(Array(number + 1).keys());
  console.log(arr);
  console.log(arr.slice(1));
  let c = arr.slice(1).reduce((a, b) => {
    return a * b;
  });
  return c;
  console.log(c);
}
console.log(factorial(a));
//For loop
function facFor(number) {
  let fac = 1;
  for (let index = 1; index <= number; index++) {
    fac = fac * index;
  }
  return fac;
}
console.log(facFor(a));
