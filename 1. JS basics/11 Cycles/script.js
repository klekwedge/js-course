"use strict";

let num = 50;

while (num < 55) {
  console.log(num);
  num++;
}

num = 50;

do {
  console.log(num);
  num++;
} while (num < 55);

for (let index = 1; index < 8; index++) {
  if (index === 6) {
    // break
    continue;
  }
  console.log(index);
}
