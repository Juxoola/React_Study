export default class User{
  _name
  _lastName
  _age

  constructor(name = '', lastName = '', age = 0){
    this._name = name
    this._lastName = lastName
    this._age = age
  }

  static isUser(obj){
    return obj instanceof User
  }

  get name() {
    return `Имя: ${this._name}`;
  }

  set name(value) {
    this._name = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }

  
  toString(){
    return `${this._name} ${this._lastName} ${this._age}`
  }
}