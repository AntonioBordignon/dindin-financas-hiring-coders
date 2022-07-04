import React from "react";
import Link from "../Link";
import Logo from "../../assets/images/dindin-logo-white.png";
import "./styles.css";

export default function Footer() {
    return(
        <footer>
            <div className="footer-content">
                <tr>
                    <td><img src={Logo} height="50em"  alt="Logo do dindin"/></td>
                    <td>
                        <h1>dindin</h1>
                        <p>educação financeira</p>
                    </td>
                </tr>
                <nav>
                    <Link texto="Cursos " redirect="cursos"/>
                    <Link texto="Blog " redirect="blog"/>
                    <Link texto="Contato " redirect="contato"/>
                </nav>
                <div className="footer-button">
                    <button className="Button"> quero ser prof </button>
                    <button className="Button"> aqui tem outro link </button> 
                </div>
            </div>
        </footer>
    )
}