import { useState } from "react";

function App() {
  {
    /* state management */
  }
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  {
    /* cards items */
  }
  const cards = [
    {
      question: "What is React?",
      answer: "A JavaScript library for building user interfaces.",
    },
    {
      question: "What is a component?",
      answer: "Reusable pieces of UI in React.",
    },
    {
      question: "What is state?",
      answer: "A way to manage data in a component.",
    },
  ];

  {
    /* events */
  }
  const handleflip = () => {
    setShowAnswer(!showAnswer);
  };
  const handlenext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
    }
  };
  const handleprev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
    }
  };

  {
    /* progress calculation */
  }
  const progress = ((currentIndex + 1) / cards.length) * 100;

  return (
    <div className="container mt-5 text-center">
      <h1 className="text-center">Flashcards</h1>

      {/* Progress Bar */}
      <div className="progress mb-4">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progress}%` }}
        >
          {Math.round(progress)}%
        </div>
      </div>

      <div
        className="card shadow mx-auto"
        style={{ width: "1200px", height: "500px" }}
      >
        {/* Card Content */}
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <h5 className="text-center">
            {showAnswer
              ? cards[currentIndex].answer
              : cards[currentIndex].question}
          </h5>
        </div>

        {/* Card Footer (Buttons inside box) */}
        <div className="card-footer d-flex justify-content-between">
          <button
            className="btn btn-outline-secondary"
            onClick={handleprev}
            disabled={currentIndex === 0}
          >
            Previous
          </button>

          <button className="btn btn-outline-primary" onClick={handleflip}>
            {showAnswer ? "Hide" : "Show Answer"}
          </button>

          <button
            className="btn btn-outline-success"
            onClick={handlenext}
            disabled={currentIndex === cards.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
