const api = 'http://localhost:3001'
const token = 'whatever-you-want'
const headers = { 'Authorization': token }


//-------CATEGORIES-------//
export const getCategories = () =>
    fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)
    .catch(err => console.log('ERROR', err))

//-------POSTS-------//
export const getPosts = () =>
    fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log('ERROR', err))

export const getCategoryPosts = (category) =>
    fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data.posts)
    .catch(err => console.log('ERROR', err))

export const postNewPost = (id, timestamp, title, body, author, category) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, timestamp, title, body, author, category })
    }).then(res => res.json())
    .then(data => data.newPost)
    .catch(err => console.log('ERROR', err))

export const getPostDetails = (id) =>
    fetch(`${api}/posts/:${id}`, { headers })
    .then(res => res.json())
    .then(data => data.postDetails)
    .catch(err => console.log('ERROR', err))


export const postVote = (id, option) =>
    fetch(`${api}/posts/:${id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ option }) //option should be either "upVote" or "downVote".
    }).then(res => res.json())
    .then(data => data.postVote)
    .catch(err => console.log('ERROR', err))

export const editPost = (id, title, body) =>
    fetch(`${api}/posts/:${id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, body })
    }).then(res => res.json())
    .catch(err => console.log('ERROR', err))

export const deletePost = (id) =>
    fetch(`${api}/posts/:${id}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(err => console.log('ERROR', err))

//-----COMMENTS-----//
export const getPostComments = (id) =>
    fetch(`${api}/posts/:${id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data.postComments)
    .catch(err => console.log('ERROR', err))

export const addComment = (id, timestamp, body, author, parentId) =>
    fetch(`${api}/comments`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, timestamp, body, author, parentId })
    }).then(res => res.json())
    .then(data => data.addComment)
    .catch(err => console.log('ERROR', err))

export const getCommentDetails = (id) =>
    fetch(`${api}/comments/:${id}`, { headers })
    .then(res => res.json())
    .then(data => data.commentDetails)
    .catch(err => console.log('ERROR', err))

export const commentVote = (id, option) =>
    fetch(`${api}/comments/:${id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ option }) //option should be either "upVote" or "downVote".
    }).then(res => res.json())
    .then(data => data.commentVote)
    .catch(err => console.log('ERROR', err))

export const editComment = (id, timestamp, body) =>
    fetch(`${api}/posts/:${id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ timestamp, body })
    }).then(res => res.json())
    .catch(err => console.log('ERROR', err))


export const deleteComment = (id) =>
    fetch(`${api}/comments/:${id}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(err => console.log('ERROR', err))