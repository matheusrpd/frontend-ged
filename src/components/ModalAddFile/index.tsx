import React, { useCallback } from 'react';
import { FiFilePlus } from 'react-icons/fi';

import Modal from '../Modal';
import InputFile from '../Input/File';

import { Form, InputText } from './styles';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFile: (data: CreateFileData) => Promise<void>;
}

interface CreateFileData {
  name: string;
  year: string;
  number: string;
  author: string;
  type: string;
  file: {};
}

const ModalAddFile: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddFile,
}) => {
  const handleSubmit = useCallback(
    async (data: CreateFileData) => {
      await handleAddFile(data);
      setIsOpen();
    },
    [handleAddFile, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit}>
        <h2>Novo arquivo</h2>
        <InputText name="name" label="Nome" />
        <InputText name="year" label="Ano" />
        <InputText name="number" label="Número" type="number" />
        <InputText name="author" label="Autor" />
        <InputText name="type" label="Tipo" />
        <InputFile name="file" />
        <button type="submit">
          <p>Adicionar arquivo</p>
          <div>
            <FiFilePlus size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddFile;
