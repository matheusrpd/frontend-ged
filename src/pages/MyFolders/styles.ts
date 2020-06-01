import styled from 'styled-components';

export const Container = styled.div`
  background: #f2f4f7;
  height: 100%;
  padding: 2rem;
`;

export const Folders = styled.div`
  margin-top: 1.5rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 20px;
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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 24px;
    color: #343a40;
  }

  button {
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #826ce1;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: flex-end;

    p {
      padding: 12px 24px;
    }

    .icon {
      display: flex;
      padding: 12px 16px;
      background: #9987ed;
      border-radius: 0 8px 8px 0;
      margin: 0 auto;
    }
  }
`;
