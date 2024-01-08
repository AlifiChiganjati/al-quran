import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
font-family: 'Poppins', sans-serif;
--primary-color: #609966;
--secondary-color: #9DC08B;
--dark-color: #40513B;
--white-color: #EDF1D6;

background-color:var(--secondary-color);
}

*{
box-sizing: border-box;
padding: 0;
margin: 0;
}
`;
