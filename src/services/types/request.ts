export interface GetPosts {
  keyword?: string;
  page?: number;
}

export interface GetPost {
  id: string;
}

export interface AddPost {
  title: string;
  writer: string;
  content: string;
}

export interface AddComment {
  postId: string;
  writer: string;
  content: string;
}

export interface GetComment {
  postId: string;
}
