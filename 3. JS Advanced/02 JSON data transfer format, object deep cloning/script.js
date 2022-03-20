"use strict";

const person = {
  name: "Alex",
  tel: "+799999999999",
  parents: {
    mom: "Bella",
    dad: "Tyler",
  },
};

console.log(JSON.stringify(person));
console.log(JSON.parse(JSON.stringify(person)));

const clone = JSON.parse(JSON.stringify(person));
clone.parents.dad = "Mike";
console.log(person);
console.log(clone);