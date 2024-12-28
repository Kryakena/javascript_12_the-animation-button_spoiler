$(document).ready(function () {
    $('.block_title').click(function(event) { // Подключаемся к заголовку и добавляем событие click
        $(this).toggleClass('active').next().slideToggle(300);
        // Подключаем блок с заголовком к блоку с текстом при нажатии
        // С анимацией c помощью slideToggle со скоростью 300 миллисекунд
    });
});