import Header from "./components/Header"
import { menu } from "./data"
function MenuItem(props) {
  console.log(props)
  return(
    <li>
      <p>
        <strong>{props.title}</strong> {props.description}
      </p>
    </li>
  )
  
}
export default function App() {
  return(
    <div>
      <Header></Header>
      <main>
        <section>
          <h3>Menu</h3>
          <ul>
            <MenuItem title={menu[0].title} description={menu[0].description}/>
            <MenuItem title={menu[1].title} description= {menu[1].description}/>
            <MenuItem title={menu[2].title} description= {menu[2].description}/>
            <MenuItem title={menu[3].title} description= {menu[3].description}/>
          </ul>
        </section>
      </main>
    </div>
  )
}


