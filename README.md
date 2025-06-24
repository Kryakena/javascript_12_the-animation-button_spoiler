# 🐱‍👤 Кнопка с анимацией "Спойлер" 🐱‍👤

Источник: видео "Спойлер на HTML CSS и jQuery + анимация стрелки // Как это сделать?" 
https://vk.com/im/convo/19460369?entrypoint=list_all&z=video-125918837_456239142%2F6bd5a4c3d7a95aaed0

![2024-12-29_12-00-38](https://github.com/user-attachments/assets/e362daf2-564a-4ec2-80ef-152c3c31176a)


https://github.com/user-attachments/assets/ff00ecbc-1cab-4aba-b3c7-e7f20119ffe0



1. создаем создаем файлы index.html, style.css, script.js в папке проекта

2. в файле index.html готовим шаблон

```html
<!-- Сообщаем браузеру, как стоит обрабатывать эту страницу -->
<!DOCTYPE html>
<!-- Оболочка документа, указываем язык содержимого -->
<html lang="ru">
<!-- Заголовок страницы, контейнер для других важных данных (не отображается) -->
<head>
    <!-- Заголовок страницы в браузере -->
    <title></title>
    <!-- Подключаем CSS -->
    <link rel="stylesheet" href="style.css">
    <!-- Кодировка страницы -->
    <meta charset="utf-8">
</head>
<!-- Отображаемое тело страницы -->
<body>
    <!-- Оболочка для демонстрации -->
    <div class="wrapper">
        <!-- Контент -->
        
        <!-- Подключаем jQuery -->
        <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
        <script src="script.js"></script>
        <!-- Подключаем файл JS скриптов -->
        <script src="script.js"></script>
    </div>
</body>
</html>
```

3. в файле style.css вставляем шаблон

```css
/* Обнуление */
*,*:before,*:after{
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
}
/* Стили для демонстрации */
html,body{
    height: 100%;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.wrapper{
    height: 100%;
    padding: 50px; /* Отступ */
}
/* Основные стили */
```

4. в файл script.js вставляем шаблон

```js
$(document).ready(function () {

});
```

5. в файле index.html в разделе head пишем название и адаптив

```html
<title>Кнопка с анимацией "Спойлер"</title>
```
```html
 <!-- Адаптив -->
<meta name="viewport" content="width=device-width">
```

6. в файле index.html в разделе body в заранее созданной оболочке wrapper создаем класс block

```html
<div class="block">
```

7. в файле index.html в разделе body в данном классе block создаем 3 заголовка со спойлером

```html
<div class="block_title">Заголовок №1</div>
<div class="block_text">
    Lorem ipsum odor amet, consectetuer adipiscing elit. Urna enim magnis in condimentum egestas faucibus sodales. Aptent facilisi libero taciti primis diam, lectus sem malesuada. Velit dis mi habitasse ipsum tempus pretium nunc consequat. Ut ac habitasse potenti porttitor mauris turpis enim. Venenatis lacus malesuada semper accumsan gravida faucibus sed penatibus. Quisque aliquam erat aptent aptent elit mi. Congue id urna neque congue dignissim pellentesque litora lacinia. Pulvinar libero ante malesuada diam lacus eget feugiat.
    Facilisi augue donec ultrices amet tincidunt habitant sem vestibulum. Accumsan taciti leo leo ex tortor viverra. Ultricies rhoncus dis ac ipsum ullamcorper felis. Iaculis sapien nisi montes; vehicula sem senectus in quis feugiat. Magna venenatis id nunc, elit vehicula sociosqu tincidunt ut. Congue luctus blandit eros primis fermentum integer quis conubia. Sem tempus ultrices, rhoncus erat mus suscipit fames. Elementum dapibus venenatis convallis fames mi. Vitae dictum vehicula libero ridiculus ultricies est, malesuada urna eros.
    Lobortis placerat senectus nam sed, cubilia convallis sed. Leo nunc vestibulum aptent tempus sapien nisl vehicula. Ridiculus curabitur pretium ante fames elit. Rhoncus quis donec leo tortor lectus curabitur. Felis lacinia nostra tellus aenean luctus. Sollicitudin sociosqu condimentum dolor faucibus sit ipsum risus. Nibh feugiat ridiculus euismod vestibulum accumsan inceptos? Vel porttitor vulputate lorem duis massa sagittis. Condimentum ultrices luctus dui integer suspendisse dapibus.
    Elementum varius integer elit risus ridiculus; varius felis cras. Arcu venenatis faucibus, augue lacinia tristique tempus. Ultricies eu lacus pulvinar non condimentum nullam eros. Metus risus penatibus imperdiet conubia malesuada. Erat senectus ultrices primis hendrerit ullamcorper ullamcorper. Magnis iaculis congue platea vulputate convallis consequat facilisi placerat.
    Dis varius diam parturient ornare lacus elementum sollicitudin primis. Tempus magnis faucibus nibh tincidunt montes parturient faucibus. Torquent ac nunc tempus, magna sed parturient. Auctor venenatis gravida posuere facilisis sollicitudin posuere ultrices vehicula. Potenti natoque nibh aptent massa magna ornare quisque. Venenatis inceptos magna eget aliquam dapibus aliquet. Sagittis congue habitant dui, viverra torquent iaculis convallis. Nibh per rhoncus ipsum inceptos tempus magna fusce etiam. Proin penatibus neque ligula ligula elit massa integer luctus.
</div>
</div>
<div class="block_item">
    <div class="block_title">Заголовок №2</div>
    <div class="block_text">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Urna enim magnis in condimentum egestas faucibus sodales. Aptent facilisi libero taciti primis diam, lectus sem malesuada. Velit dis mi habitasse ipsum tempus pretium nunc consequat. Ut ac habitasse potenti porttitor mauris turpis enim. Venenatis lacus malesuada semper accumsan gravida faucibus sed penatibus. Quisque aliquam erat aptent aptent elit mi. Congue id urna neque congue dignissim pellentesque litora lacinia. Pulvinar libero ante malesuada diam lacus eget feugiat.
        Facilisi augue donec ultrices amet tincidunt habitant sem vestibulum. Accumsan taciti leo leo ex tortor viverra. Ultricies rhoncus dis ac ipsum ullamcorper felis. Iaculis sapien nisi montes; vehicula sem senectus in quis feugiat. Magna venenatis id nunc, elit vehicula sociosqu tincidunt ut. Congue luctus blandit eros primis fermentum integer quis conubia. Sem tempus ultrices, rhoncus erat mus suscipit fames. Elementum dapibus venenatis convallis fames mi. Vitae dictum vehicula libero ridiculus ultricies est, malesuada urna eros.
        Lobortis placerat senectus nam sed, cubilia convallis sed. Leo nunc vestibulum aptent tempus sapien nisl vehicula. Ridiculus curabitur pretium ante fames elit. Rhoncus quis donec leo tortor lectus curabitur. Felis lacinia nostra tellus aenean luctus. Sollicitudin sociosqu condimentum dolor faucibus sit ipsum risus. Nibh feugiat ridiculus euismod vestibulum accumsan inceptos? Vel porttitor vulputate lorem duis massa sagittis. Condimentum ultrices luctus dui integer suspendisse dapibus.
        Elementum varius integer elit risus ridiculus; varius felis cras. Arcu venenatis faucibus, augue lacinia tristique tempus. Ultricies eu lacus pulvinar non condimentum nullam eros. Metus risus penatibus imperdiet conubia malesuada. Erat senectus ultrices primis hendrerit ullamcorper ullamcorper. Magnis iaculis congue platea vulputate convallis consequat facilisi placerat.
        Dis varius diam parturient ornare lacus elementum sollicitudin primis. Tempus magnis faucibus nibh tincidunt montes parturient faucibus. Torquent ac nunc tempus, magna sed parturient. Auctor venenatis gravida posuere facilisis sollicitudin posuere ultrices vehicula. Potenti natoque nibh aptent massa magna ornare quisque. Venenatis inceptos magna eget aliquam dapibus aliquet. Sagittis congue habitant dui, viverra torquent iaculis convallis. Nibh per rhoncus ipsum inceptos tempus magna fusce etiam. Proin penatibus neque ligula ligula elit massa integer luctus.
    </div>
</div>
<div class="block_item">
    <div class="block_title">Заголовок №3</div>
    <div class="block_text">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Urna enim magnis in condimentum egestas faucibus sodales. Aptent facilisi libero taciti primis diam, lectus sem malesuada. Velit dis mi habitasse ipsum tempus pretium nunc consequat. Ut ac habitasse potenti porttitor mauris turpis enim. Venenatis lacus malesuada semper accumsan gravida faucibus sed penatibus. Quisque aliquam erat aptent aptent elit mi. Congue id urna neque congue dignissim pellentesque litora lacinia. Pulvinar libero ante malesuada diam lacus eget feugiat.
        Facilisi augue donec ultrices amet tincidunt habitant sem vestibulum. Accumsan taciti leo leo ex tortor viverra. Ultricies rhoncus dis ac ipsum ullamcorper felis. Iaculis sapien nisi montes; vehicula sem senectus in quis feugiat. Magna venenatis id nunc, elit vehicula sociosqu tincidunt ut. Congue luctus blandit eros primis fermentum integer quis conubia. Sem tempus ultrices, rhoncus erat mus suscipit fames. Elementum dapibus venenatis convallis fames mi. Vitae dictum vehicula libero ridiculus ultricies est, malesuada urna eros.
        Lobortis placerat senectus nam sed, cubilia convallis sed. Leo nunc vestibulum aptent tempus sapien nisl vehicula. Ridiculus curabitur pretium ante fames elit. Rhoncus quis donec leo tortor lectus curabitur. Felis lacinia nostra tellus aenean luctus. Sollicitudin sociosqu condimentum dolor faucibus sit ipsum risus. Nibh feugiat ridiculus euismod vestibulum accumsan inceptos? Vel porttitor vulputate lorem duis massa sagittis. Condimentum ultrices luctus dui integer suspendisse dapibus.
        Elementum varius integer elit risus ridiculus; varius felis cras. Arcu venenatis faucibus, augue lacinia tristique tempus. Ultricies eu lacus pulvinar non condimentum nullam eros. Metus risus penatibus imperdiet conubia malesuada. Erat senectus ultrices primis hendrerit ullamcorper ullamcorper. Magnis iaculis congue platea vulputate convallis consequat facilisi placerat.
        Dis varius diam parturient ornare lacus elementum sollicitudin primis. Tempus magnis faucibus nibh tincidunt montes parturient faucibus. Torquent ac nunc tempus, magna sed parturient. Auctor venenatis gravida posuere facilisis sollicitudin posuere ultrices vehicula. Potenti natoque nibh aptent massa magna ornare quisque. Venenatis inceptos magna eget aliquam dapibus aliquet. Sagittis congue habitant dui, viverra torquent iaculis convallis. Nibh per rhoncus ipsum inceptos tempus magna fusce etiam. Proin penatibus neque ligula ligula elit massa integer luctus.
    </div>
</div>
```

8. в файле style.css вставляем классы из html файла

```css
.block {}
.block_item {}
.block_title {}
.block_text {}
```

9. в файле style.css  общие настройки заголовков - отступы, размеры

```css
.block_item {
    margin: 0 0 20px 0; /* Между спойлерами делаем отступ */
}
.block_title {
    text-transform: uppercase;
    letter-spacing: 2px;
}
.block_text {
    padding: 10px 0 0 0; /* Вниз на 10 пикселей */
}
```

10. в файле style.css создаем стрелочку для спойлера с помощью псевдоэлементов

```css
.block_title:before,
.block_title:after {
    content: '';
    width: 10px; /* Длина половины нашей стрелочки */
    height: 1px;
    background-color: #000;
    position: absolute;
    top: 5px;
}
```

11. в файле style.css сделаем позицию relative в .block_title

```css
position: relative; /* Перенос стрелочки спойлера в строку с названием заголовка */
```

12. в файле style.css продолжаем создавать стрелку спойлера отдельно для каждого псевдоэлемента

```css
.block_title:before{
    transform: rotate(40deg); /* Рисуется часть стрелки в строке заголовка: верхний левый угол к правому нижнему углу */
    left: 0;
}
.block_title:after{
    transform: rotate(-40deg); /* Рисуется часть стрелки в строке заголовка: верхний правый угол к левому нижнему углу */
    left: 8px; /* Смещаем часть стрелки вправо на 8px от левого края */
}
```

13. в файле style.css в .block_title смещаем текст с заголовком вправо, чтобы стрелка была слева

```css
padding: 0 0 0 30px;
```

14. в файле style.css в ".block_title:before, .block_title:after" устраиваем поудобнее стрелку по центру строки, 
отсупив от верхнего края строки. Настраиваем плавное открытие спойлера

```css
top: 8px; /* Отсуп стрелочки от верхнего края вниз на 8px */
transition: all 0.3s ease 0s; /* Анимация плавного открытия спойлера */
```

15. в файле style.css в .block_title добавляем изменение курсора при наведении на заголовок

```css
cursor: pointer;
```

16. в файле style.css скрываем текст в .block_text

```css
display: none;
```

17. в файле script.js - прячем текст в спойлер

```js
$(document).ready(function () {
    $('.block_title').click(function(event) { 
        // Подключаемся к заголовку и добавляем событие click
        $(this).toggleClass('active').next().slideToggle(300);
        // Подключаем блок с заголовком к блоку с текстом при нажатии
        // С анимацией c помощью slideToggle со скоростью 300 миллисекунд
    });
});
```

18. в файле style.css меняется цвет стрелочки

```css
.block_title.active:before,
.block_title.active:after {
    background-color: red; /* Покраснение стрелочки спойлера в активном состоянии */
}
```

19. в файле style.css стрелочка в открытом(активном) состоянии спойлера смотрит не вниз, а вверх

```css
.block_title.active:before{
    transform: rotate(-40deg); /* Черная стрелочка спойлера смотрит вниз в закрытом состоянии */
}
.block_title.active:after{
    transform: rotate(40deg); /* Красная стрелочка спойлера смотрит вверх в закрытом состоянии */
}
```

20. в файле index.html чтобы при открытии спойлера, закрывались открытые спойлеры

```html
<div class="block one">
```

21. в файле script.js осуществляем закрытие спойлеров при открытии нового

```js
if($('.block').hasClass('one')){
    $('.block_title').not($(this)).removeClass('active');
    $('.block_text').not($(this).next()).slideUp(300);
}
```

# Итог

1. в файле script.js

```js
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
```

![2024-12-29_12-04-39](https://github.com/user-attachments/assets/40718df7-38ac-4e72-a944-8a10ca164ae9)


2. в файле index.html

```css
/* Обнуление */
*,*:before,*:after{
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
}
/* Стили для демонстрации */
html,body{
    height: 100%;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.wrapper{
    height: 100%;
    padding: 50px; /* Отступ */
}
/* Основные стили */

.block {}
.block_item {
    margin: 0 0 20px 0; /* Между спойлерами делаем отступ */
}
.block_title {
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative; /* Перенос стрелочки спойлера в строку с названием заголовка */
    padding: 0 0 0 30px;
    cursor: pointer;
}
.block_title:before,
.block_title:after {
    content: '';
    width: 10px; /* Длина половины нашей стрелочки */
    height: 1px;
    background-color: #000;
    position: absolute;
    top: 8px; /* Отсуп стрелочки от верхнего края вниз на 10px */
    transition: all 0.3s ease 0s; /* Анимация плавного открытия спойлера */
}
.block_title:before{
    transform: rotate(40deg); /* Рисуется часть стрелки в строке заголовка: верхний левый угол к правому нижнему углу */
    left: 0;
}
.block_title:after{
    transform: rotate(-40deg); /* Рисуется часть стрелки в строке заголовка: верхний правый угол к левому нижнему углу */
    left: 8px; /* Смещаем часть стрелки вправо на 7 px от левого края */
}

.block_title.active:before,
.block_title.active:after {
    background-color: red; /* Покраснение стрелочки спойлера в активном состоянии */
}
.block_title.active:before{
    transform: rotate(-40deg); /* Черная стрелочка спойлера смотрит вниз в закрытом состоянии */
}
.block_title.active:after{
    transform: rotate(40deg); /* Красная стрелочка спойлера смотрит вверх в закрытом состоянии */
}

.block_text {
    display: none;
    padding: 10px 0 0 0; /* Вниз на 10 пикселей */
}
```

![2024-12-29_12-04-14](https://github.com/user-attachments/assets/670ac937-b2da-4eee-8f68-0d050defb40e)

![2024-12-29_12-04-26](https://github.com/user-attachments/assets/eff3d601-c7e1-4a6c-b6e1-63ba574a57dc)

3. в файле style.css

```html
<!-- Сообщаем браузеру, как стоит обрабатывать эту страницу -->
<!DOCTYPE html>
<!-- Оболочка документа, указываем язык содержимого -->
<html lang="ru">
<!-- Заголовок страницы, контейнер для других важных данных (не отображается) -->
<head>
    <!-- Заголовок страницы в браузере -->
    <title>Кнопка с анимацией "Спойлер"</title>
    <!-- Подключаем CSS -->
    <link rel="stylesheet" href="style.css">
    <!-- Кодировка страницы -->
    <meta charset="utf-8">
    <!-- Адаптив -->
    <meta name="viewport" content="width=device-width">
</head>
<!-- Отображаемое тело страницы -->
<body>
<!-- Оболочка для демонстрации -->
<div class="wrapper">
    <!-- Контент -->
    <div class="block one">
        <div class="block_item">
            <div class="block_title">Заголовок №1</div>
            <div class="block_text">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Urna enim magnis in condimentum egestas faucibus sodales. Aptent facilisi libero taciti primis diam, lectus sem malesuada. Velit dis mi habitasse ipsum tempus pretium nunc consequat. Ut ac habitasse potenti porttitor mauris turpis enim. Venenatis lacus malesuada semper accumsan gravida faucibus sed penatibus. Quisque aliquam erat aptent aptent elit mi. Congue id urna neque congue dignissim pellentesque litora lacinia. Pulvinar libero ante malesuada diam lacus eget feugiat.
                Facilisi augue donec ultrices amet tincidunt habitant sem vestibulum. Accumsan taciti leo leo ex tortor viverra. Ultricies rhoncus dis ac ipsum ullamcorper felis. Iaculis sapien nisi montes; vehicula sem senectus in quis feugiat. Magna venenatis id nunc, elit vehicula sociosqu tincidunt ut. Congue luctus blandit eros primis fermentum integer quis conubia. Sem tempus ultrices, rhoncus erat mus suscipit fames. Elementum dapibus venenatis convallis fames mi. Vitae dictum vehicula libero ridiculus ultricies est, malesuada urna eros.
                Lobortis placerat senectus nam sed, cubilia convallis sed. Leo nunc vestibulum aptent tempus sapien nisl vehicula. Ridiculus curabitur pretium ante fames elit. Rhoncus quis donec leo tortor lectus curabitur. Felis lacinia nostra tellus aenean luctus. Sollicitudin sociosqu condimentum dolor faucibus sit ipsum risus. Nibh feugiat ridiculus euismod vestibulum accumsan inceptos? Vel porttitor vulputate lorem duis massa sagittis. Condimentum ultrices luctus dui integer suspendisse dapibus.
                Elementum varius integer elit risus ridiculus; varius felis cras. Arcu venenatis faucibus, augue lacinia tristique tempus. Ultricies eu lacus pulvinar non condimentum nullam eros. Metus risus penatibus imperdiet conubia malesuada. Erat senectus ultrices primis hendrerit ullamcorper ullamcorper. Magnis iaculis congue platea vulputate convallis consequat facilisi placerat.
                Dis varius diam parturient ornare lacus elementum sollicitudin primis. Tempus magnis faucibus nibh tincidunt montes parturient faucibus. Torquent ac nunc tempus, magna sed parturient. Auctor venenatis gravida posuere facilisis sollicitudin posuere ultrices vehicula. Potenti natoque nibh aptent massa magna ornare quisque. Venenatis inceptos magna eget aliquam dapibus aliquet. Sagittis congue habitant dui, viverra torquent iaculis convallis. Nibh per rhoncus ipsum inceptos tempus magna fusce etiam. Proin penatibus neque ligula ligula elit massa integer luctus.
            </div>
        </div>
        <div class="block_item">
            <div class="block_title">Заголовок №2</div>
            <div class="block_text">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Urna enim magnis in condimentum egestas faucibus sodales. Aptent facilisi libero taciti primis diam, lectus sem malesuada. Velit dis mi habitasse ipsum tempus pretium nunc consequat. Ut ac habitasse potenti porttitor mauris turpis enim. Venenatis lacus malesuada semper accumsan gravida faucibus sed penatibus. Quisque aliquam erat aptent aptent elit mi. Congue id urna neque congue dignissim pellentesque litora lacinia. Pulvinar libero ante malesuada diam lacus eget feugiat.
                Facilisi augue donec ultrices amet tincidunt habitant sem vestibulum. Accumsan taciti leo leo ex tortor viverra. Ultricies rhoncus dis ac ipsum ullamcorper felis. Iaculis sapien nisi montes; vehicula sem senectus in quis feugiat. Magna venenatis id nunc, elit vehicula sociosqu tincidunt ut. Congue luctus blandit eros primis fermentum integer quis conubia. Sem tempus ultrices, rhoncus erat mus suscipit fames. Elementum dapibus venenatis convallis fames mi. Vitae dictum vehicula libero ridiculus ultricies est, malesuada urna eros.
                Lobortis placerat senectus nam sed, cubilia convallis sed. Leo nunc vestibulum aptent tempus sapien nisl vehicula. Ridiculus curabitur pretium ante fames elit. Rhoncus quis donec leo tortor lectus curabitur. Felis lacinia nostra tellus aenean luctus. Sollicitudin sociosqu condimentum dolor faucibus sit ipsum risus. Nibh feugiat ridiculus euismod vestibulum accumsan inceptos? Vel porttitor vulputate lorem duis massa sagittis. Condimentum ultrices luctus dui integer suspendisse dapibus.
                Elementum varius integer elit risus ridiculus; varius felis cras. Arcu venenatis faucibus, augue lacinia tristique tempus. Ultricies eu lacus pulvinar non condimentum nullam eros. Metus risus penatibus imperdiet conubia malesuada. Erat senectus ultrices primis hendrerit ullamcorper ullamcorper. Magnis iaculis congue platea vulputate convallis consequat facilisi placerat.
                Dis varius diam parturient ornare lacus elementum sollicitudin primis. Tempus magnis faucibus nibh tincidunt montes parturient faucibus. Torquent ac nunc tempus, magna sed parturient. Auctor venenatis gravida posuere facilisis sollicitudin posuere ultrices vehicula. Potenti natoque nibh aptent massa magna ornare quisque. Venenatis inceptos magna eget aliquam dapibus aliquet. Sagittis congue habitant dui, viverra torquent iaculis convallis. Nibh per rhoncus ipsum inceptos tempus magna fusce etiam. Proin penatibus neque ligula ligula elit massa integer luctus.
            </div>
        </div>
        <div class="block_item">
            <div class="block_title">Заголовок №3</div>
            <div class="block_text">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Urna enim magnis in condimentum egestas faucibus sodales. Aptent facilisi libero taciti primis diam, lectus sem malesuada. Velit dis mi habitasse ipsum tempus pretium nunc consequat. Ut ac habitasse potenti porttitor mauris turpis enim. Venenatis lacus malesuada semper accumsan gravida faucibus sed penatibus. Quisque aliquam erat aptent aptent elit mi. Congue id urna neque congue dignissim pellentesque litora lacinia. Pulvinar libero ante malesuada diam lacus eget feugiat.
                Facilisi augue donec ultrices amet tincidunt habitant sem vestibulum. Accumsan taciti leo leo ex tortor viverra. Ultricies rhoncus dis ac ipsum ullamcorper felis. Iaculis sapien nisi montes; vehicula sem senectus in quis feugiat. Magna venenatis id nunc, elit vehicula sociosqu tincidunt ut. Congue luctus blandit eros primis fermentum integer quis conubia. Sem tempus ultrices, rhoncus erat mus suscipit fames. Elementum dapibus venenatis convallis fames mi. Vitae dictum vehicula libero ridiculus ultricies est, malesuada urna eros.
                Lobortis placerat senectus nam sed, cubilia convallis sed. Leo nunc vestibulum aptent tempus sapien nisl vehicula. Ridiculus curabitur pretium ante fames elit. Rhoncus quis donec leo tortor lectus curabitur. Felis lacinia nostra tellus aenean luctus. Sollicitudin sociosqu condimentum dolor faucibus sit ipsum risus. Nibh feugiat ridiculus euismod vestibulum accumsan inceptos? Vel porttitor vulputate lorem duis massa sagittis. Condimentum ultrices luctus dui integer suspendisse dapibus.
                Elementum varius integer elit risus ridiculus; varius felis cras. Arcu venenatis faucibus, augue lacinia tristique tempus. Ultricies eu lacus pulvinar non condimentum nullam eros. Metus risus penatibus imperdiet conubia malesuada. Erat senectus ultrices primis hendrerit ullamcorper ullamcorper. Magnis iaculis congue platea vulputate convallis consequat facilisi placerat.
                Dis varius diam parturient ornare lacus elementum sollicitudin primis. Tempus magnis faucibus nibh tincidunt montes parturient faucibus. Torquent ac nunc tempus, magna sed parturient. Auctor venenatis gravida posuere facilisis sollicitudin posuere ultrices vehicula. Potenti natoque nibh aptent massa magna ornare quisque. Venenatis inceptos magna eget aliquam dapibus aliquet. Sagittis congue habitant dui, viverra torquent iaculis convallis. Nibh per rhoncus ipsum inceptos tempus magna fusce etiam. Proin penatibus neque ligula ligula elit massa integer luctus.
            </div>
        </div>
    </div>
    <!-- Подключаем jQuery -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <!-- Подключаем файл JS скриптов -->
    <script src="script.js"></script>
</div>
</body>
</html>
```

![2024-12-29_12-03-38](https://github.com/user-attachments/assets/ba61efc7-e498-4e9e-b86d-b9639fdea98f)
![2024-12-29_12-03-55](https://github.com/user-attachments/assets/b62df8b7-bed2-4a64-8846-e3d9bef95bc5)


