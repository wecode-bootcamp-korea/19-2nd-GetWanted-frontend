import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Routes from './Routes';
import GlobalStyle from './Styles/GlobalStyle';
import theme from './Styles/theme';

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
    <GlobalStyle />
  </>,
  document.getElementById('root')
);
