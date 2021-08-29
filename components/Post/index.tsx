import { ExpandedPost } from 'global/types'
import React from 'react'
import { PostWrap, PostHeading, PostTitle, PostBody, PostComments, PostComment } from './styled'

const Post: React.FC<{ post: ExpandedPost }> = ({ post }) => {
    return (
        <PostWrap>
            <PostTitle>{post.title}</PostTitle>
            <PostBody>{post.body}</PostBody>
            <PostHeading>Comments</PostHeading>
            <PostComments>
                {post.comments.map(comment => (
                    <PostComment key={comment.id}>{comment.body}</PostComment>
                ))}
            </PostComments>
        </PostWrap>
    )
}

export default Post