import React from 'react';
import Header from "../../components/Header";
import Box from "../../components/Box"
import Banner from "../../assets/images/ilustra-banner.png";
import "../../styles/global.css";
import "./styles.css";

export default function Home() {
  const sendEmail = () => { 'send Email'
    alert("Email enviado com sucesso!")
  };
    
  return (
    <div className="App">
      <Header />
      <main>
        <Box background= "claro">
          <div className="main-content">
            <div>
              <h1 className='line-one-title'> Educação Financeira é tudo de bom</h1>
              <p className='line-one-subtitle'>Vem comigo que te mostro por onde começar</p>
              <button className="button" onClick={sendEmail}> quero saber mais </button>
            </div>
            <div>
              <img src={Banner} alt="banner"/>         
            </div>
          </div>
        </Box>    
        <Box background= "escuro"><h1> teste </h1></Box>
      </main>
    </div>
  );
}

