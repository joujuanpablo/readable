import { RECEIVED_COMMENTS, VOTE_ON_COMMENT, CREATE_COMMENT, DELETE_COMMENT } from '../actions/actions'

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
        case DELETE_COMMENT:
            const updatedComments = state.filter(comment => comment.id !== action.payload)
            return updatedComments

        default:
            return state
    }
}