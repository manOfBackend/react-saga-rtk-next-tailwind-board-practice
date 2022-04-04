import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetPost } from '@src/services/types/request';
import { Post } from '@src/services/types/response';

export interface DetailReducerType {
  loading: boolean;
  detail?: Post;
  postIdOnView?: string;
  error?: string;
}

const initialState: DetailReducerType = {
  loading: false,
};

export const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    getDetail: (state, action: PayloadAction<GetPost>) => {
      state.loading = true;
    },
    getDetailSuccess: (state, { payload }) => {
      state.detail = payload;
      state.postIdOnView = payload.id;
      state.loading = false;
    },
    getDetailError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const detailActions = detailSlice.actions;
export const detailReducer = detailSlice.reducer;
