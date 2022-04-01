export interface Response<T> {
  status: number;
  message: string;
  data: T;
}

export interface Post {
  id: string;
  title: string;
  writer: string;
  content: string;
}

export interface PostsResponse {
  totalCount: number;
  posts: Post[];
}
