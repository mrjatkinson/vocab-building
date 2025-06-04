const lessons = [
  {
    title: "Lesson 1: Basic Vocabulary",
    questions: [
      {
        prompt: "Que signifie 'un entretien' ?",
        options: ["An interview", "A concert", "A party", "A story"],
        answer: "An interview"
      },
      {
        prompt: "Que veut dire 'il y a' ?",
        options: ["There is/There are", "There will be", "There was", "There can be"],
        answer: "There is/There are"
      }
    ]
  },
  {
    title: "Lesson 2: Talking About Time",
    questions: [
      {
        prompt: "'Dernier' veut dire...",
        options: ["Last/latest", "Next", "First", "New"],
        answer: "Last/latest"
      },
      {
        prompt: "'Il y aura' signifie...",
        options: ["There will be", "There is", "There was", "There can be"],
        answer: "There will be"
      }
    ]
  },
  {
    title: "Lesson 3: Performing Arts & Emotions",
    questions: [
      {
        prompt: "Que veut dire 'chanter' ?",
        options: ["To dance", "To act", "To sing", "To speak"],
        answer: "To sing"
      },
      {
        prompt: "Que signifie 'avoir confiance' ?",
        options: ["To be worried", "To have confidence", "To be confused", "To get lucky"],
        answer: "To have confidence"
      }
    ]
  },
  {
    title: "Lesson 4: Time Expressions",
    questions: [
      {
        prompt: "Que veut dire 'une soirée' ?",
        options: ["A weekend", "An evening", "A lunch", "A holiday"],
        answer: "An evening"
      },
      {
        prompt: "'Samedi prochain' signifie...",
        options: ["Last Saturday", "Every Saturday", "Next Saturday", "Tomorrow"],
        answer: "Next Saturday"
      }
    ]
  },
  {
    title: "Lesson 5: Competitions & Success",
    questions: [
      {
        prompt: "Que veut dire 'un concours' ?",
        options: ["A test", "A contest/competition", "A concert", "A class"],
        answer: "A contest/competition"
      },
      {
        prompt: "Que signifie 'gagner' ?",
        options: ["To run", "To enter", "To win", "To leave"],
        answer: "To win"
      }
    ]
  },
  {
    title: "Lesson 6: Dreams & Aspirations",
    questions: [
      {
        prompt: "Que veut dire 'je rêve' ?",
        options: ["I sleep", "I dream", "I think", "I hope"],
        answer: "I dream"
      },
      {
        prompt: "'Faire carrière dans' signifie...",
        options: ["To find a hobby", "To do nothing", "To have a career in", "To go travelling"],
        answer: "To have a career in"
      }
    ]
  },
  {
    title: "Lesson 7: Famous People",
    questions: [
      {
        prompt: "Que signifie 'devenir célèbre' ?",
        options: ["To get a job", "To become famous", "To become rich", "To move away"],
        answer: "To become famous"
      },
      {
        prompt: "'Connu(e)' veut dire...",
        options: ["Known", "Lost", "Ordinary", "Excited"],
        answer: "Known"
      }
    ]
  },
  {
    title: "Lesson 8: Opinions & Superlatives",
    questions: [
      {
        prompt: "'C’est le meilleur du monde' signifie...",
        options: ["It’s the most boring", "It’s the most expensive", "It’s the best in the world", "It’s the longest"],
        answer: "It’s the best in the world"
      },
      {
        prompt: "Que veut dire 'dur' ?",
        options: ["Easy", "Fun", "Hard/Difficult", "Quick"],
        answer: "Hard/Difficult"
      }
    ]
  },
  {
    title: "Lesson 9: Telling Stories",
    questions: [
      {
        prompt: "'À l’âge de cinq ans' veut dire...",
        options: ["At age 15", "At age 5", "When I was a teenager", "When I was a baby"],
        answer: "At age 5"
      },
      {
        prompt: "'On m’a dit que' signifie...",
        options: ["I forgot that", "They told me that", "They asked me if", "I told them that"],
        answer: "They told me that"
      }
    ]
  },
  {
    title: "Lesson 10: Final Quiz",
    questions: [
      {
        prompt: "Que signifie 'plusieurs fois' ?",
        options: ["Never", "One time", "Sometimes", "Several times"],
        answer: "Several times"
      },
      {
        prompt: "Un 'métier' est...",
        options: ["A trip", "A movie", "A job", "A house"],
        answer: "A job"
      }
    ]
  }
];

let currentLesson = 0;
let totalCorrect = 0;
let totalQuestions = 0;

function renderLesson(index) {
  const lesson = lessons[index];
  document.getElementById("lesson-title").textContent = lesson.title;
  const quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = "";
  lesson.questions.forEach((q, i) => {
    const qDiv = document.createElement("div");
    qDiv.innerHTML = `<p><strong>Q${i + 1}:</strong> ${q.prompt}</p>`;
    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => {
        if (btn.disabled) return;
        totalQuestions++;
        if (opt === q.answer) {
          btn.classList.add("correct");
          totalCorrect++;
        } else {
          btn.classList.add("incorrect");
        }
        Array.from(btn.parentNode.children).forEach(b => b.disabled = true);
        updateProgress();
        if (index === lessons.length - 1 && i === lesson.questions.length - 1) {
          document.getElementById("result").style.display = "block";
          document.getElementById("result").textContent =
            `Quiz terminé ! Vous avez eu ${totalCorrect} bonnes réponses sur ${totalQuestions} soit ${(totalCorrect / totalQuestions * 100).toFixed(1)}%.`;
        }
      };
      qDiv.appendChild(btn);
    });
    quizDiv.appendChild(qDiv);
  });
  updateProgress();
}

function updateProgress() {
  document.getElementById("progress").textContent =
    `Leçon ${currentLesson + 1} sur ${lessons.length}`;
}

function nextLesson() {
  if (currentLesson < lessons.length - 1) {
    currentLesson++;
    renderLesson(currentLesson);
  }
}

function prevLesson() {
  if (currentLesson > 0) {
    currentLesson--;
    renderLesson(currentLesson);
  }
}

renderLesson(currentLesson);