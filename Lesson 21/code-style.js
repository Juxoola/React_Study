//Переменная может быть названа одной буквой если это переменная в цикле или исключение

try{
console.log(variable)
let variable = 0
}catch(e)
{
  console.log(e)
}

console.log('Код который выполнится')

/**
 * @type {number} Это константа 
*/
const GLOBAL_TIMEOUT = 25

/**
 * 
 * @param {*} name Имя пользователя
 * @param {*} age Возраст
 * @returns Возвращаемое значение
 */
function writeMessage(name = 'Key', age = '30'){
  console.log('something')

  return'hello world'
}

writeMessage()