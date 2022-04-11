import React, { useEffect, useState } from 'react';
import { FixedBottomButton, Text } from '@src/components';
import Header from '@src/components/Header';
import Stack from '@src/components/Stack';
import useStores from '@src/mobx-stores/useStores';
import { reaction } from 'mobx';
import { observer } from 'mobx-react';
import { css } from 'styled-components';

import { useInternalRouter } from '../Routing';

const CommentWrite = () => {
  const router = useInternalRouter();
  const [content, setContent] = useState<string>('');
  // const { addCommentSuccess } = useSelector((state: RootState) => state.comments);
  // const { postIdOnView } = useSelector((state: RootState) => state.detail);

  const { detailStore, commentStore } = useStores();
  const { postIdOnView } = detailStore;
  reaction(
    () => commentStore.isAddCommentSuccess,
    (success) => {
      if (success) {
        router.push('/detail');
      }
    }
  );
  return (
    <>
      <Header onBackClick={() => router.goBack()} />
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
            // dispatch(
            // commentsActions.addComment({ postId: postIdOnView, content: content, writer: 'hj' })
            // );
            commentStore.addComment({ postId: postIdOnView, content: content, writer: 'hj' });
          }
        }}
      >
        <Text fontSize="xx-small">댓글 쓰기</Text>
      </FixedBottomButton>
    </>
  );
};

export default observer(CommentWrite);
