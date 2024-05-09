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
  level1: {
    questions: [
      {
        question: "What is the Synonym for <u>beautiful</u>?",
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
          fourthChoice: ["Good", "Good - to be desired or approved of.", false],
        },
      },
      {
        question: "What is the Synonym for <u>happy</u>?",
        answers: {
          firstChoice: [
            "Joyful",
            "Joyful - feeling, expressing, or causing great pleasure and happiness.",
            true,
          ],
          secondChoice: [
            "Sad",
            "Sad - feeling or showing sorrow; unhappy.",
            false,
          ],
          thirdChoice: [
            "Angry",
            "Angry - feeling or showing strong annoyance, displeasure, or hostility.",
            false,
          ],
          fourthChoice: [
            "Excited",
            "Excited - very enthusiastic and eager.",
            false,
          ],
        },
      },
    ],
  },
  level2: {
    questions: [
      {
        question: "What is the Synonym for <u>brave</u>?",
        answers: {
          firstChoice: [
            "Courageous",
            "Courageous - not deterred by danger or pain; brave.",
            true,
          ],
          secondChoice: [
            "Fearful",
            "Fearful - feeling afraid; showing fear or anxiety.",
            false,
          ],
          thirdChoice: [
            "Stupid",
            "Stupid - lacking intelligence or common sense.",
            false,
          ],
          fourthChoice: ["Cowardly", "Cowardly - lacking courage.", false],
        },
      },
      {
        question: "What is the Synonym for <u>hardworking</u>?",
        answers: {
          firstChoice: [
            "Diligent",
            "Diligent - having or showing care and conscientiousness in one's work or duties.",
            true,
          ],
          secondChoice: [
            "Lazy",
            "Lazy - unwilling to work or use energy.",
            false,
          ],
          thirdChoice: [
            "Clever",
            "Clever - quick to understand, learn, and devise or apply ideas; intelligent.",
            false,
          ],
          fourthChoice: [
            "Sloppy",
            "Sloppy - careless and unsystematic; excessively casual.",
            false,
          ],
        },
      },
    ],
  },
  level3: {
    questions: [
      {
        question: "What is the Synonym for <u>large</u>?",
        answers: {
          firstChoice: ["Huge", "Huge - extremely large; enormous.", true],
          secondChoice: ["Tiny", "Tiny - very small.", false],
          thirdChoice: [
            "Quick",
            "Quick - moving fast or doing something in a short time.",
            false,
          ],
          fourthChoice: [
            "Slow",
            "Slow - moving or operating at a low speed.",
            false,
          ],
        },
      },
      {
        question: "What is the Synonym for <u>intelligent</u>?",
        answers: {
          firstChoice: [
            "Smart",
            "Smart - having or showing a quick-witted intelligence.",
            true,
          ],
          secondChoice: [
            "Dull",
            "Dull - lacking interest or excitement.",
            false,
          ],
          thirdChoice: [
            "Kind",
            "Kind - having or showing a friendly, generous, and considerate nature.",
            false,
          ],
          fourthChoice: [
            "Cruel",
            "Cruel - wilfully causing pain or suffering to others, or feeling no concern about it.",
            false,
          ],
        },
      },
    ],
  },
};
