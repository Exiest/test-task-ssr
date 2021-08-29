import { AppState } from 'store'
import { Post } from 'global/types'

export const getPosts = (state: AppState): Array<Post> => state.posts.items