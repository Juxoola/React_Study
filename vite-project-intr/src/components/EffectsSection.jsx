import useInput from '../hooks/userInput'
import Button from './Button/Button'
import Modal from './Modal/Modal'
import { useEffect, useState, useCallback } from 'react'

export default function EffectsSection() {
	const input = useInput()

	const [modal, setModal] = useState(false)
	const [loading, setLoading] = useState(false)
	const [users, setUsers] = useState([])

	const fetchData = useCallback(async () => {
		setLoading(true)
		const response = await fetch('https://jsonplaceholder.typicode.com/users')
		const users = await response.json()
		setUsers(users)
		setLoading(false)
	}, [])

	useEffect(() => {
		fetchData()
	}, [fetchData])

	return (
		<section>
			<h3>Effects</h3>

			<Button style={{ marginBottom: '1rem' }} onClick={() => setModal(true)}>
				Открыть информацию
			</Button>

			<Modal open={modal}>
				<h3>Modal</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
				<Button onClick={() => setModal(false)}>Закрыть</Button>
			</Modal>

			{loading && <p>Загрузка...</p>}
			{!loading && (
				<>
					<input type='text' className='control' {...input} />
					<ul>
						{users
							.filter(user =>
								user.name.toLowerCase().includes(input.value.toLowerCase())
							)
							.map(user => (
								<li key={user.id}>{user.name}</li>
							))}
					</ul>
				</>
			)}
		</section>
	)
}
