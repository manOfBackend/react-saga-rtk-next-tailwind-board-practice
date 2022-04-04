import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import localforage from 'localforage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import commentsSaga from './features/comments/commentsSaga';
import { commentsReducer, CommentsReducerType } from './features/comments/commentsSlice';
import detailSaga from './features/detail/detailSaga';
import { detailReducer, DetailReducerType } from './features/detail/detailSlice';
import postSaga from './features/posts/postsSaga';
import { postsReducer, PostsReducerType } from './features/posts/postsSlice';

const rootReducer = combineReducers({
  posts: postsReducer,
  detail: detailReducer,
  comments: commentsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const persistConfig: PersistConfig<any, any, any, any> = {
  key: 'root',
  version: 1,
  storage: localforage,
  whitelist: ['posts', 'detail'],
};
const logger = (createLogger as any)();
const dev = process.env.NODE_ENV === 'development';

let middleware = dev ? applyMiddleware(logger, sagaMiddleware) : applyMiddleware(sagaMiddleware);

if (dev) {
  middleware = composeWithDevTools(middleware);
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

function* rootSaga() {
  yield all([...postSaga, ...detailSaga, ...commentsSaga]);
}

const store = createStore(persistedReducer, middleware);

export interface RootState {
  posts: PostsReducerType;
  detail: DetailReducerType;
  comments: CommentsReducerType;
}

export default () => {
  const persistor = persistStore(store);
  return {
    store,
    persistor,
    runSaga: sagaMiddleware.run(rootSaga),
  };
};
