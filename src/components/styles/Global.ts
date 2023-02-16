import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

:root{
    --very-dark-gray-color: hsl(0, 0%, 17%);
    --dark-gray: hsl(0, 0%, 59%);
}


html{
    font-size: 62.5%;
    font-family: sans-serif;
}

body{
    background-color: #333;
    color: #fff;
}

`;
