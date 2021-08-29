import ApiInstance from '../'
import { CreateCommentResponse } from './types'

class CommentsAPI extends ApiInstance {
    constructor() {
        super('/posts')
    }

    createComment = (payload: { postId: number, body: string }) => this.instance.post<CreateCommentResponse>('/', payload).then(res => res.data)
}

export default new CommentsAPI()