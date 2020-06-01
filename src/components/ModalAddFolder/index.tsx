import React, { useCallback } from 'react';
import { FiFolderPlus } from 'react-icons/fi';

import Modal from '../Modal';

import { Form, InputText } from './styles';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFolder: (data: CreateFolderData) => Promise<void>;
}

interface CreateFolderData {
  name: string;
}

const ModalAddFolder: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddFolder,
}) => {
  const handleSubmit = useCallback(
    async (data: CreateFolderData) => {
      await handleAddFolder(data);
      setIsOpen();
    },
    [handleAddFolder, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit}>
        <h2>Nova pasta</h2>
        <InputText name="name" label="Nome" />
        <button type="submit">
          <p>Adicionar pasta</p>
          <div>
            <FiFolderPlus size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddFolder;
