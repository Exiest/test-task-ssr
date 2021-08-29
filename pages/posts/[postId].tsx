import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import MainLayout from 'layouts/MainLayout'
import Head from 'components/Head'
import PostComponent from 'components/Post'
import PostAPI from 'api/posts'
import { ExpandedPost } from 'global/types'

interface PostProps {
    post: ExpandedPost
}

const Post: React.FC<PostProps> = ({ post }) => {
    const router = useRouter()

    return (
        <>
            <Head title={`Post ${router.query.postId} | Simple Blog`} />
            <MainLayout>
                <PostComponent post={post} />
            </MainLayout>
        </>
    )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await PostAPI.getPosts()

    const paths = posts.map((post) => ({
        params: { postId: `${post.id}` },
    }))

    return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {   
    const id = context?.params?.postId

    try {
        const post = await PostAPI.getPost(Number(id))

        if(!post) return { notFound: true }

        return { 
            props: { 
                post,
                storeState: {}
            }
        }
    } catch(err) {

        return {
            redirect: {
                destination: '/500',
                permanent: false
            }
        }
    }
}