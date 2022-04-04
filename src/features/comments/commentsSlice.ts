import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddComment, GetComment } from '@src/services/types/request';
import { Comment } from '@src/services/types/response';

export interface CommentsReducerType {
  loading: boolean;
  comments?: Comment[];
  addCommentSuccess: boolean;
  error?: string;
}

const initialState: CommentsReducerType = {
  loading: false,
  addCommentSuccess: false,
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getComments: (state, action: PayloadAction<GetComment>) => {
      state.loading = true;
      state.addCommentSuccess = false;
    },
    getCommentsSuccess: (state, { payload }) => {
      state.comments = payload;
      state.loading = false;
    },
    getCommentsError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    addComment: (state, action: PayloadAction<AddComment>) => {
      state.addCommentSuccess = false;
    },
    addCommentSuccess: (state) => {
      state.addCommentSuccess = true;
    },
    addCommentError: (state) => {
      state.addCommentSuccess = false;
    },
  },
});

export const commentsActions = commentsSlice.actions;
export const commentsReducer = commentsSlice.reducer;
