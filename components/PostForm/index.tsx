import {
    Formik,
    FormikHelpers,
    FormikProps,
    ErrorMessage,
    Field,
    FieldProps,
} from 'formik';
import Input from './components/FormInput'
import TextArea from './components/FormTextArea'
import { useRouter } from 'next/router'
import { useTypedDispatch } from 'store/hooks'
import { PostsActions } from 'store/posts';
import PostAPI from 'api/posts'
import { StyledForm, FormButton, FormGroup, FormTitle } from './styled'

interface PostFormValues {
    title: string
    body: string
    error: string
}

const PostForm = () => {
    const initialValues: PostFormValues = { title: '', body: '', error: '' };
    const dispatch = useTypedDispatch()
    const router = useRouter()

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={async (values, actions) => {
                try {
                    let { error, ...rest } = values
                    let resp = await PostAPI.createPost(rest)
                    dispatch(PostsActions.addNewPost(resp))
                    router.push('/')
                } catch(err) {
                    actions.setErrors({ error: "Error while creating post" })
                }
                actions.setSubmitting(false);
            }}
        >
            <StyledForm>
                <FormTitle>Create new post</FormTitle>
                <FormGroup>
                    <Input id="title" name="title" placeholder="Post title.." label="Title" />
                </FormGroup>
                <FormGroup>
                    <TextArea id="body" name="body" placeholder="Post body.." label="Body" />
                </FormGroup>
                <ErrorMessage name="error" />
                <FormButton type="submit">Submit</FormButton>
            </StyledForm>
        </Formik>
    )
}

export default PostForm