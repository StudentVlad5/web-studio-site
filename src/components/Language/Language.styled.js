import styled, { keyframes } from 'styled-components';

const fadeInTopAnimation = keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const SelectContainerLanguage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeInTopAnimation} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  position: fixed;
  top: 20px;
  right: 90px;
  z-index: 15;
  height: auto;

  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: 1280px) {
    top: 27px;
    right: 100px;
  }
`;

export const SelectLanguage = styled.select`
  width: auto;
  height: auto;
  border-radius: 5px;
  color: ${props => props.theme.black};
  border-color: transparent;
  background: ${props => props.theme.white};
  padding: 3px;
  cursor: pointer;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.01em;
  text-decoration: none;
  transition: all 0.25s ease-in;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }

  &:focus,
  &:hover,
  &:focus-visible {
    transform: scale(1.1);
  }
`;
