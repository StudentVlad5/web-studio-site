import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled.button`
  display: block;
  width: 156px;
  height: 40px;
  margin: 0 auto;

  color: ${props => props.theme.white};
  text-align: center;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  background: ${props => props.theme.black};
  /* box-shadow: 2px -1px 10px -2px ${props => props.theme.blackOpacity}; */
  border-radius: 3px;
  border: none;

  cursor: pointer;
  transition: all 150ms linear;

  &:hover,
  &:focus {
    background: ${props => props.theme.accentBlue};
    box-shadow: 1px -1px 10px -2px ${props => props.theme.blackOpacity} inset;
  }

  @media screen and (min-width: 768px) {
    width: 160px;
    height: 45px;
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    width: 200px;
    height: 55px;
    font-size: 20px;
  }
`;

export const ButtonLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 156px;
  height: 40px;
  margin: 0 auto;

  color: ${props => props.theme.white};
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  background: ${props => props.theme.black};
  /* box-shadow: 2px -1px 10px -2px ${props => props.theme.blackOpacity}; */
  border-radius: 3px;
  border: none;
  text-decoration: none;

  cursor: pointer;
  transition: all 150ms linear;

  &:hover,
  &:focus {
    background: ${props => props.theme.accentBlue};
    box-shadow: 1px -1px 10px -2px ${props => props.theme.blackOpacity} inset;
  }

  @media screen and (min-width: 768px) {
    width: 160px;
    height: 45px;
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    width: 200px;
    height: 55px;
    font-size: 20px;
  }
`;
