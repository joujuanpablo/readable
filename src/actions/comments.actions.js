import format from 'date-fns/format'
export const RECEIVED_COMMENTS = 'RECEIVED_COMMENTS'

export const handleReceivedComments= (comments) => {
    //this is where we can do the capitalize bit
    //const capitalizedCategories = categories.map((category) => capitalize(category.name))
    //console.log('dated categories', capitalizedCategories)
    //return receivedComments(capitalizedCategories)//now send it to the action creator

    const newComments = comments.map((comment) => {
        let dateTime = format(new Date(comment.timestamp), "DD/MM/YYYY HH:mm")

        return {
            ...comment,
            formattedDate: dateTime
        }
    })
    return receivedComments(newComments);
}

export function receivedComments(comments) {
    return {
        type: RECEIVED_COMMENTS,
        payload: comments,
    }
}