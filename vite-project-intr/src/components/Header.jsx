import logo from '/vite.svg'
export default function Header() {
    const now = new Date()
    const name = 'Result'
    return(
    <header>
        <img src={logo} alt={name} />
        {/* <h3>Bla bla b</h3> */}

        <span>Time now: {now.toLocaleTimeString()}</span>
    </header>
    )
}