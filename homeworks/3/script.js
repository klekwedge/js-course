"use strict";
let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  while (
    numberOfFilms === "" ||
    numberOfFilms === null ||
    isNaN(numberOfFilms)
  ) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function showMyDB(obj) {
  if (obj.privat === false) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB);

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    const favouriteGenre = prompt(`Ваш любимый жанр под номером ${i}`, "");
    if (favouriteGenre === "" || favouriteGenre === null) {
      i--;
      continue;
    }
    personalMovieDB.genres[i - 1] = favouriteGenre;
  }
}

writeYourGenres();