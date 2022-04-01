import { REQUEST_URL } from '@src/constants';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import { GetPosts } from './types/request';
import { PostsResponse } from './types/response';

axios.defaults.baseURL = `${process.env.API_ENDPOINT}`;

const STATUS_CODE = {
  INTERNAL_SERVER_ERROR: 500,
};

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
    return request({ method: 'GET', url: REQUEST_URL.POSTS, params: { page: data.page } });
  },
};
export default API;
