import { Link } from "react-router-dom";
import backArrow from "../assets/back-arrow.png";

interface BackButtonProps {
  to?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ to = "/landing-page-frontend" }) => {
  return (
    <div className="d-flex ml-0 pl-0 mb-4 mr-1 align-self-start">
      <Link to={to} className="arrow-link">
        <img src={backArrow} alt="Back" className="arrow-icon" />
      </Link>
    </div>
  );
};

export default BackButton;
