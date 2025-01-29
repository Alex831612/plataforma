import { useState } from "react";
import PropTypes from 'prop-types';
import './FAQ.css';

const faqData = [
    {
        question: '¿Qué lenguaje de programación es mejor para empezar?',
        answer: 'Recomendamos empezar con JavaScript debido a su versatilidad y amplia comunidad de soporte.',
    },
    {
        question: '¿Cuánto tiempo necesito para aprender a programar?',
        answer: 'Esto depende de tu dedicación. Con 1-2 horas diarias, podrías aprender los fundamentos en 3 meses.',
    },
    {
        question: '¿Los cursos incluyen proyectos prácticos?',
        answer: 'Sí, todos nuestros cursos incluyen proyectos prácticos para consolidar tus conocimientos.',
    },
    {
        question: '¿Necesito experiencia previa para tomar un curso?',
        answer: 'No, ofrecemos cursos para principiantes, intermedios y avanzados.',
    },
    {
        question: '¿Qué debo aprender después de dominar los fundamentos?',
        answer: 'Recomendamos explorar frameworks como React o Node.js y aprender sobre bases de datos.',
    },
    {
        question: '¿Puedo obtener un certificado al finalizar un curso?',
        answer: 'Sí, al completar un curso recibirás un certificado digital.',
    },
];

function FAQItem({ question, answer, isOpen, onClick }) {
    return (
        <div className="faq-item">
            <h3>
                <button
                    className="faq-question"
                    aria-expanded={isOpen}
                    onClick={onClick}
                >
                    {question}
                    <span className="faq-toggle">{isOpen ? "−" : "+"}</span>
                </button>
            </h3>
            {isOpen && <p className="faq-answer">{answer}</p>}
        </div>
    );
}


function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq">
            <h2 className="faq-title">Preguntas Frecuentes</h2>
            <div className="faq-list">
                {faqData.map((item, index) => (
                    <FAQItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openIndex === index}
                        onClick={() => toggleFAQ(index)}
                    />
                ))}
            </div>
        </section>
    );
}
FAQItem.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default FAQ;