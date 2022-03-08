"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const lastFilm = prompt("Один из последних просмотренных фильмов?", "");
const lastFilmRating = prompt("На сколько оцените его?", "");

const yetlastFilm = prompt("Один из последних просмотренных фильмов?", "");
const yetlastFilmRating = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastFilm] = lastFilmRating;
personalMovieDB.movies[yetlastFilm] = yetlastFilmRating;
console.log(personalMovieDB);
