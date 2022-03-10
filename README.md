Простой класс  CustomInputNumber предназначен для кастомизации input[type="number"].
Оригинальный input скрывается путём добавления класса  .input-visually-hidden. 
В разметку добавляется блок с классом .input-number-wrap, внутри которого есть две кнопки с общим классом .input-number-btn,
кнопка увеличения количества имеет класс .input-number-plus, а уменьшения - .input-number-minus.
Сами значки "+" и "-" сделаны с помощью псевдоэлементы ::before и ::after.
Кастомизация производится почредством написания стилей для этих классов.
Пример инициализации класса смотри в файле index.html.

The simple Custom Input Number class is designed to customize input[type="number"].
The original input is hidden by adding the .input-visuallyhidden class. 
A block with the .input-number-wrap class is added to the markup, 
inside of which there are two buttons with a common .input-number-btn class, the increase button has the .input-number-plus class,
and the decrease button has the .input-number-minus class. 
The "+" and "-" icons themselves are made using pseudo-elements ::before and ::after. 
Customization is done by writing styles for these classes.
For an example of class initialization, see the file index.html .
