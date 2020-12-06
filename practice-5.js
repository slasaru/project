// Задания на урок:
'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
// способ 1 - только картинки, а блок "Реклама" останется:
// const ads = document.querySelectorAll('.promo__adv img');
// ads.forEach(item => {
//     item.remove();
// });

// способ 2 
const ads = document.querySelectorAll('.promo__adv'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');

ads.forEach(item => {
    item.remove();
});

// 2) Изменить жанр фильма, поменять "комедия" на "драма"
genre.textContent = 'драма';

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS
// Мой вариант:
// const bgImage = document.querySelector('.promo__bg');
// bgImage.style.backgroundImage = "url('img/bg.jpg')";

// Вариант авторов:
poster.style.backgroundImage = "url('img/bg.jpg')";

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту
// 5) Добавить нумерацию выведенных фильмов

movieList.innerHTML = '';
movieDB.movies.sort();

movieDB.movies.forEach((film,i)=>{
    movieList.innerHTML += `
        <li class="promo__interactive-item">
                ${i+1} ${film}
            <div class="delete"></div>
        </li>
    `;
});

