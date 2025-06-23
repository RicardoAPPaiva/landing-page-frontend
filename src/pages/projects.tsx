import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/projects.css";
import "../styles/global.css";
import BackButton from "../components/backButton";
import type { Project } from "../models/project";

function ProjectsList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const username = "ricardo";
  const password = "personalproject";
  const credentials = btoa(`${username}:${password}`);

  useEffect(() => {
    fetch("http://localhost:3001/projects", {
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

        return response.json() as Promise<Project[]>;
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError("Failed to fetch projects");
        setLoading(false);
      });
  }, []);

  if (loading) return <p> Loading ... </p>;
  if (error) return <p> {error} ... </p>;

  return (
    <div className="align-self-start">
      <h1 className="font-monospace mb-5">Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-monospace text-decoration-underline zoom-text"
            >
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const Projects: React.FC = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center flex-grow-1">
      <BackButton />
      <ProjectsList />
    </div>
  );
};

export default Projects;
