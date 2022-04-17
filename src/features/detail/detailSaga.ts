import API from '@src/services/requests';
import { GetPost } from '@src/services/types/request';
import { AxiosResponse } from 'axios';
import { call, fork, put, takeLatest } from 'redux-saga/effects';

import { detailActions } from './detailSlice';

function* getDetailSaga({ payload }: { payload: GetPost }) {
  try {
    const response: AxiosResponse = yield call(API.post, payload);

    yield put({
      type: detailActions.getDetailSuccess,
      payload: response,
    });
  } catch (error) {
    yield put({ type: detailActions.getDetailError, payload: error });
  }
}
function* onGetDetailWatcher() {
  yield takeLatest(detailActions.getDetail, getDetailSaga);
}

export default [fork(onGetDetailWatcher)];
