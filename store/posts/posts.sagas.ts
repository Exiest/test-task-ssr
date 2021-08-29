import { put, call, takeEvery, SagaReturnType } from 'redux-saga/effects'
import * as PostsActions from './posts.actions'
import Types, { PostPayload } from './posts.types'
import PostAPI from 'api/posts'

function* makePurchase({ payload }: { payload: PostPayload, type: string }) {
    try {
        const resp: SagaReturnType<typeof PostAPI.createPost> = yield call(PostAPI.createPost, payload);
        yield put(PostsActions.addNewPost(resp))
    } catch(err) {
    }
}

export default function* shopWatcher(): Generator {
    yield takeEvery(Types.INIT_ADD_POST, makePurchase)
}