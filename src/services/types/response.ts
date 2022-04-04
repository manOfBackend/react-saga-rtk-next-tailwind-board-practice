export interface Post {
  id: string;
  title: string;
  writer: string;
  content: string;
}

export interface Comment {
  id: string;
  postId: string;
  writer: string;
  content: string;
}

export interface PostsResponse {
  totalCount: number;
  posts: Post[];
}

export interface DetailResponse {
  post: Post;
}
