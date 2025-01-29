import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const navLinks = [
    { path: "/", label: "Inicio" },
    { path: "/courses", label: "Cursos" },
];

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    }

    return (
        <header className="header">
            <div className="header-logo">
                <h1>Plataforma</h1>
            </div>
            <button
                className="menu-toggle"
                onClick={toggleMenu}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
                ☰
            </button>
            <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
                <ul className="nav-list">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                to={link.path}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;