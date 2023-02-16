import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
/* font-family: 'Fraunces', serif;
font-family: 'Montserrat', sans-serif;
font-family: 'Roboto', sans-serif;
font-family: 'Rubik', sans-serif; */

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
    font-family: 'Rubki', sans-serif;
}

body{
    font-size: 1.8rem;
    background-color: #333;
    color: #fff;
}

`;
