import styled from 'styled-components';

export const Container = styled.div`
  background: #f2f4f7;
  height: 100%;
  padding: 2rem;

  h1 {
    font-size: 24px;
    color: #343a40;
  }
`;

export const Folders = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  strong {
    color: #343a40;
  }

  & > div {
    margin-top: 1.5rem;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`;

export const Folder = styled.div`
  width: 100%;
  padding: 1.5rem 1rem;
  border-radius: 0.375rem;
  background-color: #fefefe;
  cursor: pointer;
  display: flex;
  transition: transform ease 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  div {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;

    span {
      font-size: 1.125rem;
      color: #343a40;
    }

    small {
      font-size: 0.875rem;
      margin-top: 0.5rem;
      color: #6c7293;
    }
  }

  svg:last-child {
    margin-left: auto;
  }
`;

export const Files = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  strong {
    color: #343a40;
  }

  & > div {
    margin-top: 1.5rem;

    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 20px;
  }
`;

export const File = styled.a`
  position: relative;
  width: 100%;
  padding: 48px 16px;
  background: #fff;
  border-radius: 4px;
  border: 2px solid #fff;
  cursor: pointer;
  text-decoration: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    border-color: #826ce1;
  }

  img {
    width: 64px;
  }

  span {
    margin-top: 24px;
    text-align: center;
    color: #343a40;
  }

  svg {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px 10px 0 0;
    z-index: 100;
  }
`;
