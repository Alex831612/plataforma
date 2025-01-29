import { Link } from "react-router-dom";
import './courses.css';
import { useState } from "react";
import courseData from "../data/courseData";


function Courses() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCourses, setFilteredCourses] = useState(courseData);

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchTerm(query);

        const filtered = courseData.filter(course =>
            course.title.toLowerCase().includes(query.toLowerCase())
        );

        setFilteredCourses(filtered);
    }


    return (
        <main>
            <section className="course-page">
                <h1>Cursos Disponibles</h1>
                <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-bar"
                    aria-label="Buscar cursos"
                />
                <div className="course-flexbox">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                            <div className="courses-card" key={course.id}>
                                <img src={course.image} alt={course.title} className="courses-image" />
                                <div className="courses-info">
                                    <h2>{course.title}</h2>
                                    <p>{course.shortDescription}</p>
                                    <Link
                                        to={`/courses/${course.id}`}
                                        className="details-link"
                                        aria-label={`Ver detalles de ${course.title}`}
                                    >
                                        Ver Detalles
                                    </Link>
                                </div>
                            </div>
                        ))
                        ) : (
                            <p className="error-search">No se encontraron cursos con ese nombre.</p>
                        )}
                </div>
            </section>
        </main>
        
    );
}

export default Courses;