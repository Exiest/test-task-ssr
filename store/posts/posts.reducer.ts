import Types, { PostsReducerType } from './posts.types'
import PostsActionType from './posts.actions'

const initialState: PostsReducerType = {
    items: []
}

const managePosts = (state = initialState, action: PostsActionType): PostsReducerType => {
    switch(action.type) {
        case Types.ADD_POST: {
            const { payload } = action

            if(!state.items) return state
            else return { ...state, items: [...state.items, payload!] }
        }
        case Types.SET_POSTS: {
            const { payload } = action

            return {...state, items: payload }
        }
        default: return state;
    }
}

export default managePosts;