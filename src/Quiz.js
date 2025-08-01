import React, { useState } from 'react';

function Quiz({ questions, onComplete }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    const next = currentQ + 1;
    if (next < questions.length) {
      setCurrentQ(next);
      setSelected(null);
    } else {
      onComplete(score + (isCorrect ? 1 : 0));
    }
  };

  const q = questions[currentQ];

  return (
    <div className="quiz">
      <div className="question-section">
        <div className="question-count">
          Question {currentQ + 1}/{questions.length}
        </div>
        <div className="question-text">{q.questionText}</div>
      </div>
      <div className="answer-section">
        {q.answerOptions.map((opt, idx) => (
          <button
            key={idx}
            disabled={selected !== null}
            onClick={() => {
              setSelected(idx);
              handleAnswer(opt.isCorrect);
            }}
            className={
              selected === idx
                ? opt.isCorrect
                  ? 'correct'
                  : 'incorrect'
                : ''
            }
          >
            {opt.answerText}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
