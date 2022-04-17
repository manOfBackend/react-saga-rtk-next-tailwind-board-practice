import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FixedBottomButton, Text } from '@src/components';
import Header from '@src/components/Header';
import Stack from '@src/components/Stack';
import { RootState } from '@src/configureStore';
import { commentsActions } from '@src/features/comments/commentsSlice';
import Router from 'next/router';
import { css } from 'styled-components';

const CommentWrite = () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState<string>('');
  const { addCommentSuccess } = useSelector((state: RootState) => state.comments);
  const { postIdOnView } = useSelector((state: RootState) => state.detail);

  useEffect(() => {
    if (addCommentSuccess) {
      Router.push('/Detail');
    }
  }, [addCommentSuccess]);

  return (
    <>
      <Header onBackClick={() => Router.back()} />
      <Stack>
        <Text fontSize="medium">내용</Text>
        <textarea
          css={css`
            height: 200px;
            width: 100%;
          `}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Stack>
      <FixedBottomButton
        onClick={() => {
          if (postIdOnView) {
            dispatch(
              commentsActions.addComment({ postId: postIdOnView, content: content, writer: 'hj' })
            );
          }
        }}
      >
        <Text fontSize="xx-small">댓글 쓰기</Text>
      </FixedBottomButton>
    </>
  );
};

export default CommentWrite;
