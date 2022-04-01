import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { GetPosts } from './types/request';
import { PostsResponse, Response } from './types/response';

export const findaBoardApi = createApi({
  reducerPath: 'findaBoardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.API_ENDPOINT}`,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Response<PostsResponse>, GetPosts>({
      query: ({ keyword, page }) => `posts?keyword=${keyword}&page=${page}&pageSize=10`,
    }),
  }),
});

export const { useGetPostsQuery } = findaBoardApi;
