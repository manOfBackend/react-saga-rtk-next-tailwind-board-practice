import API from '@src/services/requests';
import { GetPost } from '@src/services/types/request';
import { Post } from '@src/services/types/response';
import { action, flow, observable } from 'mobx';

import commentStore from './commentStore';

interface DetailStore {
  loading: boolean;
  detail?: Post;
  postIdOnView?: string;
  error?: string;
  getDetail: (arr: GetPost) => void;
  getDetailInit: () => void;
  getDetailSuccess: (payload: Post) => void;
  getDetailError: (payload: string) => void;
}
const detailStore = observable<DetailStore>(
  {
    detail: undefined,
    loading: false,
    postIdOnView: undefined,
    *getDetail(arr) {
      try {
        this.getDetailInit();
        const response = yield API.post(arr);
        yield commentStore.getComments({ postId: arr.id });
        this.getDetailSuccess(response);
      } catch (error) {
        this.getDetailError('에러 발생 에러 발생');
      }
    },

    getDetailInit() {
      this.loading = true;
      this.error = undefined;
    },

    getDetailSuccess(payload) {
      this.detail = payload;
      console.log(payload);

      this.postIdOnView = payload.id;
      this.loading = false;
    },

    getDetailError(payload) {
      this.error = payload;
      this.loading = false;
    },
  },
  {
    detail: observable,
    loading: observable,
    postIdOnView: observable,
    error: observable,
    getDetail: flow,
    getDetailInit: action,
    getDetailSuccess: action,
    getDetailError: action,
  }
);

export default detailStore;
