console.log("DOm 1");
console.log(document.querySelector(" .box").innerHTML);
console.log(document.querySelector(" .container").innerHTML);
console.log(document.querySelector(" .container").innerText);
//outer html gives
console.log(document.querySelector(" .container").outerHTML);
console.log(document.querySelector(" .container").tagName);
console.log(document.querySelector(" .container").textContent);
// document.querySelector(" .box1").hidden = true;
document.querySelector(" .box").innerHTML = "What is new";
console.log(document.querySelector(" .box").getAttribute("style"));
document.querySelector(" .box").setAttribute("style", "background:yellow");
console.log(document.querySelector(" .box").attributes);
// document.querySelector(" .box").removeAttribute("style");
console.log(document.querySelector(" .box1").dataset);
//inserting element in html
//append insert in end of content
let div = document.createElement("div");
div.innerHTML = "I have been inserted by <b> Append</b>";
div.setAttribute("class", "created");
document.querySelector(".container").append(div);

//insert using prepend
let div3 = document.createElement("div");
div3.innerHTML = "I have been inserted by <b> Prepend</b>";
document.querySelector(".container").prepend(div3);
//insert using before
let div1 = document.createElement("div");
div1.innerHTML = "I have been inserted by <b> Before</b>";
document.querySelector(".container").before(div1);

//insert using after
let div2 = document.createElement("div");
div2.innerHTML = "I have been inserted by <b> After</b>";
document.querySelector(".container").after(div2);
//
let cont = document.querySelector(".container");
cont.insertAdjacentHTML("afterend", "<b> Good morning</b>");
cont.insertAdjacentHTML("afterbegin", "<b> Night Night</b>");
cont.insertAdjacentHTML("beforebegin", "<b> Good morning</b>");
cont.insertAdjacentHTML("beforeend", "<b> Night Night</b>");
document.querySelector(" .box").classList.toggle("box");
// document.querySelector(" .box").classList.toggle("box");
