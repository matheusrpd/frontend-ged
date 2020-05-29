import React, { useCallback, useEffect, useState } from 'react';
import { FiFolder, FiMoreHorizontal, FiFolderPlus, FiX } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import Modal from '../../components/Modal';
import FormFolder from '../../components/Forms/FormFolder';

import { Container, Folders, Folder, Header, ContainerModal } from './styles';

interface FolderProps {
  name: string;
  id: string;
}

const MyFolders: React.FC = () => {
  const [folders, setFolders] = useState<FolderProps[]>([]);
  const [openFolder, setOpenFolder] = useState(false);

  const history = useHistory();

  useEffect(() => {
    api.get('/folders/-my-').then(response => {
      setFolders(response.data.documents);
    });
  }, []);

  const handleNavigate = useCallback(
    id => {
      history.push(`/folders/${id}`);
    },
    [history],
  );

  const handleModalFolder = useCallback(() => {
    setOpenFolder(!openFolder);
  }, [setOpenFolder, openFolder]);

  const handleSubmitFolder = useCallback(
    async data => {
      const response = await api.post('/folders/-my-', { name: data.name });
      setFolders(lastState => [...lastState, response.data]);
      handleModalFolder();
    },
    [handleModalFolder],
  );

  return (
    <Container>
      <Header>
        <h1>Minhas pastas</h1>
        <button type="button" onClick={handleModalFolder}>
          Nova pasta
          <FiFolderPlus size={16} color="#fff" />
        </button>
        <Modal open={openFolder}>
          <ContainerModal>
            <h2>Adicionar pasta</h2>
            <FormFolder handleSubmit={handleSubmitFolder} />
            <FiX size={20} color="#000" onClick={handleModalFolder} />
          </ContainerModal>
        </Modal>
      </Header>

      <Folders>
        {folders &&
          folders.map(folder => (
            <Folder onClick={() => handleNavigate(folder.id)} key={folder.id}>
              <FiFolder size={20} color="#6c7293" />
              <div>
                <span>{folder.name}</span>
                <small>#Favoritas</small>
              </div>
              <FiMoreHorizontal size={20} color="#6c7293" />
            </Folder>
          ))}
      </Folders>
    </Container>
  );
};

export default MyFolders;
