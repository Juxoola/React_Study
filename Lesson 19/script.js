//Строки
const num = 5;  
const str1 = ' I\'m Строка' + num + 'sdsd';
const str2 = "Строка двойные кавычки";
const str3 = `Строка в наклонных 
${num+num} кавычках`;
//console.log(str1);

const str4 = 'Hello\n'.substring(2,4);
console.log(str4,str4[2]);
console.log('Строка'.includes("тр"));
console.log('Строка'.startsWith('Стр'));
console.log('Строка'.endsWith('а'));
console.log('             Очень важное предложение      '.trim());
console.log('             Очень важное предложение      '.replace('ж','ба'))
console.log('             Очень важное предложение      '.replaceAll('ж', 'ба'))

const value = document.getElementById('input').value;
console.log(value);

const name = prompt('Введи почту', '1@mail.ru');
console.log(name);
