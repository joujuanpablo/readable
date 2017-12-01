import { RECEIVED_COMMENTS } from '../actions/actions'

const initialState = {
    comments: []
}

export default (state = {initialState}, action) => {
    switch (action.type) {
        case RECEIVED_COMMENTS:
            console.log('received comments action payload', action.payload)
            return {
                ...state,
                comments: action.payload
            }

        default: 
            return state 
    }
}