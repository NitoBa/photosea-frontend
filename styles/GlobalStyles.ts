import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root{
  --primaryColor:#9D3BE1;
  --primaryColorLight:#BA73EB;
  --primaryColorDark: #6A2799;
  --whatsappColor:#25D366;
  --whatsappColorDark:#075E54;
  --bodyColor:#ebf2f5;
  --gradientColor:linear-gradient(329.54deg, #D22FAF 0%, #9D3BE1 100%);

/* 
  @font-face {
    font-family: 'Poppins';
    font-style:normal;
    font-weight:300;
    font-display:swap;
    src: url('/fonts/Poppins-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-style:normal;
    font-weight:400;
    font-display:swap;
    src: url('/fonts/Poppins-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Poppins';
    font-style:normal;
    font-weight:500;
    font-display:swap;
    src: url('/fonts/Poppins-Medium.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Poppins';
    font-style:normal;
    font-weight:600;
    font-display:swap;
    src: url('/fonts/Poppins-SemiBold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Poppins';
    font-style:normal;
    font-weight:800;
    font-display:swap;
    src: url('/fonts/Poppins-Bold.ttf') format('truetype');
  } */
 
}


*, html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body{
  color: #fff;
  background-color:var(--bodyColor);
  overflow-x:hidden;
}

input, body, button{
  font: 600 18px Nunito, sans-serif;
}

button {
    cursor: pointer;
    border: none;
    outline:none;
    
}

a {
  color: inherit;
  text-decoration: none;
}
`