import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { initializeStore } from 'store'
import { PostsActions } from 'store/posts'
import { useTypedSelector } from 'store/hooks'
import { PostsSelectors } from 'store/posts'
import Head from 'components/Head'
import PostList from 'components/PostList'
import MainLayout from 'layouts/MainLayout'
import PostAPI from 'api/posts'
import { MoreLink } from 'global/styled'

const Home: React.FC = () => {
  const posts = useTypedSelector(PostsSelectors.getPosts)

  const latestPosts = posts.sort((a, b) => b.id - a.id).slice(0, 5)

  return (
    <>
      <Head title="Home page | Simple Blog" />
      <MainLayout>
        <h1>Latest posts</h1>
        <PostList posts={latestPosts} />
        <Link href="/posts" passHref>
          <MoreLink>See more..</MoreLink>
        </Link>
      </MainLayout>
    </>
  )
}

export default Home

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
