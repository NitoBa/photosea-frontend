import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    width:100vw;
    height:100vh;
  > aside{
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      height:100vh;
      width:100%;
      max-width:400px;
      padding:0 50px;
      background:var(--gradientColor);
      >header{
          
          display:flex;
          flex-direction:column;
          align-items:flex-start;

          >img{
            margin:50px 0;
          }

          >h1{
              font-weight:800;
              line-height:42px;
              font-size:40px;
              margin-bottom:50px;
          }
      }

      .location{
            margin-bottom:30px;
      }

      @media(max-width:1200px){
          height:80px;
          max-width:100vw;
          align-items:center;
          flex-direction:row;
          padding:0 30px;
          

          >header{
              
              align-items:center;
              flex-direction:row;
              margin:0;
              >h1{
                  margin-bottom:0;
                  font-size:18px;
                  line-height:22px;
                  margin-left:15px;
              }

              >span{
                  display:none;
              }

              >img{
                  margin:0;
                  width:25%;
              }
          }

          .location{
            margin:0;
            
          }

      }

      @media(max-width:500px){
            
          >header{
              >h1{
                  margin-bottom:0;
                  font-size:16px;
                  line-height:20px;
                  margin-left:15px;
              }

              >img{
                  width:25%;
              }
          }

          .location{
            margin:0;
            >h1{
                font-size:16px;
            }
          }

      }
  }


  .create-photographer{
      position:absolute;
      z-index:1000;
      bottom:2%;
      right:1%;
      display:flex;
      align-items:center;
      justify-content:center;
      height:64px;
      width:64px;
      background-color:var(--primaryColor);
      transition: .2s;
      border-radius:38%;
      padding:20px;
      cursor: pointer;

      &:hover{
          background-color:var(--primaryColorDark);
      }
  }

  @media(max-width:1200px){
            
    flex-direction:column;
  
    }
`;
