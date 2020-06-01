import styled from 'styled-components';
import { Form as Unform } from '@unform/web';
import Input from '../Input';

export const Form = styled(Unform)`
  padding: 48px 40px;
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 40px;
  }

  button {
    margin-top: 48px;
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #826ce1;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: flex-end;

    p {
      padding: 16px 24px;
    }

    div {
      display: flex;
      padding: 16px 16px;
      background: #9987ed;
      border-radius: 0 8px 8px 0;
      margin: 0 auto;
    }
  }
`;

export const InputText = styled(Input)`
  margin: 12px 0;
  width: 100%;
  padding: 18px 24px;
  align-items: center;
  background-color: hsl(0, 0%, 100%);
  border: 0;
  border-radius: 4px;
  color: #3d3d4d;
`;
