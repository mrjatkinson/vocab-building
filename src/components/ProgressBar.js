import React from 'react';

function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100;
  return (
    <div className="progress-bar-container" aria-label={`Step ${current} of ${total}`}>
      <div className="progress-bar-fill" style={{ width: `${percentage}%` }} />
    </div>
  );
}

export default ProgressBar;
