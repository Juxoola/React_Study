'use strict'
let name = 'Lexa'
let variable = 'Строка'
function sayHelloWorld(){
  console.log('Hello world')
}

function sayHi(name, lastName = 'No last name') {
  const string = `Hi, ${name} ${lastName}`
	console.log(string)
  // variable = 'Изменение строки'
  // console.log(variable)
  return `Return: ${string}`
}


sayHi(name, 'Puskin')
let result = sayHi('Grisha')
console.log(result)
// console.log(string)