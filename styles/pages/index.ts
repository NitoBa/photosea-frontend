import styled from 'styled-components';

export const Container = styled.div`
  background: var(--gradientColor);
  height:100%;
  width:100vw;

  #content-header{
      display:flex;
      align-items:center;
      justify-content:space-between;
      width:100%;
      margin-left: auto;
      margin-right:auto;
      max-width:1300px;
      padding-top:50px;
      padding-right:30px;
      padding-left:30px;

      .location{
          display:flex;
          flex-direction:column;
          text-align:right;

          >strong{
              font-size:24px;
              font-weight:800;
          }
          >span{
              font-weight:400;
          }
      }


    

    @media(max-width:1300px){
          #logo{
              width:240px;
          }
    }


    @media(max-width:1200px){
       
    }

    @media(max-width:400px){
        #logo{
              width:150px;
          }

        .location{
            >strong{
              font-size:18px;
              font-weight:800;
          }
          >span{
              font-weight:400;
          }
        }
    }

  }

  .content-wrapper{
      display:flex;
      width:100%;
      justify-content:space-between;
      align-items:center;
      width:100%;
      max-width:1300px;
      margin-left: auto;
      margin-right:auto;
      margin-top:80px;
      padding-right:30px;
      padding-left:30px;
      >h1{
          line-height:1;
          font-weight:900;
          font-size:70px;
      }
      >img{
          height:500px;
          transform:translateX(-120px);
      }
      

    @media(max-width:1200px){
       flex-direction:column;
       >img{
        transform:translateX(0px);
       }
    }

    @media(max-width:550px){
        >h1{
        font-size:45px;
        }

        >img{
            height:320px;
        }
    }

    @media(max-width:400px){
        >h1{
        font-size:35px;
        }

        >img{
           height:280px;
        }
    }
  }

  >footer{
      display:flex;
      justify-content:space-between;
      align-items:center;
      width:100%;
      max-width:1300px;
      margin-top:80px;
      margin-left: auto;
      margin-right:auto;
      padding-right:30px;
      padding-left:30px;

      >span{

      }

      .enter-app{
          height:80px;
          width:80px;
          background-color:white;
          color:var(--primaryColor);
          transition:.2s;
          border-radius:38%;
          padding:22px;
          margin-bottom:20px;
          cursor: pointer;

          &:hover{
              color:white;
              background-color:var(--primaryColor);
          }
      }

  }


  @media(max-height:1200px){
      height:100vh;
    }

    @media(max-width:1200px){
      height:100%;
    }

    @media(max-width:400px){
      height:100vh;
    }
 
`;
