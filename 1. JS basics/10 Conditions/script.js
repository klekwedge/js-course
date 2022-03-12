"use strict";

if (4 === 4) {
  console.log("Ok");
} else {
  console.log("Error!!!");
}

const num = 50;
if (num < 49) {
  console.log("Few");
} else if (num > 100) {
  console.log("Many");
} else {
  console.log("Wonderful");
}

num === 50 ? console.log("Ok") : console.log("Eror!!!");

const exampleNumber = 30;
switch (exampleNumber) {
  case 64:
    console.log("Eror!!!");
    break;
  case 47:
    console.log("Eror!!!");
    break;
  case 38:
    console.log("Eror!!!");
    break;
  case 19:
    console.log("Eror!!!");
    break;
  case 30:
    console.log("Nice");
    break;
  default:
    console.log("Eror!!!");
    break;
}

const exampleStr = "30";
switch (exampleStr) {
  case "64":
    console.log("Eror!!!");
    break;
  case "47":
    console.log("Eror!!!");
    break;
  case "38":
    console.log("Eror!!!");
    break;
  case "19":
    console.log("Eror!!!");
    break;
  case "30":
    console.log("Ok");
    break;
  default:
    console.log("Eror!!!");
    break;
}
