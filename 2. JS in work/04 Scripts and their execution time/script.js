"use strict";

// const timerId = setTimeout(function (text) {
//   console.log(text);
// }, 2000,'Hello');

const btn = document.querySelector(".btn");
let timerId,
  counter = 0;

function myAnimation() {
  const element = document.querySelector(".box");
  let pos = 0;

  const idInterval = setInterval(frame, 10);
  function frame() {
    if (pos === 300) {
      clearInterval(idInterval);
    } else {
      pos++;
      element.style.top = pos + "px";
      element.style.left = pos + "px";
    }
  }
}
btn.addEventListener("click", myAnimation);

// btn.addEventListener("click", () => {
//   //   const timerId = setTimeout(logger, 2000);
//   timerId = setInterval(logger, 500);
// });

// function logger() {
//   if (counter === 3) {
//     clearInterval(timerId);
//   }
//   console.log("text");
//   counter++;
// }

// let id = setTimeout(function log() {
//   console.log("Hello");
//   id = setTimeout(log, 500);
// }, 500);
