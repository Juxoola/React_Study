import Header from "./components/Header"
import { menu } from "./data"
import MenuItem from "./components/MenuItem"
import Button from "./components/Button/Button"
export default function App() {
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
          <Button text='Order now'/> 
        </section>
      </main>
    </div>
  )
}


