import API from '@src/services/requests';
import { AddPost, GetPosts } from '@src/services/types/request';
import { Post } from '@src/services/types/response';
import { action, flow, observable } from 'mobx';

interface PostStore {
  loading: boolean;
  posts: Post[];
  addPostSuccess: boolean;
  error?: string;
  addPost: (post: AddPost) => void;
  getPost: (arr: GetPosts) => void;
  getPostInit: () => void;
  getPostSuccess: (payload: Post[]) => void;
  getPostError: (payload: string) => void;
}
const postStore = observable<PostStore>({
  posts: [],
  loading: false,
  addPostSuccess: false,
  *addPost(post) {
    try {
      this.addPostSuccess = false;
      yield API.addPost(post);
      this.addPostSuccess = true;
    } catch (error) {
      this.addPostSuccess = false;
    }
  },
  *getPost(arr) {
    try {
      // this.getPostInit();
      const response: Post[] = yield API.posts(arr);
      this.posts = response;
      // this.getPostSuccess(response);
    } catch (error) {
      console.log(error);

      // this.getPostError('에러 발생 에러 발생');
    }
  },

  getPostInit() {
    this.loading = true;

    // this.error = undefined;
    this.addPostSuccess = false;
  },

  getPostSuccess(payload) {
    this.posts = payload;
    this.loading = false;
  },

  getPostError(payload) {
    this.error = payload;
    this.loading = false;
  },
});

export default postStore;
