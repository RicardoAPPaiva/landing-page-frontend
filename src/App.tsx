import "./styles/app.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/about";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import Contacts from "./pages/contacts";
import ThemeToggle from "./components/toggle";
import { useEffect, useState } from "react";

import type { LandingPageContent } from "./models/landingPageContent.ts";

function LandingPageContents() {
  const [landingPageContent, setContacts] = useState<LandingPageContent>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const username = "ricardo";
  const password = "personalproject";
  const credentials = btoa(`${username}:${password}`);

  useEffect(() => {
    fetch("http://localhost:3001/landing-page/content", {
      method: "GET",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json() as Promise<LandingPageContent>;
      })
      .then((data) => {
        setContacts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError("Failed to fetch contacts");
        setLoading(false);
      });
  }, []);

  if (loading) return <p> Loading ... </p>;
  if (error) return <p> {error} ... </p>;

  return (
    <div>
      <section className="text-center">
        <img
          src={landingPageContent?.icon}
          alt="Portrait of Ricardo Paiva"
          className="rounded-circle img-fluid mb-4 avatar-image"
        />
        <h1 className="text-uppercase fw-bold font-monospace">Ricardo Paiva</h1>
        <figure>
          <blockquote className="blockquote">
            <p className="mb-0">{landingPageContent?.role}</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            {landingPageContent?.citation}
          </figcaption>
        </figure>
      </section>

      <nav
        className="d-flex flex-column w-100 justify-content-center align-items-center mt-4"
        aria-label="Primary navigation"
      >
        {landingPageContent?.menuItems.map((item) => (
          <Link
            key={item.name}
            to={"/" + item.name}
            className="custom-nav-link mb-2 text-capitalize"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

const LandingPage = () => (
  <main className="container d-flex flex-column justify-content-center align-items-center flex-grow-1">
    <LandingPageContents />
  </main>
);

function App() {
  return (
    <div className="app-container">
      <header className="pt-0 mt-0 d-flex justify-content-end p-4">
        <ThemeToggle />
      </header>
      <Routes>
        <Route path="/landing-page-frontend" element={<LandingPage />} />
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
        className="text-center font-monospace text-uppercase py-3"
        role="contentinfo"
      >
        &copy; Ricardo Paiva
      </footer>
    </div>
  );
}

export default App;
