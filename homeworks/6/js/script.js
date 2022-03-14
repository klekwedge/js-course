"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против всех",
    ],
  };

  const deleteArrOfElements = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };

  const advert = document.querySelectorAll(".promo__adv img");
  deleteArrOfElements(advert);

  const genre = document.querySelector(".promo__genre"),
    promoImage = document.querySelector(".promo__bg");

  const makeChanges = () => {
    genre.textContent = "драма";
    promoImage.style.backgroundImage = "url(img/bg.jpg)";
  };
  makeChanges();

  const movieList = document.querySelector("ul.promo__interactive-list");
  sortFilms(movieDB.movies, movieList);

  // for (let i = 0; i < movieDB.movies.length; i++) {
  //   const promoItem = document.createElement("li");
  //   promoItem.classList.add("promo__interactive-item");
  //   promoItem.textContent = `${i + 1}. ${movieDB.movies[i]}`;
  //   promoList.append(promoItem);
  // }

  function sortFilms(films, list) {
    list.innerHTML = "";
    films.sort();
    films.forEach((film, i) => {
      if (film.length > 21) {
        list.innerHTML += `<li class="promo__interactive-item">${
          i + 1
        } ${film.substring(0, 22)}...<div class="delete"></div>
  </li`;
      } else {
        list.innerHTML += `<li class="promo__interactive-item">${
          i + 1
        } ${film}<div class="delete"></div>
  </li`;
      }
    });

    document.querySelectorAll(".delete").forEach((button, i) => {
      button.addEventListener("click", () => {
        button.parentElement.remove();
        movieDB.movies.splice(i, 1);
        sortFilms(movieDB.movies, movieList);
      });
    });
  }

  const addForm = document.querySelector(".add"),
    submitButton = addForm.querySelector("button"),
    addFilmInput = addForm.querySelector(".adding__input"),
    checkboxFilm = addForm.querySelector("input[type='checkbox']");

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (addFilmInput.value) {
      if (checkboxFilm.checked) {
        console.log("Добавляем любимый фильм");
      }
      movieDB.movies.push(addFilmInput.value);
      sortFilms(movieDB.movies, movieList);
      addFilmInput.value = "";
    }
  });
});
