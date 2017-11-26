import { RECEIVED_POSTS, CREATE_POST, VOTE_ON_POST, EDIT_POST, DELETE_POST } from '../actions/actions';

const initialState = {
    posts: [{
            id: 'initial',
            title: 'Chris is dope',
            author: 'JP',
            timestamp: '1370001284000',
            category: 'react',
            voteScore: 0,
            comments: []
        },
        {
            id: 'initial2',
            title: 'Moo goes the cow',
            author: 'JP',
            timestamp: '1970001284000',
            category: 'react',
            voteScore: 4,
            comments: []
        }
    ],
    isFetching: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVED_POSTS:
            console.log('action-payload', action.payload)
            const withFormattedDate = action.payload.map((post) => {
                let dateTime = new Date(post.timestamp)
                dateTime = dateTime.toISOString()
                post['formattedDate'] = dateTime
            })

            return {
                ...state,
                posts: [
                    ...action.payload, //should this not be the withFormattedDate
                ]
            }
        case CREATE_POST:
            const { id, timestamp, title, body, author, category } = action.payload
            return {
                ...state,
                [id]: {
                    ...action.payload,
                    voteScore: null,
                    deleted: false,
                    commentCount: null,
                }
            }
        case VOTE_ON_POST:
            return {
                // ...state,
                // [recipe.label]: recipe
            }
        case EDIT_POST:
            return {
                // ...state,
                // [recipe.label]: recipe
            }
        case DELETE_POST:
            return {
                // ...state,
                // [recipe.label]: recipe
            }
        default:
            return state
    }
}