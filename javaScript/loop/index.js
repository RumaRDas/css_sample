console.log("loops");
let num = 10;
num = num + 2;
console.log("NUM", num);
console.log("For loop");
for (i = 1; i <= num; i += 2) {
  console.log(i);
}
console.log();
console.log("Foreach");
const num_Array = [2, 3, 6, 9, 10, 100];
num_Array.forEach((data) => {
  console.log(data);
});

let obj = {
  name: "Harry",
  role: "Programmer",
  company: "Codewith Harry AI",
};
console.log("For in loop");
for (const key in obj) {
  const element = obj[key];
  console.log(key, element);
}
