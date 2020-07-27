/*jslint es6:true*/
/*jshintcamelcase : true*/
/*jshint indent: 2*/
/*jshint undef: true*/
/*jshint quotmark: false*/
/*jshint maxlen: 120*/
/*jshint trailing: true*/
/*jshint curly: true*/
/*jshint strict: false*/
/*jshint browser: true*/
/*jshint devel: true*/
/*jshint jquery: true*/
/*jshint esversion: 6*/
/*jshint node: true*/
"use strict";

const numberofFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
const a = prompt(`Один из последних посмотренных фильмов?`, ""),
      b = prompt(`На сколько оцените его?`, ""),
      c = prompt(`Один из последних посмотренных фильмов?`, ""),
      d = prompt(`На сколько оцените его?`, "");


personalMovieDB.movies.a = b;
personalMovieDB.movies.c = d;

console.log(personalMovieDB);