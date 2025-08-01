import React, { useState } from 'react';
import Quiz from './Quiz';
import Score from './Score';
import { questions } from './questions';
import './App.css';

function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div className="app">
      {showScore ? (
        <Score score={score} total={questions.length} />
      ) : (
        <Quiz
          questions={questions}
          onComplete={(finalScore) => {
            setScore(finalScore);
            setShowScore(true);
          }}
        />
      )}
    </div>
  );
}

export default App;
