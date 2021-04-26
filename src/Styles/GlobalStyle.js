import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
  
	html, body {
    font-family: 'Noto Sans KR', sans-serif !important;
    
    input {
      border: none;
      outline: none;
    }

    button {
      outline: none;
    }
  }
  
`;

export default GlobalStyle;
