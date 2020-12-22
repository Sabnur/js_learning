'use strict';

const nuberOfFilms = +prompt ('Сколько фильмов Вы уже посмотрели?' , '');

const personalMovieDB = {
    count: nuberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++){
    const a = prompt ('Один из последних просмотренных фильмов?', ''),
          b = prompt ('На сколько оцениваете его?', '');
    
    if (a != null && b != null && a !='' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    "Вы киноман"
} else {
    console.log("Ошибка");
}

console.log(personalMovieDB);