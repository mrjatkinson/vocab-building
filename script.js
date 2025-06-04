// Vocabulary lessons data: 10 lessons, each with 10 activities/questions
// Activities include multiple choice, matching, fill in the blank, translations, sentence order, and short writing prompts.
// This is a fully working example with progress tracking and final score display.
// At the very top of your <script> or JS file
let userResponses = JSON.parse(localStorage.getItem('vocabQuizResponses')) || [];

function recordResponse(questionId, userAnswer, isCorrect) {
  const existingIndex = userResponses.findIndex(r => r.questionId === questionId);
  if (existingIndex > -1) {
    userResponses[existingIndex] = { questionId, userAnswer, isCorrect };
  } else {
    userResponses.push({ questionId, userAnswer, isCorrect });
  }
  localStorage.setItem('vocabQuizResponses', JSON.stringify(userResponses));
}
const lessons = [
  // Lesson 1 - Basics vocab and simple sentences
  {
    title: "Leçon 1 : Vocabulaire de base",
    questions: [
      {
        type: "multipleChoice",
        prompt: "Que signifie 'Un entretien' ?",
        options: ["An interview", "A competition", "An evening"],
        answer: "An interview"
      },
      {
        type: "multipleChoice",
        prompt: "Que veut dire 'Il y a' ?",
        options: ["There is/There are", "To sing", "Last"],
        answer: "There is/There are"
      },
      {
        type: "translate",
        prompt: "Traduisez en français: 'There is a competition'",
        answer: "Il y a un concours"
      },
      {
        type: "match",
        prompt: "Associez le mot avec sa traduction:",
        pairs: [
          ["Un entretien", "An interview"],
          ["Une soirée", "An evening"],
          ["Un concours", "A competition"]
        ]
      },
      {
        type: "fillBlank",
        prompt: "Complétez: Il y ___ un concours demain.",
        answer: "a"
      },
      {
        type: "sentenceOrder",
        prompt: "Mettez la phrase dans le bon ordre: 'entretien / un / Il / y / a'",
        answer: "Il y a un entretien"
      },
      {
        type: "writeShort",
        prompt: "Écrivez une phrase avec 'Il y a'."
      },
      {
        type: "multipleChoice",
        prompt: "Que signifie 'Dernier' ?",
        options: ["Last", "Next", "Hard"],
        answer: "Last"
      },
      {
        type: "translate",
        prompt: "Traduisez en français: 'Next Saturday'",
        answer: "Samedi prochain"
      },
      {
        type: "writeShort",
        prompt: "Utilisez 'Un entretien' dans une phrase."
      },
    ]
  },

  // Lesson 2 - Add verbs and expressions
  {
    title: "Leçon 2 : Verbes et expressions",
    questions: [
      {
        type: "multipleChoice",
        prompt: "Que signifie 'Chanter' ?",
        options: ["To sing", "To hope", "To win"],
        answer: "To sing"
      },
      {
        type: "translate",
        prompt: "Traduisez: 'I hope to win the competition.'",
        answer: "J’espère gagner le concours."
      },
      {
        type: "fillBlank",
        prompt: "Complétez: ___ (I hope) réussir.",
        answer: "J’espère"
      },
      {
        type: "match",
        prompt: "Associez les expressions avec leurs traductions:",
        pairs: [
          ["Avoir confiance", "To have confidence"],
          ["Faire carrière dans", "To have a career in"],
          ["Devenir célèbre", "To become famous"]
        ]
      },
      {
        type: "sentenceOrder",
        prompt: "Remettez en ordre: 'Samedi / concours / il / y / aura'",
        answer: "Il y aura un concours samedi"
      },
      {
        type: "multipleChoice",
        prompt: "Que veut dire 'Dur' ?",
        options: ["Hard", "Easy", "Last"],
        answer: "Hard"
      },
      {
        type: "translate",
        prompt: "Traduisez: 'They told me that it will be hard.'",
        answer: "On m’a dit que ce sera dur."
      },
      {
        type: "writeShort",
        prompt: "Utilisez 'Avoir confiance' dans une phrase."
      },
      {
        type: "fillBlank",
        prompt: "Complétez: Je ___ (dream) de devenir célèbre.",
        answer: "rêve"
      },
      {
        type: "multipleChoice",
        prompt: "Que signifie 'Un métier' ?",
        options: ["A job", "An interview", "An evening"],
        answer: "A job"
      },
    ]
  },

  // Lesson 3 - More complex sentences & writing
  {
    title: "Leçon 3 : Phrases plus complexes",
    questions: [
      {
        type: "translate",
        prompt: "Traduisez: 'At the age of five, I started to sing.'",
        answer: "À l’âge de cinq ans, j’ai commencé à chanter."
      },
      {
        type: "sentenceOrder",
        prompt: "Remettez en ordre: 'faire / carrière / Je / dans / la musique / veux'",
        answer: "Je veux faire carrière dans la musique"
      },
      {
        type: "fillBlank",
        prompt: "Complétez: Plusieurs fois, ___ (I dream) de gagner.",
        answer: "j’ai rêvé"
      },
      {
        type: "multipleChoice",
        prompt: "Que veut dire 'C’est le meilleur du monde' ?",
        options: ["It’s the best in the world", "It’s very hard", "It’s the last one"],
        answer: "It’s the best in the world"
      },
      {
        type: "writeShort",
        prompt: "Écrivez une phrase avec 'On m’a dit que...'"
      },
      {
        type: "match",
        prompt: "Associez les mots avec leurs traductions:",
        pairs: [
          ["J’espère", "I hope"],
          ["Gagner", "To win"],
          ["Dernier", "Last"]
        ]
      },
      {
        type: "multipleChoice",
        prompt: "Que signifie 'Une soirée' ?",
        options: ["An evening", "A competition", "A job"],
        answer: "An evening"
      },
      {
        type: "translate",
        prompt: "Traduisez: 'There will be an evening next Saturday.'",
        answer: "Il y aura une soirée samedi prochain."
      },
      {
        type: "fillBlank",
        prompt: "Complétez: Je ___ (hope) gagner le concours.",
        answer: "j’espère"
      },
      {
        type: "writeShort",
        prompt: "Écrivez une phrase avec 'Un concours'."
      },
    ]
  },

  // Lesson 4 - Add more writing & mixed practice
  {
    title: "Leçon 4 : Pratique mixte",
    questions: [
      {
        type: "multipleChoice",
        prompt: "Que signifie 'Il y aura' ?",
        options: ["There will be", "There is", "It is"],
        answer: "There will be"
      },
      {
        type: "translate",
        prompt: "Traduisez: 'I dream of having a career in singing.'",
        answer: "Je rêve de faire carrière dans le chant."
      },
      {
        type: "fillBlank",
        prompt: "Complétez: On m’a dit que ce sera ___.",
        answer: "dur"
      },
      {
        type: "match",
        prompt: "Associez les expressions avec leurs traductions:",
        pairs: [
          ["Devenir célèbre", "To become famous"],
          ["Avoir confiance", "To have confidence"],
          ["Plusieurs fois", "Several times"]
        ]
      },
      {
        type: "sentenceOrder",
        prompt: "Remettez en ordre: 'dernière / soirée / c’était / la / Samedi'",
        answer: "Samedi c’était la dernière soirée"
      },
      {
        type: "multipleChoice",
        prompt: "Que signifie 'J’espère' ?",
        options: ["I hope", "I dream", "I win"],
        answer: "I hope"
      },
      {
        type: "writeShort",
        prompt: "Écrivez une phrase avec 'Un métier'."
      },
      {
        type: "fillBlank",
        prompt: "Complétez: Je veux ___ (to become) célèbre.",
        answer: "devenir"
      },
      {
        type: "translate",
        prompt: "Traduisez: 'They told me that it is the best in the world.'",
        answer: "On m’a dit que c’est le meilleur du monde."
      },
      {
        type: "writeShort",
        prompt: "Écrivez un court paragraphe en utilisant au moins 3 mots du vocabulaire."
      },
    ]
  },

  // Lesson 5
  {
    title: "Leçon 5 : Exercices avancés",
    questions: [
      {
        type: "multipleChoice",
        prompt: "Que signifie 'Plusieurs fois' ?",
        options: ["Several times", "Once", "Never"],
        answer: "Several times"
      },
      {
        type: "translate",
        prompt: "Traduisez: 'I hope there will be an interview next Saturday.'",
        answer: "J’espère qu’il y aura un entretien samedi prochain."
      },
      {
        type: "fillBlank",
        prompt: "Complétez: J’ai ___ confiance en moi.",
        answer: "confiance"
      },
      {
        type: "sentenceOrder",
        prompt: "Remettez en ordre: 'dur / c’est / mais / je / rêve / de / réussir'",
        answer: "C’est dur mais je rêve de réussir"
      },
      {
        type: "multipleChoice",
        prompt: "Que veut dire 'Gagner' ?",
        options: ["To win", "To sing", "To hope"],
        answer: "To win"
      },
      {
        type: "writeShort",
        prompt: "Utilisez 'Dernier' dans une phrase."
      },
      {
        type: "match",
        prompt: "Associez:",
        pairs: [
          ["Un métier", "A job"],
          ["Une soirée", "An evening"],
          ["Un concours", "A competition"]
        ]
      },
      {
        type: "fillBlank",
        prompt: "Complétez: Je ___ (hope) devenir célèbre.",
        answer: "j’espère"
      },
      {
        type: "translate",
        prompt: "Traduisez: 'At the age of five, I dreamed of winning.'",
        answer: "À l’âge de cinq ans, je rêvais de gagner."
      },
      {
        type: "writeShort",
        prompt: "Racontez une soirée ou un concours que vous avez aimé."
      },
    ]
  },

  // Lesson 6
  {
    title: "Leçon 6 : Phrases plus longues",
    questions: [
      {
        type: "multipleChoice",
        prompt: "Que veut dire 'Faire carrière dans' ?",
        options: ["To have a career in", "To win", "To sing"],
        answer: "To have a career in"
      },
      {
        type: "fillBlank",
        prompt: "Complétez: Il y ___ un entretien important demain.",
        answer: "a"
      },
      {
        type: "translate",
        prompt: "Traduisez: 'They told me that it will be the last competition.'",
        answer: "On m’a dit que ce sera le dernier concours."
      },
      {
        type: "sentenceOrder",
        prompt: "Remettez en ordre: 'confiance / j’ai / toujours / en / moi'",
        answer: "J’ai toujours confiance en moi"
      },
      {
        type: "writeShort",
        prompt: "Écrivez une phrase avec 'Il y aura'."
      },
      {
        type: "multipleChoice",
        prompt: "Que signifie 'Je rêve' ?",
        options: ["I dream", "I hope", "I win"],
        answer: "I dream"
      },
      {
        type: "match",
        prompt: "Associez:",
        pairs: [
          ["Un entretien", "An interview"],
          ["Samedi prochain", "Next Saturday"],
          ["Dur", "Hard/difficult"]
        ]
      },
      {
        type: "fillBlank",
        prompt: "Complétez: Je ___ (dream) de chanter plusieurs fois.",
        answer: "rêve"
      },
      {
        type: "translate",
        prompt: "Traduisez: 'It’s the best in the world.'",
        answer: "C’est le meilleur du monde."
      },
      {
        type: "writeShort",
        prompt: "Décrivez un métier que vous aimeriez faire."
      },
    ]
  },

  // Lesson 7
  {
    title: "Leçon 7 : Vocabulaire et expressions",
    questions: [
      {
        type: "multipleChoice",
        prompt: "Que signifie 'On m’a dit que' ?",
        options: ["They told me that", "I hope", "I dream"],
        answer: "They told me that"
      },
      {
        type: "fillBlank",
        prompt: "Complétez: Je ___ (hope) réussir l’entretien.",
        answer: "j’espère"
      },
      {
        type: "translate",
        prompt: "Traduisez: 'There will be several evenings.'",
        answer: "Il y aura plusieurs soirées."
      },
      {
        type: "sentenceOrder",
        prompt: "Remettez en ordre: 'concours / dernier / samedi / le'",
        answer: "Le dernier concours samedi"
      },
      {
        type: "writeShort",
        prompt: "Écrivez une phrase avec 'Avoir confiance'."
      },
      {
        type: "multipleChoice",
        prompt: "Que veut dire 'Plusieurs fois' ?",
        options: ["Several times", "Once", "Never"],
        answer: "Several times"
      },
      {
        type: "match",
        prompt: "Associez:",
        pairs: [
          ["Un métier", "A job"],
          ["Un entretien", "An interview"],
          ["Une soirée", "An evening"]
        ]
      },
      {
        type: "fillBlank",
        prompt: "Complétez: Je ___ (dream) de devenir célèbre.",
        answer: "rêve"
      },
      {
        type: "translate",
        prompt: "Traduisez: 'I have confidence.'",
        answer: "J’ai confiance."
      },
      {
        type: "writeShort",
        prompt: "Décrivez une soirée mémorable."
      },
    ]
  },

  // Lesson 8
  {
    title: "Leçon 8 : Révision et production écrite",
    questions: [
      {
        type: "multipleChoice",
        prompt: "Que signifie 'J’espère' ?",
        options: ["I hope", "I dream", "I win"],
        answer: "I hope"
      },
      {
        type: "fillBlank",
        prompt: "Complétez: Il y ___ une soirée samedi prochain.",
        answer: "a"
      },
      {
        type: "translate",
        prompt: "Traduisez: 'I want to have a career in music.'",
        answer: "Je veux faire carrière dans la musique."
      },
      {
        type: "sentenceOrder",
        prompt: "Remettez en ordre: 'soirée / la / dernière / était / samedi'",
        answer: "La dernière soirée était samedi"
      },
      {
        type: "writeShort",
        prompt: "Écrivez un paragraphe sur vos rêves professionnels."
      },
      {
        type: "multipleChoice",
        prompt: "Que veut dire 'Dur' ?",
        options: ["Hard", "Easy", "Last"],
        answer: "Hard"
      },
      {
        type: "match",
        prompt: "Associez:",
        pairs: [
          ["Un concours", "A competition"],
          ["Samedi prochain", "Next Saturday"],
          ["Il y a", "There is/There are"]
        ]
      },
      {
        type: "fillBlank",
        prompt: "Complétez: J’___ (hope) réussir.",
        answer: "espère"
      },
      {
        type: "translate",
        prompt: "Traduisez: 'They told me that it will be hard.'",
        answer: "On m’a dit que ce sera dur."
      },
      {
        type: "writeShort",
        prompt: "Décrivez un entretien que vous avez passé."
      },
    ]
  },

  // Lesson 9
  {
    title: "Leçon 9 : Pratique complète",
    questions: [
      {
        type: "multipleChoice",
        prompt: "Que signifie 'Un métier' ?",
        options: ["A job", "An evening", "An interview"],
        answer: "A job"
      },
      {
        type: "translate",
        prompt: "Traduisez: 'I dream of becoming famous.'",
        answer: "Je rêve de devenir célèbre."
      },
      {
        type: "fillBlank",
        prompt: "Complétez: Il y ___ un entretien demain.",
        answer: "a"
      },
      {
        type: "sentenceOrder",
        prompt: "Remettez en ordre: 'dernier / concours / le / était / samedi'",
        answer: "Le dernier concours était samedi"
      },
      {
        type: "writeShort",
        prompt: "Écrivez une phrase avec 'Plusieurs fois'."
      },
      {
        type: "multipleChoice",
        prompt: "Que veut dire 'Chanter' ?",
        options: ["To sing", "To hope", "To win"],
        answer: "To sing"
      },
      {
        type: "match",
        prompt: "Associez:",
        pairs: [
          ["Une soirée", "An evening"],
          ["Gagner", "To win"],
          ["Dernier", "Last"]
        ]
      },
      {
        type: "fillBlank",
        prompt: "Complétez: J’___ (hope) participer.",
        answer: "espère"
      },
      {
        type: "translate",
        prompt: "Traduisez: 'There will be a competition next Saturday.'",
        answer: "Il y aura un concours samedi prochain."
      },
      {
        type: "writeShort",
        prompt: "Décrivez une compétition à laquelle vous avez assisté."
      },
    ]
  },

  // Lesson 10
  {
    title: "Leçon 10 : Révision finale",
    questions: [
      {
        type: "multipleChoice",
        prompt: "Que signifie 'Il y a' ?",
        options: ["There is/There are", "To sing", "Last"],
        answer: "There is/There are"
      },
      {
        type: "fillBlank",
        prompt: "Complétez: J’___ (hope) réussir.",
        answer: "espère"
      },
      {
        type: "translate",
        prompt: "Traduisez: 'I have confidence.'",
        answer: "J’ai confiance."
      },
      {
        type: "sentenceOrder",
        prompt: "Remettez en ordre: 'soirée / une / il / y / aura / samedi prochain'",
        answer: "Il y aura une soirée samedi prochain"
      },
      {
        type: "writeShort",
        prompt: "Écrivez un court paragraphe sur un entretien."
      },
      {
        type: "multipleChoice",
        prompt: "Que veut dire 'Dur' ?",
        options: ["Hard", "Easy", "Last"],
        answer: "Hard"
      },
      {
        type: "match",
        prompt: "Associez:",
        pairs: [
          ["Un concours", "A competition"],
          ["Faire carrière dans", "To have a career in"],
          ["Dernier", "Last"]
        ]
      },
      {
        type: "fillBlank",
        prompt: "Complétez: Je ___ (dream) de chanter.",
        answer: "rêve"
      },
      {
        type: "translate",
        prompt: "Traduisez: 'They told me it will be hard.'",
        answer: "On m’a dit que ce sera dur."
      },
      {
        type: "writeShort",
        prompt: "Décrivez vos rêves professionnels."
      },
    ]
  }
];

// State vars
let currentLessonIndex = 0;
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 0;

// DOM refs
const lessonTitleEl = document.getElementById("lesson-title");
const quizEl = document.getElementById("quiz");
const progressEl = document.getElementById("progress");
const resultEl = document.getElementById("result");

// Initialize total questions count
lessons.forEach(lesson => totalQuestions += lesson.questions.length);

// Render lesson and question
function renderLesson() {
  resultEl.style.display = "none";
  const lesson = lessons[currentLessonIndex];
  lessonTitleEl.textContent = lesson.title;
  const q = lesson.questions[currentQuestionIndex];

  progressEl.textContent = `Leçon ${currentLessonIndex + 1} / ${lessons.length} - Question ${currentQuestionIndex + 1} / ${lesson.questions.length}`;

  quizEl.innerHTML = "";

  // Show prompt
  const promptEl = document.createElement("p");
  promptEl.textContent = q.prompt;
  quizEl.appendChild(promptEl);

  // Render input type based on question type
  if (q.type === "multipleChoice") {
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => {
        if (option === q.answer) {
          btn.classList.add("correct");
          score++;
        } else {
          btn.classList.add("incorrect");
          // Highlight correct answer button
          [...quizEl.querySelectorAll("button")].forEach(b => {
            if (b.textContent === q.answer) {
              b.classList.add("correct");
            }
          });
        }
        disableButtons();
        setTimeout(nextQuestion, 1000);
      };
      quizEl.appendChild(btn);
    });
  } else if (q.type === "translate" || q.type === "fillBlank" || q.type === "writeShort") {
    const input = document.createElement("input");
    input.type = "text";
    input.style.width = "100%";
    input.autocomplete = "off";
    input.placeholder = "Votre réponse ici...";
    quizEl.appendChild(input);

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Soumettre";
    submitBtn.onclick = () => {
      const userAnswer = input.value.trim().toLowerCase();
      if (!userAnswer) return alert("Veuillez entrer une réponse.");

      if (q.type === "writeShort") {
        // No strict answer check, just encourage writing
        alert("Merci pour votre réponse !");
        score++;
        nextQuestion();
      } else {
        if (userAnswer === q.answer.toLowerCase()) {
          alert("Bonne réponse !");
          score++;
        } else {
          alert(`Mauvaise réponse. La bonne réponse était: ${q.answer}`);
        }
        nextQuestion();
      }
    };
    quizEl.appendChild(submitBtn);

  } else if (q.type === "match") {
    // Matching pairs shuffled
    const pairs = shuffleArray(q.pairs);
    pairs.forEach(pair => {
      const pairEl = document.createElement("div");
      pairEl.style.margin = "0.3rem 0";
      pairEl.textContent = `${pair[0]} = ${pair[1]}`;
      quizEl.appendChild(pairEl);
    });

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Suivant";
    nextBtn.onclick = nextQuestion;
    quizEl.appendChild(nextBtn);
  } else if (q.type === "sentenceOrder") {
    const correctAnswer = q.answer;
    const words = q.prompt.match(/\b\w+\b/g); // get words from prompt

    // We'll do a simple drag reorder or clickable order buttons:
    // For simplicity: show scrambled words as buttons user clicks in order, then submit.

    let chosenWords = [];
    const scramble = shuffleArray(correctAnswer.split(" "));

    const container = document.createElement("div");
    container.style.margin = "1rem 0";

    scramble.forEach(word => {
      const wordBtn = document.createElement("button");
      wordBtn.textContent = word;
      wordBtn.style.margin = "0.2rem";
      wordBtn.onclick = () => {
        chosenWords.push(word);
        wordBtn.disabled = true;
        displayChosenWords();
      };
      container.appendChild(wordBtn);
    });

    quizEl.appendChild(container);

    const chosenEl = document.createElement("p");
    chosenEl.style.fontWeight = "bold";
    chosenEl.style.marginTop = "1rem";
    quizEl.appendChild(chosenEl);

    function displayChosenWords() {
      chosenEl.textContent = "Phrase construite: " + chosenWords.join(" ");
      if (chosenWords.length === scramble.length) {
        if (chosenWords.join(" ") === correctAnswer) {
          alert("Bonne réponse !");
          score++;
        } else {
          alert(`Mauvaise réponse. La bonne réponse était: ${correctAnswer}`);
        }
        nextQuestion();
      }
    }
  }
}

function disableButtons() {
  const buttons = quizEl.querySelectorAll("button");
  buttons.forEach(b => b.disabled = true);
}

function nextQuestion() {
  const lesson = lessons[currentLessonIndex];
  currentQuestionIndex++;
  if (currentQuestionIndex >= lesson.questions.length) {
    // End of lesson
    alert(`Leçon terminée! Vous avez obtenu ${score} points.`);
    currentQuestionIndex = 0;
  }
  renderLesson();
}

function prevLesson() {
  if (currentLessonIndex > 0) {
    currentLessonIndex--;
    currentQuestionIndex = 0;
    renderLesson();
  }
}

function nextLesson() {
  if (currentLessonIndex < lessons.length - 1) {
    currentLessonIndex++;
    currentQuestionIndex = 0;
    renderLesson();
  } else {
    // Show final result
    alert(`Félicitations! Vous avez terminé toutes les leçons avec un score total de ${score} sur ${totalQuestions}.`);
  }
}

function shuffleArray(arr) {
  let a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Start app
renderLesson();