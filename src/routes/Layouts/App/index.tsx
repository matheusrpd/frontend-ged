import React from 'react';

import NavBar from '../../../components/NavBar';
import SideBar from '../../../components/SideBar';

import { Container, Content, Page } from './styles';

const LayoutApp: React.FC = ({ children }) => (
  <Container>
    <NavBar />
    <Content>
      <SideBar />
      <Page>{children}</Page>
    </Content>
  </Container>
);

export default LayoutApp;
