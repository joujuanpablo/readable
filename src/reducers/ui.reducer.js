import { RECEIVED_POSTS, CREATE_POST, VOTE_ON_POST, EDIT_POST, DELETE_POST } from '../actions';

const initialState = {
    currentCategory: ''
}

// create action

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_CATEGORY':
            // console.log('action', action)
            return {
                ...state,
                currentCategory: action.payload
            }
        default:
            return state
    }
}