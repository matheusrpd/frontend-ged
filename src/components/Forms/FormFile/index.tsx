import React from 'react';
import { Form } from '@unform/web';

import InputFile from '../../Input/File';

import { Container, InputText } from './styles';

interface FormFileProps {
  handleSubmit(data: {}): Promise<void>;
}

const FormFile: React.FC<FormFileProps> = ({ handleSubmit }) => {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputText name="name" label="Nome" />
        <InputText name="year" label="Ano" />
        <InputText name="number" label="Número" type="number" />
        <InputText name="author" label="Autor" />
        <InputText name="type" label="Tipo" />
        <InputFile name="file" />
        <button type="submit">Adicionar</button>
      </Form>
    </Container>
  );
};

export default FormFile;
