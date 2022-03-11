"use strict";

//1
let num = 5;
console.log(num++);

//2
console.log(typeof []);
console.log(typeof ([] + false));
console.log([] + false - null + true);

//3
let y = 1;
let x = (y = 2);
console.log(x);
console.log(y);

//4
console.log([] + 1 + 2);

//5
console.log("1"[0]);

//6
console.log(2 && 1 && null && 0 && undefined);
//И запинается на лжи // останавливается на последней правде
//Или запинается на правде // останавливается на первой правде

//7
console.log(!!(1 && 2) === (1 && 2));

//8
console.log(null || (2 && 3) || 4);

//9
const arrA = [1, 2, 3];
const arrB = [1, 2, 3];
console.log(arrA == arrB);

//10
console.log(+"Infinity");

//11
console.log("Ёжик" > "яблоко");

//12
console.log(0 || "" || 2 || undefined || true || false);
