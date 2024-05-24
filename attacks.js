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
      {
        question: "What is the Antonym for <u>abundant</u>?",
        answers: {
          firstChoice: [
            "Scarce",
            "Scarce - Existing in large quantities vs. existing only in small amounts.",
            true,
          ],
          secondChoice: [
            "Serendipity",
            "Serendipity - The occurrence and development of events by chance in a happy or beneficial way.",
            false,
          ],
          thirdChoice: [
            "Ephemeral",
            "Ephemeral - Lasting for a very short time.",
            false,
          ],
          fourthChoice: [
            "Quixotic",
            "Quixotic - Exceedingly idealistic; unrealistic and impractical.",
            false,
          ],
        },
      },
      {
        question: "What is the Antonym for <u>ancient</u>?",
        answers: {
          firstChoice: [
            "Modern",
            "Modern: Belonging to the very distant past vs. belonging to the present time.",
            true,
          ],
          secondChoice: [
            "Incandescent",
            "Incandescent - Emitting light as a result of being heated.",
            false,
          ],
          thirdChoice: [
            "Melancholy",
            "Melancholy - A feeling of pensive sadness, typically with no obvious cause.",
            false,
          ],
          fourthChoice: [
            "Clandestine",
            "Clandestine - Kept secret or done secretively, especially because illicit.",
            false,
          ],
        },
      },
      {
        question: "What is the Antonym for <u>conceal</u>?",
        answers: {
          firstChoice: [
            "Reveal",
            "Reveal -  to make something known that was previously secret or unknown.",
            true,
          ],
          secondChoice: [
            "Melancholy",
            "Melancholy - A feeling of pensive sadness, typically with no obvious cause.",
            false,
          ],
          thirdChoice: ["Brisk", "Brisk - Quick and active; lively.", false],
          fourthChoice: [
            "Voracious",
            "Voracious - Wanting or devouring great quantities of food; having a very eager approach to an activity.",
            false,
          ],
        },
      },
      {
        question: "What is the Antonym for <u>innocent</u>?",
        answers: {
          firstChoice: [
            "Guilty",
            "Guilty - Not responsible for or directly involved in an event vs. responsible for a crime or wrongdoing.",
            true,
          ],
          secondChoice: [
            "Genuine",
            "Genuine - Truly what something is said to be; authentic.",
            false,
          ],
          thirdChoice: [
            "Inquisitive",
            "Inquisitive - Curious or inquiring.",
            false,
          ],
          fourthChoice: [
            "Perplexed",
            "Perplexed - Completely baffled; very puzzled.",
            false,
          ],
        },
      },
      {
        question: "What is the Antonym for <u>knowledgeable</u>?",
        answers: {
          firstChoice: [
            "Ignorant",
            "Ignorant - Having or showing knowledge or awareness vs. lacking knowledge or awareness.",
            true,
          ],
          secondChoice: [
            "Radiant",
            "Radiant - Sending out light; shining or glowing brightly.",
            false,
          ],
          thirdChoice: [
            "Tranquil",
            "Tranquil - Free from disturbance; calm.",
            false,
          ],
          fourthChoice: [
            "Whimsical",
            "Whimsical - Playfully quaint or fanciful, especially in an appealing and amusing way.",
            false,
          ],
        },
      },
      {
        question: "What is the Synonym for <u>ecstatic</u>?",
        answers: {
          firstChoice: [
            "Euphoric",
            "Euphoric - feeling or expressing overwhelming happiness or joyful excitement",
            true,
          ],
          secondChoice: [
            "Nostalgic",
            "Nostalgic - Characterized by or exhibiting feelings of nostalgia, a sentimental longing or wistful affection for the past.",
            false,
          ],
          thirdChoice: [
            "Gregarious",
            "Gregarious - Fond of company; sociable.",
            false,
          ],
          fourthChoice: [
            "Resilient",
            "Resilient - Able to withstand or recover quickly from difficult conditions.",
            false,
          ],
        },
      },
      {
        question: "What is the Synonym for <u>enormous</u>?",
        answers: {
          firstChoice: ["Immense", "Immense - extremely large or huge", true],
          secondChoice: [
            "Vibrant",
            "Vibrant - Full of energy and life.",
            false,
          ],
          thirdChoice: [
            "Serenade",
            "Serenade - A piece of music sung or played in the open air, typically by a man at night under the window of his beloved.",
            false,
          ],
          fourthChoice: [
            "Spontaneous",
            "Spontaneous - Performed or occurring as a result of a sudden impulse or inclination and without premeditation or external stimulus.",
            false,
          ],
        },
      },
      {
        question: "What is the Synonym for <u>sluggish</u>?",
        answers: {
          firstChoice: [
            "Lethargic",
            "Lethargic: slow-moving or lacking in energy",
            true,
          ],
          secondChoice: [
            "Adventurous",
            "Adventurous - Willing to take risks or to try out new methods, ideas, or experiences.",
            false,
          ],
          thirdChoice: [
            "Eloquent",
            "Eloquent - Fluent or persuasive in speaking or writing.",
            false,
          ],
          fourthChoice: [
            "Exuberant",
            "Exuberant - Filled with or characterized by a lively energy and excitement.",
            false,
          ],
        },
      },
      {
        question: "What is the Synonym for <u>diminutive</u>?",
        answers: {
          firstChoice: [
            "Petite",
            "Petite: extremely or unusually small.",
            true,
          ],
          secondChoice: [
            "Mysterious",
            "Mysterious - Difficult or impossible to understand, explain, or identify.",
            false,
          ],
          thirdChoice: [
            "Vivid",
            "Vivid - Producing powerful feelings or strong, clear images in the mind.",
            false,
          ],
          fourthChoice: [
            "Courageous",
            "Courageous - Not deterred by danger or pain; brave.",
            false,
          ],
        },
      },
      {
        question: "What is the Synonym for <u>lofty</u>?",
        answers: {
          firstChoice: [
            "Towering",
            "Towering - impressively high or tall",
            true,
          ],
          secondChoice: [
            "Amiable",
            "Amiable - Having or displaying a friendly and pleasant manner.",
            false,
          ],
          thirdChoice: [
            "Inquisitive",
            "Inquisitive - Curious or inquiring.",
            false,
          ],
          fourthChoice: [
            "Exuberant",
            "Exuberant - Filled with or characterized by a lively energy and excitement.",
            false,
          ],
        },
      },
      {
        question: "What is the Synonym for <u>courageous</u>?",
        answers: {
          firstChoice: [
            "Mysterious",
            "Mysterious - Difficult or impossible to understand, explain, or identify.",
            false,
          ],
          secondChoice: [
            "Brave",
            "Brave - Not deterred by any danger or pain.",
            true,
          ],
          thirdChoice: [
            "Wealthy",
            "Wealthy - Having a great deal of money, resources, or assets.",
            false,
          ],
          fourthChoice: [
            "Generous",
            "Generous - Well meaning and kindly.",
            false,
          ],
        },
      },
      {
        question: "What is the Synonym for <u>fragile</u>?",
        answers: {
          firstChoice: [
            "Delicate",
            "Delicate - Easily broken or damaged.",
            true,
          ],
          secondChoice: [
            "Warm",
            "Warm - Having a moderate degree of heat.",
            false,
          ],
          thirdChoice: [
            "Sturdy",
            "Sturdy - Strongly and solidly built.",
            false,
          ],
          fourthChoice: [
            "Barren",
            "Barren - deserted of people and in a state of bleak and dismal emptiness.",
            false,
          ],
        },
      },
      {
        question: "What is the Synonym for <u>joyful</u>?",
        answers: {
          firstChoice: [
            "Eloquent",
            "Eloquent - Fluent or persuasive in speaking or writing.",
            false,
          ],
          secondChoice: [
            "Placid",
            "Placid - not easily upset or excited.",
            false,
          ],
          thirdChoice: [
            "Creative",
            "Creative - featuring new methods; advanced and original.",
            false,
          ],
          fourthChoice: [
            "Elated",
            "Elated - Feeling, expressing, or causing great pleasure and happiness.",
            true,
          ],
        },
      },
      {
        question: "What is the Antonym for <u>fast</u>?",
        answers: {
          firstChoice: [
            "Slow",
            "Slow - moving or operating at a low speed.",
            true,
          ],
          secondChoice: [
            "Quick",
            "Quick - moving fast or doing something in a short time.",
            false,
          ],
          thirdChoice: [
            "Rapid",
            "Rapid - happening in a short time or at a fast pace.",
            false,
          ],
          fourthChoice: [
            "Swift",
            "Swift - happening quickly or promptly.",
            false,
          ],
        },
      },

      {
        question: "What is the Antonym for <u>big</u>?",
        answers: {
          firstChoice: [
            "Small",
            "Small - of a size that is less than normal or usual.",
            true,
          ],
          secondChoice: [
            "Large",
            "Large - of considerable or relatively great size, extent, or capacity.",
            false,
          ],
          thirdChoice: ["Huge", "Huge - extremely large; enormous.", false],
          fourthChoice: [
            "Massive",
            "Massive - large and heavy or solid.",
            false,
          ],
        },
      },

      {
        question: "What is the Antonym for <u>fast</u>?",
        answers: {
          firstChoice: [
            "Slow",
            "Slow - moving or operating at a low speed.",
            true,
          ],
          secondChoice: [
            "Quick",
            "Quick - moving fast or doing something in a short time.",
            false,
          ],
          thirdChoice: [
            "Rapid",
            "Rapid - happening in a short time or at a fast pace.",
            false,
          ],
          fourthChoice: [
            "Swift",
            "Swift - happening quickly or promptly.",
            false,
          ],
        },
      },

      {
        question: "What is the Antonym for <u>big</u>?",
        answers: {
          firstChoice: [
            "Small",
            "Small - of a size that is less than normal or usual.",
            true,
          ],
          secondChoice: [
            "Large",
            "Large - of considerable or relatively great size, extent, or capacity.",
            false,
          ],
          thirdChoice: ["Huge", "Huge - extremely large; enormous.", false],
          fourthChoice: [
            "Massive",
            "Massive - large and heavy or solid.",
            false,
          ],
        },
      },

      {
        question: "What is the Antonym for <u>intelligent</u>?",
        answers: {
          firstChoice: [
            "Ignorant",
            "Ignorant - Lacking knowledge, information, or awareness about a particular thing.",
            true,
          ],
          secondChoice: [
            "Stupid",
            "Stupid - Lacking intelligence or common sense.",
            false,
          ],
          thirdChoice: [
            "Uneducated",
            "Uneducated - Not having been educated to a high standard.",
            false,
          ],
          fourthChoice: [
            "Dumb",
            "Dumb - Temporarily unable or unwilling to speak.",
            false,
          ],
        },
      },

      {
        question: "What is the Antonym for <u>calm</u>?",
        answers: {
          firstChoice: [
            "Agitated",
            "Agitated - Feeling or appearing troubled or nervous.",
            true,
          ],
          secondChoice: [
            "Stressed",
            "Stressed - Experiencing mental or emotional strain or tension.",
            false,
          ],
          thirdChoice: [
            "Excited",
            "Excited - Very enthusiastic and eager.",
            false,
          ],
          fourthChoice: [
            "Relaxed",
            "Relaxed - Free from tension and anxiety; at ease.",
            false,
          ],
        },
      },

      {
        question: "What is the Antonym for <u>happy</u>?",
        answers: {
          firstChoice: [
            "Sad",
            "Sad - Feeling or showing sorrow; unhappy.",
            true,
          ],
          secondChoice: [
            "Miserable",
            "Miserable - Wretchedly unhappy or uncomfortable.",
            false,
          ],
          thirdChoice: [
            "Joyless",
            "Joyless - Lacking happiness or joy.",
            false,
          ],
          fourthChoice: [
            "Depressed",
            "Depressed - In a state of general unhappiness or despondency.",
            false,
          ],
        },
      },

      {
        question: "What is the Antonym for <u>brave</u>?",
        answers: {
          firstChoice: [
            "Cowardly",
            "Cowardly - Lacking courage; fearful.",
            true,
          ],
          secondChoice: [
            "Timid",
            "Timid - Showing a lack of courage or confidence; easily frightened.",
            false,
          ],
          thirdChoice: [
            "Fearful",
            "Fearful - Feeling afraid; showing fear or anxiety.",
            false,
          ],
          fourthChoice: ["Scared", "Scared - Afraid; frightened.", false],
        },
      },

      {
        question: "What is the Antonym for <u>beautiful</u>?",
        answers: {
          firstChoice: [
            "Ugly",
            "Ugly - Unpleasant or repulsive, especially in appearance.",
            true,
          ],
          secondChoice: [
            "Plain",
            "Plain - Not particularly beautiful or attractive.",
            false,
          ],
          thirdChoice: [
            "Homely",
            "Homely - Unattractive in appearance.",
            false,
          ],
          fourthChoice: [
            "Hideous",
            "Hideous - Ugly or disgusting to look at.",
            false,
          ],
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
            "Grumpy",
            "Grumpy - bad-tempered and sulky; easily annoyed.",
            false,
          ],
          thirdChoice: [
            "Cheerful",
            "Cheerful - noticeably happy and optimistic.",
            false,
          ],
          fourthChoice: [
            "Sad",
            "Sad - feeling or showing sorrow; unhappy.",
            false,
          ],
        },
      },

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
            "Bold",
            "(of a person, action, or idea) showing an ability to take risks; confident and courageous.",
            false,
          ],
          fourthChoice: [
            "Timid",
            "Timid - showing a lack of courage or confidence; easily frightened.",
            false,
          ],
        },
      },

      {
        question: "What is the Synonym for <u>beautiful</u>?",
        answers: {
          firstChoice: [
            "Gorgeous",
            "Gorgeous - beautiful; very attractive.",
            true,
          ],
          secondChoice: [
            "Ugly",
            "Ugly - unpleasant or repulsive, especially in appearance.",
            false,
          ],
          thirdChoice: [
            "Stunning",
            "Stunning - extremely impressive or attractive.",
            false,
          ],
          fourthChoice: [
            "Hideous",
            "Hideous - ugly or disgusting to look at.",
            false,
          ],
        },
      },

      {
        question: "What is the Synonym for <u>calm</u>?",
        answers: {
          firstChoice: [
            "Serene",
            "Serene - calm, peaceful, and untroubled; tranquil.",
            true,
          ],
          secondChoice: [
            "Agitated",
            "Agitated - feeling or appearing troubled or nervous.",
            false,
          ],
          thirdChoice: [
            "Relaxed",
            "Relaxed - free from tension and anxiety; at ease.",
            false,
          ],
          fourthChoice: [
            "Hysterical",
            "Hysterical - deriving from or affected by uncontrolled extreme emotion.",
            false,
          ],
        },
      },

      {
        question: "What is the Synonym for <u>confident</u>?",
        answers: {
          firstChoice: [
            "Self-assured",
            "Self-assured - confident in one's own abilities or character.",
            true,
          ],
          secondChoice: [
            "Doubtful",
            "Doubtful - feeling or showing doubt; uncertain.",
            false,
          ],
          thirdChoice: ["Assured", "Assured - guaranteed; sure.", false],
          fourthChoice: [
            "Insecure",
            "Insecure - not confident or assured; uncertain and anxious.",
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
            "Clever",
            "Clever - Quick to understand, learn, and devise or apply ideas.",
            false,
          ],
          thirdChoice: [
            "Bright",
            "Bright - Quick to learn or understand; intelligent.",
            false,
          ],
          fourthChoice: [
            "Sharp",
            "Sharp - Quick to notice, understand, or react.",
            false,
          ],
        },
      },

      {
        question: "What is the Synonym for <u>calm</u>?",
        answers: {
          firstChoice: [
            "Serene",
            "Serene - calm, peaceful, and untroubled; tranquil.",
            true,
          ],
          secondChoice: [
            "Tranquil",
            "Tranquil - free from disturbance; calm.",
            false,
          ],
          thirdChoice: [
            "Peaceful",
            "Peaceful - Free from disturbance; tranquil.",
            false,
          ],
          fourthChoice: [
            "Relaxed",
            "Relaxed - free from tension and anxiety; at ease.",
            false,
          ],
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
            "Content",
            "Content - In a state of peaceful happiness.",
            false,
          ],
          thirdChoice: [
            "Cheerful",
            "Cheerful - noticeably happy and optimistic.",
            false,
          ],
          fourthChoice: [
            "Delighted",
            "Delighted - Feeling or showing great pleasure.",
            false,
          ],
        },
      },
      {
        question: "What is the Synonym for <u>brave</u>?",
        answers: {
          firstChoice: [
            "Courageous",
            "Courageous - not deterred by danger or pain; brave.",
            true,
          ],
          secondChoice: ["Fearless", "Fearless - Lacking fear.", false],
          thirdChoice: [
            "Valiant",
            "Valiant - Showing courage or determination.",
            false,
          ],
          fourthChoice: ["Gallant", "Gallant - Brave; heroic.", false],
        },
      },

      {
        question: "What is the Synonym for <u>beautiful</u>?",
        answers: {
          firstChoice: [
            "Gorgeous",
            "Gorgeous - beautiful; very attractive.",
            true,
          ],
          secondChoice: [
            "Stunning",
            "Stunning - extremely impressive or attractive.",
            false,
          ],
          thirdChoice: [
            "Exquisite",
            "Exquisite - Extremely beautiful and, typically, delicate.",
            false,
          ],
          fourthChoice: [
            "Lovely",
            "Lovely - very beautiful or attractive.",
            false,
          ],
        },
      },
      {
        question: "What is the synonym of <u>Tranquility</u>?",
        answers: {
          firstChoice: [
            "Calmness",
            "Calmness - A state of peace of mind, free from agitation or excitement.",
            true,
          ],
          secondChoice: [
            "Annoyance",
            "Annoyance - A feeling of mild displeasure or irritation.",
            false,
          ],
          thirdChoice: [
            "Contentment",
            "Contentment - A state of peaceful happiness and satisfaction.",
            false,
          ],
          fourthChoice: [
            "Acceptance",
            "Acceptance - The action of consenting to receive or undertake something.",
            false,
          ],
        },
      },
      {
        question: "What is the synonym of <u>Empowerment</u>?",
        answers: {
          firstChoice: [
            "Enablement",
            "Enablement - The action of making it possible for someone to do something.",
            true,
          ],
          secondChoice: [
            "Limitation",
            "Limitation - An act or process of limiting something.",
            false,
          ],
          thirdChoice: [
            "Submission",
            "Submission - The action of complying with someone or something.",
            false,
          ],
          fourthChoice: [
            "Doubt",
            "Doubt - A feeling of uncertainty or lack of conviction.",
            false,
          ],
        },
      },
      {
        question: "What is the synonym of <u>Resilience</u>?",
        answers: {
          firstChoice: [
            "Vulnerability",
            "Vulnerability - The state of being susceptible to attack or damage.",
            false,
          ],
          secondChoice: [
            "Endurance",
            "Endurance - The ability to withstand pain or hardship.",
            true,
          ],
          thirdChoice: [
            "Fragility",
            "Fragility - The quality of being easily broken or damaged.",
            false,
          ],
          fourthChoice: [
            "Fear",
            "Fear - An unpleasant emotion caused by the belief that someone or something is dangerous, likely to cause pain, or a threat.",
            false,
          ],
        },
      },
      {
        question: "What is the synonym of <u>Authenticity</u>?",
        answers: {
          firstChoice: [
            "Genuineness",
            "Genuineness - The quality of being genuine; free from pretense or falseness.",
            true,
          ],
          secondChoice: [
            "Deceit",
            "Deceit - The action of deceiving someone; trickery.",
            false,
          ],
          thirdChoice: [
            "Vanity",
            "Vanity - Excessive pride in one's appearance or achievements.",
            false,
          ],
          fourthChoice: [
            "Superficiality",
            "Superficiality - Concern with the outward appearance or character of something rather than its deeper nature.",
            false,
          ],
        },
      },
      {
        question: "What is the synonym of <u>Altruism</u>?",
        answers: {
          firstChoice: [
            "Selfishness",
            "Selfishness - Excessive regard for one's own interests.",
            false,
          ],
          secondChoice: [
            "Selflessness",
            "Selflessness - The quality of being selfless; regarding the needs or wants of others before one's own.",
            true,
          ],
          thirdChoice: [
            "Indifference",
            "Indifference - A lack of interest or concern.",
            false,
          ],
          fourthChoice: [
            "Envy",
            "Envy - A feeling of discontent or resentment aroused by someone else's possessions, success, or advantages.",
            false,
          ],
        },
      },
      {
        question: "What is the antonym of <u>Pleasure</u>?",
        answers: {
          firstChoice: [
            "Contentment",
            "Contentment – a state of peaceful happiness and satisfaction.",
            false,
          ],
          secondChoice: [
            "Boredom",
            "Boredom – a lack of interest or excitement.",
            true,
          ],
          thirdChoice: [
            "Amusement",
            "Amusement – light-hearted entertainment or enjoyment.",
            false,
          ],
          fourthChoice: [
            "Pain",
            "Pain – physical suffering or discomfort.",
            false,
          ],
        },
      },
      {
        question: "What is the antonym of <u>Victory</u>?",
        answers: {
          firstChoice: [
            "Triumph",
            "Triumph – a great success or achievement.",
            false,
          ],
          secondChoice: [
            "Defeat",
            "Defeat – losing in a contest or struggle.",
            true,
          ],
          thirdChoice: [
            "Conquest",
            "Conquest – the act of conquering someone or something.",
            false,
          ],
          fourthChoice: [
            "Progress",
            "Progress – movement towards a better state or condition.",
            false,
          ],
        },
      },
      {
        question: "What is the antonym of <u>Justice</u>?",
        answers: {
          firstChoice: [
            "Fairness",
            "Fairness – treating all people equally.",
            false,
          ],
          secondChoice: [
            "Equality",
            "Equality – the state of all people being equal in social status.",
            false,
          ],
          thirdChoice: [
            "Injustice",
            "Injustice – lack of fairness or justice.",
            true,
          ],
          fourthChoice: [
            "Mercy",
            "Mercy – compassionate forgiveness of someone’s wrongdoing.",
            false,
          ],
        },
      },
      {
        question: "What is the antonym of <u>Unity</u>?",
        answers: {
          firstChoice: [
            "Harmony",
            "Harmony – a state of agreement or peaceful relations.",
            false,
          ],
          secondChoice: [
            "Cohesion",
            "Cohesion – the act or process of uniting or being united.",
            false,
          ],
          thirdChoice: [
            "Fragmentation",
            "Fragmentation – the act of breaking or dividing something into smaller pieces.",
            true,
          ],
          fourthChoice: [
            "Solidarity",
            "Solidarity – unity or agreement of feeling or action, especially among individuals with a common interest.",
            false,
          ],
        },
      },
      {
        question: "What is the antonym of <u>Healthy</u>?",
        answers: {
          firstChoice: [
            "Fitness",
            "Fitness – the condition of being physically fit and healthy.",
            false,
          ],
          secondChoice: [
            "Wellness",
            "Wellness – the state of being in good health, especially as a result of deliberate effort.",
            false,
          ],
          thirdChoice: [
            "Debility",
            "Debility – weakness or lack of strength.",
            true,
          ],
          fourthChoice: [
            "Vitality",
            "Vitality – physical strength and energy.",
            false,
          ],
        },
      },
    ],
  },
  level2: {
    questions: [
      {
        question:
          "The <u>erudite</u> professor spoke on the history of philosophy.",
        answers: {
          firstChoice: [
            "Arrogant",
            "Arrogant - Having or showing an exaggerated sense of one's own importance.",
            false,
          ],
          secondChoice: ["Brief", "Brief - Lasting for a short time.", false],
          thirdChoice: [
            "Literate",
            "Literate - Having or showing great knowledge or learning.",
            true,
          ],
          fourthChoice: [
            "Energetic",
            "Energetic – Full of energy and enthusiasm.",
            false,
          ],
        },
      },
      {
        question: "The fireflies created an <u>ephemeral</u> display of light.",
        answers: {
          firstChoice: [
            "Fleeting",
            "Fleeting - Lasting for a very short time.",
            true,
          ],
          secondChoice: [
            "Bright",
            "Bright - Shining with a strong, clear light.",
            false,
          ],
          thirdChoice: [
            "Continuous",
            "Continuous - Happening or continuing without interruption.",
            false,
          ],
          fourthChoice: [
            "Dazzling",
            "Dazzling - So bright as to be difficult to look at.",
            false,
          ],
        },
      },
      {
        question: "The <u>gregarious</u> parrot loved to chat with visitors.",
        answers: {
          firstChoice: ["Quiet", "Quiet - Making little or no noise.", false],
          secondChoice: [
            "Outgoing",
            "Outgoing - Sociable and enjoying the company of others.",
            true,
          ],
          thirdChoice: [
            "Independent",
            "Independent - Liking to be alone.",
            false,
          ],
          fourthChoice: [
            "Reserved",
            " Reserved - Unwilling to talk openly or freely.",
            false,
          ],
        },
      },
      {
        question:
          "The <u>impecunious</u> artist struggled to afford art supplies.",
        answers: {
          firstChoice: [
            "Creative",
            "Creative - Able to create new and original ideas.",
            false,
          ],
          secondChoice: [
            "Wealthy",
            "Wealthy - Having a large amount of money or possessions.",
            false,
          ],
          thirdChoice: [
            "Talented",
            "Talented - Having a natural ability to be good at something.",
            false,
          ],
          fourthChoice: ["Poor", "Poor - Having little or no money.", true],
        },
      },
      {
        question:
          "The <u>malevolent</u> villain plotted to take over the world.",
        answers: {
          firstChoice: [
            "Humorous",
            "Humorous - Causing amusement or laughter.",
            false,
          ],
          secondChoice: [
            "Misunderstood",
            "Misunderstood - Not understood correctly.",
            false,
          ],
          thirdChoice: ["Evil", "Evil - Wishing to do bad to others.", true],
          fourthChoice: ["Benevolent", "Benevolent – Kind and helpful.", false],
        },
      },
      {
        question:
          "The old photographs evoked a <u>nostalgic</u> feeling for his childhood.",
        answers: {
          firstChoice: [
            "Longing",
            "Longing - Feeling a sentimental longing for the past.",
            true,
          ],
          secondChoice: [
            "Happy",
            "Happy - Feeling or showing pleasure or satisfaction.",
            false,
          ],
          thirdChoice: [
            "Angry",
            "Angry - Feeling or showing strong annoyance, displeasure, or hostility.",
            false,
          ],
          fourthChoice: [
            "Content",
            "Content - Feeling satisfied with one's life or situation.",
            false,
          ],
        },
      },
      {
        question:
          "The politician <u>obfuscated</u> the issue with complex jargon.",
        answers: {
          firstChoice: [
            "Confuse",
            "Confuse - To make something difficult to understand.",
            true,
          ],
          secondChoice: [
            "Clarified",
            "Clarified - Made something easier to understand.",
            false,
          ],
          thirdChoice: [
            "Explained",
            "Explained - Made something clear and easy to understand.",
            false,
          ],
          fourthChoice: [
            "Simplified",
            "Simplified - Made something less complex.",
            false,
          ],
        },
      },

      {
        question:
          "By <u>serendipity</u>, she found the lost necklace while searching for something else.",
        answers: {
          firstChoice: [
            "Skill",
            "Skill - The ability to do something well.",
            false,
          ],
          secondChoice: [
            "Effort",
            "Effort - Putting physical or mental energy into a task.",
            false,
          ],
          thirdChoice: [
            "Planning",
            "Planning - Making a decision or arrangement about something that is going to happen in the future.",
            false,
          ],
          fourthChoice: [
            "Luck",
            "Luck - The occurrence and development of events by chance in a happy or beneficial way.",
            true,
          ],
        },
      },
      {
        question: "The <u>stoic</u> soldier faced danger without fear.",
        answers: {
          firstChoice: [
            "Panicked",
            "Panicked - Suddenly feeling or showing great fear and anxiety.",
            false,
          ],
          secondChoice: [
            "Terrified",
            "Terrified - Feeling or showing extreme fear.",
            false,
          ],
          thirdChoice: ["Impassive", "Impassive - Calm and unemotional.", true],
          fourthChoice: [
            "Jittery",
            "Jittery - Feeling nervous or restless.",
            false,
          ],
        },
      },
      {
        question:
          "The street performers provided <u>transient</u> entertainment for the passersby.",
        answers: {
          firstChoice: [
            "Captivating",
            "Captivating - Holding someone's attention completely.",
            false,
          ],
          secondChoice: [
            "Temporary",
            "Temporary - Lasting for a short time.",
            true,
          ],
          thirdChoice: [
            "Entertainment",
            "Entertainment – holds interest, gives pleasure and delight.",
            false,
          ],
          fourthChoice: [
            "Permanent",
            "Permanent – stable, without significant change.",
            false,
          ],
        },
      },
    ],
  },
};
