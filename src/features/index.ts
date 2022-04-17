import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { all } from 'redux-saga/effects';

import commentsSaga from './comments/commentsSaga';
import { commentsReducer, CommentsReducerType } from './comments/commentsSlice';
import detailSaga from './detail/detailSaga';
import { detailReducer, DetailReducerType } from './detail/detailSlice';
import postSaga from './posts/postsSaga';
import { postsReducer, PostsReducerType } from './posts/postsSlice';

export interface RootState {
  posts: PostsReducerType;
  detail: DetailReducerType;
  comments: CommentsReducerType;
}

const initialState: RootState = {
  posts: {
    loading: false,
    addPostSuccess: false,
  },
  detail: {
    loading: false,
  },
  comments: {
    loading: false,
    addCommentSuccess: false,
  },
};
const reducer = (state: RootState = initialState, action: { type: string; payload: any }) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  const combined = combineReducers({
    posts: postsReducer,
    detail: detailReducer,
    comments: commentsReducer,
  });
  return combined(state, action);
};

export function* rootSaga() {
  yield all([...postSaga, ...detailSaga, ...commentsSaga]);
}

export default reducer;
