import React, { useState } from 'react';
import { FixedBottomButton, Text } from '@src/components';
import Header from '@src/components/Header';
import Stack from '@src/components/Stack';
import { useGetPostsQuery } from '@src/services/findaBoard';
import { css } from 'styled-components';

import { useInternalRouter } from '../Routing';

const Write = () => {
  const router = useInternalRouter();
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetPostsQuery({
    keyword: '',
    page: page,
  });

  if (isLoading) {
    return null;
  }
  return (
    <>
      <Header onBackClick={() => router.goBack()} />
      <Stack>
        <Text fontSize="medium">제목</Text>
        <input
          css={css`
            width: 100%;
          `}
        />
        <Text fontSize="medium">내용</Text>
        <textarea
          css={css`
            height: 200px;
            width: 100%;
          `}
        />
      </Stack>
      <FixedBottomButton onClick={() => router.push('/write')}>
        <Text fontSize="xx-small">글쓰기</Text>
      </FixedBottomButton>
    </>
  );
};

export default Write;
