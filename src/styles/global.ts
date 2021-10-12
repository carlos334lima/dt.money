import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --background: #F0F2F5;
    --white: #FFFFFF;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --green: #33CC95;
    --red: #E62E4D;
    --title: #363F5F;
    --text: #969CB3;
  }

  html {
      @media (max-width: 1080px) {
          font-size: 93.75%;
      }

      @media (max-width: 720px) {
          font-size: 87.5%;
      }
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body: {
      background: var(--background);
      -webkit-font-smoothing: antialiased;
  }
`;
