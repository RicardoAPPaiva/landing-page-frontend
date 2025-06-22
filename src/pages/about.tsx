import "../styles/about.css";
import backArrow from "../assets/back-arrow.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <body className="container d-flex flex-column justify-content-center align-items-center flex-grow-1">
      <div className="d-flex ml-0 pl-0 mb-4 mr-1 align-self-start">
        <Link to="/" className="arrow-link">
          <img src={backArrow} alt="Back" className="arrow-icon" />
        </Link>
      </div>
      <div>
        <h1 className="font-monospace mb-5">About</h1>
        <p className="font-monospace">
          I'm a young <b>software engineer</b> with a love for clean design,
          clear code, and a curious mind. Passionate about <b>psychology</b>,
          <b>well-being</b>, and <b>self-improvement</b>, I balance my screen
          time with <b>gym</b> sessions and and daily walks in green spaces —
          usually accompanied by my spirited <b> Chihuahua</b>. I’m a
          <b>supercar enthusiast</b> and a dedicated foodie—always chasing the
          perfect burger. Outside of tech, I channel my curiosity and drive into
          <b>real estate investment</b>, enjoying the challenge of spotting
          opportunities and building long-term value.
        </p>
      </div>
    </body>
  );
}
