'use strict'

//let inputValue = sessionStorage.getItem('inputValue')
let inputValue = localStorage.getItem('inputValue')
console.log('Изначальный inputValue', inputValue)
const input = document.getElementById('input')
input.value = inputValue
document.cookie = 'Name' + '=' + 'Alex'

input.addEventListener('input', event => {
	inputValue = event.target.value
	//sessionStorage.setItem('inputValue', event.target.value)
	localStorage.setItem('inputValue', event.target.value)
  document.cookie = 'inputValue' + '=' + event.target.value
	console.log(inputValue)
})

//Препод не объяснил как установить библиотеку для куки