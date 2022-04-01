import styled from 'styled-components';

const StyledText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.medium};
  white-space: pre-wrap;

  &.block {
    display: block;
  }
  &.inline {
    display: inline;
  }

  &.text-align {
    &-start {
      display: block;
      text-align: start;
    }
    &-center {
      display: block;
      text-align: center;
    }
    &-end {
      display: block;
      text-align: end;
    }
  }

  &.font-size {
    &-xx-small {
      font-size: ${({ theme }) => theme.fontSize.xxSmall};
    }
    &-x-small {
      font-size: ${({ theme }) => theme.fontSize.xSmall};
    }
    &-small {
      font-size: ${({ theme }) => theme.fontSize.small};
    }
    &-medium {
      font-size: ${({ theme }) => theme.fontSize.medium};
    }
    &-large {
      font-size: ${({ theme }) => theme.fontSize.large};
    }
  }

  &.font-color {
    &-main {
      color: ${({ theme }) => theme.color.main};
    }
    &-gray {
      color: ${({ theme }) => theme.color.gray};
    }
    &-gil-blue {
      color: ${({ theme }) => theme.color.blue0};
    }
    &-job-navy {
      color: ${({ theme }) => theme.color.navy};
    }
    &-white {
      color: ${({ theme }) => theme.color.white};
    }
  }

  &.font-weight {
    &-light {
      font-weight: ${({ theme }) => theme.fontWeight.light};
    }
    &-regular {
      font-weight: ${({ theme }) => theme.fontWeight.regular};
    }
    &-medium {
      font-weight: ${({ theme }) => theme.fontWeight.medium};
    }
    &-bold {
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
  }
`;

export default StyledText;
