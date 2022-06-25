import Link from "../Link"

import "./styles.css";

function Header(){
    return (
        <header>
            <p>Din Din</p>
            <nav>
                <Link texto="Cursos" redirect="cursos"/>
                <Link texto="Blog" redirect="blog"/>
                <Link texto="Contato" redirect="contato"/>
            </nav>
        </header>
    );
};

export default Header;