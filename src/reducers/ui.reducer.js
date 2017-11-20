import { CHANGE_SORT } from '../actions/actions';

const initialState = {
    sortBy: 'timestamp',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SORT:
            // console.log('action', action)
            return {
                ...state,
                sortBy: action.payload
            }
        default:
            return state
    }
}