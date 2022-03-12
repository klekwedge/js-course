"use strict";

console.log("arr" + " - object");
console.log(4 + " - object");
console.log(4 + "5");
console.log(4 + +"5");

let incr = 10;
let decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

console.log(incr++);
console.log(decr--);

console.log(++incr);
console.log(--decr);

console.log(5 % 2);
console.log(2 * 4 === 8);
console.log(2 * 2 + 2 !== 8);
console.log(2 * 4 == "8");
console.log(2 * 4 == "c8");

const isChecked = true;
const isClose = false;
console.log(isChecked && !isClose);
console.log(isChecked || isClose);
