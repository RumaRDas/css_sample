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
  console.log("key", key);
  const element = obj[key];
  console.log("element", element);
}

console.log("For of loop");
for (const c of "Harry") {
  console.log("C", c);
}
//if key is there use for object
// if element or iterator use for array
const color = ["red", "blue", "green"];
for (const elem of color) {
  console.log(elem);
}
console.log("While loop");
let j = 5;
while (j < 6) {
  console.log(j);
  j++;
}
console.log("While loop");
let k = 0;
while (k < 6) {
  console.log(k);
  k++;
}
console.log("DO While");
let g = 10;
do {
  console.log(g);
  g++;
} while (g <= 6);
