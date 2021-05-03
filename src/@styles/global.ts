import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }


  body{
    background: #fff !important;
    color:#666;
    /* -webkit-font-smoothing: antialiased; */
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }

  body, input, button{
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }



  button{
    cursor: pointer;
  }

`;
