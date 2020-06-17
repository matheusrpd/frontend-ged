import React, { useCallback, useEffect, useState } from 'react';
import { FiMoreVertical, FiFolder, FiMoreHorizontal } from 'react-icons/fi';
import { useHistory, useLocation } from 'react-router-dom';
import api from '../../services/api';

import PDFImg from '../../assets/pdf.png';

import { Container, Folders, Folder, Files, File } from './styles';

interface FolderProps {
  name: string;
  id: string;
}

interface FileProps {
  name: string;
  id: string;
  url?: string;
}

const Recent: React.FC = () => {
  const [content, setContent] = useState('' || {});
  const [folders, setFolders] = useState<FolderProps[]>([]);
  const [files, setFiles] = useState<FileProps[]>([]);
  const history = useHistory();
  const location = useLocation();

  const handleNavigate = useCallback(
    idFolder => {
      history.push(`/folders/${idFolder}`);
    },
    [history],
  );

  useEffect(() => {
    if (location.state) {
      api
        .get('/search', {
          params: {
            content: location.state,
          },
        })
        .then(response => {
          setFolders(response.data.folders);
          setFiles(response.data.files);
        });
      setContent(location.state);
    }
  }, [location]);

  return (
    <Container>
      <h1>{`Resultado da pesquisa pelo termo "${content}"`}</h1>

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

export default Recent;
