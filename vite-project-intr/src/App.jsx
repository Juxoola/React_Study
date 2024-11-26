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
            <MenuItem title="Breakfast" description="Bla bla"/>
            <MenuItem title="Breakfast 33" description="Bla bla"/>
          </ul>
        </section>
      </main>
    </div>
  )
}


