import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/resume.css";
import "../styles/global.css";
import backArrow from "../assets/back-arrow.png";
import { Link } from "react-router-dom";

const Resume: React.FC = () => {
  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center flex-grow-1"
      style={{ height: "100%" }}
    >
      {/* Back arrow */}
      <div className="mb-4 align-self-start">
       <Link to="/" className="arrow-link">
          <img src={backArrow} alt="Back" className="arrow-icon" />
        </Link>
      </div>

      <div className="align-self-start">
        <h1 className="font-monospace mb-5">Resume</h1>
        <a
          className="font-monospace text-dark"
          href="../../assets/files/Resume-Ricardo-Paiva.pdf"
          download
          style={{
            textDecoration: "underline",
            display: "inline-block",
            transition: "transform 0.1s ease",
          }}
          onMouseOver={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform =
              "scale(1.05)";
          }}
          onMouseOut={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
          }}
        >
          Click here to download my Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
