import Button from "./Button/Button"
import { useState } from "react" 
import { differences } from "../data"

export default function DifSection() {

    const [contentType, setContentType] = useState(null)

    function handleClick(type) {
  
      setContentType(type)
  
    }
    return(
    <section>
        <h3>Order</h3>
        <Button isActive = {contentType === 'per'} onTouch={() => handleClick('per')}  > Перва кнопка</Button>
        <Button isActive = {contentType === 'vtor'} onTouch={() => handleClick('vtor')} > Вторая кнопка</Button>
        <Button isActive = {contentType === 'tret'} onTouch={() => handleClick('tret')} > Третья кнопка</Button>

        {!contentType && <p>Нажмите на кнопку</p>}
        {contentType && <p>{differences[contentType]}</p>}

    </section>
    )
}