import Types, { PostPayload } from './posts.types'
import { Post } from 'global/types'

export interface AddPostActionType {
    type: Types.ADD_POST
    payload?: Post
}

export const addNewPost = (payload: Post): AddPostActionType => ({
    type: Types.ADD_POST,
    payload
})

interface InitAddPostActionType {
    type: Types.INIT_ADD_POST
    payload: PostPayload
}

export const initAddPost = (payload: PostPayload): InitAddPostActionType => ({
    type: Types.INIT_ADD_POST,
    payload
})

export interface SetPostsActionType {
    type: Types.SET_POSTS
    payload: Array<Post>
}

export const setPosts = (payload: Array<Post>): SetPostsActionType => ({
    type: Types.SET_POSTS,
    payload
})

type ShopActionType = AddPostActionType | SetPostsActionType

export default ShopActionType