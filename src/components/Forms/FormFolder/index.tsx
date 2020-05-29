import React from 'react';
import { Form } from '@unform/web';

import { Container, InputText } from './styles';

interface FormFolderProps {
  handleSubmit(data: {}): Promise<void>;
}

const FormFolder: React.FC<FormFolderProps> = ({ handleSubmit }) => {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputText name="name" label="Nome" />
        <button type="submit">Adicionar</button>
      </Form>
    </Container>
  );
};

export default FormFolder;
