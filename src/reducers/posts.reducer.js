import { RECEIVED_POSTS, CREATE_POST, VOTE_ON_POST, EDIT_POST, DELETE_POST } from '../actions';

const initialState = {
    entries: [{
        id: 'initial',
        title: 'Chris is dope',
        comments: []
    }],
    isFetching: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVED_POSTS:
            // console.log('action', action)
            return {
                ...state,
                entries: [
                    ...state.entries, //if I wanted the initial state to remain
                    ...action.payload
                ]
            }
        case CREATE_POST:
            const { id, timestamp, title, body, author, category } = action.payload
            return {
                ...state,
                [id]: {
                    ...action.payload,
                    voteScore: null,
                    deleted: false,
                    commentCount: null,
                }
            }
        case VOTE_ON_POST:
            return {
                // ...state,
                // [recipe.label]: recipe
            }
        case EDIT_POST:
            return {
                // ...state,
                // [recipe.label]: recipe
            }
        case DELETE_POST:
            return {
                // ...state,
                // [recipe.label]: recipe
            }
        default:
            return state
    }
}