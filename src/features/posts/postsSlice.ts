import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddPost, GetPosts } from '@src/services/types/request';
import { Post } from '@src/services/types/response';

export interface PostsReducerType {
  loading: boolean;
  posts?: Post[];
  addPostSuccess: boolean;
  error?: string;
}

const initialState: PostsReducerType = {
  loading: false,
  addPostSuccess: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: (state, action: PayloadAction<GetPosts>) => {
      state.loading = true;
      state.addPostSuccess = false;
    },
    getPostsSuccess: (state, { payload }) => {
      state.posts = payload;
      state.loading = false;
    },
    getPostsError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    addPost: (state, action: PayloadAction<AddPost>) => {
      state.addPostSuccess = false;
    },
    addPostSuccess: (state) => {
      state.addPostSuccess = true;
    },
    addPostError: (state) => {
      state.addPostSuccess = false;
    },
  },
});

export const postsActions = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
