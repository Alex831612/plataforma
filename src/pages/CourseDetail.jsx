import { useParams } from "react-router-dom";
import courseData from "../data/courseData";
import { useState } from "react";
import './courseDetail.css';


function CourseDetail() {
    const { id } = useParams();
    const course = courseData.find((course) => course.id === parseInt(id));
    const [openModule, setOpenModule] = useState(null);

    const toggleModule = (index) => {
        setOpenModule(openModule === index ? null : index);
    }

    if (!course) {
        return (
            <main className="not-found">
                <p>El curso no existe o no se encuentra disponible.</p>
            </main>
        );
    }

    return (
        <main className="course-detail">
            <div className="course-header">
                <div className="course-title">
                    <h1>{course.title}</h1>
                    <p>{course.description}</p>
                </div>
                <div className="course-image">
                    <img src={course.image} alt={`Imagen del curso ${course.title}`} />
                </div>
            </div>

            <div className="course-info">
                <div className="info-card">
                    <p>
                        <i className="fa-regular fa-clock"></i><strong>Duración:</strong> {course.duration}
                    </p>
                    <p>
                        <i className="fa-solid fa-dollar-sign"></i><strong>Precio:</strong> Gratis
                    </p>
                    <p>
                        <i className="fa-solid fa-circle-info"></i><strong>Requisitos:</strong> {course.requirements}
                    </p>
                </div>
            </div>

            <div className="methodology">
                <h2>Metodología</h2>
                <p>{course.metodologia}</p>
            </div>

            <div className="modules">
                <h2>Temario</h2>
                {Object.entries(course.estructura).map(([moduleKey, module]) => (
                    <div key={moduleKey} className="module">
                        <h3 onClick={() => toggleModule(moduleKey)}>
                            {module.titulo}
                            <span>
                                {openModule === moduleKey
                                    ? <i className="fa-solid fa-caret-up"></i>
                                    : <i className="fa-solid fa-caret-down"></i>
                                }
                            </span>
                        </h3>
                        {openModule === moduleKey &&
                            <ul>
                                {module.temas.map((tema, index) => (
                                    <li key={index}>{tema}</li>
                                ))}
                            </ul>
                        }
                    </div>
                ))}
            </div>
            <button className="enroll-btn">Inscribirse</button>
        </main>
    );
    
}

export default CourseDetail;