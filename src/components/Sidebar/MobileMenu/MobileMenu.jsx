import { Logo } from 'components/Header/Header.styled';
import {
  ContactListItem,
  ContactListLink,
  SocialsList,
  SocialsListItem,
  TikTok,
} from '../Sidebar.styled';
import {
  ContactListMobile,
  HeaderSvgMobile,
  MobileBox,
  NavListMobile,
  NavListMobileItem,
} from './MobileMenu.styled';
import instagram from 'images/sprite.svg';
import telegram from 'images/sprite.svg';
import linkedin from 'images/sprite.svg';
import close from 'images/sprite.svg';
import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

export const MobileMenu = ({ isOpen, toggleMenu, setIsOpen }) => {
  const location = useLocation();
  const { t } = useTranslation();

  if (isOpen) {
    document.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        setIsOpen(false);
      }
    });
    document.querySelector('body').style.overflow = 'hidden';
  } else {
    document.querySelector('body').style.overflow = 'visible';
  }

  return (
    <>
      <HeaderSvgMobile width="24" height="24" onClick={toggleMenu}>
        <use href={close + '#close'}></use>
      </HeaderSvgMobile>
      <Logo>Brand maze</Logo>

      {isOpen && (
        <MobileBox>
          <NavListMobile>
            <NavListMobileItem
              className={`link ${location.pathname === '/' ? 'active' : ''}`}
              to="/"
              aria-label="Home"
              onClick={toggleMenu}
            >
              {t('Home')}
            </NavListMobileItem>
            <NavListMobileItem
              className={`link ${
                location.pathname === '/about' ? 'active' : ''
              }`}
              to="/about"
              aria-label="About"
              onClick={toggleMenu}
            >
              {t('About')}
            </NavListMobileItem>
            <NavListMobileItem
              className={`link ${
                location.pathname === '/services' ? 'active' : ''
              }`}
              to="/services"
              aria-label="Services"
              onClick={toggleMenu}
            >
              {t('Services')}
            </NavListMobileItem>
            <NavListMobileItem
              className={`link ${
                location.pathname === '/projects' ? 'active' : ''
              }`}
              to="/projects"
              aria-label="Projects"
              onClick={toggleMenu}
            >
              {t('Projects')}
            </NavListMobileItem>
            <NavListMobileItem
              className={`link ${
                location.pathname === '/contact' ? 'active' : ''
              }`}
              to="/contact"
              aria-label="Contact"
              onClick={toggleMenu}
            >
              {t('Contact')}
            </NavListMobileItem>
          </NavListMobile>
          <ContactListMobile>
            <ul>
              <li>
                <ContactListLink href="tel:+38011111111">
                  +38011111111
                </ContactListLink>
              </li>

              <ContactListItem>
                <ContactListLink href="mailto:contact@brand-maze.com">
                  contact@brand-maze.com
                </ContactListLink>
              </ContactListItem>
            </ul>

            <SocialsList>
              <SocialsListItem>
                <a
                  href="https://instagram.com/brand.maze?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20">
                    <use href={instagram + '#instagram'}></use>
                  </svg>
                </a>
              </SocialsListItem>
              <SocialsListItem>
                <a
                  href="https://t.me/brandmaze"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="22" height="22">
                    <use href={telegram + '#telegram'}></use>
                  </svg>
                </a>
              </SocialsListItem>
              <SocialsListItem>
                <a
                  href="https://www.tiktok.com/@brand.maze?_t=8du33OG9NJN&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TikTok />
                </a>
              </SocialsListItem>
              <SocialsListItem>
                <a
                  href="https://www.linkedin.com/company/brand-maze/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20">
                    <use href={linkedin + '#linkedin'}></use>
                  </svg>
                </a>
              </SocialsListItem>
            </SocialsList>
          </ContactListMobile>
        </MobileBox>
      )}
    </>
  );
};
