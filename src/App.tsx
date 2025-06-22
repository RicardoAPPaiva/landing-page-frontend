import "./styles/app.css";
import avatar from "./assets/avatar.png";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/about";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import Contacts from "./pages/contacts";

const Home = () => (
  <main className="container d-flex flex-column justify-content-center align-items-center flex-grow-1">
    <section className="text-center">
      <img
        src={avatar}
        alt="Portrait of Ricardo Paiva"
        className="rounded-circle img-fluid mb-4 avatar-image"
      />
      <h1 className="text-uppercase fw-bold font-monospace">Ricardo Paiva</h1>
      <figure>
        <blockquote className="blockquote">
          <p className="mb-0">Senior Fullstack Software Engineer</p>
        </blockquote>
        <figcaption className="blockquote-footer">TechLead .NET</figcaption>
      </figure>
    </section>

    <nav
      className="d-flex flex-column w-25 justify-content-center align-items-center mt-4"
      aria-label="Primary navigation"
    >
      <Link to="/about" className="custom-nav-link mb-2">
        About
      </Link>
      <Link to="/projects" className="custom-nav-link mb-2">
        Projects
      </Link>
      <Link to="/resume" className="custom-nav-link mb-2">
        Resume
      </Link>
      <Link to="/contacts" className="custom-nav-link mb-2">
        Contacts
      </Link>
    </nav>
  </main>
);

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/landing-page-frontend" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route
          path="*"
          element={<div className="text-center mt-5">404 - Page Not Found</div>}
        />
      </Routes>

      <div className="corner-banner">UNDER CONSTRUCTION</div>

      <footer
        className="text-black text-center font-monospace text-uppercase py-3"
        role="contentinfo"
      >
        &copy; Ricardo Paiva
      </footer>
    </div>
  );
}

export default App;
