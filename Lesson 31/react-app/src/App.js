
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

function App() {

  // function updatePersonAge(person, age){
  //   return{
  //     firstName: person.firstName,
  //     lastName: person.lastName,
  //     age: age
  //   }
  // }
  // const str = 'Строка'
  // console.log(str)
  // //str[0] = '5'

  // const person = {
  //   firstName: 'Alex',
  //   lastName: 'Petrov',
  //   age: 34
  // }

  // person.age = 43
  // console.log(person)

  // const fruitlist = ['apple', 'banana', 'lime', 'orange']
  // console.log(fruitlist)
  // fruitlist[2] = 'mango'
  // console.log(fruitlist)

  // //Immutability
  // //Immutable Object

  // const newObject = {...person, age:23}
  // //const newObject = updatePersonAge(person, 67)
  // console.log(newObject)
  // console.log(person)

  
  return (
    <div className="App">
      <ClassComponent/>
      <FunctionalComponent/>
    </div>
  );
}

export default App;
