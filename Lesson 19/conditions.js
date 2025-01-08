// || - или
// && - и
// ! - не

const a = 'Строка'
const b = ''
const c = 'Ф'
const d = false
const v = null
//Возвращает первое true. А если true нет, то возвращает последнее
let result = b || d || v
console.log(result)

//Возвращает первый false. А если false нет, то возвращает последнее
const result2 = c && a
console.log(result2)

// ==  сравнение значений, но без сравнения типов 1 == '1'
// === сравнение значений и сравнения типов  '1' === '1'
// != неравно значения
// !== неравно со значениями и типами

// const name = prompt('Введи имя')
// if (!name) {
// 	console.log('Вы ничего не ввели')
// } else if (name === 'Андрей' || name === 'Andrew') {
// 	console.log('Вы Андрей')
// } else {
// 	console.log('Вы не Андрей')
// }

// const lastName = prompt('Ваша фамилия')
// if (!lastName) {
// 	console.log('Вы не ввели фамилию')
// } else if (
// 	(name === 'Андрей' || name === 'Andrew') &&
// 	(lastName === 'Бобер' || lastName === 'Bober')
// ) {
// 	console.log('Вы Андрей Бобер')
// }

const horoscope = prompt('Введите знак зодиака')

switch (horoscope) {
	case 'Козерог':
		console.log('Вы козерог')
		break
	case 'Водолей':
		console.log('Вы водолей')
		break
	case 'Лев': {
		console.log('Вы лев')
		console.log('В цирке не выступаете')
		break
	}
  default: console.log('кто же ты')
}
