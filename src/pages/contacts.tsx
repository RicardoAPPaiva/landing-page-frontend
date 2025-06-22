import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/contacts.css";
import "../styles/global.css";
import { Link } from "react-router-dom";
import backArrow from "../assets/back-arrow.png";

const Contacts: React.FC = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center flex-grow-1">
      {/* Back arrow */}
      <div className="mb-4 align-self-start">
        <Link to="/" className="arrow-link">
          <img src={backArrow} alt="Back" className="arrow-icon" />
        </Link>
      </div>

      <div className="align-self-start">
        <h1 className="font-monospace mb-5">Contacts</h1>

        <div className="contact-item">
          <img src="../assets/images/google-logo.png" alt="Gmail" />
          <p className="font-monospace mb-0">ricardoappaiva@gmail.com</p>
        </div>

        <div className="contact-item">
          <img src="../assets/images/linkedin-logo.png" alt="LinkedIn" />
          <a
            href="https://www.linkedin.com/in/ricardopaiva2602/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-monospace text-dark text-decoration-none mb-0"
          >
            ricardopaiva2602
          </a>
        </div>

        <div className="contact-item">
          <img src="../assets/images/cell-phone.png" alt="Phone" />
          <p className="font-monospace mb-0">+351 961 190 814</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
