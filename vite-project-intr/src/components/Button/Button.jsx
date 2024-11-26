import './Button.css'
export default function Button({children, onTouch, isActive}) {
    // let classes = 'button'
    // if (isActive) {
    //     classes += ' active'
    // }

    return(
         <button className={isActive ? 'button active' : 'button'} onClick={onTouch}>{children}</button>
        //<button className={classes} onClick={onTouch}>{children}</button>
    )
}