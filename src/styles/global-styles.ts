import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  html,
  body {
    height: 100%;
    width: 100%;
    background-color: #232732;

  }

  body {
    font-family: 'Montserrat', sans-serif;
    }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.5em;
    margin: 0;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
    /* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  width: 12px;
    background: #2f3543;
    border-left: 0 solid #fff;
    border-right: 0 solid #fff;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #45484f;
    width: 0;
    height: 25%;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #45484f;
}

`;
