let num1 = Number(prompt("enter the number 1 😊😊"));
let num2 = Number(prompt("enter the number 2 👌👌"));
let sel = Number(
  prompt(`Choose the following for operations :
1 ==> For ADDITION
2 ==> For SUBTRAION
3 ==> For EXPONENTIAL
4 ==> For DIVISION 
`)
);
let r_num = Math.random();
// console.log(a)
if (r_num < 0.1) {
  if (sel == 1) {
    console.log(num1 - num2);
  } else if (sel == 2) {
    console.log(num1 / num2);
  } else if (sel == 3) {
    console.log(num1 + num2);
  } else if (sel == 4) {
    console.log(num1 ** num2);
  } else {
    console.log(
      "Invalid input !! Enter the selection for the operator correctly . 👍"
    );
  }
} else {
  if (sel == 1) {
    console.log(num1 + num2);
  } else if (sel == 2) {
    console.log(num1 - num2);
  } else if (sel == 3) {
    console.log(num1 ** num2);
  } else if (sel == 4) {
    console.log(num1 / num2);
  } else {
    console.log(
      "Invalid input !! Enter the selection for the operator correctly . 👍"
    );
  }
}
