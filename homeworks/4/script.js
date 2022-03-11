"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (
      personalMovieDB.count === "" ||
      personalMovieDB.count === null ||
      (isNaN(personalMovieDB.count))
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const lastFilm = prompt("Один из последних просмотренных фильмов?", "");
      const lastFilmRating = prompt("На сколько оцените его?", "");
      if (
        lastFilm === "" ||
        lastFilm.length > 50 ||
        lastFilmRating === "" ||
        lastFilmRating.length > 50 ||
        lastFilm === null ||
        lastFilmRating === null
      ) {
        i--;
        continue;
      }
      personalMovieDB.movies[lastFilm] = lastFilmRating;
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function () {
    if (personalMovieDB.privat === false) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 4; i++) {
      const favouriteGenre = prompt(`Ваш любимый жанр под номером ${i}`, "");
      if (favouriteGenre === "" || favouriteGenre === null) {
        i--;
        continue;
      }
      personalMovieDB.genres[i - 1] = favouriteGenre;
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`"Любимый жанр ${i + 1} - это ${item}`);
    });
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
};
personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();

personalMovieDB.writeYourGenres();
