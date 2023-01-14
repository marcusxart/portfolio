import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,*::after,*::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.family.saira};
}

html{
    font-size: 62.5%;
}

body{
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.color};
    overflow-x:hidden ;
    
}

.text-gradient{
    background: ${({ theme }) => theme.primary};
    background: linear-gradient(to right, ${({ theme }) =>
      theme.primary} 40%, ${({ theme }) => theme.textGradient} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

`;

export default GlobalStyle;
