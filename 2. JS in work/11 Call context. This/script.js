"use strict";

// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }
//   console.log(sum());
// }
// showThis(4, 5);

// 1. Regular function
// showThis(); // window
// showThis(); // undefined (use strict)

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function () {
//     console.log(this);
//     function show() {
//       console.log(this);
//     }
//     show();
//   },
// };

// obj.sum();
// 2. Контекст у методов объекта - сам объект

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
// }
// let ivan = new User("Ivan", 23);
// 3. Контекст в конструкторах и классах это новый экземпляр объекта

function sayName(surname) {
  console.log(this);
  console.log(this.name + " " + surname);
}

const user = {
  name: "Alex",
};

sayName.call(user, "Boll");
sayName.apply(user, ["Boll"]);

// Bind создает новую функцию, связанную с определенным контекстом

function count(num) {
  return this * num;
}

const double = count.bind(2); // новая функция
console.log(double(5));
console.log(double(250));
// 4. Ручное присваение контекста: call, apply, bind

const btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   console.log(this);
//   this.style.backgroundColor = 'green';
//   // Контекстом вызова будет сам элемент, на котором произошло событие
//   // this = event.target
// });

btn.addEventListener("click", (event) => {
  console.log(this);
  event.target.style.backgroundColor = 'green';
  // Контекст вызова теряется 
});

const object = {
  num: 5,
  sayNumber: function () {
    const say = () => {
      console.log(this);
    };
    say();
  },
};
object.sayNumber();

// Контекст берет у своего родителям, так как не имеет своего контекста

// const doubleFunc = (a) => {
//   return a * 2;
// };

const doubleFunc = (a) => a * 2;
console.log(doubleFunc(5));
