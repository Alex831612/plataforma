import notFound from '../assets/404-error.svg';

export default function NotFound() {
    return (
        <main>
            <div style={{ textAlign: "center", padding: "2rem" }}>
                <h1>404 - Página no encontrada</h1>
                <p>La página que buscas no existe o ha sido movida.</p>
                <img src={notFound} alt="Error 404" style={{width: "300px"}} />
            </div>
        </main>
    );
}
