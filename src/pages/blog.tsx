import { useState, type JSX } from "react";
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
  const patternDetails: { [key: string]: JSX.Element } = {
    "Factory Design Pattern": (
      <>
        <div className="font-monospace">
          <p>
            The Factory Pattern is a creational design pattern that provides a
            way to create objects without specifying the exact class of the
            object that will be created.
          </p>
          <p>
            Instead of using <code>new</code> directly, you use a factory method
            to create the object. This improves flexibility and maintainability.
          </p>
        </div>

        <div className="d-flex justify-content-center">
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=one-dark&wt=none&l=text%2Fx-csharp&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=public%2520interface%2520IPizza%250A%257B%250A%2520%2520%2520%2520void%2520Cook%28%29%253B%250A%257D%250A%250Apublic%2520class%2520Margherita%2520%253A%2520IPizza%250A%257B%250A%2520%2520%2520%2520public%2520void%2520Cook%28%29%250A%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520Console.WriteLine%28%2522Cooking%2520a%2520Margherita%2522%29%253B%250A%2520%2520%2520%2520%257D%250A%257D%250A%250Apublic%2520class%2520Diavola%2520%253A%2520IPizza%250A%257B%250A%2520%2520%2520%2520public%2520void%2520Cook%28%29%250A%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520Console.WriteLine%28%2522Cooking%2520a%2520Diavola%2522%29%253B%250A%2520%2520%2520%2520%257D%250A%257D%250A%250Apublic%2520class%2520PizzaFactory%250A%257B%250A%2520%2520%2520%2520public%2520static%2520IPizza%2520CreatePizza%28string%2520pizzaName%29%250A%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520if%2520%28pizzaName%2520%253D%253D%2520%2522Margherita%2522%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%2520new%2520Margherita%28%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520if%2520%28pizzaName%2520%253D%253D%2520%2522Diavola%2522%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%2520new%2520Diavola%28%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520else%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520return%2520null%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%257D%250A%257D%250A%250Apublic%2520class%2520Program%250A%257B%250A%2520%2520public%2520static%2520void%2520Main%28string%255B%255D%2520args%29%250A%2520%2520%257B%250A%2520%2520%2520%2520%2520IPizza%2520margherita%2520%253D%2520PizzaFactory.CreatePizza%28%2522Margherita%2522%29%253B%250A%2520%2520%2520%2520%2520IPizza%2520diavola%2520%253D%2520PizzaFactory.CreatePizza%28%2522Diavola%2522%29%253B%250A%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520margherita.Cook%28%29%253B%250A%2520%2520%2520%2520%2520diavola.Cook%28%29%253B%250A%2520%2520%257D%250A%257D%250A%250A%250A%252F%252F%2520Output%253A%250A%252F%252F%250A%252F%252F%2520Cooking%2520a%2520Margherita%250A%252F%252F%2520Cooking%2520a%2520Diavola"
            style={{
              width: "647px",
              height: "1251px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </>
    ),
    "Singleton Design Pattern": (
      <>
        <div className="font-monospace">
          <p>
            The Singleton Pattern ensures that a class has only one instance
            throughout the application and provides a global access point to
            that instance.
          </p>
          <p>
            It is useful when you need a single shared resource (like
            configuration settings, logging, etc.) that should be accessed
            consistently from anywhere.
          </p>
        </div>

        <div className="d-flex justify-content-center">
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=one-dark&wt=none&l=text%2Fx-csharp&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=public%2520class%2520Singleton%250A%257B%250A%2520%2520private%2520static%2520Singleton%2520_instance%253B%250A%2520%2520private%2520static%2520readonly%2520object%2520_lock%2520%253D%2520new%2520object%28%29%253B%250A%2520%2520%250A%2520%2520private%2520Singleton%28%29%250A%2520%2520%257B%250A%2520%2520%257D%250A%2520%2520%250A%2520%2520public%2520static%2520Singleton%2520Instance%2520%250A%2520%2520%257B%250A%2520%2520%2520%2520get%250A%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520lock%2520%28_lock%29%250A%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520if%28_instance%2520%253D%253D%2520%2520null%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520_instance%2520%253D%2520new%2520Singleton%28%29%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520return%2520_instance%253B%250A%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%257D%250A%2520%2520%257D%250A%2520%2520%250A%2520%2520public%2520void%2520ShowMessage%28%29%250A%2520%2520%257B%250A%2520%2520%2520%2520Console.WriteLine%28%2522Hello%2520from%2520Singleon%2522%29%253B%250A%2520%2520%257D%250A%257D%250A%250Apublic%2520class%2520Program%250A%257B%250A%2520%2520public%2520static%2520void%2520Main%28%29%250A%2520%2520%257B%250A%2520%2520%2520%2520Singleton%2520firstInstance%2520%253D%2520Singleton.Instance%253B%250A%2520%2520%2520%2520Singleton%2520secondInstance%2520%253D%2520Singleton.Instance%253B%250A%2520%2520%2520%2520%250A%2520%2520%2520%2520Console.WriteLine%28firstInstance%2520%253D%253D%2520secondInstance%29%253B%250A%2520%2520%257D%250A%257D%250A%250A%252F%252F%2520Output%250A%252F%252F%250A%252F%252F%2520True"
            style={{
              width: "575px",
              height: "1009px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </>
    ),
    "Repository Design Pattern": <></>,
    "Unit of Work Design Pattern": <></>,
  };

  return (
    <div className="flex-grow-1 p-4 w-100 bg-light">
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
