import { useState } from "react";
import BackButton from "../components/backButton";

type RightSideContentProps = {
  selectedPattern: string;
};

type LeftSideContentProps = {
  onSelectPattern: (patternName: string) => void;
};

function LeftSideContent({ onSelectPattern }: LeftSideContentProps) {
  const designPatterns = [
    { name: "Factory Design Pattern" },
    { name: "Singleton Design Pattern" },
    { name: "Repository Design Pattern" },
    { name: "Unit of Work Design Pattern" },
  ];

  return (
    <div className="align-self-start">
      <h1 className="font-monospace mb-5">Blog Content</h1>
      <ul>
        {designPatterns.map((pattern, index) => (
          <li key={index} className="mt-3">
            <a
              className="font-monospace text-decoration-underline zoom-text cursor-pointer"
              onClick={() => onSelectPattern(pattern.name)}
            >
              {pattern.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RightSideContent({ selectedPattern }: RightSideContentProps) {
  const patternDetails: { [key: string]: string } = {
    "Factory Design Pattern":
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti at impedit possimus ipsam excepturi consequuntur, perspiciatis quibusdam dolor! Voluptatum omnis eveniet doloremque! Impedit dolore nihil enim, distinctio consectetur ab iste.",
    "Singleton Design Pattern": "This is singleton",
    "Repository Design Pattern": "This is repository",
    "Unit of Work Design Pattern": "This is uow",
  };

  return (
    <div className="flex-grow-1 p-4 w-100">
      {selectedPattern ? (
        <>
          <h2 className="font-monospace mb-4">{selectedPattern}</h2>
          <p>{patternDetails[selectedPattern]}</p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default function Blog() {
  const [selectedPattern, setSelectedPattern] = useState("");

  return (
    <div className="container d-flex flex-grow-1 p-0">
      <div className="d-flex flex-column justify-content-center align-items-center border-end p-4">
        <BackButton />
        <LeftSideContent onSelectPattern={setSelectedPattern} />
      </div>
      <RightSideContent selectedPattern={selectedPattern} />
    </div>
  );
}
