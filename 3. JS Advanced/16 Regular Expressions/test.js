"use strict";

// new RegExp('pattern', 'flags');
// /pattern/f

// const ans = prompt('Введите ваше число');

// const reg = /\d/g;
// console.log(ans.match(reg));

const str = "My name is R2D2";
console.log(str.match(/\w\d\w\d/i));
console.log(str.match(/\D/ig));
// \D
// \W



// \d
// \w
// \s

/////////////////////////////////////////////////////////////

// 1) i
// 2) g
// 3) m

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');
// console.log(pass.replace(/\./g, '*'));

// console.log("12-32-56".replace(/-/g, ':'));
