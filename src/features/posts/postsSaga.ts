import API from '@src/services/requests';
import { GetPosts } from '@src/services/types/request';
import { AxiosResponse } from 'axios';
import { call, fork, put, takeLatest } from 'redux-saga/effects';

import { postsActions } from './postsSlice';

function* getPostsSaga({ payload }: { payload: GetPosts }) {
  try {
    const response: AxiosResponse = yield call(API.posts, payload);

    yield put({
      type: postsActions.getPostsSuccess,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: postsActions.getPostsError, payload: error });
  }
}
function* onGetPostsWatcher() {
  yield takeLatest(postsActions.getPosts as any, getPostsSaga);
}

export default [fork(onGetPostsWatcher)];
