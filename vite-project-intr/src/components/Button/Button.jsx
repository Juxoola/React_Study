import './Button.css'
export default function Button({children}) {
    
    function handleClick() {
        console.log('clicked')
    }

    return(
        <button className='button' onClick={handleClick} onDoubleClick={() => console.log('double clicked')}>{children}</button>
    )
}