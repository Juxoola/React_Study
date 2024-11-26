import { useState } from 'react'
import logo from '/vite.svg'
export default function Header() {
    const [now, SetNow ] = useState(new Date())
    setInterval(() => {SetNow(new Date(), 1000)})
    
    return(
    <header>
        <img src={logo} alt={"name"} />

        <span>Time now: {now.toLocaleTimeString()}</span>
    </header>
    )
}