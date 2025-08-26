/* Create a business name generator by combining list of adjectives and shop name and another word
Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/
console.log("Exercise 2");
let adjectives = "CrazyAmazingFire";
let name = "EngineFoodsGarments";
let word = "BrosLimitedHub";

let random = Math.random();
let first, second, third;
//let generate the first word
if (random < 0.33) {
  first = "Crazy";
} else if (random >= 0.33 && random < 0.66) {
  first = "Amazing";
} else {
  first = "Fire";
}
//let generate the Second word
random = Math.random();
if (random < 0.33) {
  second = "Engine";
} else if (random >= 0.33 && random < 0.66) {
  second = "Foods";
} else {
  second = "Garments";
}
//let generate the Third word
random = Math.random();
if (random < 0.33) {
  third = "Bros";
} else if (random >= 0.33 && random < 0.66) {
  third = "Limited";
} else {
  third = "Hub";
}
console.log(` ${first} ${second} ${third}`);
