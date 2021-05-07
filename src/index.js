import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Routes from './Routes';
import GlobalStyle from './Styles/GlobalStyle';
import Theme from './Styles/Theme';

ReactDOM.render(
  <>
    <ThemeProvider theme={Theme}>
      <Routes />
    </ThemeProvider>
    <GlobalStyle />
  </>,
  document.getElementById('root')
);
