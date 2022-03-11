"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};
movieDB.movies.sort();

const advertising = document.querySelectorAll(".promo__adv img");
advertising.forEach((item) => {
  item.remove();
});

const genre = document.querySelector(".promo__genre");
genre.textContent = "драма";

const promoImage = document.querySelector(".promo__bg");
promoImage.style.backgroundImage = "url(img/bg.jpg)";

const promoList = document.querySelector("ul.promo__interactive-list");
promoList.innerHTML = "";

// for (let i = 0; i < movieDB.movies.length; i++) {
//   const promoItem = document.createElement("li");
//   promoItem.classList.add("promo__interactive-item");
//   promoItem.textContent = `${i + 1}. ${movieDB.movies[i]}`;
//   promoList.append(promoItem);
// }

movieDB.movies.forEach((film, i) => {
  promoList.innerHTML += `<li class="promo__interactive-item">${
    i + 1
  } ${film}<div class="delete"></div>
</li`;
});
