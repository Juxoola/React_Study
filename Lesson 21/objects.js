'use strict'

const person = {
  name: 'Kay',
  latsName: 'Pigeon',
  body: {
    height: 205,
    age: 34
  }
}

const person2 = {}

person2.name = "Барбарис"

console.log(person)
console.log('Возраст:', person.body.age)

console.log(person2)

//ссылка на объект person 
const person3 = person

//При изменении person3 изменится и person
person3.body.age = 23

//создание нового объекта, а не ссылки
const person4 = {...person}


//True только если сравниваются одинаковые объекты или ссылки на один объект
console.log(person === person3)

console.log(person === person4)

if (person2.body){
  console.log(person2.body.age)
}

console.log(person2.body?.age)