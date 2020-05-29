import React, { useCallback } from 'react';
import { FiBell, FiChevronDown, FiSearch } from 'react-icons/fi';
import api from '../../services/api';

import { Container, Logo, Content, Profile, Search, InputText } from './styles';

const NavBar: React.FC = () => {
  const handleSubmit = useCallback(async data => {
    await api.post('/search', { content: data.search });
  }, []);

  return (
    <Container>
      <Logo>
        <a href="/">
          <h1>Logo</h1>
        </a>
      </Logo>
      <Content>
        <Search onSubmit={handleSubmit}>
          <InputText name="search" placeholder="Pesquisa" />
          <button type="submit">
            <FiSearch size={18} color="#826ce1" />
          </button>
        </Search>
        <FiBell size={20} color="#fff" />
        <Profile>
          <img src="" alt="" />
          <strong>Matheus Allan</strong>
          <FiChevronDown size={16} color="#fff" />
        </Profile>
      </Content>
    </Container>
  );
};

export default NavBar;
