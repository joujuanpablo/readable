import React, { Component } from 'react'

class PostForm extends Component {
    render() {
        const { title, author, content, category } = this.props
        return (
            <div className='post-form container'>
                <form action="">
                    <div className='form-group'>
                        <label htmlFor="postTitle">Post title</label>
                        <input className='form-control post-form--title post-form-field' type="text" placeholder={title} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="postAuthor">Post author</label>
                        <input className='form-control post-form--author post-form-field' type="text" placeholder={author} />
                        <small className='form-text text-muted'>This can be whatever you like since this is an annonymous app.</small>
                    </div>

                    <div className='form-group'>
                    <label htmlFor="postCategory">Post category</label>
                        <select className='form-control post-form--category post-form-field' value={category} type="text" placeholder=''>
                            <option value="">Please Choose a Category</option>
                            <option value="react">React</option>
                            <option value="redux">Redux</option>
                            <option value="Udacity">Udacity</option>
                        </select>
                    </div>
                    <div className='form-group'>
                    <label htmlFor="postBody">The post</label>
                        <textarea className='form-control post-form--content form-control' type="text" placeholder={content} />
                    </div>
                    <div className='form-group'>
                        <button className='form-control post-form-field btn btn-outline-info'>Post</button>
                    </div>

                </form>
            </div>

        )
    }
}

export default PostForm 