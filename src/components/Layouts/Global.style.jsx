import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
--primary-color: #609966;
--secondary-color: #9DC08B;
--dark-color: #40513B;
--white-color: #EDF1D6;

font-family: 'Poppins', sans-serif;
background-color:var(--white-color);
}

* {
box-sizing: border-box;
padding: 0;
margin: 0;
}
`;
