import React, { ReactNode } from 'react';
import { FontSize } from '@src/utils';
import cn from 'classnames';

import StyledText from './style';

export interface TextProps {
  children?: ReactNode;
  className?: string;
  align?: 'start' | 'center' | 'end';
  fontColor?: 'main' | 'gray' | 'white' | 'gil-blue' | 'job-navy';
  fontSize?: FontSize;
  fontWeight?: 'light' | 'regular' | 'medium' | 'bold';
  role?: React.AriaRole;
  handleClick?: React.MouseEventHandler<HTMLDivElement>;
  handleKeyUp?: React.KeyboardEventHandler<HTMLDivElement>;
}

const Text: React.FC<TextProps> = ({
  children,
  className,
  align = 'start',
  fontColor = 'main',
  fontSize = 'small',
  fontWeight = 'medium',
  role,
  handleClick,
  handleKeyUp,
}) => {
  return (
    <StyledText
      className={cn(
        '_TEXT_',
        className,
        `text-align-${align}`,
        `font-size-${fontSize}`,
        `font-color-${fontColor}`,
        `font-weight-${fontWeight}`
      )}
      role={role}
      onClick={handleClick}
      onKeyUp={handleKeyUp}
    >
      {children}
    </StyledText>
  );
};

export default Text;
