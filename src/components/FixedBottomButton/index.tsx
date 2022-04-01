import React, { ComponentPropsWithoutRef, forwardRef, Ref } from 'react';
import { GlobalPortal } from '@src/GlobalPortal';
import { css } from 'styled-components';

import Button from '../Button';
import StyledFixedBottomButton from './style';

const FixedBottomButton = forwardRef(function FixedBottomButton(
  props: ComponentPropsWithoutRef<typeof Button>,
  forwardRef: Ref<HTMLButtonElement>
) {
  return (
    <GlobalPortal.Consumer>
      <StyledFixedBottomButton>
        <div
          css={css`
            padding: 0 20px 18px;
            &:hover {
              cursor: pointer;
            }
          `}
        >
          <Button {...props} ref={forwardRef} />
        </div>
      </StyledFixedBottomButton>
    </GlobalPortal.Consumer>
  );
});

export default FixedBottomButton;
