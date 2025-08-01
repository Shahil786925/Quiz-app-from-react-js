import React from 'react';

function Score({ score, total }) {
  return (
    <div className="score-section">
      You scored {score} out of {total}
    </div>
  );
}

export default Score;
