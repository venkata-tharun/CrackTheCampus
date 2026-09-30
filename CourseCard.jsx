function CourseCard({ course }) {
  return (
    <article className="course-card">
      <div className="course-top">
        <span className="course-label">
          {course.category}
        </span>

        <span className="course-arrow">↗</span>
      </div>

      <h3>{course.title}</h3>

      <p>{course.description}</p>

      <div className="course-meta">
        <span>◷ {course.duration}</span>
        <span>● {course.level}</span>
      </div>

      <a href="#home" className="course-link">
        Explore path →
      </a>
    </article>
  );
}

export default CourseCard;