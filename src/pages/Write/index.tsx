import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FixedBottomButton, Text } from '@src/components';
import Header from '@src/components/Header';
import Stack from '@src/components/Stack';
import { RootState } from '@src/configureStore';
import { postsActions } from '@src/features/posts/postsSlice';
import Router from 'next/router';
import { css } from 'styled-components';
const Write = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const { addPostSuccess } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    if (addPostSuccess) {
      Router.push('/FindaBoard/1');
    }
  }, [addPostSuccess]);

  return (
    <>
      <Header onBackClick={() => Router.back()} />
      <Stack>
        <Text fontSize="medium">제목</Text>
        <input
          css={css`
            width: 100%;
          `}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
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
          dispatch(postsActions.addPost({ title: title, content: content, writer: 'aaa' }));
        }}
      >
        <Text fontSize="xx-small">글쓰기</Text>
      </FixedBottomButton>
    </>
  );
};

export default Write;
