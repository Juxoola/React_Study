const number = 5 * 5;

/*
 + сложение
 - вычитание
 * умножение
 / деление
 % остаток от деления
** в степень
 */

const multiply = 5 ** 4;
console.log(multiply);

const rest = 25 % 6;
console.log(rest);

const str1 = "Hi my name is ";
const str2 = "PamPam";
const str3 = str1 + str2;
console.log(str3);

const stringNumber = '5';
console.log(+stringNumber + 25);

let n = 2;
// n = n + 5;
n += 5+5;
console.log(n)

//boxing Примитив заворачиваем в объект
console.log('hi'.toUpperCase());

//unboxing Объект приводится к примитиву
console.log(Number(5));