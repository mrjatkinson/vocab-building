import React, { useState } from 'react';

const sentences = [
  {
    sentence: 'Je ____ (manger) une pomme.',
    answer: 'mange',
  },
  {
    sentence: 'Nous ____ (aller) au parc.',
    answer: 'allons',
  },
];

function FillInTheBlank() {
  const [inputs, setInputs] = useState(sentences.map(() => ''));

  const checkAnswers = () => {
    const results = sentences.map((s, i) =>
      inputs[i].toLowerCase() === s.answer ? 'Correct' : 'Try again'
    );
    alert(results.join('\n'));
  };

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  return (
    <div>
      <p>Fill in the blanks:</p>
      {sentences.map((s, i) => (
        <div key={i}>
          <label>
            {s.sentence.replace('____', '')}
            <input
              value={inputs[i]}
              onChange={e => handleChange(i, e.target.value)}
              placeholder="Fill in verb"
            />
          </label>
        </div>
      ))}
      <button onClick={checkAnswers}>Check Answers</button>
    </div>
  );
}

export default FillInTheBlank;
