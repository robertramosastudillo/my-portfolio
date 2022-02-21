import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #ffffff;
        font-family: 'Poppins',sans-serif;
        font-size: 1.6rem;
    }

    p {
        font-family: 'Poppins',sans-serif;
        font-size: 14px;
        font-weight:300;
        color:#6838F2;
        margin: 0;

        @media (min-width: 768px) {
            font-size: 16px;
        }
        
    }
`;

export default GlobalStyle;
