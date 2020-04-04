import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
       margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat Alternates', sans-serif;
        background: #FFFFFF;
        -webkit-font-smoothing: antialiased;

        display: flex;
        justify-content: center;
    }

    input, button, textarea {
        font-family: 'Montserrat Alternates', sans-serif;
    }

    button {
        cursor: pointer;
    }

    form input {
        width: 100%;
        border: none;
        border-bottom: 1px solid #138A72;
        margin: 0 0 35px 0;
        font-size: 20px;
    }
`;

export default GlobalStyle;