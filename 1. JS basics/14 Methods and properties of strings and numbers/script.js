"use strict";

const str = "Test";

console.log(str.length);
console.log(str[2]);

console.log(str.toUpperCase());
console.log(str);

console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));
console.log(fruit.indexOf("q"));

const logg = "Hello world";
console.log(logg.slice(7));
console.log(logg.slice(6, 11));
console.log(logg.slice(-5, -1));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 3));

///////////////////////////////////////////////////////////////

const num = 12.2;
console.log(Math.round(num));

const textNum = '12px';
console.log(parseInt(textNum));
console.log(parseFloat(textNum));