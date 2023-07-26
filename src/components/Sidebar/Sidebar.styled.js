import { FaTiktok } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

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

export const SidebarContainer = styled.aside`
  @media screen and (min-width: 1280px) {
    padding-top: 10px;
    padding-left: 20px;
  }
`;

export const SidebarBox = styled.div`
  display: none;

  @media screen and (min-width: 1280px) {
    display: block;
    width: 320px;
  }
`;

export const NavList = styled.nav`
  display: none;

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;

    position: fixed;
    margin-top: 100px;
    margin-left: 20px;
  }
`;

export const NavListLink = styled(NavLink)`
  position: relative;
  display: inline-block;
  color: ${props => props.theme.black};
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  text-transform: uppercase;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    &:not(:first-child) {
      margin-top: 10px;
    }
  }

  @media screen and (min-width: 400px) and (max-width: 1279.9px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 25px;

    &:nth-child(1) {
      animation: ${fadeInLeftAnimation} 0.5s ease-in both;
    }

    &:nth-child(2) {
      animation: ${fadeInLeftAnimation} 0.6s ease-in both;
    }

    &:nth-child(3) {
      animation: ${fadeInLeftAnimation} 0.7s ease-in both;
    }

    &:nth-child(4) {
      animation: ${fadeInLeftAnimation} 0.8s ease-in both;
    }

    &:nth-child(5) {
      animation: ${fadeInLeftAnimation} 0.9s ease-in both;
    }
  }

  &:not(:first-child) {
    margin-top: 20px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 240px;
    height: 1px;
    background-color: ${props => props.theme.black};
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
    transform-origin: left center;
  }

  &:hover::after,
  &:focus::after,
  &.active::after {
    transform: scaleX(1);
  }
`;

export const ContactList = styled.ul`
  display: none;
  animation: ${fadeInBottomAnimation} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  @media screen and (min-width: 1280px) {
    display: block;
    position: fixed;
    bottom: 30px;

    padding: 0;
    list-style: none;
  }
`;

export const ContactListItem = styled.li`
  color: ${props => props.theme.black};
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 300;
  display: inline-block;
  position: relative;
  padding-bottom: 15px;
  margin-bottom: 20px;
  margin-top: 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 240px;
    height: 1px;
    background-color: ${props => props.theme.black};
  }
`;

export const ContactListLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.black};
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 300;

  @media screen and (min-width: 1280px) {
    font-size: 14px;
  }

  &:nth-child(1){
    margin-bottom: 5px;
  }

  &:hover,
  &:focus {
    background: linear-gradient(
      to left,
      rgba(65, 45, 183, 1),
      rgba(219, 47, 47, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
`;

export const ContactListItemPhone = styled.li`
  display: flex;
  flex-direction: column;
`;

export const SocialsList = styled.ul`
  display: flex;
  align-items: center;
`;

export const SocialsListItem = styled.li`
  cursor: pointer;
  padding: 2px;
  /* color: ${props => props.theme.black}; */

  &:not(:last-child) {
    margin-right: 20px;
  }
  & > *:hover,
  & > *:focus {
    fill: ${props => props.theme.accentRed};
  }

  & > * {
    /* fill: currentColor; */
    fill: ${props => props.theme.black};
  }
`;

export const TikTok = styled(FaTiktok)`
  fill: ${props => props.theme.black};
  &:hover,
  &:focus {
    fill: ${props => props.theme.accentRed};
  }
`;
