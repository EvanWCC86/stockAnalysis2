import { createGlobalStyle,keyframes } from 'styled-components'

const GlobalStyle = createGlobalStyle `
    :root{
        --background-color:#F4F5F7;
        --shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        --background-color1:gray;
        --background-color2:rgb(14, 16, 34);
        --background-color3:rgb(25, 31, 47);
        --border:.1rem solid $green;
        --box-shadow:0 .5rem 1rem rgba(0,0,0,.1);
        --dark-shadow:0 0 0 100vw rgba(0,0,0,.5);
        --button-color:#085AB2;
    }

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Poppins', sans-serif;;
        background:var(--background-color2);
        color:gray;
        transition: all 0.25s linear;
    }
    input{
      background-color: var(--background-color3);
    }
    select{
      background-color: var(--background-color3);
      color:white;
    }

    a{
      text-decoration: none;
    }
   
`


export default GlobalStyle

// general styles

export const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

export const fadeOut = keyframes `
    0%{
    transform: scale(.5);
    opacity: 0;
  }
`
export const fadeLeft = keyframes `
    0%{
    transform: translateX(-5rem);
    opacity: 0;
  }
  `