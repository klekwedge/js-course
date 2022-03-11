"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const lastFilm = prompt("Один из последних просмотренных фильмов?", "");
  const lastFilmRating = prompt("На сколько оцените его?", "");
  if (
    lastFilm.length === "" ||
    lastFilm.length > 50 ||
    lastFilmRating.length === "" ||
    lastFilmRating.length > 50 ||
    lastFilm === null ||
    lastFilmRating === null
  ) {
    i--;
    continue;
  }
  personalMovieDB.movies[lastFilm] = lastFilmRating;
}

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}