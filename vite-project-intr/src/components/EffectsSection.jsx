import Button from './Button/Button'
import Modal from './Modal/Modal'
import { useState } from 'react'

export default function EffectsSection() {
  
  const [modal, setModal] = useState(false)
	
  function openModal() {
    setModal(true)
  }

	return (
		<section>
			<h3>Effects</h3>

			<Button onClick={openModal}>Открыть информацию</Button>
			
			<Modal open={modal}>
				<h3>Modal</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
				<Button onClick={() => setModal(false)}>Закрыть</Button>
			</Modal>

		</section>
	)
}
