import format from 'date-fns/format'
export const CREATE_POST = 'CREATE_POST'
export const VOTE_ON_POST = 'VOTE_ON_POST'

export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

export const CREATE_COMMENT = 'CREATE_COMMENT'
export const VOTE_ON_COMMENT = 'VOTE_ON_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const RECEIVED_POSTS = 'RECEIVED_POSTS'

export const handleReceivedPosts = (posts) => {
    //handleReceivedPosts reformats the data a bit before we send it off to the action and then the reducer and then the store
    const newPosts = posts.map((post) => {

        let dateTime = format(new Date(post.timestamp), "DD/MM/YYYY HH:mm")

        return {
            ...post,
            formattedDate: dateTime
        }
    })
    return receivedPosts(newPosts);
}

export function receivedPosts(posts) {
    return {
        type: RECEIVED_POSTS,
        payload: posts
    }
}

export const handleCreatedPost = (post) => {
    let dateTime = format(new Date(post.newTimestamp), "DD/MM/YYYY HH:mm")
    const newPost = {
        ...post, 
        formattedDate: dateTime,
    }
    return createPost(newPost);
}

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: {
            id: post.id, 
            timestamp: post.newTimestamp, 
            title: post.title, 
            body: post.body, 
            author: post.author, 
            category: post.category,
            formattedDate: post.formattedDate,
            voteScore: 0,
            deleted: false,
            commentCount: 0,
        }
    }
}

export function voteOnPost(post) {
    return {
        type: VOTE_ON_POST,
        payload: {
            id: post.id,
            increment: post.option === 'upVote' ? 1 : -1
        }
    }
}

export function editPost(post) {
    return {
        type: EDIT_POST,
        payload: {
            id: post.id,
            title: post.title,
            body: post.body,
        }
    }
}

export function deletePost(id) {
    return {
        type: DELETE_POST,
        payload: {
            id,
        }
    }
}