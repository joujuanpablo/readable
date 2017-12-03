import { capitalize } from '../utils/helpers'
export const RECEIVED_CATEGORIES = 'RECEIVED_CATEGORIES'

export const handleReceivedCategories= (categories) => {
    //this is where we can do the capitalize bit
    const capitalizedCategories = categories.map((category) => capitalize(category.name))
    return receivedCategories(categories, capitalizedCategories)//now send it to the action creator
}

export function receivedCategories(categories, capitalizedCategories) {
    return {
        type: RECEIVED_CATEGORIES,
        payload: {
            categories,
            capitalizedCategories,
        }
    }
}