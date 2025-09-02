console.log("Javascript Dom");
document.title = "Harry is good";
console.log(document.title);
console.log((document.body.style.background = "gray"));
const cont = document.body.childNodes[1];
cont.firstElementChild.style.color = "red";
cont.lastElementChild.style.color = "blue";
cont.lastElementChild.parentElement.style.margin = "5px";
document.body.firstElementChild.children[3].style.background = "white";
document.body.firstElementChild.children[3].previousElementSibling.style.background =
  "yellow";
document.body.firstElementChild.children[3].nextElementSibling.style.background =
  "pink";
console.log(document.body.firstElementChild.children);
const tab = document.body.children[1];
tab.rows;
//
let boxes = document.getElementsByClassName("box1");
console.log(boxes);
boxes[2].style.background = "skyblue";
document.getElementById("box2").style.background = "pink";

document.querySelector(".box1").style.background = "white";
document.querySelectorAll(".box1").forEach((e) => {
  e.style.color = "green";
});
let test = document.getElementsByTagName("div");
console.log("Div", test);
console.log(test[7].matches("#box2"));
console.log(test[8].matches("#box2"));
let test1 = document
  .querySelector(".container")
  .contains(document.querySelector("body"));
console.log("contains", test1);
let test2 = document
  .querySelector("body")
  .contains(document.querySelector(".container"));
console.log("contains...", test2);
