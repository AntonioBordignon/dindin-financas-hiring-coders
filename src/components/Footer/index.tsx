import React from "react";
import Link from "../Link";
import Logo from "../../assets/images/dindin-logo-white.png";
import "./styles.css";

export default function Footer() {
    return(
        <footer>
            <tr>
                <td><img src={Logo} height="50em"  alt="Logo do dindin"/></td>
                <td><h1>dindin</h1></td>
                <td><p>educação financeira</p></td>
            </tr>
            <nav>
                <Link texto="Cursos " redirect="cursos"/>
                <Link texto="Blog " redirect="blog"/>
                <Link texto="Contato " redirect="contato"/>
            </nav>
                <button> quero ser prof </button>
                <button> aqui tem outro link </button>

        </footer>
    )
}