//import './Button.css'
import classes from './Button.module.css'
export default function Button({children, onTouch, isActive}) {


    return(
         <button className={isActive ? `${classes.button} ${classes.active}` : classes.button}
          onClick={onTouch}>
            {children}</button>
    )
}