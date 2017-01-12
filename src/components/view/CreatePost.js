import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import sha1 from 'sha1'
import { APIManager } from '../../utils'

class CreatePost extends Component {

	constructor(){
		super()
		this.state = {
			post: {
				image: '',
				caption: ''
			}
		}
	}

	updatePost(event){
		event.preventDefault()
		let updated = Object.assign({}, this.state.post)
		updated[event.target.id] = event.target.value
		this.setState({
			post: updated
		})
	}

	submitPost(event){
		event.preventDefault()
//		console.log('subimtPost: '+JSON.stringify(this.state.post))
		if (this.state.post.image.length == 0){
			alert('please add an image first.')
			return
		}

		if (this.state.post.caption.length == 0){
			alert('please add a caption image first.')
			return
		}

		let updated = Object.assign({}, this.state.post)
		this.props.onCreate(updated)
	}

	imageselected(files){
        console.log('imageselected: ')
        const image = files[0]

        const cloudName = 'dcxaoww0c'
        const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'

        const timestamp = Date.now()/1000
        const uploadPreset = 'rnxsz09i'

        const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'rVxIqxqsbdcxTo4X6bo9rUqkQms'

        const signature = sha1(paramsStr)
        const params = {
            'api_key': '399938195648612',
            'timestamp': timestamp,
            'upload_preset': uploadPreset,
            'signature': signature
        }
				//uploadFile:
				APIManager.uploadFile(url, image, params)
				.then((uploaded) => {
					console.log('upload complete: '+JSON.stringify(uploaded))
					let updated = Object.assign({}, this.state.post)
					updated['image'] = uploaded['secure_url']
					this.setState({
						post: updated
					})
				})
				.catch((err) => {
					alert(err)
				})
			}

	render(){
		return (
			<div style={{marginBottom:20, color:'#515151'}}>
				Create Post
				<Dropzone onDrop={this.imageselected.bind(this)} style={{border:'none', marginBottom:10}}>
					<button className="button submit">Upload Image</button>
				</Dropzone>
				<input style={{marginBottom:10}} id="caption" onChange={this.updatePost.bind(this)} type="text" placeholder="Caption" />
				<button className="button submit" onClick={this.submitPost.bind(this)}>Submit</button>
			</div>
		)
	}
}

export default CreatePost
