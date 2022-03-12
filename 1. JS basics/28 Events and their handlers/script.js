"use strict";

const btns = document.querySelectorAll("button");
const overlay = document.querySelector(".overlay");

// btn.onclick = function () {
//   alert("Click");
// };

// btn.onclick = function () {
//     alert("Second click");
//   };

// btn.addEventListener("click", () => {
//   alert("Click");
// });

// btn.addEventListener("click", () => {
//   alert("Second click");
// });

// let i = 0;
const deleteElement = (event) => {
  //   console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.type);
  //   i++;
  //   if (i === 1) {
  //     btn.removeEventListener("click", deleteElement);
  //   }
  //   event.target.remove();
};

// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);
btns.forEach((element) => {
  element.addEventListener("click", deleteElement, { once: true });
});

const link = document.querySelector("a");
link.addEventListener("click", (event) => {
  event.preventDefault();

  console.log(event.target);
});
