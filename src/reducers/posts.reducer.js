import { RECEIVED_POSTS, CREATE_POST, VOTE_ON_POST, EDIT_POST, DELETE_POST } from '../actions/actions';

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVED_POSTS:
            return [
                ...state,
                ...action.payload
            ]
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
            const updatedItems = state.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        voteScore: item.voteScore + action.payload.increment
                    }
                } 
                return item
            })

            return updatedItems

        case EDIT_POST:
            return {
                // ...state,
                // [recipe.label]: recipe
            }
        case DELETE_POST:
            const updatedPostList = state.filter(post => post.id !== action.payload.id)
            return updatedPostList
        default:
            return state
    }
}