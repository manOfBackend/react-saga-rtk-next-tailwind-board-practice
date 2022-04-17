import API from '@src/services/requests';
import { AddComment, GetComment } from '@src/services/types/request';
import { AxiosResponse } from 'axios';
import { call, fork, put, takeLatest } from 'redux-saga/effects';

import { commentsActions } from './commentsSlice';

function* getCommentsSaga({ payload }: { payload: GetComment }) {
  try {
    console.log('키타!');

    const response: AxiosResponse = yield call(API.comments, payload);
    yield put({
      type: commentsActions.getCommentsSuccess,
      payload: response,
    });
  } catch (error) {
    yield put({ type: commentsActions.getCommentsError, payload: error });
  }
}
function* onGetCommentsWatcher() {
  yield takeLatest(commentsActions.getComments, getCommentsSaga);
}

function* addCommentsSaga({ payload }: { payload: AddComment }) {
  try {
    const response: AxiosResponse = yield call(API.addComment, payload);
    yield put({
      type: commentsActions.addCommentSuccess,
      payload: response,
    });
    yield put(commentsActions.getComments({ postId: payload.postId }));
  } catch (error) {
    yield put({ type: commentsActions.addCommentError, payload: error });
  }
}
function* onAddCommentsWatcher() {
  yield takeLatest(commentsActions.addComment, addCommentsSaga);
}

export default [fork(onGetCommentsWatcher), fork(onAddCommentsWatcher)];
