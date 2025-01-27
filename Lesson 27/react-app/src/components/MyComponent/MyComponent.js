import './MyComponent.css'
import MyClassComponent from '../MyClassComponent/MyClassComponent'

function MyComponent() {
	return <div className='MyComponent'>
		<h1>MyComponent</h1>
		<MyClassComponent />
	</div>
}

export default MyComponent
