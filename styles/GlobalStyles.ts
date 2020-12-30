import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`



:root{
  --primaryColor:#C95CEE;
  --primaryColorLight:#E6BBF4;
  --primaryColorDark: #7E1AA0;
  --whatsappColor:#25D366;
  --whatsappColorDark:#075E54;
  --bodyColor:#FCF7F7;
  --gradientColor:rgb(236, 215, 243, 0.8);


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
  }
 
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