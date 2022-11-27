import { useGlobalContext } from './Context';
import { AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";


const MainTexts = () => {

    const { user, error, isLoading } = useGlobalContext();

    return (

        <div>
            <div className='content'>
                <h3>
                    Yapay zeka destekli robotumuz sayesinde mermer
                    fotoğrafını otomatik analiz ediyoruz...
                </h3>

                <h4>
                    Tek yapman gereken sisteme giriş yapıp mermer fotoğrafını <strong> .png .jpg ya da .jpeg </strong> formatında yüklemek!
                </h4>

                <div className='main-btn'>
                    {user ? <a href="/api/auth/logout"><FiLogOut />Çıkış Yap</a> : <a href="/api/auth/login"><AiOutlineUser />Giriş Yap</a>}
                </div>

            </div>




            <style jsx> {`
                .content{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    flex-direction:column;
                    text-align:center;
                    width:70%;
                    margin:auto;
                }
                .content h3{
                    font-size:2.5rem;
                    margin-top:20px;
                }
                .content h4{
                    font-size:1.2rem;
                    margin-top:20px;
                }
                .main-btn{
                    font-size:1.5rem;
                    margin-top:20px;
                    border:solid 1px black;
                    padding:0.7rem;                    
                }
                .main-btn a{
                    color:black;
                    font-weight:600;
                }
            `}</style>
        </div>
    )
}

export default MainTexts
