import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-mark">C</span>
          <span className="logo-text">
            Crack <span>The Campus</span>
          </span>
        </a>

        <nav
          className={menuOpen ? "nav-links active" : "nav-links"}
          aria-label="Main navigation"
        >
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#features" onClick={closeMenu}>
            Features
          </a>

          <a href="#courses" onClick={closeMenu}>
            Courses
          </a>

          <a href="#testimonials" onClick={closeMenu}>
            Testimonials
          </a>

          <a
            href="#courses"
            className="mobile-cta"
            onClick={closeMenu}
          >
            Get Started
          </a>
        </nav>

        <a href="#courses" className="nav-button">
          Get Started
        </a>

        <button
          type="button"
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>
    </header>
  );
}

export default Navbar;