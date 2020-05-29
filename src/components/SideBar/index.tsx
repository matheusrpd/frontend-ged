import React from 'react';
import { FiFolder, FiClock, FiStar, FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, NavBar, NavLink, Profile, Infos } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <NavBar>
        <Profile>
          <img src="" alt="" />
          <Infos>
            <strong>Matheus Allan</strong>
            <span>SNT</span>
          </Infos>
        </Profile>
        <NavLink>
          <Link to="/">
            <FiFolder size={18} color="#979797" />
            <span>Minhas pastas</span>
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/recent">
            <FiClock size={18} color="#979797" />
            <span>Recentes</span>
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/stars">
            <FiStar size={18} color="#979797" />
            <span>Favoritos</span>
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/">
            <FiLogOut size={18} color="#e63946" />
            <span>Sair</span>
          </Link>
        </NavLink>
      </NavBar>
    </Container>
  );
};

export default SideBar;
