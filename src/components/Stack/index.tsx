import React, { PropsWithChildren } from 'react';
import { css } from 'styled-components';
interface Props {
  className?: string;
}

const Stack = ({ className, children }: PropsWithChildren<Props>) => {
  return (
    <div
      className={className}
      css={css`
        padding: 0 24px;
        display: flex;
        flex-direction: column;
        gap: 20px;
      `}
    >
      {children}
    </div>
  );
};

export default Stack;
