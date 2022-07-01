import React from "react";
import Header from "../../components/Header";
import Box from "../../components/Box"
import Footer from "../../components/Footer"

import Banner from "../../assets/images/ilustra-banner.png";
import BannerTwo from "../../assets/images/image-2.png";
import BannerThree from "../../assets/images/image-3.png";
import BannerFour from "../../assets/images/image-4.png";
import UserOne from "../../assets/images/user-1.png";
import UserTwo from "../../assets/images/user-2.png";
import UserThree from "../../assets/images/user-3.png";
import UserFour from "../../assets/images/user-4.png";

import "../../styles/global.css";
import "./styles.css";

export default function Home() {
  const sendEmail = () => { "send Email"
    alert("Email enviado com sucesso!")
  };
    
  return (
    <div className="App">
      <Header />
      <main>
        <Box background= "claro">
          <div className="main-content">
            <div>
              <h1 className="line-one-title"> Educação Financeira é tudo de bom</h1>
              <p className="line-one-subtitle">Vem comigo que te mostro por onde começar</p>
              <button className="button" onClick={sendEmail}> quero saber mais </button>
            </div>
            <div className="main-banner">
              <img src={Banner} alt="banner"/>         
            </div>
          </div>
        </Box> 

        <Box background= "escuro">
          <div>
            <img src={BannerTwo} alt="banner"/> 
            <h1 className='line-two-title'>Investimento para iniciantes</h1>
            <p className='line-one-subtitle'>Duis aute irure dolor in reprehenderit in voluptate velit es se cillum dolore eu fugiat nulla pariatur.</p>
            <button className="button-two" onClick={sendEmail}> começar agora </button>

            <img src={BannerThree} alt="banner"/>
            <h1 className='line-two-title'>Poupando e Rendendo</h1>
            <p className='line-one-subtitle'>Duis aute irure dolor in reprehenderit in voluptate velit es se cillum dolore eu fugiat nulla pariatur.</p>
            <button className="button-two" onClick={sendEmail}> começar agora </button>
          
            <img src={BannerFour} alt="banner"/>
            <h1 className='line-two-title'>Independência Financeira</h1>
            <p className='line-one-subtitle'>Duis aute irure dolor in reprehenderit in voluptate velit es se cillum dolore eu fugiat nulla pariatur.</p>
            <button className="button-two" onClick={sendEmail}> começar agora </button>          
          </div>
        </Box>

        <Box background= "claro">
          <div>
              <h1> O QUE FALAM SOBRE NÓS</h1>
              <img src={UserOne} alt="User"/>
              <p>”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.”</p>
              <p>Wally, 25</p>
              <img src={UserTwo} alt="User"/>
              <p >”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.”</p>
              <p>Whoopi Goldberg, 37</p>
              <img src={UserThree} alt="User"/>
              <p >”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.”</p>
              <p>Jaden Smith, 23</p>
              <img src={UserFour} alt="User"/>
              <p >”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.”</p>
              <p>Janes Joplin, 29</p>
          </div>
        </Box>

        <Box background= "escuro">
        <div>
          <img src={BannerTwo} alt="banner"/> 
          <h1>MAIS CONTEÚDO PARA VOCÊ</h1>
          <h2>Itaque earum rerum </h2>
          <p>hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
          <img src={BannerThree} alt="banner"/>
          <h2>Itaque earum rerum </h2>
          <p>hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
          <img src={BannerFour} alt="banner"/>
          <h2>Itaque earum rerum </h2>
          <p>hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        </div>
        </Box>      
      </main>
      <Footer/>
    </div>
  );
}

