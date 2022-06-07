import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --clr-primary-1: #271444;
    --clr-primary-2: #391F67;
    --clr-secondary: #23FF66;
    --clr-tertiary: #EEEEEE;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Audiowide', cursive;
    background-color: var(--clr-primary-1);
    color: var(--clr-tertiary);
    line-height: 1.5;
  }

  button{
    border:none;
    background: transparent;
    font:inherit;
  }
`;

export default GlobalStyle;
