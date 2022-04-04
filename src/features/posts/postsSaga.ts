import API from '@src/services/requests';
import { AddPost, GetPosts } from '@src/services/types/request';
import { AxiosResponse } from 'axios';
import { call, fork, put, takeLatest } from 'redux-saga/effects';

import { postsActions } from './postsSlice';

function* getPostsSaga({ payload }: { payload: GetPosts }) {
  try {
    const response: AxiosResponse = yield call(API.posts, payload);

    yield put({
      type: postsActions.getPostsSuccess,
      payload: response,
    });
  } catch (error) {
    yield put({ type: postsActions.getPostsError, payload: error });
  }
}
function* addPostsSaga({ payload }: { payload: AddPost }) {
  try {
    const response: AxiosResponse = yield call(API.addPost, payload);

    yield put({
      type: postsActions.addPostSuccess,
      payload: response,
    });
    // 글쓰기 성공하면 포스트 목록 갱신
    yield put(postsActions.getPosts({ keyword: '', page: 1 }));
  } catch (error) {
    yield put({ type: postsActions.addPostError, payload: error });
  }
}
function* onAddPostWatcher() {
  yield takeLatest(postsActions.addPost as any, addPostsSaga);
}
function* onGetPostsWatcher() {
  yield takeLatest(postsActions.getPosts as any, getPostsSaga);
}

export default [fork(onGetPostsWatcher), fork(onAddPostWatcher)];
