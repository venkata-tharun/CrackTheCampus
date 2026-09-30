import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import FeatureCard from "./components/FeatureCard";
import CourseCard from "./components/CourseCard";
import TestimonialCard from "./components/TestimonialCard";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { features, courses, testimonials } from "./data/content";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Stats />

        {/* FEATURES */}
        <section className="section features-section" id="features">
          <div className="section-heading">
            <p className="section-tag">WHY CRACK THE CAMPUS?</p>

            <h2>
              Everything you need to
              <span> move forward.</span>
            </h2>

            <p>
              One simple learning journey to help you develop skills,
              gain practical experience and become career ready.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
              />
            ))}
          </div>
        </section>

        {/* COURSES */}
        <section className="section courses-section" id="courses">
          <div className="section-heading">
            <p className="section-tag">LEARNING PATHS</p>

            <h2>
              Skills that help you
              <span> stand out.</span>
            </h2>

            <p>
              Start with the fundamentals, practice through projects,
              and build the confidence to take your next step.
            </p>
          </div>

          <div className="course-grid">
            {courses.map((course) => (
              <CourseCard
                key={course.title}
                course={course}
              />
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section
          className="section testimonials-section"
          id="testimonials"
        >
          <div className="section-heading">
            <p className="section-tag">STUDENT STORIES</p>

            <h2>
              Learning is better
              <span> together.</span>
            </h2>

            <p>
              A simple learning experience can make a big difference
              when you are preparing for your career.
            </p>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </>
  );
}

export default App;