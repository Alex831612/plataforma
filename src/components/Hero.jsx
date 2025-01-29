import heroImage from '../assets/bg-1.jpg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Hero.css';

function Hero({
    title = "Cursos de programación",
    subtitle = "Explora cursos diseñados para inspirar y capacitar",
    buttonText = "Ver cursos",
    buttonLink = "/courses",
    imageUrl = heroImage
}) {
    
    return (
        <section
            className="hero"
            style={{ backgroundImage: `url(${imageUrl})` }}
            aria-labelledby="hero-title"
            role="img"
            aria-label="Imagen de fondo del héroe"
        >
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <Link to={buttonLink} className="hero-button">{buttonText}</Link>
            <a href="https://www.pexels.com/es-es/foto/codificacion-por-computadora-270488/" target="_blank" rel="noopener noreferrer" className="hero-credits">Foto de Pixabay</a>
        </section>
    );
}
Hero.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
    imageUrl: PropTypes.string
};

export default Hero;