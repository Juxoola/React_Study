import './Button.css'
export default function Button({children}) {
    
    function handleClick() {
        console.log('clicked')
    }
    function handleMouseEnter() {
        console.log('mouse entered')
    }
    return(
        <button className='button' onClick={handleClick} onMouseEnter={handleMouseEnter}>{children}</button>
    )
}