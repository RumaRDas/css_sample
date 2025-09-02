console.log("Exercise4");
const color = ["red", "blue", "green", "white", "pink"];
let ran1 = Math.floor(1 + Math.random() * 5);
document.getElementById("box1").style.background =
  color[Math.floor(Math.random() * 5)];
document.getElementById("box2").style.background =
  color[Math.floor(Math.random() * 5)];
document.getElementById("box3").style.background =
  color[Math.floor(Math.random() * 5)];
document.getElementById("box4").style.background =
  color[Math.floor(Math.random() * 5)];
document.getElementById("box5").style.background =
  color[Math.floor(Math.random() * 5)];
