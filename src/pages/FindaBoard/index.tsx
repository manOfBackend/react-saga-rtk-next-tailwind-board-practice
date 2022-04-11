import React, { useEffect, useState } from 'react';
import { FixedBottomButton, Pagination, Table, Text } from '@src/components';
import Stack from '@src/components/Stack';
import useStores from '@src/mobx-stores/useStores';
import { observer } from 'mobx-react';
import { css } from 'styled-components';

import { useInternalRouter } from '../Routing';

const FindaBoard = () => {
  const router = useInternalRouter();
  const [page, setPage] = useState(1);

  const { postStore, detailStore } = useStores();

  const { posts } = postStore;
  useEffect(() => {
    postStore.getPost({ page });
  }, [page]);

  return (
    <div className="finda-board">
      <section className="finda-board-wrapper">
        <Stack
          css={css`
            margin-top: 20px;
          `}
        >
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
              {posts?.map((post) => (
                <tr
                  key={post.id}
                  onClick={() => {
                    // dispatch(detailActions.getDetail({ id: post.id }));
                    detailStore.getDetail({ id: post.id });
                    router.push(`/detail`);
                  }}
                >
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
            <Pagination pageSize={10} totalLength={50} currentPage={page} onDispatch={setPage} />
          </div>
        </Stack>
      </section>
      <FixedBottomButton onClick={() => router.push('/write')}>글쓰기</FixedBottomButton>
    </div>
  );
};

export default observer(FindaBoard);
