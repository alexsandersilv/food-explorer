import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: filter 250ms linear;
    font-family: 'Poppins', sans-serif;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  button:hover {
    filter: brightness(0.8);
  }
`;