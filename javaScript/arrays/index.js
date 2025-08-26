console.log("Arrays");
let arr = ["old", "red", "blue", 6, 900, true, "new", "Black"];
console.log(arr);
//Push [add data ends in array]
arr.push("Yellow");
console.log(arr);
console.log(arr[2]);
console.log(arr.length);
//Tostring
console.log("To string", arr.toString());
//pop (Take item from ends )
const arr_pop = arr.pop();
console.log(arr);
console.log("Pop", arr_pop);
console.log(arr.length);
//shift take out from beginning data
const arr_shift = arr.shift();
console.log("shift :", arr_shift);
console.log(arr);
//unshift add data from beginning data
const arr_unshift = arr.unshift("Pink");
console.log("shift :", arr_shift);
console.log(arr);
//splice
arr.splice(2, 2);
console.log("splise", arr);
//Join
console.log("Join: ", arr.join(" and "));

//Delete data from array
console.log(arr);
console.log("Delete", delete arr[2]);
console.log(arr);
//Concating multiple array
const a = [2, 5, 7];
const b = [3, 8, 9];
const c = a.concat(b);
console.log("Concat", c);
//short
console.log("Sort :", c.sort());
//reverse
console.log("Reverse :", c.reverse());
//slice
console.log("Slice ", c.slice(2, 5));
//For Loop in array
for (let index = 0; index < c.length; index++) {
  const element = c[index];
  console.log("FOR LOOPs", element);
}
//ForEach
c.forEach((value, index, arr) => {
  console.log("Value: ", index, ": ", value);
  console.log("array: ", arr);
});
//for in for object
let obj = {
  a: "Harry",
  b: "Jones",
  c: "Bob",
};
for (const key in obj) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    console.log(key, element);
  }
}
//for of for array
for (const value of arr) {
  console.log("For of", value);
}
//Map
const color = ["Orange", "Gray", "White"];
color.map((value) => {
  console.log(value);
});
//creating new array
let newArr = [];
for (let index = 0; index < c.length; index++) {
  const data = c[index];
  newArr.push(data ** 2);
}
console.log(c);
console.log(newArr);
//creating new array with map
let newArray = c.map((value, index, array) => {
  console.log(index, ":", value, ":", array);
  return value ** 2;
});
console.log(newArray);
//Filter
const greaterThanSeven = (e) => {
  if (e > 7) {
    return true;
  }
  return false;
};
console.log(c.filter(greaterThanSeven));
c.filter((e) => {
  if (e < 7) {
    console.log("Filter", e);
  }
  return false;
});
//Reduce
const arr2 = [1, 2, 3, 4, 5, 6];
const red = (a, b) => {
  return a * b;
};
console.log(arr2.reduce(red));
//Array From
console.log(Array.from("Harry"));
