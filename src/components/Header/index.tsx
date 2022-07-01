import React from "react";
import Link from "../Link";
import Logo from "../../assets/images/dindin-logo-white.png";
import "./styles.css";

function Header(){
    return (
        <header>
            <tr>
                <td><img src={Logo} height="50em"  alt="Logo do dindin"/></td>
                <td><h1>dindin</h1></td>
            </tr>
            <nav>
                <Link texto="Cursos " redirect="cursos"/>
                <Link texto="Blog " redirect="blog"/>
                <Link texto="Contato " redirect="contato"/>
            </nav>
        </header>
    );
};


export default Header;