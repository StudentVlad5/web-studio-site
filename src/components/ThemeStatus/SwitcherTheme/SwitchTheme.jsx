import React from 'react';
import { MdOutlineWbSunny } from 'react-icons/md';
import { FaRegMoon } from 'react-icons/fa';
import { BtnChangeTheme, SwitcherWrapper } from './SwitchTheme.styled';
import { ThemeContext } from 'components/ThemeStatus/ThemeProvider';

export const SwitchTheme = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, setMode }) => (
        <SwitcherWrapper>
          <BtnChangeTheme
            onClick={e =>
              theme === 'light' ? setMode('dark') : setMode('light')
            }
          >
            {theme === 'light' ? (
              <MdOutlineWbSunny size={25} alt="light theme" />
            ) : (
              <FaRegMoon size={20} alt="dark theme" />
            )}
          </BtnChangeTheme>
        </SwitcherWrapper>
      )}
    </ThemeContext.Consumer>
  );
};
