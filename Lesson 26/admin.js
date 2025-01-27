import User from './user.js'

export default class Admin extends User {
  _permissions 
  _email


static isAdmin(obj){
  return obj instanceof Admin
}

get email() {
  return this._email;
}

set email(value) {
  this._email = value;
}

get permissions() {
  return this._permissions;
}

set permissions(value) {
  this._permissions = value;
}

constructor(name = '', lastName = '', age = 0, permissions = [], email = ''){
  super(name, lastName, age)
  this._permissions = permissions
  this._email = email
}

toString() {
  return `${super.toString()} ${this._permissions} ${this._email}`
}

}