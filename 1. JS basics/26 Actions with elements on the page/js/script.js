"use string";

const box = document.getElementById("box"),
  btns = document.getElementsByTagName("button"),
  circles = document.getElementsByClassName("circle"),
  wrapper = document.querySelector(".wrapper"),
  hearts = wrapper.querySelectorAll(".heart"),
  oneHeart = wrapper.querySelector(".heart");


// box.style.backgroundColor = "blue";
// box.style.width = "500px";
box.style.cssText = "background-color: blue; width: 500px";

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

// for(let i = 0; i < hearts.length;i++){
//   hearts[i].style.backgroundColor = "blue";
// }

hearts.forEach((item) => {
  item.style.backgroundColor = "blue";
});

const divExample = document.createElement("div");
// const text = document.createTextNode();

divExample.classList.add("black");

// document.body.append(divExample);

wrapper.append(divExample);
// wrapper.appendChild(divExample);

// wrapper.prepend(divExample);

// hearts[0].before(divExample);
// wrapper.insertBefore(divExample, hearts[0]);

// hearts[0].after(divExample);

// circles[0].remove();
// wrapper.removeChild( hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

divExample.innerHTML = "<h1>Hello!</h1>";
// divExample.textContent  = "Hello!";

divExample.insertAdjacentHTML("beforeend", "<h2>How are you?</h2>");
