import { RECEIVED_COMMENTS, VOTE_ON_COMMENT, CREATE_COMMENT } from '../actions/actions'

const initialState = []

export default (state = { initialState }, action) => {
    switch (action.type) {
        case RECEIVED_COMMENTS:
            return [
                ...state,
                ...action.payload
            ]
        case VOTE_ON_COMMENT:
            const updatedItems = state.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        voteScore: item.voteScore + action.payload.increment,
                    }
                }
                return item
            })
            return updatedItems
        case CREATE_COMMENT:
            return [
                ...state,
                action.payload
            ]

        default:
            return state
    }
}