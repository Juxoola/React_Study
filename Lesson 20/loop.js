'use strict';

//let input = 'true'
// let input = prompt('Введите что-то')
// while (input === 'true') {
//   input = prompt('Введите что-то')
// 	console.log('Цикл while')
// }

// do {
//   input = prompt('Введите что-то')
// 	console.log('Цикл do while')
// } while (input === 'true')

let n = Number(prompt('Введите число'))
let i
for(i = 0; i < n; i++){
  console.log(`Цикл for ${i}`)
}
console.log(i)