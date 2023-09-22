import React, { useState } from "react";
import Question from "./Question";
import Navigation from "./Navigation";
import data from "../data/data.json";
import "../styles/QuestionContainer.css";

function QuestionContainer() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleNextQuestion = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 16);
    }

    if (currentQuestionIndex < data.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = data.questions[currentQuestionIndex];

  return (
    <div className="question-container">
      <Navigation
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={data.questions.length}
        onNext={handleNextQuestion}
        onPrev={handlePrev}
      />
      {currentQuestion && (
        <Question
          question={currentQuestion}
          onNextQuestion={handleNextQuestion}
        />
      )}
      <div className="score">
        <div className="score-result">Score: {score}</div>
        <div className="score-info">
          <p>Total Questions: {data.questions.length}</p>
        </div>
        <div className="score-info">
          <p>Correct Answers: {Math.floor(score / 16)}</p>
        </div>
        <div className="score-info">
          <p>
            Remaining Questions: {data.questions.length - Math.floor(score / 16)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuestionContainer;

