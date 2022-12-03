import { createGlobalStyle } from "styled-components";


export const GlobalStyles=createGlobalStyle`

    *,
    *::after,
    *::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }


    body {
        font-family: 'Kanit', sans-serif;
        height: 100vh;
        transition: all 0.25s linear;
    }
`