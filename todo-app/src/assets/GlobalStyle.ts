import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  * {
    box-sizing: border-box;
  }
 
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  ol, ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;

    &:link,
    &:visited {
      color: inherit;
    }
  }

  button {
    cursor: pointer;
  }
`;
