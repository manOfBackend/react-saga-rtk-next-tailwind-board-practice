import React from 'react';
import { useSelector } from 'react-redux';
import { FixedBottomButton, Pagination, Table, Text } from '@src/components';
import Stack from '@src/components/Stack';
import { SagaStore, wrapper } from '@src/configureStore';
import { RootState } from '@src/features';
import { postsActions } from '@src/features/posts/postsSlice';
import { Post } from '@src/services/types/response';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Router from 'next/router';
import { END } from 'redux-saga';
import { css } from 'styled-components';
const FindaBoard = () => {
  const { posts } = useSelector((state: RootState) => state.posts);

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
                    Router.push(`/Detail?id=${post.id}`);
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
            <Pagination pageSize={10} totalLength={50} />
          </div>
        </Stack>
      </section>
      <FixedBottomButton onClick={() => console.log('aa')}>글쓰기</FixedBottomButton>
    </div>
  );
};

export default FindaBoard;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { page: '1' } }, { params: { page: '2' } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (Store) =>
    async ({ params }: GetStaticPropsContext) => {
      const page = params?.page as string;
      Store.dispatch(postsActions.getPosts({ page: Number(page) }));
      Store.dispatch(END);
      await (Store as SagaStore)?.sagaTask?.toPromise();
      return {
        props: {
          data: null,
        },
      };
    }
);

// async ({ params }: any) => {
//   const posts = await API.posts({ page: params.id });

//   return {
//     props: { posts },
//     revalidate: 1,
//   };
// };
