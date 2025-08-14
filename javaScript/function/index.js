console.log("Function");

function greeting(name) {
  console.log("Hey" + name + "how are you");
}
greeting("Harry");
function sum(a, b, c = 3) {
  //   console.log(a + b+c);
  return a + b + c;
}
const result = sum(2, 6);
const result_1 = sum(2, 6, 5);
console.log("Result", result);
console.log("Result_1", result_1);
const func1 = (x) => {
  console.log("I am a arrow function", x);
};
func1(34);
