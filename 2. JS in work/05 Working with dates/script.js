"use strict";

const now = new Date();
const otherDate = new Date(2020, 5, 1, 20);
// new Date.parse("2020-05-01");
const start = new Date(0);

console.log(now);
console.log(now.setHours(18));
// console.log(now.setHours(18, 40));
console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

console.log(now.getTimezoneOffset());
console.log(now.getTime());

console.log(otherDate);
console.log(start);

let otherStart = new Date();
for (let i = 0; i < 100000; i++) {
  let some = i ** 3;
}
let end = new Date();
console.log(`Цикл отработал за ${end - otherStart} милисекунд`);