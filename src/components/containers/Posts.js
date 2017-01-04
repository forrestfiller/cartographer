import React, { Component } from 'react'
import { APIManager } from '../../utils'

class Posts extends Component {

	componentDidMount(){
		APIManager.get('/api/post', null)
		.then((response) => {
			console.log('RESPONSE: '+JSON.stringify(response))
		})
		.catch((err) => {
			console.log('ERROR: '+err)
		})
	}

	render(){
		return (
			<div>
				Posts container
			</div>

		)
	}
}
export default Posts
