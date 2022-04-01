import React from 'react';
import { css } from 'styled-components';
interface Props {
  onBackClick?: () => void;
}

const Header = ({ onBackClick }: Props) => {
  return (
    <header
      css={css`
        display: flex;
        padding: 25px 8px;
      `}
    >
      <button
        css={css`
          border: none;
          background-color: transparent;
          &:focus {
            outline: none;
          }
        `}
        onClick={onBackClick}
      >
        <span>🔙</span>
      </button>
    </header>
  );
};

export default Header;
