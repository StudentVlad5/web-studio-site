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

const BtnChangeTheme = styled.button`
  color: ${props => props.theme.black};
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  & svg {
    fill: currentColor;
  }
`;

const SwitcherWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeInTopAnimation} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  position: fixed;
  top: 20px;
  right: 55px;
  height: auto;

  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    right: 55px;
  }

  @media screen and (min-width: 1280px) {
    top: 30px;
    right: 55px;
  }
`;

export { BtnChangeTheme, SwitcherWrapper };
