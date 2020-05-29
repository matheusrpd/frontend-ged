import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiLock, FiUser } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import Input from '../../components/Input';

import { Container, Content, Background } from './styles';

interface LoginFormData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { login } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: LoginFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string().required('Username obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await login({
          username: data.username,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu erro ao fazer login, cheque as credenciais.',
        });
      }
    },
    [login, history, addToast],
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

        <Form onSubmit={handleSubmit} ref={formRef}>
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
