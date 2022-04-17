import React from 'react';
import { useSelector } from 'react-redux';
import { FixedBottomButton, Text } from '@src/components';
import Header from '@src/components/Header';
import List from '@src/components/List';
import Stack from '@src/components/Stack';
import { SagaStore, wrapper } from '@src/configureStore';
import { RootState } from '@src/features';
import { commentsActions } from '@src/features/comments/commentsSlice';
import { detailActions } from '@src/features/detail/detailSlice';
import { GetServerSideProps } from 'next';
import Router from 'next/router';
import { END } from 'redux-saga';

const Detail = () => {
  const { detail } = useSelector((state: RootState) => state.detail);
  const { comments } = useSelector((state: RootState) => state.comments);

  return (
    <>
      <Header onBackClick={() => Router.push('/FindaBoard/1')} />
      <Stack>
        <Text fontSize="medium">제목</Text>
        <Text fontSize="xx-small">{detail?.title}</Text>
        <Text fontSize="medium">작성자</Text>
        <Text fontSize="xx-small">{detail?.writer}</Text>
        <Text fontSize="medium">내용</Text>
        <Text fontSize="xx-small">{detail?.content}</Text>
        <Text fontSize="medium">댓글</Text>
        <List>
          {comments?.map((comment) => (
            <List.Row
              key={comment.id}
              left={<Text fontSize="xx-small">{comment.writer}</Text>}
              right={<Text fontSize="xx-small">{comment.content}</Text>}
            />
          ))}
        </List>
      </Stack>
      <FixedBottomButton onClick={() => Router.push('/CommentWrite')}>
        <Text fontSize="xx-small">댓글 쓰기</Text>
      </FixedBottomButton>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (Store) => async (context) => {
    try {
      const { id } = context.query;

      Store.dispatch(detailActions.getDetail({ id: id as string }));
      Store.dispatch(commentsActions.getComments({ postId: id as string }));
      Store.dispatch(END);
      await (Store as SagaStore)?.sagaTask?.toPromise();
      return {
        props: {},
      };
    } catch (error) {
      return {
        redirect: {
          destination: '/FindaBoard/1',
          permanent: false,
        },
      };
    }
  }
);

export default Detail;
