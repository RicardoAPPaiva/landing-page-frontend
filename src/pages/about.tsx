import "../styles/global.css";
import { useEffect, useState } from "react";
import type { About } from "../models/about";
import BackButton from "../components/backButton";

function AboutContent() {
  const [aboutContent, setContent] = useState<About>({description: ""});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const username = "ricardo";
  const password = "personalproject";
  const credentials = btoa(`${username}:${password}`);

  useEffect(() => {
    fetch("http://localhost:3001/about-page/content", {
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

        return response.json() as Promise<About>;
      })
      .then((data) => {
        setContent(data);
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
      <p
        className="font-monospace"
        dangerouslySetInnerHTML={{ __html: aboutContent.description }}
      />{" "}
    </div>
  );
}

export default function About() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center flex-grow-1">
      <BackButton />
      <div>
        <h1 className="font-monospace mb-5">About</h1>
        <AboutContent />
      </div>
    </div>
  );
}
