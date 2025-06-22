import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/projects.css';
import '../styles/global.css';
import { Link } from 'react-router-dom';
import backArrow from "../assets/back-arrow.png";

const Projects: React.FC = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center flex-grow-1">
      {/* Back arrow */}
      <div className="mb-4 align-self-start">
        <Link to="/landing-page-frontend" className="arrow-link">
          <img src={backArrow} alt="Back" className="arrow-icon" />
        </Link>
      </div>

      <div className="align-self-start">
        <h1 className="font-monospace mb-5">Projects</h1>
        <ul>
          <li>
            <a
              href="https://www.farmaciasportuguesas.pt/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
            >
              <b className="font-monospace text-decoration-underline">
                Healthcare e-commerce platform
              </b>
            </a>
          </li>
          <li>
            <a
              href="https://www.enhesa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
            >
              <b className="font-monospace text-decoration-underline">
                Regulatory Content and Sustainability Intelligence SaaS
              </b>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
