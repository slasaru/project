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

// 10. Учимся работать с системой контроля версий Git и с сервисом GitHub





























