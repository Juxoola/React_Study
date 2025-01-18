'use strict'

const person = {
  name: 'Петя',
  lastName: 'Сидоров',
  age: 25,
  height: 183,
  weight: 75
}


const personBase = {
  user: true,
  name: 'Барбарис'
}

//Копирование объектов
const personCopy = Object.assign(personBase , person)

console.log(personCopy)


//Возвращает массив
// const values = Object.values(person)
// console.log(values)

const values = Object.values(person).forEach((value) => {
  console.log(value)
})

//Массив с парами ключ и значение
const entries = Object.entries(person).forEach(([key, value]) =>{
  console.log('Ключ', key, 'Значение', value)
})
