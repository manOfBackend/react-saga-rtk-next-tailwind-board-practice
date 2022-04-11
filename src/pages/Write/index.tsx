import React, { useEffect, useState } from 'react';
import { FixedBottomButton, Text } from '@src/components';
import Header from '@src/components/Header';
import Stack from '@src/components/Stack';
import useStores from '@src/mobx-stores/useStores';
import { reaction } from 'mobx';
import { observer } from 'mobx-react';
import { css } from 'styled-components';

import { useInternalRouter } from '../Routing';

const Write = () => {
  const router = useInternalRouter();
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const { postStore } = useStores();
  reaction(
    () => postStore.addPostSuccess,
    (success) => {
      if (success) {
        router.push('/board');
      }
    }
  );
  return (
    <>
      <Header onBackClick={() => router.goBack()} />
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
          postStore.addPost({ title: title, content: content, writer: 'aaa' });
          // dispatch(postsActions.addPost({ title: title, content: content, writer: 'aaa' }));
        }}
      >
        <Text fontSize="xx-small">글쓰기</Text>
      </FixedBottomButton>
    </>
  );
};

export default observer(Write);
