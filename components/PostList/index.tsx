import Link from 'next/link'
import { Post } from "global/types"
import { PostsList, PostWrap, PostTitle, PostHead, PostBody } from './styled'

const PostList: React.FC<{ posts: Array<Post> }> = ({ posts }) => {
    return (
        <PostsList>
            {posts.map(post => (
                <PostWrap key={post.id}>
                    <PostHead>
                        <Link href={`/posts/${post.id}`} passHref>
                            <PostTitle>{post.title}</PostTitle>
                        </Link>
                    </PostHead>
                    <PostBody>{post.body}</PostBody>
                </PostWrap>
            ))}
        </PostsList>
    )
}

export default PostList