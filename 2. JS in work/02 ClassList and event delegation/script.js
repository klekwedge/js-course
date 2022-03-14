"use strict";

const buttons = document.querySelectorAll("button"),
wrapper = document.querySelector('.btn-block'); 


// console.log(buttons[0].classList.length);
// console.log(buttons[0].classList.item(0));

// console.log(buttons[0].classList.add('red', 'btn'));
// console.log(buttons[1].classList.add('red'));

// console.log(buttons[0].classList.remove('blue'));
// console.log(buttons[0].classList.toggle('blue'));

// if(buttons[1].classList.contains('red')){
//     console.log('Hello');
// }

buttons[0].addEventListener("click", () => {
  //   if (buttons[1].classList.contains("red")) {
  //     buttons[1].classList.remove("red");
  //   } else {
  //     buttons[1].classList.add("red");
  //   }
  buttons[1].classList.toggle("red");
});



wrapper.addEventListener("click", (event) => {
    // console.log(event.target);
    if(event.target && event.target.tagName === 'BUTTON'){
        console.log('Hello');
    }

    if(event.target && event.target.classList.contains('blue')){
        console.log('How are you?');
    }

    if(event.target && event.target.matches("button.red")){
        console.log('what are you doing?');
    }
  });

const btn = document.createElement('button');
btn.classList.add("red");
wrapper.append(btn);