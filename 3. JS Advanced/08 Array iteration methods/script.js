"use strict";

// filter
// const names = ["Ivan", "Ann", "Alex", "Ksenia", "Vladimir"];

// const shortNames = names.filter(function (name) {
//   return name.length < 5;
// });

// console.log(names);
// console.log(shortNames);

// map
// let answers = ["IvAn", "AnnA", "Hello"];
// const result = answers.map((item) => item.toLowerCase());

// console.log(answers);
// console.log(result);

// answers = answers.map((item) => item.toLowerCase());
// console.log(answers);

// every / some
// const someArr = [4, "wqwq", "frorpll"];

// console.log(someArr.some((item) => typeof item === 'number'));
// console.log(someArr.every((item) => typeof item === 'number'));

// reduce
// const arr = [4, 5, 1, 3, 2, 6];
// // 0 4 <--- пропускается (если не задан 3-й параметр)
// // 4 5 <--- скажем так, начинается отсюда, sum = 4
// // 9 1
// // 10 3
// const result = arr.reduce((sum, current)=> sum + current, 3); // sum = 3 (на 1 шаге)
// console.log(result);

// const arr = ["apple", "pear", "plum"];
// const result = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(result);

const obj = {
  ivan: "persone",
  ann: "persone",
  dog: "animal",
  cat: "animal",
};

const newArray = Object.entries(obj).filter((item) => item[1] === "persone").map((item)=>item[0]);
console.log(newArray);
