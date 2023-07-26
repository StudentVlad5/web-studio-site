import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { GlobalStyle } from 'components/baseStyles/GlobalStyle';
import { ThemeStatus } from 'components/ThemeStatus/ThemeProvider';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="brand-maze">
      <I18nextProvider i18n={i18n}>
        <ThemeStatus>
          <GlobalStyle />
          <App />
        </ThemeStatus>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
