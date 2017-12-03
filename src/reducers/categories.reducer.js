import { RECEIVED_CATEGORIES } from '../actions/actions'

const initialState = {
    categories: [],
    capitalizedCategories: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVED_CATEGORIES:
            return {
                ...state,
                categories: action.payload.categories,
                capitalizedCategories: action.payload.capitalizedCategories,
            }

        default: 
            return state 
    }
}