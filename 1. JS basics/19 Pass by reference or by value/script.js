"use strict";

const obj = {
  a: 5,
  b: 1,
};

const copyObg = obj;
copyObg.a = 10;
console.log(copyObg);

function copy(mainObj) {
  let objCopy = {};
  let key;

  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 2,
  c: {
    x: 7,
    y: 4,
  },
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
  d: 17,
  e: 20,
};

console.log(Object.assign(numbers, add));

const cloneAdd = Object.assign({}, add);
cloneAdd.d = 20;

console.log(add);
console.log(cloneAdd);

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();
newArray[1] = "d";

console.log(oldArray);
console.log(newArray);

const video = ["youtube", "vimeo", "rutube"],
  blogs = ["wordpress", "livejournal", "blogger"],
  internet = [...video, ...blogs, "vk", "facebook"];

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7];
log(...num);

const array = ["a", "b"];
const newArraySpread = [...array];
console.log(newArraySpread);

const oldObjSpread = {
  one: 1,
  two: 2,
};
const newObjSpread = { ...oldObjSpread };
