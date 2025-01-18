'use strict'

//Set имеет только уникальные значения в отличие от массива
const set = new Set()

set.add('персик')
set.add('персик1')
set.add('персик2')
set.add('персик3')
set.add('персик4')
set.add('персик5')
console.log(set)

const arr = [1,2,3,4,5,6,6,7,7]
console.log(new Set(arr))

//Перебор set
for (let entry of set){
  console.log(entry)
}

const setObjects = new Set()

setObjects.add({a: 1})
setObjects.add({ a: 1 })
console.log(setObjects)

