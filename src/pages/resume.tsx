import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import "../styles/resume.css";
import BackButton from "../components/backButton";

function ResumeFileLink() {
  const [resumeUrl, setResumeUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const username = "ricardo";
  const password = "personalproject";
  const credentials = btoa(`${username}:${password}`);

  useEffect(() => {
    fetch("http://localhost:3001/files/resume", {
      method: "GET",
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.blob();
      })
      .then((data) => {
        const url = URL.createObjectURL(data);
        setResumeUrl(url);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError("Failed to fetch resume");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}...</p>;

  return (
    <div>
      <a
        className="font-monospace text-decoration-underline d-inline-block"
        href={resumeUrl}
        target="_blank" // 🔥 Opens in a new tab
        rel="noopener noreferrer" // 🔒 Security best practice
        style={{
          transition: "transform 0.1s ease",
        }}
        onMouseOver={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.05)";
        }}
        onMouseOut={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
        }}
      >
        Click here to view my Resume
      </a>
    </div>
  );
}

const Resume: React.FC = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center flex-grow-1">
      <BackButton />
      <div className="align-self-start">
        <h1 className="font-monospace mb-5">Resume</h1>
        <ResumeFileLink />
      </div>
    </div>
  );
};

export default Resume;
