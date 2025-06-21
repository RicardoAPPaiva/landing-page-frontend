import "./App.css";

function App() {
  return (
    <>
      <main className="container d-flex flex-column justify-content-center align-items-center flex-grow-1">
        <section className="text-center">
          <img
            src="assets/images/personal-image.png"
            alt="Portrait of Ricardo Paiva"
            className="rounded-circle img-fluid mb-4 avatar-image"
          />
          <h1 className="text-uppercase fw-bold font-monospace">
            Ricardo Paiva
          </h1>
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
          <a href="./pages/about.html" className="custom-nav-link mb-2">
            About
          </a>
          <a href="./pages/projects.html" className="custom-nav-link mb-2">
            Projects
          </a>
          <a href="./pages/resume.html" className="custom-nav-link mb-2">
            Resume
          </a>
          <a href="./pages/contacts.html" className="custom-nav-link mb-2">
            Contacts
          </a>
        </nav>
      </main>

      <div className="corner-banner">UNDER CONSTRUCTION</div>

      <footer
        className="text-black text-center font-monospace text-uppercase py-3"
        role="contentinfo"
      >
        &copy; Ricardo Paiva
      </footer>
    </>
  );
}

export default App;
