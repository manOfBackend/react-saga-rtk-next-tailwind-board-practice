import API from '@src/services/requests';
import { AddComment, GetComment } from '@src/services/types/request';
import { Comment } from '@src/services/types/response';
import { action, flow, observable } from 'mobx';

interface CommentStore {
  loading: boolean;
  comments: Comment[];
  isAddCommentSuccess: boolean;
  error?: string;
  addComment: (comment: AddComment) => void;
  addCommentInit: () => void;
  addCommentSuccess: () => void;
  getComments: (arr: GetComment) => void;
  getCommentsInit: () => void;
  getCommentsSuccess: (payload: Comment[]) => void;
  getCommentsError: (payload: string) => void;
}
const commentStore = observable<CommentStore>(
  {
    comments: [],
    loading: false,
    isAddCommentSuccess: false,
    *addComment(comment) {
      try {
        this.addCommentInit();
        yield API.addComment(comment);
        yield this.getComments({ postId: comment.postId });
        this.addCommentSuccess();
      } catch (error) {
        console.log(error);
      }
    },
    addCommentInit() {
      this.isAddCommentSuccess = false;
    },
    addCommentSuccess() {
      this.isAddCommentSuccess = true;
    },
    *getComments(arr) {
      try {
        this.getCommentsInit();
        const response = yield API.comments(arr);
        this.getCommentsSuccess(response);
      } catch (error) {
        this.getCommentsError('에러 발생 에러 발생');
      }
    },

    getCommentsInit() {
      this.loading = true;
      this.error = undefined;
      this.isAddCommentSuccess = false;
    },

    getCommentsSuccess(payload) {
      this.comments = payload;
      this.loading = false;
    },

    getCommentsError(payload) {
      this.error = payload;
      this.loading = false;
    },
  },
  {
    comments: observable,
    isAddCommentSuccess: observable,
    loading: observable,
    getComments: flow,
    getCommentsInit: action,
    getCommentsSuccess: action,
    getCommentsError: action,
    addComment: flow,
  }
);

export default commentStore;
