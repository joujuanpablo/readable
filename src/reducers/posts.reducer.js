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
            // state.posts.find((post) => post.id === action.payload.id)
            return {
                ...state,
                posts: {
                    posts: {
                        ...[action.payload.id],
                        voteScore: + action.payload.increment
                    }
                }
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