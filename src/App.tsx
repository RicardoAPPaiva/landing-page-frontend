import "./styles/app.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/about";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import Contacts from "./pages/contacts";
import ThemeToggle from "./components/toggle";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

import type { LandingPageContent } from "./models/landingPageContent.ts";

function LandingPageContents() {
  const [landingPageContent, setContent] = useState<LandingPageContent>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const username = "ricardo";
  const password = "personalproject";
  const credentials = btoa(`${username}:${password}`);

  const typedRef = useRef<HTMLHeadingElement>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    fetch(
      "https://landing-page-backend-cfnx.onrender.com/landing-page/content",
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        setContent(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError("Failed to fetch landing page content.");
        setLoading(false);
      });
  }, [credentials]);

  useEffect(() => {
    if (landingPageContent?.name && typedRef.current) {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
      typedInstance.current = new Typed(typedRef.current, {
        strings: [landingPageContent.name],
        typeSpeed: 180,
        backSpeed: 25,
        showCursor: true,
        cursorChar: "_",
        loop: false,
      });
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, [landingPageContent]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="">
      <section className="text-center">
        <div>
          <img
            src={landingPageContent?.icon}
            alt="Portrait of Ricardo Paiva"
            className="rounded-circle img-fluid mb-4 avatar-image"
          />
        </div>
        <div className="d-inline-block flex-column">
          <h1
            className="text-uppercase fw-bold font-monospace username"
            ref={typedRef}
            style={{ whiteSpace: "nowrap", display: "inline-block" }}
          ></h1>
          <figure>
            <blockquote className="blockquote">
              <p className="mb-0">{landingPageContent?.role}</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              {landingPageContent?.citation}
            </figcaption>
          </figure>
        </div>
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
