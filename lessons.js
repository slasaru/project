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

// 19. Callback- функции
function learnJS(lang, callback){
    console.log(`I learn ${lang}`);
    callback();
}

function done(){
    console.log('I finished this lesson');
}

learnJS('Javascript', done);


// 20. Объекты, деструктуризация объектов (ES6)
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};
console.log(options.name);
delete options.name;
console.log(options);

// // // // // 
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};
for (let key in options){
    console.log(`Свойство ${key} имеет значение ${options[key]} `);
}

// // // // // 
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};
for (let key in options){
    if(typeof(options[key]) === 'object'){
        for (let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]} `);
        }
    } else{console.log(`Свойство ${key} имеет значение ${options[key]} `);}
}

// // // // // 
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};
console.log(Object.keys(options).length);

// // // // // 
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('Test');
    }
};
options.makeTest();

// // // // // 
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('Test');
    }
};
options.makeTest();

const {border, bg} = options.colors;
console.log(border);

//21. Массивы и псевдомассивы
const arr = [1, 2, 3, 6, 8];
arr.pop();
arr.push(10);
console.log(arr);

// // // // // 
const arr = [1, 2, 3, 6, 8];

console.log(arr);

// первый вариант цикла - in
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
// второй вариант цикла - of. В нем можно использовать continue и break
for (let value of arr){
    console.log(value);
}

// // // // // 
const arr = [1, 2, 3, 6, 8];

console.log(arr);
// ВАЖНО!!!!
// ломается логика, т.к. длина массива считается по последнему индексу + 1
arr[99] = 0;
console.log(arr.length);
// распечатывает "100"
console.log(arr);
// распечатывает:
// [ 1, 2, 3, 6, 8, <94 empty items>, 0 ]

// // // // //
// forEach  //
const arr = [1, 2, 3, 6, 8];

arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} inside of array ${arr}`);
});

// split array
const str = prompt('', '');
const products = str.split(', ');
console.log(products);

// join array
console.log(products.join('; '));

// sort array
products.sort();

// сортировка чисел (костыль)
const arr = [11, 2, 35, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

//22. Передача по ссылке или по значению, Spread оператор (ES6-ES9)
let a = 5,
    b = a;
b = b + 5;

console.log(b);// changes
console.log(a);// stays the same

// передача значения по ссылке, а не копирование //
const obj = {
    a: 5,
    b: 1
};
const copy = obj; // reference to object
copy.a = 10;// modifying not copy but original object!

console.log(copy);
console.log(obj);

// копирование объекта - поверхностная копия!//
function copy(mainObj){
    let objCopy = {};

    let key;
    for (key in mainObj){
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;// значение передается в главный объект!!! - поверхностная копия

console.log(newNumbers);
console.log(numbers);

// // // // //
// добавление объекта в другой объект
function copy(mainObj){
    let objCopy = {};

    let key;
    for (key in mainObj){
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));

// // // // //
const add = {
    d: 17,
    e: 20
};

// клонирование объекта
const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

// // // // //
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'test';
console.log(newArray);
console.log(oldArray);

// // // // //
// оператор разворота (Spread)
const video = ['youtube', 'vimeo', 'rumble'],
        blogs = ['wordpress', 'livejournal', 'blogger'],
        internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

// // // // //
// оператор разворота (Spread)
function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
  }
  
  const num = [2, 5, 7];
  
  log(...num);

// // // // //
const array = ['a', 'b'];
const newArray = [...array];
console.log(newArray);

// // // // //
const q = {
    one: 1,
    two: 2
};
const newObj = {...q};
console.log(newObj);

//23. Основы ООП, прототипно-ориентированное наследование
// Устаревший метод proto
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log('Hello!');
    }
};

const john = {
    health: 100
};

john.__proto__ = soldier;
console.log(john.armor);
john.sayHello();

// Правильный (современный) метод
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log('Hello!');
    }
};

const john = {
    health: 100
};

Object.setPrototypeOf(john, soldier);

console.log(john.armor);
john.sayHello();

// еще более правильный - с созданием объекта с нуля
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log('Hello!');
    }
};

const john = Object.create(soldier);

console.log(john.armor);
john.sayHello();


















