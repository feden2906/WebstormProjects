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

let str1 = 'Кто'
let str2 = 'ты'
let str3 = 'такой?'
// let concatenation = (str1 + " " + str2 + " " +  str3);
//document.write(concatenation);
// ...........ВАРІАНТ № 2 ..............
// let concatenation = (`${str1} ${str2}  ${str3}`);
// document.write(concatenation);
*/


/*10. Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

let str = "20";
let a = 5;
document.write(str + a + "<br/>");
document.write(str - a + "<br/>");
document.write(str * "2" + "<br/>");
document.write(str / 2 + "<br/>");

Почему-то стринга ведет себя как число, кроме первого случая.
*/


/*13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух
чисел, а вывод результата при помощи метода alert
let a = +prompt('введи перше число');
let b = +prompt('введи друге число');
alert(a + b);
*/

/*
14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию
 и возраст, а вам не обходимо вывести строку такого вида
Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

let firstName = prompt("ім'я:");
let surName = prompt('призвіще:');
let age = +prompt('вік:');
document.write(`<p> Доброго вечера ${firstName} ${surName}. Мои поздравления что Вам ${age} </p>`)
*/
/*
=====================
======ДОП============
=====================


1. Три різних числа вводяться через prompt().
    За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)


let a = +prompt('введи перше число');
let b = +prompt('введи друге число');
let c = +prompt('введи третє число');
if (a > b && a > c && b > c)  document.write(`${c} ${b} ${a}`);
if (b > a && b > c && a > c)  document.write(`${c} ${a} ${b}`);
if (c > a && c > b && a > c)  document.write(`${a} ${b} ${c}`);


2.
Все параматры получаем с клавиатуры!!!!
    Имитируем поведение пешехода на перекстке.
    Если светофор зеленый - вывести "иди".
    Если светофор желтый - вывести "подожди".
    Если светофор красный - вывести "стой".
    Если светофор в аварийном режиме вывести "делай что хочешь"!



    3
Все параметры получаем с клавиатуры!!!!(prompt , confirm)
Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
    Улучшаем предыдущее задание.
    Если светофор зеленый и машин нет - вывести "иди".
    Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
Если светофор желтый и машины есть - вывести "жди".
    Если светофор желтый и машин нет - вывести "все рано жди".
    Если светофор красный и машин нет- вывести "стой все рано".
    Если светофор красный - и машины есть вывести "стой и жди".
    Если светофор в аварийном режиме вывести "делай что хочешь"!

 */


// let color = prompt('color:');
// if (color === 'red') {
//     document.write('STOP');
// } else if (color === 'yellow') {
//     document.write('wait');
// } else if (color === 'green') {
//     document.write('GO');
// } else {
//    document.write('РОБИ ЩО ХОЧЕШ! :-)');
// }





