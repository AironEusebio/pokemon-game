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
        firstChoice: ["Aesthetic", true],
        secondChoice: ["Ugly", false],
        thirdChoice: ["Funny", false],
        fourthChoice: ["Good", true],
      },
    },
    {
      question: "What is the capital of France?",
      answers: {
        firstChoice: ["London", false],
        secondChoice: ["Paris", true],
        thirdChoice: ["Berlin", false],
        fourthChoice: ["Madrid", false],
      },
    },
    {
      question: "Who wrote Romeo and Juliet?",
      answers: {
        firstChoice: ["William Shakespeare", true],
        secondChoice: ["Jane Austen", false],
        thirdChoice: ["Charles Dickens", false],
        fourthChoice: ["Mark Twain", false],
      },
    },
  ],
};
