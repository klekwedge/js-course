"use strict";

//1
console.log(typeof String(null));
console.log(typeof String(5));

//2
console.log(typeof (5 + ""));

const num = 5;
console.log("some string " + num);

const fontSize = 26 + "px";

////////////////////////////////////////////////////////////////////////

//1
console.log(typeof Number("4"));

//2
console.log(typeof +"9");

//3
console.log(typeof parseInt("15px", 10));

let answer = +prompt("Hello!", "");

////////////////////////////////////////////////////////////////////////

// false 0, '', null, undefined, Nan

//1
let switcher = null;

if (switcher) {
  console.log("Working...");
}

switcher = 1;

if (switcher) {
  console.log("Working...");
}

//2 
console.log(typeof Boolean(null));

//3 
console.log(typeof !!'4444');
