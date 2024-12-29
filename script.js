$(document).ready(function () {
    $('.block_title').click(function(event) {
        // Подключаемся к заголовку и добавляем событие click
        if($('.block').hasClass('one')){
            $('.block_title').not($(this)).removeClass('active');
            $('.block_text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
        // Подключаем блок с заголовком к блоку с текстом при нажатии
        // С анимацией c помощью slideToggle со скоростью 300 миллисекунд
    });
});