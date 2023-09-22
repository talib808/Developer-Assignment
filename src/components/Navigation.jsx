import React from "react";
import ".././styles/Navigation.css";

function Navigation({ currentQuestionIndex, totalQuestions, onNext, onPrev }) {
  const formattedIndex = String(currentQuestionIndex + 1).padStart(2, "0");

  return (
    <div className="navigation">
      <button
        onClick={onPrev}
        disabled={currentQuestionIndex === 0}
        style={{ color: "#666", fontSize: "24px" }}
      >
        &lt;
      </button>
      <span>
        {formattedIndex}
        <span
          style={{
            color: "#666",
            fontSize: "14px",
          }}
        >
          /{String(totalQuestions).padStart(2, "0")}
        </span>
      </span>

      <button
        onClick={onNext}
        disabled={currentQuestionIndex === totalQuestions - 1}
        style={{ color: "#666", fontSize: "24px" }}
      >
        &gt;
      </button>
    </div>
  );
}

export default Navigation;
