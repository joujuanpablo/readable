import { combineReducers } from 'redux';
import { CREATE_POST, VOTE_ON_POST, EDIT_POST, DELETE_POST } from '../actions';

function post(state = { one: 'is the first number' }, action) {
    const { id, timestamp, title, body, author, category } = action

    switch (action.type) {

        case CREATE_POST:
            return {
                ...state,
                [id]: {
                    id,
                    timestamp,
                    title,
                    body,
                    author,
                    category,
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

export default combineReducers({
    post,
});