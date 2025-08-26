var adj = {
  1: "Crazy",
  2: "Amazing",
  3: "Fire",
};
var nme = {
  1: "Engine",
  2: "Foods",
  3: "Garments",
};
var another = {
  1: "bros",
  2: "Limited",
  3: "Hub",
};

let ran1 = Math.floor(1 + Math.random() * 3);
let ran2 = Math.floor(1 + Math.random() * 3);
let ran3 = Math.floor(1 + Math.random() * 3);

console.log(`${adj[ran1]} ${nme[ran2]} ${another[ran3]}`);
