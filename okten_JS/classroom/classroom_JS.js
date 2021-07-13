/*Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
let str ='Привіт';
let num = 123;
let flag = true;
let txt = 'true';
console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);
*/


/*2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
        34,    12,    66,    90,    87
Старайтесь використовувати різні оператори.
    Example: 88 = (16 / 2) * 11


let a1 = 2;
let a2 = 10;
let a3 = 5;
let a4 = 30;
let a5 = 100;

let res_1 = ( (a5/a3) + 14);
console.log(res_1); //34
console.log(a2 + a1); //12
console.log((a4 * a1) + 6); //66
console.log(a4*(a3-a1)); //90
console.log((a4*(a3-a1)) - (a4/a2)); //87
*/

/*
3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
    5 % 3,
    3 % 5,
    5 + '3',
    '5' - 3,
    75 + 'кг'


let a6 = 2;
let a7 = 3;
let a8 = 53;
let a9 = 2;
let a10 = 75кг;
*/


/*4. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
Значееня площі зберігати в змінній s.*/

/*
let height = 23;
let width = 10;
let s = (height * width);
console.log(s);
*/

/* 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
    результат поместите в переменную v.*/
// V = П * r2 * h
 /*
 let heightC = 10;
 let dc = 4;
 let v =( Math.PI * dc * heightC );
 console.log(v);
 */

/* 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

let n = 3;
let m = 4;
let k = Math.sqrt ( Math.pow(n, 2) + Math.pow(m, 2) );
console.log(k);

 */

/*8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби
(каждой на новой строки спомощью \n).

alert('Oleg \n 37 \n bicycle');
*/

/*9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
    Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
  Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
    Вывести в документ содержимое переменной concatenation спомощью document.write
 */
let str1 = 'Кто'
let str2 = 'ты'
let str3 = 'такой?'
let concatenation = (str1 + str2 + str3);
document.write(concatenation);
