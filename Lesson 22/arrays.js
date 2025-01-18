'use strict'

const arr = []

const arr2 = ['apple', 'banana','coconut']

const elem = arr2[1]
const lastElem = arr2[arr2.length -1]
console.log(elem)
console.log(lastElem)

for(let i =0; i < arr2.length; i++){
  console.log(arr2[i])
}

arr2.forEach((item, index) => { 
  console.log(item, index)
})

arr2.forEach(function(item, index){
  console.log(item)
})

//Добавить в конец
arr2.push('pineapple')

//Вынуть с конца
const lastElem2 = arr2.pop()
console.log(arr2,lastElem2)

//Удалить с начала
const firstElement = arr2.shift()
console.log(arr2, firstElement)

//Добавить в начало
arr2.unshift('carrot')
console.log(arr2)


//Найти индекс элемента
const index = arr2.indexOf('banana')
console.log(index)


//Найти элемент
const findElem = arr2.find((item) =>{
  return item[0] === 'c'
})

console.log(findElem)

//Найти индекс элемента
const findIndex= arr2.findIndex(item => {
	return item[0] === 'c'
})

console.log(findIndex)

//Вырезает часть массива (сам массив)
// arr2.splice(0,2)
// console.log(arr2)

//Возвращает копию массива
const arr3 = arr2.slice(0,2)
console.log(arr3)


const userList = [
	{
		name: 'Петя',
		lastName: 'Иванов',
	},
	{
		name: 'Катя',
		lastName: 'Петрова',
	},
	{
		name: 'Саша',
		lastName: 'Скворцов',
	},
]

const userListFilltered = userList.filter((item) => {
  return item.lastName === 'Иванов'
})
const userListFillteredShort = userList.filter(item => item.lastName === 'Петрова')
console.log(userListFillteredShort)

const userListMapped = userList.map((item, index) => {
  return {
    ...item,
    id: index
  }
})

console.log(userListMapped)

const arrNumbers = [
	{
		x: 5,
		y: 10,
	},
	{
		x: 15,
		y: 20,
	},
	{
		x: 23,
		y: 54,
	}
]

// = x*y + x*y + x*y
const result = arrNumbers.reduce((acc, item)=>{
  acc = acc + item.x * item.y

  return acc
},0)

console.log(result)