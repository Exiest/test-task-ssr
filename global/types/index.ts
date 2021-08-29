export type Post = {
    id: number,
    title: string,
    body: string
}

export type Comment = {
    id: number,
    postId: number,
    body: string
}

export interface ExpandedPost extends Post {
    comments: Array<Comment>
}