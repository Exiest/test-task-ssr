import { GetServerSideProps } from 'next'
import { initializeStore } from 'store'
import { PostsActions } from 'store/posts'
import Head from 'components/Head'
import Pagination from 'components/Pagination'
import PostList from 'components/PostList'
import MainLayout from 'layouts/MainLayout'
import usePagination from 'hooks/usePagination'
import PostAPI from 'api/posts'
import { useTypedSelector } from 'store/hooks'
import { PostsSelectors } from 'store/posts'

const Posts: React.FC = () => {
    const posts = useTypedSelector(PostsSelectors.getPosts)

    const [page, current, all, changePage] = usePagination(posts, 10)

    return (
        <>
            <Head title="All posts | Simple Blog"/>
            <MainLayout>
                <h1>All posts</h1>
                <PostList posts={page} />
                <Pagination all={all} current={current} changePage={changePage} />
            </MainLayout>
        </>
    )
}

export default Posts

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const posts = await PostAPI.getPosts()

        if(!posts) return {
            notFound: true
        }

        const reduxStore = initializeStore(undefined)
        const { dispatch } = reduxStore

        dispatch(PostsActions.setPosts(posts))
        
        return { 
            props: { 
                storeState: reduxStore.getState()
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

