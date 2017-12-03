import { RECEIVED_CATEGORIES } from '../actions/actions'

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVED_CATEGORIES:
            return [
                ...state,
                ...action.payload
            ]

        default: 
            return state 
    }
}