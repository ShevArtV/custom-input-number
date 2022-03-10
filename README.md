Простой класс  CustomInputNumber предназначен для кастомизации input[type="number"].
Оригинальный input скрывается путём добавления класса  .input-visually-hidden. 
В разметку добавляется блок с классом .input-number-wrap, внутри которого есть две кнопки с общим классом .input-number-btn,
кнопка увеличения количества имеет класс .input-number-plus, а уменьшения - .input-number-minus.
Сами значки "+" и "-" сделаны с помощью псевдоэлементы ::before и ::after.
Кастомизация производится почредством написания стилей для этих классов.
Пример подключения класса смотри в файле index.html и main.js.
Доступны следующие параметры:
min - минимальное значение;
max - максимальное значение;
placeholder - заполнитель при отсутствии значения;
step - шаг измениния, может быть дробным;
negative - разрешает отрицательные значения, по умолчанию запрещены.
Передать значения конфигурации можно через атрибуты, при этом negative передается через data-negative, 
если отрицательные значения не нужны не указвайте значение вообще или удалите этот атрибут. 
Также есть возможность передать конфигурацию вторым параметром при создании экземпляра класса, при этом тип параметра объект.

The simple Custom Input Number class is designed to customize input[type="number"].
The original input is hidden by adding the .input-visuallyhidden class. 
A block with the .input-number-wrap class is added to the markup, 
inside of which there are two buttons with a common .input-number-btn class, the increase button has the .input-number-plus class,
and the decrease button has the .input-number-minus class. 
The "+" and "-" icons themselves are made using pseudo-elements ::before and ::after. 
Customization is done by writing styles for these classes.
For an example of connecting a class, see the file index.html and main.js.
The following parameters are available: 
min - minimum value;
max - maximum value; 
placeholder - placeholder if there is no value;
step - step change, can be fractional;
negative - allows negative values, by default false.
Configuration values can be passed through attributes, while negative is passed through data-negative, 
if negative values are not needed, do not specify the value at all or delete this attribute. 
It is also possible to pass the configuration as a second parameter when creating an instance of the class, while the parameter type is an object.

const numberField = document.querySelector('input[type="number"]');
      config = {
        min: 1,
        max: 10,
        step: 0.5,
        negative: false,
        placeholder: 'Кол-во'
      } 
new CustomInputNumber(numberField, config);
