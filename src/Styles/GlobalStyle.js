import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');

	* {
    box-sizing: border-box;
    
    input {
      border: none;
      outline: none;
    }

    button {
      outline: none;
    }
  }

  #root {
    font-family: -apple-system, Helvetica, Arial, 'Nanum Gothic', sans-serif;
  }
  
`;

export default GlobalStyle;
