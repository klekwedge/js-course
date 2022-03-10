"use strict";

const arr = [1, 2, 3, 6, 8];

arr.pop();
arr.push(10);

console.log(arr);

arr.sort(compareNum);

function compareNum(a, b) {
  return a - b;
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let value of arr) {
  console.log(value);
}

arr.forEach(function (item, i, arr) {
  console.log(`${i}: ${item} внутри массива ${arr}`);
});

const str = prompt("", "");
const products = str.split(", ");
console.log(products);
console.log(products.join("; "));
console.log(products.sort());
