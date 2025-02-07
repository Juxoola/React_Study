import React from 'react'

export default class ClassComponent extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			// obj: {
			//   props: '1',
			//   prop2: '2'
			// }
			counter: 0,
			prop: 2,
		}

    //Привязка контекста для обычной функции или можно использовать стрелочную функцию
    //this.onClick = this.onClick.bind(this)
	}

  onClick = () =>{
    this.setState({counter: this.state.counter + 1})
  }

	componentDidMount() {
		// this.setState({obj: {...this.state.obj, prop: '2'}})
		//this.setState({ counter: this.state.counter + 1 })
	}

	render() {
		return (
			// <div>{this.state.obj.prop}</div>
			<div>
				<h1>Class component</h1>
				<div>{this.state.counter}</div>
				<button onClick={this.onClick}>Counter + 1</button>
			</div>
		)
	}
}
