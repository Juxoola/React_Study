import './Button.css'
export default function Button({children, onTouch}) {
    return(
        
        <button className='button' onClick={onTouch}>{children}</button>
    )
}