import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  color: #c4c4c4;
  background: #fff;

  border-radius: 6px;
  border: 2px solid #c3c3c3;
  padding: 24px 16px;
  width: 100%;

  display: flex;
  align-items: center;

  ${props =>
    props.isFocused &&
    css`
      color: #826ce1;
      border-color: #826ce1;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #826ce1;
    `}

  & + div {
    margin-top: 16px;
  }

  input {
    flex: 1;
    font-size: 20px;
    color: #666;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #c4c4c4;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
