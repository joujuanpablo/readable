import format from 'date-fns/format'
export const RECEIVED_COMMENTS = 'RECEIVED_COMMENTS'
export const VOTE_ON_COMMENT = 'VOTE_ON_COMMENT'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'

export const handleReceivedComments= (comments) => {

    const formattedComments = comments.map((comment) => {
        let dateTime = format(new Date(comment.timestamp), "DD/MM/YYYY HH:mm")

        return {
            ...comment,
            formattedDate: dateTime
        }
    })
    return receivedComments(formattedComments);
}

export function receivedComments(comments) {
    return {
        type: RECEIVED_COMMENTS,
        payload: comments,
    }
}

export function voteOnComment(comment) {
    return {
        type: VOTE_ON_COMMENT,
        payload: {
            id: comment.id,
            increment: comment.option === 'upVote' ? 1 : -1
        }
    }
}

export function createComment(comment) {
   const {id, newTimestamp, body, author, parentId, formattedDate } = comment
    return {
        type: CREATE_COMMENT,
        payload: {
            id,
            parentId,
            timestamp: newTimestamp,
            body,
            author,
            formattedDate,
        }

    }
}

export function deleteComment(id) {
    return {
        type: DELETE_COMMENT,
        payload: id
    }
}

export function editComment(comment) {
    return {
        type: EDIT_COMMENT,
        payload: comment,
    }
}