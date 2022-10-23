

const Footer = () => {
  return (
    <footer>


      <style jsx>{`

            footer{
              width:100%;
              max-width:100%;
              height:fit-content;
              display:flex;
              overflow:none;
              margin-top:5rem;
            }
            .footer-left{
              width:20%;
              max-width:20%;
              background-color:#f8fafc;
              display:flex;
              flex-direction:column;
              padding:0 1rem;
            }
            .footer-left>*{
              margin:1rem;
            }
            .socials>*{
              margin-right:0.6rem;
            }
            .payments>*{
              margin-right:0.6rem;

            }

            .footer-right{
              display:flex;
              padding:2rem auto;
              align-items:center;
              justify-content:center;
              background-color:#e2e8f0;
              width:80%;
              max-width:80%;
            }
            .footer-right ul{
              margin:3rem;
            }
            .footer-right ul li{
              margin:1rem;
            }
            .footer-right ul li:hover{
              text-decoration:underline;
              cursor:pointer;
            }
            .footer-right .header{
              font-weight:900;
              font-size:1.1rem;
            }
            
            @media screen and (max-width:900px){
              .footer-left{
                width:30%;
                max-width:30%;
                justify-content:center;
              }
              .footer-right{
              width:100%;
              max-width:100%;
            }

            .footer-right ul{
              margin:0;
            }
            .footer-right ul li{
              margin:1rem;
            }


            }

            @media screen and (max-width:500px){
              footer{
                flex-direction:column;
                margin-top:2rem;
              border-top: 1px solid #eaeaea;

              }
              .footer-left{
                width:100%;
                max-width:100%;
                display:flex;
                justify-content:center;
              }
              .footer-right{
              padding:2rem auto;
              align-items:start;
              justify-content:start;
              flex-wrap:wrap;
              width:100%;
              max-width:100%;
              padding-bottom:10rem;
            }

            .footer-right ul{
              margin:0;
            }
            .footer-right ul li{
              margin:1rem;
            }


            }

            @media screen and (max-width:376px){

              .footer-right{
              padding-bottom:12rem;
            }

            }


            


            `}

      </style>
    </footer>
  )
}

export default Footer
