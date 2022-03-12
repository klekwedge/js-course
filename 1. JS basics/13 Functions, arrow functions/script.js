"use strict";

let num = 20;

function showFirstMessage(text) {
  console.log(text);
  console.log(num);
  num = 10;
}

showFirstMessage("Hello!");
console.log(num);

console.log(calc(3, 5));
console.log(calc(10, 1));
console.log(calc(7, 9));

function calc(a, b) {
  return a + b;
}

function ret() {
  let test = 50;

  return test;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
  console.log("Hello!");
};

logger();

const sum = (a, b) => a + b;
console.log(sum(3, 5));
