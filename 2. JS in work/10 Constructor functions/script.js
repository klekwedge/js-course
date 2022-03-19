"use strict";

// const num = new Number(3);
// console.log(num);

// const newFunction = new Function(3);
// console.log(newFunction);

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function(){
      console.log(`Hello ${this.name}`);
  };
}

User.prototype.exit = function(){
    console.log(`User ${this.name} exit`);
};


const ivan = new User("Ivan", 28);
const alex = new User("Alex", 25);
console.log(ivan);
ivan.hello();
ivan.exit();
console.log(alex);
console.log(alex.name);