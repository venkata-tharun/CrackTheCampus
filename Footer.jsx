function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span>C</span>
            Crack The Campus
          </a>

          <p>
            Learn skills. Build projects.
            <br />
            Get ready for your career.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#courses">Courses</a>
          </div>

          <div>
            <h4>Students</h4>
            <a href="#testimonials">Stories</a>
            <a href="#courses">Get Started</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Crack The Campus</span>
        <span>Built with React & CSS</span>
      </div>
    </footer>
  );
}

export default Footer;