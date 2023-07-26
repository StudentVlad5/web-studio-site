import { styled } from 'styled-components';

export const Footer = styled.footer`
  margin-bottom: 35px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (min-width: 1280px) {
    margin-left: 270px;
  }
`;

export const ProductionText = styled.p`
  text-align: center;
  color: ${props => props.theme.blackOpacity};
  font-size: 7px;
  font-weight: 600;
  line-height: 1.36;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 11px;
  }
`;
