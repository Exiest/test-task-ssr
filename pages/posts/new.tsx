import Head from 'components/Head'
import MainLayout from 'layouts/MainLayout'
import PostForm from 'components/PostForm'

const NewPost: React.FC = () => {
    return (
        <>
            <Head title="Create post | Simple Blog" />
            <MainLayout>
                <PostForm />
            </MainLayout>
        </>
    )
}

export default NewPost