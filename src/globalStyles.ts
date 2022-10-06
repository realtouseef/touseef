import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Cabinet Grotesk Medium';
    src: url(/fonts/CabinetGrotesk-Medium.otf);
}
@font-face {
    font-family: 'Cabinet Grotesk Bold';
    src: url(/fonts/CabinetGrotesk-Bold.otf);
}
@font-face {
    font-family: 'Cabinet Grotesk ExtraBold';
    src: url(/fonts/CabinetGrotesk-Extrabold.otf);
}
@font-face {
    font-family: 'Satoshi Regular';
    src: url(/fonts/Satoshi-Regular.otf);
}
@font-face {
    font-family: 'Satoshi Bold';
    src: url(/fonts/Satoshi-Bold.otf);
}


:root {
    --primary-color: #ffffe3;
    --primary-bg-clr: #10100e;
    --body-font: "Satoshi Regular"
    --heading-font: "Cabinet Grotesk Extrabold"
}


  body {
    margin: 0;
    padding: 0;
    background: var(--primary-bg-clr);
    color: var(--primary-color);
    font-family: var(--primary-font);
    overflow: hidden;
}

a { 
    text-decoration: none;
    color: var(--primary-color)
}

h1, h2, h3, h4 {
    font-family: var(--heading-font);
}

p {
    font-family: var(--body-font);
}
`;

export default GlobalStyle;
