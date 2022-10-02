import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Clash Display Regular';
    src: url(/fonts/ClashDisplay-Regular.otf);
}
@font-face {
    font-family: 'Clash Display Semibold';
    src: url(/fonts/ClashDisplay-Semibold.otf);
}
@font-face {
    font-family: 'Clash Display Bold';
    src: url(/fonts/ClashDisplay-bold.otf);
}


  body {
    margin: 0;
    padding: 0;
    background: #000;
    color: #fff;
    font-family: 'Clash Display Regular';
  }
`;

export default GlobalStyle;
