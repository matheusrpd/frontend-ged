import styled from 'styled-components';

export const Container = styled.nav`
  height: calc(100vh - 80px);
  width: 255px;
  background: #fff;
`;

export const NavBar = styled.ul`
  width: 100%;
  height: 100%;

  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Profile = styled.div`
  width: 100%;
  height: auto;
  padding: 16px 35px;

  display: flex;
  align-items: center;

  img {
    height: 48px;
    width: 48px;
    border-radius: 50%;
    background: #826ce1;
  }
`;

export const Infos = styled.div`
  margin-left: 16px;

  display: flex;
  flex-direction: column;

  strong {
    font-weight: 500;
    color: #343a40;
  }

  span {
    font-size: 12px;
    color: #6c7293;
    margin-top: 6px;
  }
`;

export const NavLink = styled.li`
  width: 100%;
  padding: 16px 35px;

  &:last-child {
    margin-top: auto;
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;

    span {
      font-size: 14px;
      color: #4a4a4a;
      margin-left: 16px;
    }

    &:hover span {
      color: #826ce1;
    }

    &:hover svg {
      color: #826ce1 !important;
    }
  }
`;
