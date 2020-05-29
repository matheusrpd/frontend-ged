import React, { useCallback, useEffect, useState } from 'react';
import {
  FiMoreVertical,
  FiPlus,
  FiX,
  FiFolderPlus,
  FiFolder,
  FiMoreHorizontal,
} from 'react-icons/fi';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api';

import Modal from '../../components/Modal';
import FormFile from '../../components/Forms/FormFile';
import FormFolder from '../../components/Forms/FormFolder';

import PDFImg from '../../assets/pdf.png';

import {
  Container,
  Folders,
  Folder,
  Files,
  File,
  Header,
  ContainerModal,
} from './styles';

interface FolderProps {
  name: string;
  id: string;
}

interface FileProps {
  name: string;
  id: string;
  url?: string;
}

const SimpleFolder: React.FC = () => {
  const [folder, setFolder] = useState<FolderProps>();
  const [folders, setFolders] = useState<FolderProps[]>([]);
  const [files, setFiles] = useState<FileProps[]>([]);
  const [openFile, setOpenFile] = useState(false);
  const [openFolder, setOpenFolder] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  const handleModalFile = useCallback(() => {
    setOpenFile(!openFile);
  }, [setOpenFile, openFile]);

  const handleModalFolder = useCallback(() => {
    setOpenFolder(!openFolder);
  }, [setOpenFolder, openFolder]);

  useEffect(() => {
    api.get(`/folders/${id}`).then(response => {
      setFolders(
        response.data.documents.filter(
          (document: { type: string }) => document.type === 'folder',
        ),
      );
      setFiles(
        response.data.documents.filter(
          (document: { type: string }) => document.type === 'file',
        ),
      );
      setFolder(response.data.folder);
    });
  }, [id]);

  const handleSubmitFile = useCallback(
    async data => {
      const formData = new FormData();

      formData.append('file', data.file);
      formData.append('type', data.type);
      formData.append('number', data.number);
      formData.append('year', data.year);
      formData.append('name', data.name);
      formData.append('author', data.author);

      const response = await api.post(`/folders/${folder?.id}/files`, formData);
      setFiles(lastState => [...lastState, response.data]);
      handleModalFile();
    },
    [handleModalFile, folder],
  );

  const handleSubmitFolder = useCallback(
    async data => {
      const response = await api.post(`/folders/${folder?.id}`, {
        name: data.name,
      });
      setFolders(lastState => [...lastState, response.data]);
      handleModalFolder();
    },
    [handleModalFolder, folder],
  );

  const handleNavigate = useCallback(
    id => {
      history.push(`/folders/${id}`);
    },
    [history],
  );

  return (
    <Container>
      {folder && (
        <Header>
          <h1>Minha pasta</h1>
          <div>
            <button type="button" onClick={handleModalFile}>
              Novo arquivo
              <FiPlus size={16} color="#fff" />
            </button>
            <button type="button" onClick={handleModalFolder}>
              Nova pasta
              <FiFolderPlus size={16} color="#fff" />
            </button>
          </div>
          <Modal open={openFile}>
            <ContainerModal>
              <h2>Adicionar arquivo</h2>
              <FormFile handleSubmit={handleSubmitFile} />
              <FiX size={20} color="#000" onClick={handleModalFile} />
            </ContainerModal>
          </Modal>
          <Modal open={openFolder}>
            <ContainerModal>
              <h2>Adicionar pasta</h2>
              <FormFolder handleSubmit={handleSubmitFolder} />
              <FiX size={20} color="#000" onClick={handleModalFolder} />
            </ContainerModal>
          </Modal>
        </Header>
      )}

      <Folders>
        {folders && <strong>Pastas</strong>}
        <div>
          {folders &&
            folders.map(findFolder => (
              <Folder onClick={() => handleNavigate(findFolder.id)}>
                <FiFolder size={20} color="#6c7293" />
                <div>
                  <span>{findFolder.name}</span>
                  <small>#Favoritas</small>
                </div>
                <FiMoreHorizontal size={20} color="#6c7293" />
              </Folder>
            ))}
        </div>
      </Folders>

      <Files>
        {files && <strong>Arquivos</strong>}
        <div>
          {files &&
            files.map(findFile => (
              <File href={findFile.url} key={findFile.id} target="_blank">
                <img src={PDFImg} alt="Arquivo" />
                <span>{findFile.name}</span>
                <FiMoreVertical size={20} color="#6c7293" />
              </File>
            ))}
        </div>
      </Files>
    </Container>
  );
};

export default SimpleFolder;
