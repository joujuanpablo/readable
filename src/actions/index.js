export const CREATE_POST = 'CREATE_POST'
export const VOTE_ON_POST = 'VOTE_ON_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

export const CREATE_COMMENT = 'CREATE_COMMENT'
export const VOTE_ON_COMMENT = 'VOTE_ON_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export function createPost({ id, timestamp, title, body, author, category }) {
    return {
        type: CREATE_POST,
        id, //these are properties of the action object, not the state. The reducer is in charge of using this info to change the state
        timestamp,
        title,
        body,
        author,
        category,
        // voteScore: 0,
        // deleted: false,
        // commentCount: 0, I can put these into reducer

    }
}

export function voteOnPost (id, option) {
    return {
        type: VOTE_ON_COMMENT,
        id,
        option,
    
    }
}

export function editPost (id, title, body) {
    return {
        type: EDIT_POST,
        id,
        title,
        body,
    }
}

export function deletePost (id) {
    return {
        type: DELETE_POST,
        id,
    }
}