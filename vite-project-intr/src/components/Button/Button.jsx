import './Button.css'
export default function Button({children, onTouch, isActive}) {


    return(
         <button className={isActive ? 'button active' : 'button'} onClick={onTouch}>{children}</button>
    )
}