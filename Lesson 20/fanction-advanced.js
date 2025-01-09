'use strict'

//hoisting. Использование переменной до объявления
console.log(x)

var x = 'qwe'

//Не работает с let
// console.log(y)

// let y = 'qwe'

//H Функциями
sayHi()

//Это function declaration 
function sayHi(){
  console.log('Hi')
}


// sayHi2()
//function expression (не работает hoisting)
const sayHi2 = function(){
  console.log('Hello2')
}

//Стрелочная функцию (лямбда выражение) (hoisting не работает)
const sayHi3 = () =>{
  console.log('Hello3')
}

//IIFE - Immediately Invoked function Expression

(function(name){
  console.log('IIFE',name)
})('Alex')

//Замыкания
//Функция сначала ищет переменные внутри функции
let name = 'Andrew'
function closure(){
  let name = 'Alex'
  console.log(name)
}

closure()


//Функция сохраняет окружение
function createCounter(){
  let counter = 0
  function add(){
    return ++counter
  }
  return add;
}

const counter = createCounter()

console.log(counter())
console.log(counter())

//Еще пример. Если i вне функции, то выводится 10, если i внутри функции, то выводится 5
let func
// let i
for(let i = 0; i < 10; i++){
  if (i === 5){
    func = function(){
      console.log(i)
    }
  }

}

// console.log('Счетчик',i)
func();


let variable = 'abc'

if(true){
  let variable2 = 'asc'
  var variable3 = 'acv'
}

console.log(variable3)