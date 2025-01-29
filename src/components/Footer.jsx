import { Link } from "react-router-dom";
import './Footer.css';


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">
                    Este sitio web es un proyecto de práctica y no ofrece cursos reales.  
                    Todos los contenidos son ficticios y tienen fines educativos.
                </p>
                <p className="footer-copyright">
                    &copy; {new Date().getFullYear()} Plataforma de Aprendizaje
                </p>
            </div>
            <nav className="footer-links">
                <Link to="/about">Sobre nosotros</Link>
                <Link to="/contact">Contacto</Link>
            </nav>
        </footer>
    );
}

export default Footer;