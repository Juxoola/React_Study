import React from 'react'
import PropTypes from 'prop-types'

export default class MyClassComponent extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    lastName: PropTypes.string
  }
	static defaultProps = {
		name: 'No name',
		lastName: 'No last name',
	}
	render() {
		const { name, lastName, children} = this.props
		return (
			<div>
				Hello class, {name} {lastName}
				<div> Строчка которая вставлена внутрь тега компонента {children}</div>
			</div>
		)
	}
}
