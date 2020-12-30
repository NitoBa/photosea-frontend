import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`



:root{
  --primaryColor:#9D3BE1;
  --primaryColorLight:#BA73EB;
  --primaryColorDark: #6A2799;
  --whatsappColor:#25D366;
  --whatsappColorDark:#075E54;
  --bodyColor:#CEDEE5;
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
  font-family: Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  /* font-family: 'Poppins', sans-serif; */

}

body{
  overflow-x:hidden;
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