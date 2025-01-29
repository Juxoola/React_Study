import React from 'react'
import './App.css'
import CardList from './components/CardList/CardList'

export default class App extends React.Component {
	users

	constructor(props) {
		super(props)

		this.state = {
			users: [],
		}
	}

	componentDidMount() {
		fetch('https://reqres.in/api/users?per_page=12')
			.then(response => response.json())
			.then(result => {
				this.setState({ users: result.data })
			})
	}

  renderUsers(){
    if(this.state.users?.length){
      return <CardList userList={this.state.users} />
    }

    return <div>Загрузка...</div>
  }
	render() {
    let userList

    if (this.state.users?.length) {
			userList = <CardList userList={this.state.users} />
		}else{
      userList = <div>Загрузка...</div>
    }
		return (
			<div className='App'>
				<h1>Список пользователей</h1>
				{
          this.renderUsers()
        }
        {/* {userList} */}
				
			</div>
		)
	}
}
