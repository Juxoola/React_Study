import './App.css';
import Card from './components/Card/Card';
import MyClassComponent from './components/MyClassComponent/MyClassComponent';
import MyComponent from './components/MyComponent/MyComponent';

function App() {
  return (
    <div className="App">
    <MyComponent lastName='Petrov'>
      
    </MyComponent>
    <MyComponent name='Ivan' lastName='Ivanov'/>
    <MyComponent name='Petr' lastName='Petrov'/>
    <MyClassComponent name='Ivan' lastName='Ivanov'/>
    <MyClassComponent name='Petr' lastName='Petrov'/>
    <MyClassComponent>
      <div>Hello from MyClassComponent</div>
    </MyClassComponent>
    <Card></Card>

    </div>
  );
}

export default App;
