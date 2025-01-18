'use strict'

const map = new Map()

map.set('a', 1)
map.set('b', 2)
map.set('c', 3)
map.set('d', 4)
map.set('e', 5)
console.log(map)

//for..of
for(let [key,value] of map){
  console.log(key, value )
}

console.log(map.size)
//У объекта есть прототип (методы по умолканию, ключи), у map нет

//В качестве ключа у map может быть что угодно, у объекта строки и символы

//Записи в map всегда в порядке добавления

//Для просмотра размера map можно использовать size, а объект нужно преобразовывать в массив