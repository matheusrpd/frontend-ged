import styled from 'styled-components';
import { shade } from 'polished';
import { Form } from '@unform/web';
import Input from '../Input';

export const Container = styled.nav`
  height: 80px;
  background: #826ce1;
  padding: 0 35px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;

    h1 {
      color: #fff;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    margin-left: 32px;
  }
`;

export const Search = styled(Form)`
  display: flex;
  align-items: center;

  button {
    height: 35px;
    border: none;
    border-radius: 0 4px 4px 0;
    padding: 0 12px;
    background: #efefef;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: ${shade(0.1, '#efefef')};
    }
  }
`;

export const InputText = styled(Input)`
  height: 35px;
  width: 300px;
  border: none;
  border-radius: 4px 0 0 4px;
  padding: 8px;

  background: #fff;
  color: #343a40;

  &::placeholder {
    color: #6c7293;
  }
`;

export const Profile = styled.div`
  margin-left: 32px;

  display: flex;
  align-items: center;

  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: #fff;
  }

  strong {
    margin-left: 8px;
    font-weight: 500;
    color: #fff;
  }

  svg {
    margin-left: 8px;
  }
`;
