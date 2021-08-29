import { useMemo } from 'react'
import { createStore, Store, applyMiddleware, combineReducers } from "redux"
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './saga';

import { PostsReducer } from './posts'

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    posts: PostsReducer
})

let store: Store | undefined = createStore(
    rootReducer,
    undefined,
    applyMiddleware(sagaMiddleware) 
);

function initStore(initialState: AppState | undefined) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware) 
    )
}

export const initializeStore = (preloadedState: AppState | undefined): Store => {
    let _store = store ?? initStore(preloadedState)

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
        ...store.getState(),
        ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    sagaMiddleware.run(rootSaga);

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

function useStore(initialState: AppState): Store {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}

export default useStore;

export type AppState = ReturnType<typeof rootReducer>
export type DispatchType = typeof store.dispatch