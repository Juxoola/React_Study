import { useState } from 'react'
import Button from './Button/Button'

function StateVsRef() {
	const [value, setValue] = useState('')
	const [show, setShow] = useState(false)

	function handleKeyDown(e) {
		if (e.key === 'Enter') {
			setShow(true)
		}
	}
	
	return (
		<div>
			<h3>Input value: {show ? value : '***'}</h3>
			<input
				type='text'
				value={value}
				onKeyDown={handleKeyDown}
				onChange={e => setValue(e.target.value)}
				className='control'
			/>
		</div>
	)
}
export default function FeedBackSection() {
	const [form, setForm] = useState({
		name: '',
		hasError: false,
		reason: 'help',
	})

	// const [name, setName] = useState('')
	// const [reason, setReason] = useState('help')
	// const [hasError, setHasError] = useState(false)

	function handleNameChange(event) {
		// setName(event.target.value)
		// setHasError(event.target.value.trim().length === 0)
		setForm(prev => ({
			...prev,
			name: event.target.value,
			hasError: event.target.value.trim().length === 0,
		}))
	}

	// function toggleError() {
	// setHasError((prev) => !prev)
	//}

	return (
		<section>
			<h3>Обратная связь</h3>
			{/* <Button onClick={toggleError}>Toggle error</Button> */}
			<form style={{ marginBottom: '1rem' }}>
				<label htmlFor='name'>Ваше имя</label>
				<input
					type='text'
					id='name'
					className='control'
					value={form.name}
					onChange={handleNameChange}
					style={{
						border: form.hasError ? '1px solid red' : null,
					}}
				/>

				<label htmlFor='reason'>Причина обращения</label>
				<select
					id='reason'
					className='control'
					value={form.reason}
					onChange={event =>
						setForm(prev => ({ ...prev, reason: event.target.value }))
					}
				>
					<option value='error'>Ошибка</option>
					<option value='help'>Нужна помощь</option>
					<option value='suggest'>Предложение</option>
				</select>

				{/* <pre>{JSON.stringify(form, null, 2)}</pre> */}

				<Button disabled={form.hasError} isActive={!form.hasError}>
					Отправить
				</Button>
			</form>
			<hr />
			<StateVsRef />
		</section>
	)
}
