import React from 'react';

import StyledTable from './style';
export interface TableProps {
  children?: React.ReactNode;
  className?: string;
  height?: number;
  width?: number;
}
const Table: React.FC<TableProps> = ({ children, className, height, width }) => {
  return (
    <StyledTable className={className} height={height} width={width}>
      {children}
    </StyledTable>
  );
};

export default Table;
