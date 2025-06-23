import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/projects.css";
import "../styles/global.css";
import BackButton from "../components/backButton";

const Projects: React.FC = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center flex-grow-1">
      <BackButton />

      <div className="align-self-start">
        <h1 className="font-monospace mb-5">Projects</h1>
        <ul>
          <li>
            <a
              href="https://www.farmaciasportuguesas.pt/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-monospace text-decoration-underline zoom-text"
            >
              Healthcare e-commerce platform
            </a>
          </li>
          <li>
            <a
              href="https://www.enhesa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-monospace text-decoration-underline zoom-text"
            >
              Regulatory Content and Sustainability Intelligence SaaS
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
