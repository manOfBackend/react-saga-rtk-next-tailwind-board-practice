import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FixedBottomButton, Pagination, Table, Text } from '@src/components';
import { RootState } from '@src/configureStore';
import { postsActions } from '@src/features/posts/postsSlice';

import { useInternalRouter } from '../Routing';

const FindaBoard = () => {
  const router = useInternalRouter();
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const { posts } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(postsActions.getPosts({ page }));
  }, [page]);

  return (
    <div className="finda-board">
      <section className="finda-board-wrapper">
        <Table>
          <thead>
            <tr>
              <th>
                <Text align="center" fontSize="small">
                  번호
                </Text>
              </th>
              <th>
                <Text align="center" fontSize="small">
                  작성자
                </Text>
              </th>
              <th>
                <Text align="center" fontSize="small">
                  제목
                </Text>
              </th>
            </tr>
          </thead>
          <tbody>
            {posts?.posts.map((post) => (
              <tr key={post.id}>
                <td>
                  <Text align="center" fontSize="xx-small">
                    {post.id}
                  </Text>
                </td>
                <td>
                  <Text align="center" fontSize="xx-small">
                    {post.writer}
                  </Text>
                </td>
                <td>
                  <Text align="center" fontSize="xx-small">
                    {post.title}
                  </Text>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="finda-board-pagination-wrapper">
          <Pagination pageSize={16} totalLength={120} currentPage={page} onDispatch={setPage} />
        </div>
      </section>
      <FixedBottomButton onClick={() => router.push('/write')}>글쓰기</FixedBottomButton>
    </div>
  );
};

export default FindaBoard;
