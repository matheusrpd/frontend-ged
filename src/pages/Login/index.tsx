import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { FiLock, FiUser } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';

import { useAuth } from '../../hooks/auth';

import { Container, Content, Background } from './styles';

interface LoginFormData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const { login } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: LoginFormData) => {
      await login({
        username: data.username,
        password: data.password,
      });

      history.push('/dashboard');
    },
    [login, history],
  );

  return (
    <Container>
      <Background />

      <Content>
        <h1>Login</h1>

        <p>
          Faça login com suas credencias para entrar no gerenciador de
          documentos.
        </p>

        <Form onSubmit={handleSubmit}>
          <Input name="username" icon={FiUser} placeholder="Username" />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Senha"
          />
          <button type="submit">Entrar</button>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
