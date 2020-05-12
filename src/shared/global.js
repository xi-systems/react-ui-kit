import { createGlobalStyle, css } from "styled-components";

export const bodyStyles = css`
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }
`;
