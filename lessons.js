// 8. Интерполяция (ES6) //
"use strict";

const category = 'toys';
console.log(`https://someurl.com/${category}/5`);

// // // // //

const user = 'Ivan';
alert(`Hello, ${user}`);

// // // // // 

// 9. Операторы в JS //
console.log(4 + +"5"); //+ перед текстовой переменной изменяет ее тип в number!

// // // // // 

let incr = 10, // let означает изменяемую переменную. Используется вместо устаревшего var
    decr = 10;

incr++;
decr--;
console.log(incr);
console.log(decr);

// // // // // 

// эта конструкция (постфикс) вернет старое значение (до изменения)
let incr = 10,
    decr = 10;
console.log(incr++);
console.log(decr--);

// // // // // 

console.log(2*4 == '8'); // нестрогое равенство, без учета типа переменной
// true
console.log(2*4 === '8'); // строгое равенство, с учетом типа переменной
// false

// // // // // 

const isChecked = true,
        isClose = true;

console.log(isChecked && isClose);

// // // // // 

const isChecked = true,
        isClose = false;

console.log(isChecked || isClose);
console.log(isChecked || !isClose); // ! - оператор отрицания
    
// // // // // 

// 12. Практика, ч.1. Начинаем создавать приложение

// 1) создать переменную numberOfFilms:
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// console.log(numberOfFilms);

// 2) создать объект personalMovieDB, в него поместить такие свойства:
// - count - ответ на первый вопрос
// - movies - в это свойство поместить пустой объект
// - actors - поместить пустой объект
// - genres - поместить пустой массив
// - privat - в это свойство поместить Boolean false

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false
};

// 3) задайте пользователю по два раза вопросы:
// - Один из последних просмотренных фильмов?
// - На сколько оцените его?
// Ответы стоит поместить в отдельные переменные.
// Записать ответы в объект movies в формате:
// movies: {
//     'logan': '8.1';
// }

for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    
    personalMovieDB.movies[a] = b;
}

// Проверить, чтобы все работало без ошибок в консоли.

console.log(personalMovieDB);

// 14. Циклы
// 1. Первый вариант цикла
let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

// 2. Второй вариант цикла
// let num = 50;
do {
    console.log(num);
    num++;
}
while (num <= 55);

// 3. Третий вариант цикла
for (let i = 1; i < 8; i++){
    console.log(i);
}

// // // // // 
for (let i = 1; i < 10; i++){
    if (i == 6) {
        break;
    }
    console.log(i);
}

// // // // // 
for (let i = 1; i < 10; i++){
    if (i == 6) {
        continue;
    }
    console.log(i);
}























