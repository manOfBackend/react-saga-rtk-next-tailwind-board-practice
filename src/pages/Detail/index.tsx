import React from 'react';
import { useSelector } from 'react-redux';
import { FixedBottomButton, Text } from '@src/components';
import Header from '@src/components/Header';
import List from '@src/components/List';
import Stack from '@src/components/Stack';
import { RootState } from '@src/configureStore';

import { useInternalRouter } from '../Routing';

const Detail = () => {
  const router = useInternalRouter();
  const { detail } = useSelector((state: RootState) => state.detail);
  const { comments } = useSelector((state: RootState) => state.comments);

  return (
    <>
      <Header onBackClick={() => router.push('/board')} />
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
      <FixedBottomButton onClick={() => router.push('/comment-write')}>
        <Text fontSize="xx-small">댓글 쓰기</Text>
      </FixedBottomButton>
    </>
  );
};

export default Detail;
