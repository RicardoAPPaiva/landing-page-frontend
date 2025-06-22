import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import About from "./pages/about.tsx";
import Contacts from "./pages/contacts.tsx";
import Projects from "./pages/projects.tsx";
import Resume from "./pages/resume.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
