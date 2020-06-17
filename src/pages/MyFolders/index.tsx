import React, { useCallback, useEffect, useState } from 'react';
import { FiFolder, FiMoreHorizontal, FiFolderPlus } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import ModalAddFolder from '../../components/ModalAddFolder';

import { Container, Folders, Folder, Header } from './styles';

interface FolderProps {
  name: string;
  id: string;
}

const MyFolders: React.FC = () => {
  const [folders, setFolders] = useState<FolderProps[]>([]);
  const [openModalFolder, setOpenModalFolder] = useState(false);
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
    setOpenModalFolder(!openModalFolder);
  }, [setOpenModalFolder, openModalFolder]);

  const handleAddFolder = useCallback(async data => {
    const response = await api.post('/folders/-my-', { name: data.name });
    setFolders(lastState => [...lastState, response.data]);
  }, []);

  const handleMore = useCallback(event => {
    event.stopPropagation();
    console.log('1');
  }, []);

  return (
    <Container>
      <Header>
        <h1>Minhas pastas</h1>
        <button type="button" onClick={handleModalFolder}>
          <p>Nova pasta</p>
          <div className="icon">
            <FiFolderPlus size={24} color="#fff" />
          </div>
        </button>
      </Header>

      <ModalAddFolder
        isOpen={openModalFolder}
        setIsOpen={handleModalFolder}
        handleAddFolder={handleAddFolder}
      />

      <Folders>
        {folders &&
          folders.map(folder => (
            <Folder onClick={() => handleNavigate(folder.id)} key={folder.id}>
              <FiFolder size={20} color="#6c7293" />
              <div>
                <span>{folder.name}</span>
                <small>#Favoritas</small>
              </div>
              <FiMoreHorizontal
                size={20}
                color="#6c7293"
                onClick={handleMore}
              />
            </Folder>
          ))}
      </Folders>
    </Container>
  );
};

export default MyFolders;
