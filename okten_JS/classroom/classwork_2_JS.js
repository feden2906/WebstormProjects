// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arr_1 = [5, 6,  4, 2, 1,];
// let arr_2 = ['iiiu', '1488', 'fdsfd','dds', '451'];
// let arr_3 = ['rrr', 1488, 'fdsfd',true, false];
// console.log(arr_1);
// console.log(arr_2);
// console.log(arr_3);

//..............................................

//-- Створити пустий масив.
// Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль
// let arr_4 = [555, 'true', 'boss'];
// console.log(arr_4[0]); => 555
// console.log(arr_4[1]); => true
// console.log(arr_4[2]); => boss

//..........................................................

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині


//let arr_5 = ['ok','hf','no','yes',1488,'goog',true,'hello','gg',false,];


//for (let arr_item of arr_5){
    //document.write(`<div> ${arr_item} </div>`);
 //}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let key in arr_5){
//     document.write(`<div> ${key} - ${arr_5[key]} </div>`);
// }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині + індексом

// let i = 0;
// while (i < arr_5.length){
//     document.write(`<h1>${arr_5[i]} - ${i}</h1>`);
//     i++
// }
//...................................................................
//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let num_array = [111,222,322,444,555,666,777,888,999,1000];
// for (let i = 0; i<num_array.length; i++){
//     console.log(num_array[i]);
// }
//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let string_arr = ['iiiu', '1488', 'fdsfd','dds', '451','fff','rerer', 'aks', 'ak-47','m-16'];
// for (let i = 0; i<string_arr.length; i++){
// console.log(string_arr[i]);
//  }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
//     За допомогою if та typeof вивести тільки булеві АБО СТРІНГОВІ AБО ЧИСЛОВІ елементи

//let mult_arr = ['rrr', 1488, 'fdsfd',true, false, 452,'ak-47','m-16','BMW','ford'];

// for (let i=0; i<mult_arr.length; i++) {
//     if (typeof mult_arr[i]==="boolean" ){
//         console.log(mult_arr[i]);
//     }
// };
// for (let i=0; i<mult_arr.length; i++) {
//     if (typeof mult_arr[i]==="string" ){      <---- ==="number"-----> return only numbers
//         console.log(mult_arr[i]);
//     }
// };
//
/*- Створити порожній масив. Наповнити його 10 елементами (різними за типами)
через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.*/
 // for (i=0; i < mult_arr.length; i++){
 //     console.log(mult_arr[i]);
 //}
/*Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write*/
/*for (var i = 1; i <= 10; i++) {
//    console.log([i]);
    document.write(i);
}*/
//- Створити цикл for на 100 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
/*for (var i = 1; i <= 100; i++) {
   console.log(i);}*/
   //document.write(i);}
//- Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write
/*for (var i = 1; i <= 100; i = i + 2) {
    console.log(i);}*/
//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (var i = 0; i <= 100; ???)  {
    console.log(i);}