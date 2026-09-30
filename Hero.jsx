function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge">
          ✦ Built for ambitious students
        </div>

        <p className="hero-tag">LEARN • BUILD • GET HIRED</p>

        <h1>
          Turn Your
          <span> Campus Journey</span>
          <br />
          Into Your Career.
        </h1>

        <p className="hero-description">
          Learn industry-ready skills, build real-world projects,
          and prepare yourself for the opportunities waiting after
          graduation.
        </p>

        <div className="hero-buttons">
          <a href="#courses" className="btn-primary">
            Explore Courses →
          </a>

          <a href="#features" className="btn-secondary">
            How It Works
          </a>
        </div>

        <div className="hero-trust">
          <div className="avatar-stack">
            <span>R</span>
            <span>P</span>
            <span>A</span>
            <span>+</span>
          </div>

          <div>
            <strong>Students first</strong>
            <p>Learn skills that move you forward</p>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-glow"></div>

        <div className="learning-card">
          <div className="learning-card-top">
            <div className="course-icon">⚡</div>

            <span className="status">
              <span></span>
              Learning
            </span>
          </div>

          <p className="small-label">CURRENT PATH</p>

          <h2>Frontend Development</h2>

          <p className="learning-description">
            Build modern websites with the skills companies look for.
          </p>

          <div className="progress-header">
            <span>Course progress</span>
            <strong>72%</strong>
          </div>

          <div className="progress-bar">
            <div className="progress-value"></div>
          </div>

          <div className="learning-footer">
            <span>12 lessons completed</span>
            <span>→</span>
          </div>
        </div>

        <div className="floating-card floating-card-one">
          🚀
          <div>
            <strong>Build</strong>
            <small>Real projects</small>
          </div>
        </div>

        <div className="floating-card floating-card-two">
          🎯
          <div>
            <strong>Get Ready</strong>
            <small>For interviews</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;