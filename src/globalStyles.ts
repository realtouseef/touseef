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


:root {
    --primary-color: #ffffe3;
    --primary-bg-clr: #10100e;
    --primary-font: "Clash Display Regular"
}


  body {
    margin: 0;
    padding: 0;
    background: var(--primary-bg-clr);
    color: var(--primary-color);
    font-family: var(--primary-font);
    overflow: hidden;
}
`;

export default GlobalStyle;
