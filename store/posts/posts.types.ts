import { Post } from 'global/types'

export interface PostsReducerType {
    items: null | Array<Post>
}

export type PostPayload = {
    title: string,
    body: string
}

enum PostsActionTypes {
    POST_LOADING = "SHOP_LOADING",
    ADD_POST = "ADD_POST",
    SET_POSTS = "SET_POSTS",
    INIT_ADD_POST = "INIT_ADD_POST"
}

export default PostsActionTypes;