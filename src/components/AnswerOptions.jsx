import React, { useState } from "react";
import ".././styles/AnswerOptions.css";

function AnswerOptions({ options, onNextQuestion }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onNextQuestion(option.isCorrect);
  };

  const shuffledOptions = options.sort(() => Math.random() - 0.5);

  return (
    <div className="answer-options">
      {shuffledOptions.map((option, index) => (
        <div
          key={index}
          className={`option1 ${selectedOption === option ? "selected" : ""}`}
          onClick={() => handleOptionSelect(option)}
        >
          {String.fromCharCode(97 + index)}. {option.label}
        </div>
      ))}
    </div>
  );
}

export default AnswerOptions;
