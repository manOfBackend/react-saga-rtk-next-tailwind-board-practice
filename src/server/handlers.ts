import { rest } from 'msw';

/**
 * API
 */
export function handlers() {
  return [
    /**
     * 현재 세션의 글 목록 조회
     * response: {
     *  id: number // 글 번호
     *  title: string; // 제목
     *  writer: string; // 작성자 ID
     *  content: string; // 내용
     * }
     */
    rest.get('/api/posts', getPosts),
  ];
}

interface Post {
  id: number;
  title: string;
  writer: string;
  content: string;
}
const posts: Post[] = [
  {
    id: 1,
    title: 'test1',
    writer: 'hj',
    content: 'content1',
  },
  {
    id: 2,
    title: 'test2',
    writer: 'hyunbell',
    content: 'content2',
  },
  {
    id: 3,
    title: 'test3',
    writer: 'hyunpaper',
    content: 'content3',
  },
  {
    id: 4,
    title: 'test1',
    writer: 'hj',
    content: 'content1',
  },
  {
    id: 5,
    title: 'test2',
    writer: 'hyunbell',
    content: 'content2',
  },
  {
    id: 6,
    title: 'test3',
    writer: 'hyunpaper',
    content: 'content3',
  },
  {
    id: 7,
    title: 'test1',
    writer: 'hj',
    content: 'content1',
  },
  {
    id: 8,
    title: 'test2',
    writer: 'hyunbell',
    content: 'content2',
  },
  {
    id: 9,
    title: 'test3',
    writer: 'hyunpaper',
    content: 'content3',
  },
  {
    id: 10,
    title: 'test1',
    writer: 'hj',
    content: 'content1',
  },
  {
    id: 11,
    title: 'test2',
    writer: 'hyunbell',
    content: 'content2',
  },
  {
    id: 12,
    title: 'test3',
    writer: 'hyunpaper',
    content: 'content3',
  },
  {
    id: 13,
    title: 'test1',
    writer: 'hj',
    content: 'content1',
  },
  {
    id: 14,
    title: 'test2',
    writer: 'hyunbell',
    content: 'content2',
  },
  {
    id: 15,
    title: 'test3',
    writer: 'hyunpaper',
    content: 'content3',
  },
];

const getPosts: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  const page = Number(req.url.searchParams.get('page')) || 1;
  const pageSize = Number(req.url.searchParams.get('pageSize')) || 10;
  const keyword = req.url.searchParams.get('keyword') || '';

  const beginIndex = (page - 1) * pageSize;
  const _filteredPosts = posts
    .filter((p) => p.title.includes(keyword))
    .slice(beginIndex, beginIndex + 10);
  return res(
    ctx.status(200),
    ctx.json({
      status: 200,
      message: '',
      data: {
        totalCount: 3,
        posts: _filteredPosts,
      },
    })
  );
};
