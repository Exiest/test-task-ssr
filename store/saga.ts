import { all, fork } from 'redux-saga/effects';
import postsSaga from './posts/posts.sagas'

export function* rootSaga(): Generator {
    yield all([fork(postsSaga)])
}