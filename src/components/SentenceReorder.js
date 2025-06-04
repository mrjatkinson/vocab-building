import React, { useState } from 'react';

const words = ['Je', 'aime', 'le', 'chien'];

function SentenceReorder() {
  const [order, setOrder] = useState(words);

  const shuffle = () => {
    setOrder(prev =>
      [...prev].sort(() => Math.random() - 0.5)
    );
  };

  const checkOrder = () => {
    const correct = words.join(' ');
    const user = order.join(' ');
    alert(user === correct ? 'Correct!' : 'Try again!');
  };

  return (
    <div>
      <p>Reorder the words to make a correct sentence:</p>
      <div className="word-list">
        {order.map((word, i) => (
          <span key={i} className="word">{word}</span>
        ))}
      </div>
      <button onClick={shuffle}>Shuffle</button>
      <button onClick={checkOrder}>Check</button>
    </div>
  );
}

export default SentenceReorder;
