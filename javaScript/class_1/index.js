const item_1 = "Test one";
console.log(item_1);
let age = 18;
let num = 2;
console.log("Arithmetic Operators");
console.log(age + num);
console.log(age - num);
console.log(age * num);
console.log(age / num);
console.log(age ** num);
console.log(age % num);
console.log("Assignment Operators");
console.log("age", age, "num", num);
console.log("+=", (age += num));
console.log("age", age, "num", num);
console.log("-=", (age -= num));
console.log("*=", (age *= num));
console.log("/=", (age /= num));
console.log("==", age == num);
console.log("%=", (age %= num));
console.log("age", age, "num", num);
console.log("Comparison Operators");
const num_one = 2;
const num_two = 2;
console.log("equal to ==", num_one == num_two);
console.log("not equal to !=", num_one != num_two);
console.log("equal value and type ===", "num_one" === num_two);
console.log("not equal value and not equal type !==", num_one !== num_two);
console.log("grater than >", num_one > num_two);
console.log("Less than <", num_one < num_two);
console.log("grater than or equal to >=", num_one >= num_two);
console.log("Less than or equal to <=", num_one <= num_two);
console.log("Turnary operator ?");

console.log("Logical operators");
console.log("Logical and &&");
console.log("Logical or ||");
console.log("Logical not !");

const Current_age = 8;
if (Current_age == 18) {
  console.log("You are adult");
} else if (Current_age < 18) {
  console.log("you are not adult");
} else if (Current_age >= 90) {
  console.log("you are too old");
} else {
  console.log("LIfe is beautiful");
}
const a = 8;
const b = 9;
const c = a > b ? a - b : b - a;
console.log(c);
