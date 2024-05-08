const attacks = {
  Tackle: {
    name: "Tackle",
    damage: 10,
    type: "Normal",
  },
  Fireball: {
    name: "Fireball",
    damage: 25,
    type: "Fire",
  },
};

const level = {
  questions: [
    {
      question: "What is the Synonyms for <u>beautiful</u>",
      answers: {
        firstChoice: [
          "Aesthetic",
          "Aesthetic - a particular theory or conception of beauty or art",
          true,
        ],
        secondChoice: [
          "Ugly",
          "Ugly - unpleasant or repulsive, especially in appearance.",
          false,
        ],
        thirdChoice: [
          "Funny",
          "Funny - causing laughter or amusement; humorous.",
          false,
        ],
        fourthChoice: ["Good", "Good - to be desired or approved of.", true],
      },
    },
    {
      question: "What is the Antonym for <u>happy</u>",
      answers: {
        firstChoice: ["Sad", "Sad - feeling or showing sorrow; unhappy.", true],
        secondChoice: [
          "Excited",
          "Excited - very enthusiastic and eager.",
          false,
        ],
        thirdChoice: [
          "Joyful",
          "Joyful - feeling, expressing, or causing great pleasure and happiness.",
          false,
        ],
        fourthChoice: ["Merry", "Merry - cheerful and lively.", false],
      },
    },
    {
      question: "What is the Synonyms for <u>angry</u>",
      answers: {
        firstChoice: ["Furious", "Furious - extremely angry.", true],
        secondChoice: [
          "Calm",
          "Calm - not showing or feeling nervousness, anger, or other strong emotions.",
          false,
        ],
        thirdChoice: [
          "Peaceful",
          "Peaceful - free from disturbance; tranquil.",
          false,
        ],
        fourthChoice: [
          "Content",
          "Content - in a state of peaceful happiness.",
          false,
        ],
      },
    },
    // Add more questions here
  ],
};
