import courseData from "../data/courseData";
import './CourseCard.css';


function CoursesCard() {
    const randomThreeElements = courseData
        .sort(() => Math.random() - 0.5)
        .slice(0, 3); 

    return (
        <section className="courses">
            <h2 className="courses-title">Cursos Destacados</h2>
            <div className="courses-container">
                {randomThreeElements.map((course) => (
                    <div key={course.id} className="course-card">
                        <img src={course.image} alt={course.title} />
                        <h3>{course.title}</h3>
                        <p>{course.shortDescription}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CoursesCard;