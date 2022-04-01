import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetPosts } from '@src/services/types/request';
import { PostsResponse } from '@src/services/types/response';

export interface PostsReducerType {
  loading: boolean;
  posts?: PostsResponse;
  error?: string;
}

const initialState: PostsReducerType = {
  loading: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: (state, action: PayloadAction<GetPosts>) => {
      state.loading = true;
    },
    getPostsSuccess: (state, { payload }) => {
      state.posts = payload;
      state.loading = false;
    },
    getPostsError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const postsActions = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
