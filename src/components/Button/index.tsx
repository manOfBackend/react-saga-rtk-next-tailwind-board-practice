import { ButtonHTMLAttributes, forwardRef, Ref } from 'react';
import React from 'react';

import StyledButton from './style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

const Button = forwardRef(function Button(props: ButtonProps, forwardRef: Ref<HTMLButtonElement>) {
  const { fullWidth = true, children, ...rest } = props;

  return (
    <StyledButton ref={forwardRef} fullWidth={fullWidth} {...rest}>
      <span>{children}</span>
    </StyledButton>
  );
});

export default Button;
