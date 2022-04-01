import styled from 'styled-components';

import { ButtonProps } from '.';

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  height: 56px;
  border: 0 solid transparent;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.color.blue5};
  color: ${({ theme }) => theme.color.white};
  font-size: 17px;
  font-weight: 600;
  white-space: nowrap;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;
  &:focus {
    outline: none;
  }
  &:disabled {
    opacity: 0.26;
    cursor: not-allowed;
  }
  &:active {
    background-color: ${({ theme }) => theme.color.blue5};
  }
`;

export default StyledButton;
