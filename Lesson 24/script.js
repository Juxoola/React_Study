'use strict'

// let prevScrollY = 0
// window.addEventListener('scroll', event => {
// 	console.log(window.scrollY)
//   const header = document.getElementById('header')

// 	if (prevScrollY < window.scrollY && window.scrollY > 100) {
// 		header.style.display = 'none'
// 	} else {
// 		if (window.scrollY < prevScrollY) {
// 			header.style.display = ''
// 		}
// 	}
// 	prevScrollY = window.scrollY
// })

//Получает элемент с классом square-1 и сохраняет его в переменную square1. нельзя получить псевдокласс
// const square1 =document.querySelector('.square-1')
// const square2 =document.querySelector('.square-2')
// const square3 =document.querySelector('.square-3')

// square1.addEventListener('click', () => {
// 	console.log('square-1 погружение')
// }, true)

// square2.addEventListener('click', () => {
// 	console.log('square-2 погружение')
// }, true)

// square3.addEventListener('click', () => {
// 	console.log('square-3 погружение')
// }, true)

// document.addEventListener('click', () => {
// 	console.log('Click on document погружение')
// }, true)

// square1.addEventListener('click', () => {
// 	console.log('square-1 всплытие')
// })

// square2.addEventListener('click', () => {
// 	console.log('square-2 всплытие')
// })

// square3.addEventListener('click', () => {
// 	console.log('square-3 всплытие')
// })

// document.addEventListener('click', () => {
// 	console.log('Click on document всплытие')
// })


const button = document.querySelector('.button')
button.addEventListener('click', (event) => {
	//console.log(event)
	console.log('Кнопка клик 1')
	event.preventDefault()
	event.stopPropagation()
	event.stopImmediatePropagation()
})

button.addEventListener('click', (event) => {
	event.preventDefault()
	console.log('Кнопка клик 2')
	event.stopImmediatePropagation()
}, true)

const input = document.querySelector('[name=input]')

input.addEventListener('input', inputHandler)
input.addEventListener('input', () => {console.log('Анонимная функция')})

//input.oninput = (event) => {console.log('oninput')}


input.removeEventListener('input', inputHandler)


function inputHandler(event) {
		console.log(event.target.value)
		if (event.target.value === 'red') {
				input.style.border = 'green 1px solid'
				event.target.value = 'green'
		}
	}


window.addEventListener('mousedown', event => {
	console.log(event.clientX, event.clientY)
})