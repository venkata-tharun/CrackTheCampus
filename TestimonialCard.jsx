function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card">
      <div className="quote-mark">“</div>

      <div className="stars">★★★★★</div>

      <p>{testimonial.quote}</p>

      <div className="student">
        <div className="student-avatar">
          {testimonial.initials}
        </div>

        <div>
          <h4>{testimonial.name}</h4>
          <span>{testimonial.role}</span>
        </div>
      </div>
    </article>
  );
}

export default TestimonialCard;