import React, { Component } from 'react'

class Register extends Component {
	constructor(){
		super()
		this.state = {
			registration: {
				username: '',
				password: ''
			}
		}
	}
	updateRegistration(event){
		let updated = Object.assign({}, this.state.registration)
		updated[event.target.id] = event.target.value
		this.setState({
			registration: updated
		})
	}

	submitRegistration(event){
		event.preventDefault()
		if (this.state.registration.username.length == 0){
			alert('Please add your username.')
			return
		}
		if (this.state.registration.password.length == 0){
			alert('Please add your password.')
			return
		}
		this.props.onRegister(this.state.registration)
	}

	submitLoginCredentials(event){
		event.preventDefault()
		if (this.state.registration.username.length == 0){
			alert('Please add your username.')
			return
		}
		if (this.state.registration.password.length == 0){
			alert('Please add your password.')
			return
		}
		this.props.onLogin(this.state.registration)
	}

	render(){

		return (
				<div>
					<h3 style={{color:'#3b3b3b'}}>Sign Up</h3>
					<input onChange={this.updateRegistration.bind(this)} id="username" type="text" placeholder="Username" /><br />
					<input onChange={this.updateRegistration.bind(this)} id="password" type="password" placeholder="Password" /><br />
					<button style={{width:'50px'}} className="button submit" onClick={this.submitRegistration.bind(this)}>Join</button>
					<button className="button submit" onClick={this.submitLoginCredentials.bind(this)}>Login</button>
				</div>
		)
	}
}

export default Register
