"use strict";
const str = "some";
const strObj = new String(str);

console.log(str);
console.log(strObj);

console.dir([1, 2, 3]);

const worker = {
  endurance: 400,
  strength: 125,
  sayHello: function () {
    console.log("Hello!");
  },
};

// const jonh = {
//   endurance: 100,
// };

const jonh = Object.create(worker);

//jonh.__proto__ = worker;

//Object.setPrototypeOf(jonh, worker);
console.log(jonh.strength);
jonh.sayHello();
