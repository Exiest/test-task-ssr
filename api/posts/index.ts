import ApiInstance from '../'
import * as Response from './types'

class PostsAPI extends ApiInstance {
    constructor() {
        super('/posts')
    }

    getPosts = () => this.instance.get<Response.GetPosts>('/').then(res => res.data)

    getPost = (id: number) => this.instance.get<Response.GetExpandedPost>(`/${id}?_embed=comments`).then(res => res.data)

    createPost = (payload: { title: string, body: string }) => this.instance.post<Response.CreatePost>('/', payload).then(res => res.data)

    deletePost = (id: number) => this.instance.delete<Response.DeletePost>(`/${id}`).then(res => res.data)
}

export default new PostsAPI()