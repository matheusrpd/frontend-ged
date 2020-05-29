import styled from 'styled-components';

import Tootlip from '../Tooltip';

export const Container = styled.div``;

export const Error = styled(Tootlip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #e63946;
    color: #fff;

    &::before {
      border-color: #e63946 transparent;
    }
  }
`;
