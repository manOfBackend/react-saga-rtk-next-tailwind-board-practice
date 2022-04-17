import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FixedBottomButton, Pagination, Table, Text } from '@src/components';
import Stack from '@src/components/Stack';
import { RootState } from '@src/features';
import { detailActions } from '@src/features/detail/detailSlice';
import { postsActions } from '@src/features/posts/postsSlice';
import API from '@src/services/requests';
import { Post } from '@src/services/types/response';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Router from 'next/router';
import { css } from 'styled-components';
const FindaBoard = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(postsActions.getPosts({ page }));
  // }, [page, dispatch]);

  // const { posts } = useSelector((state: RootState) => state.posts);

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
                    dispatch(detailActions.getDetail({ id: post.id }));
                    Router.push('/Detail');
                    // router.push(`/detail`);
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
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async ({ params }: any) => {
  const posts = await API.posts({ page: params.id });

  return {
    props: { posts },
    revalidate: 1,
  };
};
