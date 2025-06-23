import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import "../styles/resume.css";
import resume from "../assets/ricardo-paiva-resume.pdf";
import BackButton from "../components/backButton";

const Resume: React.FC = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center flex-grow-1">
      <BackButton />

      <div className="align-self-start">
        <h1 className="font-monospace mb-5">Resume</h1>
        <a
          className="font-monospace"
          href={resume}
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
