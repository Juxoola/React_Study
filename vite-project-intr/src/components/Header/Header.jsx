import { useState } from 'react'
import logo from '/vite.svg'
//import './Header.css'
import {styled} from 'styled-components'

const HeaderContainer = styled.header`
    height: 50px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background: #fafafa;
`
export default function Header() {
    const [now, SetNow ] = useState(new Date())
    setInterval(() => {SetNow(new Date(), 1000)})
    
    return(
    <HeaderContainer>
        <img src={logo} alt={"name"} />

        <span>Time now: {now.toLocaleTimeString()}</span>
    </HeaderContainer>
    )
}