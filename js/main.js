import CustomInputNumber from './custom_input_number.js';
document.addEventListener('readystatechange', function () {
    const numberFields = document.querySelectorAll('input[type="number"]');
    if(numberFields.length){
        numberFields.forEach(el => {
            new CustomInputNumber(el, {min : 1});
            el.addEventListener('change', e => console.log('changed'));
        });
    }
});