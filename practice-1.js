// задание на урок:

// 1) создать переменную numberOfFilms:


// 2) создать объект personalMovieDB, в него поместить такие свойства:
// - count - ответ на первый вопрос
// - movies - в это свойство поместить пустой объект
// - actors - поместить пустой объект
// - genres - поместить пустой массив
// - privat - в это свойство поместить Boolean false

// 3) задайте пользователю по два раза вопросы:
// - Один из последних просмотренных фильмов?
// - На сколько оцените его?

// Ответы стоит поместить в отдельные переменные.
// Записать ответы в объект movies в формате:

// movies: {
//     'logan': '8.1';
// }

// Проверить, чтобы все работало без ошибок в консоли.

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// console.log(numberOfFilms);

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false
};

for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    
    personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);



