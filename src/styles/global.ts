import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background:  ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-title']};
  }

  h1, h2, h3  {
    font-family: 'Baloo', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    background-color: ${(props) => props.theme['base-button']};
  }

`
