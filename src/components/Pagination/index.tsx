import React, { useMemo } from 'react';
import { Text } from '@src/components';
import cn from 'classnames';
import { useRouter } from 'next/router';

import StyledPagination from './style';

export interface PaginationProps {
  className?: string;
  pageSize: number;
  totalLength: number;
}

const Pagination: React.FC<PaginationProps> = ({ className, pageSize, totalLength }) => {
  const totalPage = useMemo<number>(
    () => Math.ceil(totalLength / pageSize),
    [totalLength, pageSize]
  );

  const router = useRouter();

  const { id } = router.query;

  return (
    <StyledPagination className={cn(`_PAGINATION_`, className)}>
      {[...Array(totalPage)].map((_, index) => (
        <Text
          className={cn(`pagination-number`, index == Number(id) - 1 ? 'clicked' : '')}
          fontColor="gray"
          fontSize="medium"
          fontWeight="regular"
          key={index}
          handleClick={() => router.push(`./${index + 1}`)}
        >
          {index + 1}
        </Text>
      ))}
    </StyledPagination>
  );
};

export default Pagination;
