import { menu } from "../data"
import MenuItem from "./MenuItem"
export default function MenuSection() {
    return (
    <section>
        <h3>Menu</h3>
        <ul>
          {menu.map(item => <MenuItem key={item.title} {...item} />)}

        </ul>
    </section>
    )
}