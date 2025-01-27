'use strict'
import User from './user.js'
import Admin from './admin.js'

const user = new User()
user.name = 'Ivan'
user.lastName = 'Ivanov'
user.age = 30
console.log(user.toString())
console.log(user.name)


const Boris = new User('Boris', 'Borisov', 25)
console.log(Boris.toString())


const permissions = [
  'create',
  'read',
  'update',
  'delete'
]
const admin = new Admin('Admin', 'admin', 30, permissions, 'admin@ya.ru')
console.log(admin.toString())


console.log(Admin.isAdmin(Boris))

