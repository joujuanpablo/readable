import React, { Component } from 'react'

class PostForm extends Component {
    state = {
        newPost: {
            id: "",
            timestamp: 0, //use Date.now()
            title: "",
            body: "",
            author: "",
            category: "",
            voteScore: 0,
            deleted: false,
            commentCount: 0, 
        }
    }
    componentWillMount() {
        if (this.props.post) {
            this.setState({
                newPost: this.props.post
            })
        }
        
    }

    componentDidMount() {
        if (this.state.newPost.id.length < 1) {
            const uuidv4 = require('uuid/v4');
            const theNewId = uuidv4();
    
            this.setState({
                newPost: {
                    ...this.state.newPost,
                    id: theNewId,
                }
            })
        } 
    }
    updateTitle (title) {
        this.setState({ 
            newPost: {
                ...this.state.newPost,
                title,
            }
         })        
    }
    updateAuthor (author) {
        this.setState({ 
            newPost: {
                ...this.state.newPost,
                author,
            }
         })        
    }
    updateCategory (category) {
        this.setState({ 
            newPost: {
                ...this.state.newPost,
                category,
            }
         })        
    }
    updateBody (body) {
        this.setState({ 
            newPost: {
                ...this.state.newPost,
                body,
            }
         })        
    }

    handleSubmit(e) {
        (e).preventDefault()
        const { id, title, body, author, category } = this.state.newPost
        const newTimestamp = Date.now()
        this.props.submit(id, newTimestamp, title, body, author, category) 

    }

    render() {
        const { title, author, body, category } = this.state.newPost
        return (
            <div className='post-form container'>
                <form action="">
                    <div className='form-group'>
                        <label htmlFor="postTitle">Post title</label>
                        <input className='form-control post-form--title post-form-field' type="text" placeholder='title' onChange={event => this.updateTitle(event.target.value)} value={title} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="postAuthor">Post author</label>
                        <input className='form-control post-form--author post-form-field' disabled={(this.props.post) ? "disabled" : ""} type="text" placeholder='author' value={author} onChange={event => this.updateAuthor(event.target.value)}/>
                        <small className='form-text text-muted'>This can be whatever you like since this is an annonymous app.</small>
                    </div>

                    <div className='form-group'>
                    <label htmlFor="postCategory">Post category</label>
                        <select className='form-control post-form--category post-form-field' disabled={(this.props.post) ? "disabled" : ""} value={category} type="text" placeholder='' onChange={event => this.updateCategory(event.target.value)}>
                            <option value="">Please Choose a Category</option>
                            <option value="react">React</option>
                            <option value="redux">Redux</option>
                            <option value="udacity">Udacity</option>
                        </select>
                    </div>
                    <div className='form-group'>
                    <label htmlFor="postBody">The post</label>
                        <textarea className='form-control post-form--content form-control' type="text" placeholder='...write your text here' value={body} onChange={event => this.updateBody(event.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <button className='form-control post-form-field btn btn-outline-info' onClick={event => this.handleSubmit(event)}>Post</button>
                    </div>

                </form>
            </div>

        )
    }
}

export default PostForm 