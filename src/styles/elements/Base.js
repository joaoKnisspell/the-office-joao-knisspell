import { createGlobalStyle } from 'styled-components';

const Base = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Lexend', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #F5F4F0;
        max-width: 100vw;
        overflow-x: hidden;
    }

    .App{
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        /* @media screen and (min-width:1024px){
            margin:0 10%;
        }
        @media screen and (min-width:1400px){
            margin:0 5%;
        } */
    }

`

export default Base