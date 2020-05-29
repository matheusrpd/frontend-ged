import styled from 'styled-components';

import Input from '../../Input';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    input[type='file'] {
      margin-top: 8px;
    }

    button {
      margin-top: 32px;
    }
  }
`;

export const InputText = styled(Input)`
  margin-top: 8px;

  height: 38px;
  width: 100%;
  padding: 0 10px;
  align-items: center;
  background-color: hsl(0, 0%, 100%);
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 4px;
`;
