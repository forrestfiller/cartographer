import React, { Component } from 'react'
import { APIManager } from '../../utils'
import { connect } from 'react-redux'
import actions from '../../actions'

class Posts extends Component {
	componentDidMount(){
		this.props.fetchPosts(null)

		// APIManager.get('/api/post', null)
		// .then((response) => {
		// 	console.log('RESPONSE: '+JSON.stringify(response))
		// })
		// .catch((err) => {
		// 	console.log('ERROR: '+err)
		// })
	}
	render(){
		return (
			<div>
				Posts container
			</div>
		)
	}
}

const stateToProps = (state) => {
	return {
		posts: state.post
	}
}

const dispatchToProps = (dispatch) => {
	return {
		fetchPosts: (params) => dispatch(actions.fetchPosts(params))
	}
}

export default connect(stateToProps, dispatchToProps)(Posts)
