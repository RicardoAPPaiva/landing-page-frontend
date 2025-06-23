import React, { useEffect, useState } from "react";
import "../styles/contacts.css";
import "../styles/global.css";
import { Link } from "react-router-dom";
import backArrow from "../assets/back-arrow.png";
import type { Contact } from "../models/contact";

function ContactsList() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const username = "ricardo";
  const password = "personalproject";
  const credentials = btoa(`${username}:${password}`);

  useEffect(() => {
    fetch("http://localhost:3001/contacts", {
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

        return response.json() as Promise<Contact[]>;
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
      {contacts.map((contact) => (
        <div className="contact-item" key={contact.id}>
          <img
            src={contact.logo}
            alt={contact.type}
          />
          <p className="font-monospace mb-0">{contact.value}</p>
        </div>
      ))}
    </div>
  );
}

const Contacts: React.FC = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center flex-grow-1">
      <div className="mb-4 align-self-start">
        <Link to="/landing-page-frontend" className="arrow-link">
          <img src={backArrow} alt="Back" className="arrow-icon" />
        </Link>
      </div>

      <div className="align-self-start">
        <h1 className="font-monospace mb-5">Contacts</h1>
        <ContactsList />
      </div>
    </div>
  );
};

export default Contacts;
