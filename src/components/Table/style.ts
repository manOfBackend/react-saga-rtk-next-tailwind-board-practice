import styled from 'styled-components';

import { TableProps } from '.';

const StyledTable = styled.table<TableProps>`
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
  table-layout: fixed;
  tr {
    border: 1px solid #ddd;
    padding: 5px;
    cursor: pointer;
  }
  th,
  tbody td {
    padding: 1rem;
    text-align: center;
  }
  th {
    font-size: ${({ theme }) => theme.fontSize.xSmall};
    letter-spacing: 1px;
    text-transform: uppercase;
    user-select: none;
  }
  td .content {
    display: inline-block;
    max-width: 80%;
    height: 1.5rem;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default StyledTable;
