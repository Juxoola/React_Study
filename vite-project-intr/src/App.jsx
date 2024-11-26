import Header from "./components/Header"
import { menu , differences } from "./data"
import MenuItem from "./components/MenuItem"
import Button from "./components/Button/Button"
import { useState } from "react" 

export default function App() {

  const [content, setContent] = useState("Текст")

  //let content = 'Нажмите на кнопку'
  
  
  function handleClick(type) {
    //console.log('clicked', type)
    setContent(type)
    //content = type
  }
  return(
    <div>
      <Header></Header>
      <main>
        <section>
          <h3>Menu</h3>
          <ul>
            <MenuItem {...menu[0]}/>
            <MenuItem {...menu[1]}/>
            <MenuItem {...menu[2]}/>
            <MenuItem {...menu[3]}/>
          </ul>
        </section>
        <section>
          <h3>Order</h3>
          <Button onTouch={() => handleClick('per')}  > Перва кнопка</Button>
          <Button onTouch={() => handleClick('vtor')} > Вторая кнопка</Button>
          <Button onTouch={() => handleClick('tret')} > Третья кнопка</Button>
          <p>{differences[content]}</p>
        </section>
      </main>
    </div>
  )
}


