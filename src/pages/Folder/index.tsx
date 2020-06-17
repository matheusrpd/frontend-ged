import React, { useCallback, useEffect, useState } from 'react';
import {
  FiMoreVertical,
  FiFilePlus,
  FiFolderPlus,
  FiFolder,
  FiMoreHorizontal,
} from 'react-icons/fi';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api';

import ModalAddFile from '../../components/ModalAddFile';
import ModalAddFolder from '../../components/ModalAddFolder';

import PDFImg from '../../assets/pdf.png';

import { Container, Folders, Folder, Files, File, Header } from './styles';

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
  const [openModalFile, setOpenModalFile] = useState(false);
  const [openModalFolder, setOpenModalFolder] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  const handleModalFile = useCallback(() => {
    setOpenModalFile(!openModalFile);
  }, [setOpenModalFile, openModalFile]);

  const handleModalFolder = useCallback(() => {
    setOpenModalFolder(!openModalFolder);
  }, [setOpenModalFolder, openModalFolder]);

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

  const handleAddFile = useCallback(
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
    },
    [folder],
  );

  const handleAddFolder = useCallback(
    async data => {
      const response = await api.post(`/folders/${folder?.id}`, {
        name: data.name,
      });
      setFolders(lastState => [...lastState, response.data]);
    },
    [folder],
  );

  const handleNavigate = useCallback(
    idFolder => {
      history.push(`/folders/${idFolder}`);
    },
    [history],
  );

  return (
    <Container>
      <Header>
        <h1>Minha pasta</h1>
        <div>
          <button type="button" onClick={handleModalFile}>
            <p> Novo arquivo</p>
            <div className="icon">
              <FiFilePlus size={24} color="#fff" />
            </div>
          </button>
          <button type="button" onClick={handleModalFolder}>
            <p>Nova pasta</p>
            <div className="icon">
              <FiFolderPlus size={24} color="#fff" />
            </div>
          </button>
        </div>
      </Header>

      <ModalAddFile
        isOpen={openModalFile}
        setIsOpen={handleModalFile}
        handleAddFile={handleAddFile}
      />
      <ModalAddFolder
        isOpen={openModalFolder}
        setIsOpen={handleModalFolder}
        handleAddFolder={handleAddFolder}
      />

      <Folders>
        {folders && <strong>Pastas</strong>}
        <div>
          {folders &&
            folders.map(findFolder => (
              <Folder
                onClick={() => handleNavigate(findFolder.id)}
                key={findFolder.id}
              >
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
