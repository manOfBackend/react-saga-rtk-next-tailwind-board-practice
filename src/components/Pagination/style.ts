import styled from 'styled-components';

const StyledPagination = styled.div`
  .pagination-number {
    cursor: pointer;
    display: inline !important;
    margin: 0rem 1rem;
    transition: 0.5s;

    &.clicked {
      color: ${({ theme }) => theme.color.blue5};
    }
  }
`;

export default StyledPagination;
