import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        //primary's colors:
        --white: #ECF7FE;
        --green: #31C95E;
        --black: #000714;
        --red: #ED0010;
        --blue: #2E589B;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        vertical-align: baseline;
        color: var(--white);
        font-family: 'Germania One', cursive,'Balthazar', sans-serif;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    ol, ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
        border: none;
    }

    button, input{
        outline: none;
    }

    body {
        background-color: var(--black);
    }

    /* para estilizar a scrollbar */
    ::-webkit-scrollbar{
        width: 8px;
        transition: 500ms;
    }
    ::-webkit-scrollbar:hover{
        width: 10px;
    }
    ::-webkit-scrollbar-track{
        background: var(--gray);
        box-shadow: inset 0 0 2px grey;
    }
    ::-webkit-scrollbar-thumb{
        background: var(--light-purple);
        border-radius: 24px;
        transition: 350ms;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: var(--purple);
    }
`;