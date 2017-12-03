import { capitalize } from '../utils/helpers'
export const RECEIVED_CATEGORIES = 'RECEIVED_CATEGORIES'

export const handleReceivedCategories= (categories) => {
    //this is where we can do the capitalize bit
    const transformedCategories = categories.map((category) => category.name)
    return receivedCategories(transformedCategories)//now send it to the action creator
}

export function receivedCategories(categories) {
    return {
        type: RECEIVED_CATEGORIES,
        payload: categories
    }
}