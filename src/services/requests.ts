import { REQUEST_URL } from '@src/constants';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import { AddComment, AddPost, GetComment, GetPost, GetPosts } from './types/request';
import { PostsResponse } from './types/response';

axios.defaults.baseURL = `${process.env.API_ENDPOINT}`;

const isAxiosError = (error: any): error is AxiosError => {
  return error.isAxiosError;
};

const request = async (config: AxiosRequestConfig) => {
  try {
    const response = await axios(config);

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response?.data;
    }
  }
};

const API = {
  login: <T>(data: T) => {
    return request({ method: 'POST', url: REQUEST_URL.LOGIN, data });
  },
  posts: (data: GetPosts): Promise<PostsResponse> => {
    return request({ method: 'GET', url: REQUEST_URL.POSTS, params: { _page: data.page } });
  },
  post: (data: GetPost): Promise<PostsResponse> => {
    return request({ method: 'GET', url: `${REQUEST_URL.POSTS}/${data.id}` });
  },
  addPost: (data: AddPost) => {
    return request({ method: 'POST', url: REQUEST_URL.POSTS, data });
  },
  addComment: (data: AddComment) => {
    return request({ method: 'POST', url: REQUEST_URL.COMMENTS, data });
  },
  comments: (data: GetComment) => {
    return request({ method: 'GET', url: REQUEST_URL.COMMENTS, params: { postId: data.postId } });
  },
};
export default API;
