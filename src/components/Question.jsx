import React, { useState } from "react";
import AnswerOptions from "./AnswerOptions";
import "../styles/Question.css";

function Question({ question, onNextQuestion }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(20);

  const handleNextQuestion = (isCorrect) => {
    setIsTransitioning(true);

    setTimeout(() => {
      setIsTransitioning(false);
      onNextQuestion(isCorrect);

      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 20 : 20
      );
    }, 300);
  };

  return (
    <div
      className={`question${isTransitioning ? " transition" : ""}`}
      onAnimationEnd={() => setIsTransitioning(false)}
    >
      <div className="question-content">
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        {/* <p className={`question-text${isTransitioning ? " transition" : ""}`}>
          {question.question}
        </p> */}
        <p
          className={`question-text${isTransitioning ? " transition" : ""}`}
          dangerouslySetInnerHTML={{
            __html: question.question.replace(
              /(\bStatue of Liberty\b|\bbungee\b|\bcountry\b)/g, 
              "<strong>$1</strong>"
            ),
          }}
        ></p>
        <p
          style={{
            marginLeft: "10px",
            marginTop: "40px",
            fontSize: "14px",
            color: "#333",
            display: "flex",
            alignItems: "center",
          }}
        >
          History of art
        </p>
      </div>
      <div className={`options-content${isTransitioning ? " transition" : ""}`}>
        <AnswerOptions
          options={question.options}
          onNextQuestion={handleNextQuestion}
        />
      </div>
    </div>
  );
}

export default Question;
