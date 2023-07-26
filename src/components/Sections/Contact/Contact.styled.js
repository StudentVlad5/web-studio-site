import styled, { keyframes } from 'styled-components';
import { Button } from 'components/baseStyles/Button.styled';

const fadeInLeftAnimation = keyframes`
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeInRightAnimation = keyframes`
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeInBottomAnimation = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ContactForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  margin-top: 25px;
  padding: 0 30px;

  font-family: 'Inter', sans-serif;
  font-style: normal;

  overflow: hidden;

  @media screen and (min-width: 768px) {
    margin-top: 65px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 30px;
  }
`;

const LabelOfItem = styled.label`
  position: relative;
  width: calc(50% - 30px);
  margin-bottom: 30px;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${props => props.theme.form};
  cursor: pointer;

  &:nth-child(1) {
    animation: ${fadeInLeftAnimation} 0.5s ease-in both;
  }

  &:nth-child(5) {
    animation: ${fadeInLeftAnimation} 0.5s ease-in both;
  }

  &:nth-child(2) {
    animation: ${fadeInRightAnimation} 0.5s ease-in both;
  }

  &:nth-child(6) {
    animation: ${fadeInRightAnimation} 0.5s ease-in both;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const InputOfItem = styled.input`
  width: 100%;
  height: 40px;
  min-width: 250px;
  padding-top: 14px;

  border: none;
  outline: none;
  border-bottom: 1px solid ${props => props.theme.form};
  color: ${props => props.theme.black};
  background-color: transparent;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  &:hover,
  &:focus,
  &:active {
    outline: 0;
    border-bottom: 1px solid ${props => props.theme.black};
  }

  &::placeholder {
    opacity: 0;
    transition: opacity 150ms linear;
  }

  &:hover::placeholder,
  &:focus::placeholder {
    opacity: 1;
  }

  &:hover ~ span,
  &:focus ~ span,
  &:not(:placeholder-shown) ~ span {
    color: ${props => props.theme.form};
    transform: translateY(0);
  }
`;

const NameOfItem = styled.span`
  position: absolute;
  top: 0px;
  left: 2px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: ${props => props.theme.form};

  transform: translateY(20px);
  transition: transform 150ms linear;
`;

const TextareaOfItem = styled.textarea`
  width: 100%;
  height: 40px;
  padding-top: 20px;
  animation: ${fadeInBottomAnimation} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1);

  color: ${props => props.theme.form};
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid ${props => props.theme.form};
  cursor: pointer;

  transition: border-color 150ms linear;

  &:hover,
  &:focus,
  &:active {
    outline: 0;
    border: none;
    border-bottom: 1px solid ${props => props.theme.black};
  }

  &::placeholder {
    opacity: 0;
    transition: opacity 150ms linear;
  }

  &:hover::placeholder,
  &:focus::placeholder {
    opacity: 1;
  }

  &:hover ~ span,
  &:focus ~ span,
  &:not(:placeholder-shown) ~ span {
    color: ${props => props.theme.form};
    transform: translateY(0);
  }
`;

const ContainerForInputForFile = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
`;

const InputForFile = styled.input`
  width: 200px;
  height: 50px;
  margin: 0 auto;
  display: block;

  text-align: center;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  color: ${props => props.theme.white};
  background: ${props => props.theme.black};

  border-radius: 3px;

  @media screen and (max-width: 768px) {
    width: 100px;
    font-size: 10px;
  }

  & ~ label {
    margin: 0;
  }
`;
const LabelForInputForFile = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 156px;
  height: 40px;
  margin: 0 auto;
  animation: ${fadeInLeftAnimation} 0.5s ease-in both;

  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${props => props.theme.white};

  background: ${props => props.theme.black};
  border-radius: 3px;

  transition: all 150ms linear;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 100px;
    font-size: 10px;
  }
`;

const TextForInputForFile = styled.p`
  animation: ${fadeInBottomAnimation} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1);
`;

const ButtonSend = styled(Button)`
  margin: 20px 0 0 auto;
  animation: ${fadeInBottomAnimation} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1);
`;

const ThanksBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const ThanksContent = styled.div`
  background-color: ${props => props.theme.white};
  padding: 20px;
  text-align: center;
  border-radius: 20px;
  & > * {
    color: ${props => props.theme.black};
  }
`;

export {
  ContactForm,
  InputWrapper,
  LabelOfItem,
  InputOfItem,
  NameOfItem,
  TextareaOfItem,
  InputForFile,
  ButtonSend,
  ContainerForInputForFile,
  LabelForInputForFile,
  TextForInputForFile,
  ThanksBox,
  ThanksContent,
};
