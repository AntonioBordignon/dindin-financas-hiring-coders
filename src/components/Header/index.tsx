import React from 'react';
import Link from "../Link";
import Logo from "../../assets/images/dindin-logo-white.png";
import "./styles.css";

function Header(){
    return (
        <header>
            <img src={Logo} alt="Logo do dindin" />
            <nav>
                <Link texto="Cursos " redirect="cursos"/>
                <Link texto="Blog " redirect="blog"/>
                <Link texto="Contato " redirect="contato"/>
            </nav>
        </header>
    );
};


export default Header;