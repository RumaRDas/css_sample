/* Create a faulty calculator using JavaScript
This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:
+ ---> -
* ---> +
- ---> /
/ ---> **
It performs wrong operation 10% of the times

*/

let random = Math.random();
console.log(random);
let num1 = prompt("Enter your First number");
let num2 = prompt("Enter your Second number");
let ope = prompt("Enter Operation");
//what operation to do create a object
let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};
//If ope is a variable holding a string, obj[ope] looks inside the object and
//finds the value that matches the key.

if (random < 0.1) {
  //Perform correct calculation
  console.log("Correct Cal" + ope);
  alert(`The result is ${eval(`${num1} ${ope} ${num2}`)}`);
} else {
  //Perform wrong calculation
  ope = obj[ope];
  console.log("Wrong Cal" + ope);
  alert(`The result is ${eval(`${num1} ${ope} ${num2}`)}`);
}
