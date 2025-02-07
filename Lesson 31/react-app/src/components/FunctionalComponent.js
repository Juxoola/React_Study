import { useState, useEffect } from "react"

function FunctionalComponent() {
  const [counter, setCounter] = useState(0)
  //setCounter(counter + 1)

  function onClick(){
    setCounter(counter + 1)
  }

  useEffect(()=>{
    document.title = `Вы нажали ${counter} раз`
  })
  return (
		<div>
			<h2>Functional component</h2>
			<div>{counter}</div>
			<button onClick={onClick}>Counter + 1</button>
		</div>
	)
}

export default FunctionalComponent