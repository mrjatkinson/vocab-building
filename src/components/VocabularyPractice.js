import React, { useState } from 'react';

const vocab = [
  { french: 'chien', english: 'dog' },
  { french: 'chat', english: 'cat' },
  { french: 'maison', english: 'house' },
];

function VocabularyPractice() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const checkAnswer = () => {
    const correct = vocab.find(item => item.french === input.toLowerCase());
    if (correct) {
      setResult(`Correct! "${input}" means "${correct.english}".`);
    } else {
      setResult('Try again!');
    }
  };

  return (
    <div>
      <p>Type a French word from the list: chien, chat, maison</p>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type French word here"
      />
      <button onClick={checkAnswer}>Check</button>
      <p>{result}</p>
    </div>
  );
}

export default VocabularyPractice;
