
export const RECEIVED_CATEGORIES = 'RECEIVED_CATEGORIES'

export const handleReceivedCategories= (categories) => {
    const transformedCategories = categories.map((category) => category.name)
    return receivedCategories(transformedCategories)
}

export function receivedCategories(categories) {
    return {
        type: RECEIVED_CATEGORIES,
        payload: categories
    }
}