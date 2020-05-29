import styled, { keyframes } from 'styled-components';

import { shade } from 'polished';

import loginBackgroundImg from '../../assets/loginBackground.png';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  },
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  max-width: 900px;
  padding: 5% 10% 5% 2%;
  color: #826ce1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  h1 {
    font-size: 48px;
    font-weight: bold;
    text-align: left;
  }

  p {
    margin-top: 24px;
    max-width: 400px;
    font-size: 20px;
    line-height: 30px;
    color: #c3c3c3;
  }

  form {
    width: 100%;
    text-align: center;
    margin-top: 64px;

    div {
      color: #c4c4c4;
      background: #fff;

      border-radius: 6px;
      border: 2px solid #c3c3c3;
      padding: 24px 16px;
      width: 100%;

      display: flex;
      align-items: center;

      & + div {
        margin-top: 16px;
      }
    }

    input {
      flex: 1;
      font-size: 20px;
      color: #666;
      background: transparent;
      border: 0;

      &::placeholder {
        color: #c4c4c4;
      }
    }

    svg {
      margin-right: 16px;
    }

    button {
      height: 72px;
      width: 100%;
      padding: 0 16px;
      margin-top: 64px;
      background: #826ce1;
      border: 0;
      border-radius: 6px;
      color: #fff;
      font-size: 18px;
      font-weight: 500;
      transition: all 0.2s;

      &:hover {
        background: ${shade(0.2, '#826ce1')};
      }
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${loginBackgroundImg}) no-repeat center;
  background-size: contain;
`;
