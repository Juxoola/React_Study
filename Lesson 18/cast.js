//Строковое преобразование
const bool = true;
const num = 53;
const str = String(num);

console.log(num,str);

const str2 = '' + bool;
console.log(bool, str2)

//Числовое преобразование
const castNum = Number(str);
const castNum2 = +str;
console.log('string to number', castNum)
console.log('string tu number (неявно)', castNum2);

//Логическое преобразование
const boolCast = Boolean(str);
console.log('string to bool', boolCast)
const boolCast2 = !!str;
console.log('string to bool (неявно)', boolCast2)

if(!str){

}
/*
 Falsey значения:
 - undefined
 - null
 - ''
 - 0
 - NaN
*/

