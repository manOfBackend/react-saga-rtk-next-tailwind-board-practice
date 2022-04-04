import React, { useMemo } from 'react';
import { Text } from '@src/components';
import cn from 'classnames';

import StyledPagination from './style';

export interface PaginationProps {
  className?: string;
  pageSize: number;
  totalLength: number;
  currentPage: number;
  onDispatch: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({
  className,
  pageSize,
  totalLength,
  currentPage,
  onDispatch,
}) => {
  const totalPage = useMemo<number>(
    () => Math.ceil(totalLength / pageSize),
    [totalLength, pageSize]
  );

  return (
    <StyledPagination className={cn(`_PAGINATION_`, className)}>
      {[...Array(totalPage)].map((_, index) => (
        <Text
          className={cn(`pagination-number`, index == currentPage - 1 ? 'clicked' : '')}
          fontColor="gray"
          fontSize="medium"
          fontWeight="regular"
          key={index}
          handleClick={() => onDispatch(index + 1)}
        >
          {index + 1}
        </Text>
      ))}
    </StyledPagination>
  );
};

export default Pagination;
