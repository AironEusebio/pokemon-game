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
  watermelon: {
    questions: [
      {
        question: "Easily spread from one person to another.",
        answers: {
          firstChoice: [
            "Contagious",
            "Contagious- Easily spread from one person to another.",
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
        question:
          "To recognize or understand the difference between two things.",
        answers: {
          firstChoice: [
            "Ugly",
            "Ugly - Unpleasant or repulsive, especially in appearance.",
            false,
          ],
          secondChoice: [
            "Distinguish",
            "Distinguish- to recognize or understand the difference between two things.",
            true,
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
        question: "To come out or start to develop",
        answers: {
          firstChoice: [
            "Emerge",
            "Emerge- to come out or start to develop.",
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
        question: "To take part in",
        answers: {
          firstChoice: [
            "Courageous",
            "Courageous - not deterred by danger or pain; brave.",
            false,
          ],
          secondChoice: [
            "Fearful",
            "Fearful - feeling afraid; showing fear or anxiety.",
            false,
          ],
          thirdChoice: ["Engage in", "Engage in- to take part in.", true],
          fourthChoice: [
            "Timid",
            "Timid - showing a lack of courage or confidence; easily frightened.",
            false,
          ],
        },
      },

      {
        question: "To change slowly over time.",
        answers: {
          firstChoice: [
            "Gorgeous",
            "Gorgeous - beautiful; very attractive.",
            false,
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
          fourthChoice: ["Evolve", "Evolve- to change slowly over time.", true],
        },
      },

      {
        question: "Describing places with well-developed manufacturing.",
        answers: {
          firstChoice: [
            "Industrialized",
            "Industrialized- describing places with well-developed manufacturing.",
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
        question: "Natural from birth.",
        answers: {
          firstChoice: [
            "Self-assured",
            "Self-assured - confident in one's own abilities or character.",
            false,
          ],
          secondChoice: ["Innate", "Innate- natural from birth.", true],
          thirdChoice: ["Assured", "Assured - guaranteed; sure.", false],
          fourthChoice: [
            "Insecure",
            "Insecure - not confident or assured; uncertain and anxious.",
            false,
          ],
        },
      },

      {
        question: "The beginning or cause of something.",
        answers: {
          firstChoice: [
            "Smart",
            "Smart - having or showing a quick-witted intelligence.",
            false,
          ],
          secondChoice: [
            "Clever",
            "Clever - Quick to understand, learn, and devise or apply ideas.",
            false,
          ],
          thirdChoice: [
            "Origin",
            "Origin- the beginning or cause of something.",
            true,
          ],
          fourthChoice: [
            "Sharp",
            "Sharp - Quick to notice, understand, or react.",
            false,
          ],
        },
      },

      {
        question: "Mainly",
        answers: {
          firstChoice: [
            "Serene",
            "Serene - calm, peaceful, and untroubled; tranquil.",
            false,
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
          fourthChoice: ["Primarily", "Primarily - Mainly..", true],
        },
      },

      {
        question: "Showing the possibility that something bad will happen.",
        answers: {
          firstChoice: [
            "Threatening",
            "Threatening - showing the possibility that something bad will happen.",
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
    ],
  },
  kiwi: {
    questions: [
      {
        question: "Extremely charming or appealing",
        answers: {
          firstChoice: [
            "Courageous",
            "Courageous - not deterred by danger or pain; brave.",
            false,
          ],
          secondChoice: ["Fearless", "Fearless - Lacking fear.", false],
          thirdChoice: [
            "Adorable",
            "Adorable- extremely charming or appealing.",
            true,
          ],
          fourthChoice: ["Gallant", "Gallant - Brave; heroic.", false],
        },
      },

      {
        question: "Open to view; visible.",
        answers: {
          firstChoice: [
            "Gorgeous",
            "Gorgeous - beautiful; very attractive.",
            false,
          ],
          secondChoice: ["Apparent", "Apparent- open to view; visible.", true],
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
        question: "To accept something to be true without question or proof.",
        answers: {
          firstChoice: [
            "Calmness",
            "Calmness - A state of peace of mind, free from agitation or excitement.",
            false,
          ],
          secondChoice: [
            "Annoyance",
            "Annoyance - A feeling of mild displeasure or irritation.",
            false,
          ],
          thirdChoice: [
            "Assume",
            "Assume- to accept something to be true without question or proof.",
            true,
          ],
          fourthChoice: [
            "Acceptance",
            "Acceptance - The action of consenting to receive or undertake something.",
            false,
          ],
        },
      },
      {
        question:
          "Relationship between people or groups based on shared feelings, interests, or experiences.",
        answers: {
          firstChoice: [
            "Enablement",
            "Enablement - The action of making it possible for someone to do something.",
            false,
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
            "Bond",
            "Bond- relationship between people or groups based on shared feelings, interests, or experiences.",
            true,
          ],
        },
      },
      {
        question:
          "A a person who habitually seeks to harm or intimidate those whom they perceive as vulnerable.",
        answers: {
          firstChoice: [
            "Vulnerability",
            "Vulnerability - The state of being susceptible to attack or damage.",
            false,
          ],
          secondChoice: [
            "Bully",
            "Bully- a person who habitually seeks to harm or intimidate those whom they perceive as vulnerable.",
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
        question:
          "An event or a group of events occurring as part of a sequence; an incident or period. ",
        answers: {
          firstChoice: [
            "Genuineness",
            "Genuineness - The quality of being genuine; free from pretense or falseness.",
            false,
          ],
          secondChoice: [
            "Deceit",
            "Deceit - The action of deceiving someone; trickery.",
            false,
          ],
          thirdChoice: [
            "Vanity",
            "Episodes- an event or a group of events occurring as part of a sequence; an incident or period.",
            true,
          ],
          fourthChoice: [
            "Superficiality",
            "Superficiality - Concern with the outward appearance or character of something rather than its deeper nature.",
            false,
          ],
        },
      },
      {
        question: "Causing laughter and amusement; comic.",
        answers: {
          firstChoice: [
            "Selfishness",
            "Selfishness - Excessive regard for one's own interests.",
            false,
          ],
          secondChoice: [
            "Selflessness",
            "Selflessness - The quality of being selfless; regarding the needs or wants of others before one's own.",
            false,
          ],
          thirdChoice: [
            "Indifference",
            "Indifference - A lack of interest or concern.",
            false,
          ],
          fourthChoice: [
            "Humorous",
            "Humorous- causing laughter and amusement; comic.",
            true,
          ],
        },
      },
      {
        question: "In a pure manner.",
        answers: {
          firstChoice: ["Purely", "Purely- in a pure manner.", false],
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
        question:
          "Make fun of or attempt to provoke (a person or animal) in a playful way.",
        answers: {
          firstChoice: [
            "Triumph",
            "Triumph – a great success or achievement.",
            false,
          ],
          secondChoice: [
            "Teased",
            "Teased- make fun of or attempt to provoke (a person or animal) in a playful way.",
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
        question: "Prove to be the case.",
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
          thirdChoice: ["Turn out", "Turn out- prove to be the case.", true],
          fourthChoice: [
            "Mercy",
            "Mercy – compassionate forgiveness of someone’s wrongdoing.",
            false,
          ],
        },
      },
    ],
  },
  strawberry: {
    questions: [
      {
        question:
          "Ready or likely to attack or confront; characterized by or resulting from aggression.",
        answers: {
          firstChoice: [
            "Aggressive",
            "Aggressive- ready or likely to attack or confront; characterized by or resulting from aggression.",
            true,
          ],
          secondChoice: [
            "Cohesion",
            "Cohesion – the act or process of uniting or being united.",
            false,
          ],
          thirdChoice: [
            "Fragmentation",
            "Fragmentation – the act of breaking or dividing something into smaller pieces.",
            false,
          ],
          fourthChoice: [
            "Solidarity",
            "Solidarity – unity or agreement of feeling or action, especially among individuals with a common interest.",
            false,
          ],
        },
      },
      {
        question:
          "A fact or condition connected with or relevant to an event or action.",
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
            "Circumstances",
            "Circumstances- a fact or condition connected with or relevant to an event or action.",
            true,
          ],
          fourthChoice: [
            "Vitality",
            "Vitality – physical strength and energy.",
            false,
          ],
        },
      },
      {
        question:
          "Unit of heredity information that occupies a fixed position.",
        answers: {
          firstChoice: [
            "Arrogant",
            "Arrogant - Having or showing an exaggerated sense of one's own importance.",
            false,
          ],
          secondChoice: ["Brief", "Brief - Lasting for a short time.", false],
          thirdChoice: [
            "Genes",
            "Genes- unit of heredity information that occupies a fixed position.",
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
        question: "An animal that naturally preys on others.",
        answers: {
          firstChoice: [
            "Fleeting",
            "Fleeting - Lasting for a very short time.",
            false,
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
            "Predators",
            "Predators- an animal that naturally preys on others.",
            true,
          ],
        },
      },
      {
        question:
          "Made, done, or happening without method or conscious decision.",
        answers: {
          firstChoice: [
            "Random",
            "Random- made, done, or happening without method or conscious decision.",
            true,
          ],
          secondChoice: [
            "Outgoing",
            "Outgoing - Sociable and enjoying the company of others.",
            false,
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
          "Appropriate or compatible with a particular person, task, occasion, etc.",
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
          fourthChoice: [
            "Suited to",
            "Suited to- appropriate or compatible with a particular person, task, occasion, etc.",
            true,
          ],
        },
      },
      {
        question: "The outside part or uppermost layer of something.",
        answers: {
          firstChoice: [
            "Surface",
            "Surface- the outside part or uppermost layer of something.",
            true,
          ],
          secondChoice: [
            "Misunderstood",
            "Misunderstood - Not understood correctly.",
            false,
          ],
          thirdChoice: ["Evil", "Evil - Wishing to do bad to others.", true],
          fourthChoice: ["Benevolent", "Benevolent- Kind and helpful.", false],
        },
      },
      {
        question: "An area of land under the jurisdiction of a ruler or state.",
        answers: {
          firstChoice: [
            "Longing",
            "Longing - Feeling a sentimental longing for the past.",
            false,
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
            "Territory",
            "Territory- an area of land under the jurisdiction of a ruler or state.",
            true,
          ],
        },
      },
      {
        question: "To grow, develop, or be successful.",
        answers: {
          firstChoice: [
            "Confuse",
            "Confuse - To make something difficult to understand.",
            false,
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
            "Thrive",
            "Thrive- to grow, develop, or be successful.",
            true,
          ],
        },
      },
      {
        question:
          "A distinguishing quality or characteristics, especially one belonging to a person.",
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
            "Traits",
            "Traits- a distinguishing quality or characteristics, especially one belonging to a person.",
            true,
          ],
        },
      },
    ],
  },
  pineapple: {
    questions: [
      {
        question: "Determine the amount or number of something.",
        answers: {
          firstChoice: [
            "Calculate",
            "Calculate- determine the amount or number of something.",
            true,
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
          "Make something impure by exposure to or addition of a poisonous or polluting substance.",
        answers: {
          firstChoice: [
            "Captivating",
            "Captivating - Holding someone's attention completely.",
            false,
          ],
          secondChoice: [
            "Contaminate",
            "Contaminate- Make something impure by exposure to or addition of a poisonous or polluting substance.",
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
      {
        question: "A person who expresses an unfavorable opinion of something.",
        answers: {
          firstChoice: [
            "Gorgeous",
            "Gorgeous - beautiful; very attractive.",
            false,
          ],
          secondChoice: [
            "Critic",
            "Critic- a person who expresses an unfavorable opinion of something.",
            true,
          ],
          thirdChoice: [
            "Stunning",
            "Stunning - extremely impressive or attractive.",
            false,
          ],
          fourthChoice: [
            "Evolve",
            "Evolve- to change slowly over time.",
            false,
          ],
        },
      },
      {
        question: "The process or period of gathering in crops.",
        answers: {
          firstChoice: [
            "Industrialized",
            "Industrialized- describing places with well-developed manufacturing.",
            false,
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
            "Harvest",
            "Harvest- the process or period of gathering in crops.",
            true,
          ],
        },
      },
      {
        question:
          "Bring goods or services into a country from abroad for sale.",
        answers: {
          firstChoice: [
            "Self-assured",
            "Self-assured - confident in one's own abilities or character.",
            false,
          ],
          secondChoice: ["Innate", "Innate- natural from birth.", false],
          thirdChoice: ["Assured", "Assured - guaranteed; sure.", false],
          fourthChoice: [
            "Import",
            "Import- bring goods or services into a country from abroad for sale.",
            true,
          ],
        },
      },
      {
        question: "Not adapted for use or action; not sensible or realistic.",
        answers: {
          firstChoice: [
            "Impractical",
            "Impractical- not adapted for use or action; not sensible or realistic.",
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
        question: "Combine one thing with another to form a whole.",
        answers: {
          firstChoice: [
            "Ugly",
            "Ugly - Unpleasant or repulsive, especially in appearance.",
            false,
          ],
          secondChoice: [
            "Integrate",
            "Integrate- combine one thing with another to form a whole.",
            true,
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
        question:
          "Having or showing the capacity to develop into something in the future.",
        answers: {
          firstChoice: [
            "Emerge",
            "Emerge- to come out or start to develop.",
            false,
          ],
          secondChoice: [
            "Grumpy",
            "Grumpy - bad-tempered and sulky; easily annoyed.",
            false,
          ],
          thirdChoice: [
            "Potential",
            "Potential- having or showing the capacity to develop into something in the future.",
            true,
          ],
          fourthChoice: [
            "Sad",
            "Sad - feeling or showing sorrow; unhappy.",
            false,
          ],
        },
      },

      {
        question:
          "At right angles to a horizontal plane; in a direction, or having an alignment, such that the top is directly above the bottom.",
        answers: {
          firstChoice: [
            "Courageous",
            "Courageous - not deterred by danger or pain; brave.",
            false,
          ],
          secondChoice: [
            "Fearful",
            "Fearful - feeling afraid; showing fear or anxiety.",
            false,
          ],
          thirdChoice: [
            "Vertical",
            "Vertical- at right angles to a horizontal plane; in a direction, or having an alignment, such that the top is directly above the bottom.",
            true,
          ],
          fourthChoice: [
            "Timid",
            "Timid - showing a lack of courage or confidence; easily frightened.",
            false,
          ],
        },
      },
      {
        question:
          "Produce or provide (a natural, agricultural, or industrial product).",
        answers: {
          firstChoice: [
            "Gorgeous",
            "Gorgeous - beautiful; very attractive.",
            false,
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
            "Yield",
            "Yield- produce or provide (a natural, agricultural, or industrial product)",
            true,
          ],
        },
      },
    ],
  },
  banana: {
    questions: [
      {
        question:
          "The explorer’s blog gave a frightening <u>________</u> of the trip she took.?",
        answers: {
          firstChoice: [
            "Account",
            "Account- a report or description of an event or experience.",
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
        question:
          "The hikers had waited for months and were <u>________</u> to start the climb.?",
        answers: {
          firstChoice: [
            "Scarce",
            "Scarce - Existing in large quantities vs. existing only in small amounts.",
            false,
          ],
          secondChoice: [
            "Eager",
            "Eager- strongly wanted to do or have something.",
            true,
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
        question:
          "This city needs to invest more in their <u>_______</u> to handle all the tourists?",
        answers: {
          firstChoice: [
            "Modern",
            "Modern: Belonging to the very distant past vs. belonging to the present time.",
            false,
          ],
          secondChoice: [
            "Incandescent",
            "Incandescent - Emitting light as a result of being heated.",
            false,
          ],
          thirdChoice: [
            "Infrastructure",
            "Infrastructure- the basic physical and organizational structures and facilities (e.g. buildings, roads, power supplies) ",
            true,
          ],
          fourthChoice: [
            "Clandestine",
            "Clandestine - Kept secret or done secretively, especially because illicit.",
            false,
          ],
        },
      },
      {
        question:
          "Young people are usually more willing to take advice from their <u>________</u>?",
        answers: {
          firstChoice: [
            "Voracious",
            "Voracious - Wanting or devouring great quantities of food; having a very eager approach to an activity.",
            false,
          ],
          secondChoice: [
            "Melancholy",
            "Melancholy - A feeling of pensive sadness, typically with no obvious cause.",
            false,
          ],
          thirdChoice: ["Brisk", "Brisk - Quick and active; lively.", false],
          fourthChoice: [
            "Peers",
            "Peers - people who are the same age as you.",
            true,
          ],
        },
      },
      {
        question:
          "The tourism office sends the email message to <u>_______</u> visitors around the world.?",
        answers: {
          firstChoice: [
            "Potential",
            "Guilty - Potential- having qualities or abilities that may be developed and lead to future success or usefulness.",
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
        question:
          "A closer look <u>______</u> that the photo had been edited to make the town look prettier.",
        answers: {
          firstChoice: [
            "Revealed",
            "Revealed- make previously unknown or secret information known to others.",
            false,
          ],
          secondChoice: [
            "Radiant",
            "Radiant - Sending out light; shining or glowing brightly.",
            true,
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
        question:
          "The hotel manager offered a <u>______</u> apology for all the problems and gave them a large discount on their bill.",
        answers: {
          firstChoice: [
            "Euphoric",
            "Euphoric - feeling or expressing overwhelming happiness or joyful excitement",
            false,
          ],
          secondChoice: [
            "Nostalgic",
            "Nostalgic - Characterized by or exhibiting feelings of nostalgia, a sentimental longing or wistful affection for the past.",
            false,
          ],
          thirdChoice: [
            "Sincere",
            "Sincere- free from pretence or deceit; proceeding from genuine feelings.",
            true,
          ],
          fourthChoice: [
            "Resilient",
            "Resilient - Able to withstand or recover quickly from difficult conditions.",
            false,
          ],
        },
      },
      {
        question:
          "City leaders are happy about the <u>_______</u> increase in tourists over the last 10 years.",
        answers: {
          firstChoice: ["Immense", "Immense - extremely large or huge", false],
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
            "Steady",
            "Steady- firmly fixed, supported, or balanced; not shaking or moving. ",
            true,
          ],
        },
      },
      {
        question:
          "The photos of the animals that live around the coral reef were <u>_______</u> and quite colorful.",
        answers: {
          firstChoice: [
            "Lethargic",
            "Lethargic: slow-moving or lacking in energy",
            false,
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
            "Stunning",
            "Stunning- extremely impressive or attractive. ",
            true,
          ],
        },
      },
      {
        question:
          "This city is definitely <u>______</u> a visit by anyone interested in architecture.",
        answers: {
          firstChoice: [
            "Worthy of",
            "Worthy of- having or showing the qualities that deserve the specified action or regard.",
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
    ],
  },
  apple: {
    questions: [
      {
        question:
          "Two monkeys were fighting in a tree, and I <u>_____</u> the whole thing on video.",
        answers: {
          firstChoice: [
            "Towering",
            "Towering - impressively high or tall",
            false,
          ],
          secondChoice: [
            "Amiable",
            "Captured- take into one’s possession or control by force.",
            true,
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
        question:
          "The movie was very violent, which many people in the audience found <u>________</u>.",
        answers: {
          firstChoice: [
            "Delicate",
            "Delicate - Easily broken or damaged.",
            false,
          ],
          secondChoice: [
            "Warm",
            "Warm - Having a moderate degree of heat.",
            false,
          ],
          thirdChoice: [
            "Distressing",
            "Distressing- causing anxiety, sorrow, or pain; upsetting.",
            true,
          ],
          fourthChoice: [
            "Barren",
            "Barren - deserted of people and in a state of bleak and dismal emptiness.",
            false,
          ],
        },
      },
      {
        question:
          "We can feel <u>________</u> when we compare our lives of people in social media.",
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
            "Inferior",
            "Inferior- lower in rank, status, or quality.",
            true,
          ],
        },
      },
      {
        question:
          "Today, it’s possible to <u>_______ </u>by teaching people how to cook online.",
        answers: {
          firstChoice: [
            "Make a living",
            "Make a living- to earn enough money in order to support oneself financially.",
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
        question: "Sunlight can’t easily <u>_________</u> thick gray clouds.",
        answers: {
          firstChoice: [
            "Penetrate",
            "Penetrate- go into or through something, especially with force or effort.",
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
        question:
          "In bad weather, hiking on the mountain trails is <u>_________</u> It’s too dangerous.",
        answers: {
          firstChoice: [
            "Slow",
            "Slow - moving or operating at a low speed.",
            false,
          ],
          secondChoice: [
            "Prohibited",
            "Prohibited- that has been forbidden; banned.",
            true,
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
        question:
          "We tried to <u>_________</u>  the vacation we had here years ago, but too much had changed.",
        answers: {
          firstChoice: [
            "Small",
            "Small - of a size that is less than normal or usual.",
            false,
          ],
          secondChoice: [
            "Large",
            "Large - of considerable or relatively great size, extent, or capacity.",
            false,
          ],
          thirdChoice: [
            "Replicate",
            "Replicate- make an exact copy of, reproduce. ",
            true,
          ],
          fourthChoice: [
            "Massive",
            "Massive - large and heavy or solid.",
            false,
          ],
        },
      },

      {
        question:
          "The wet summer <u>________</u> beach vacations for many people.",
        answers: {
          firstChoice: [
            "Ignorant",
            "Ignorant - Lacking knowledge, information, or awareness about a particular thing.",
            false,
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
            "Ruined",
            "Ruined- reduced to a state of decay, collapse, or disintegration.",
            true,
          ],
        },
      },

      {
        question:
          "I got a great <u>_______</u> of my family standing in front of the Eiffel Tower.",
        answers: {
          firstChoice: [
            "Shot",
            "Shot- series of frames that are shot uninterrupted from the moment the camera starts rolling until it stops.",
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
        question:
          "My friend was <u>______</u>by telling everyone about her expensive jewelry. ",
        answers: {
          firstChoice: [
            "Sad",
            "Sad - Feeling or showing sorrow; unhappy.",
            false,
          ],
          secondChoice: [
            "Showing off",
            "Showing off- display someone or something that is a source of pride.",
            true,
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
    ],
  },
  orange: {
    questions: [
      {
        question:
          "When you use your muscles, your cells <u>consumes</u> sugar from the blood, which gives you energy.",
        answers: {
          firstChoice: ["absorb", "Absorb- to take in", true],
          secondChoice: [
            "Seriousness",
            "Seriousness -  refers to the quality or state of being serious.",
            false,
          ],
          thirdChoice: [
            "Simplicity",
            "Simplicity - the quality of being easy to understand or uncomplicated.",
            false,
          ],
          fourthChoice: [
            "Humor",
            "Humor - the quality of being amusing or funny.",
            false,
          ],
        },
      },
      {
        question:
          "This is an <u>important</u> decision, so we need to take the time to consider all our options.",
        answers: {
          firstChoice: [
            "Ignored",
            "Ignored: a not given attention or considered.",
            false,
          ],
          secondChoice: ["Crucial", "Crucial -  extremely important", true],
          thirdChoice: [
            "Celebrated",
            "Celebrated - acknowledged with joy or approval.",
            false,
          ],
          fourthChoice: [
            "Misunderstood",
            "Misunderstood -incorrectly interpreted.",
            false,
          ],
        },
      },
      {
        question:
          "The <u>allotment</u> of the population across many countries is uneven. More people live in cities than in rural areas.",
        answers: {
          firstChoice: [
            "Agreement",
            "Agreement: refers to a mutual understanding, arrangement, or contract reached between two or more parties.",
            false,
          ],
          secondChoice: [
            "Conflict",
            "Conflict -  a serious disagreement or argument.",
            false,
          ],
          thirdChoice: [
            "Distribution",
            "Distribution - the way things or people are spread out in an area.",
            true,
          ],
          fourthChoice: [
            "Breakdown",
            "Breakdown -a failure in progress or communication.",
            false,
          ],
        },
      },
      {
        question:
          "Due to its length, many people say a marathon is the greatest test of an athlete’s <u>tolerance</u>.",
        answers: {
          firstChoice: [
            "Enthusiastic",
            "Enthusiastic: showing intense and eager enjoyment or interest.",
            false,
          ],
          secondChoice: [
            "Diligent",
            "Diligent -  showing careful and persistent work effort.",
            false,
          ],
          thirdChoice: [
            "Meticulous",
            "Meticulous - showing great attention to detail.",
            false,
          ],
          fourthChoice: [
            "Endurance",
            "Endurance -the ability to do something difficult or painful for a long time.",
            true,
          ],
        },
      },
      {
        question:
          "Sales of celebrity-sponsored shoes have been <u>eruptive</u>. Everyone is buying them.",
        answers: {
          firstChoice: [
            "Preserve",
            "Preserve: maintained in its original state.",
            false,
          ],
          secondChoice: [
            "Illuminated",
            "Illuminated -  lit up or made bright.",
            false,
          ],
          thirdChoice: [
            "Destroyed",
            "Destroyed - put an end to the existence of something.",
            false,
          ],
          fourthChoice: [
            "Explosive",
            "Explosive - having a sudden and great force.",
            true,
          ],
        },
      },
      {
        question:
          "In the summer, temperature reach their <u>highest</u> in the afternoon before cooling down later.",
        answers: {
          firstChoice: ["Peak", "Peak- the highest point.", true],
          secondChoice: [
            "Determination",
            "Determination -  firmness of purpose.",
            false,
          ],
          thirdChoice: [
            "Indifference",
            "Indifference - lack of interest, concern, or sympathy.",
            false,
          ],
          fourthChoice: [
            "Hesitation",
            "Hesitation - the action of pausing or delaying.",
            false,
          ],
        },
      },
      {
        question:
          "A retail company will collect useful data to create a customer <u>database</u>.",
        answers: {
          firstChoice: [
            "Obscured",
            "Obscured: made unclear or difficult to see.",
            false,
          ],
          secondChoice: [
            "Profile",
            "Profile -  a description of someone’s characteristics.",
            true,
          ],
          thirdChoice: [
            "Diminished",
            "Diminished - made smaller or less important.",
            false,
          ],
          fourthChoice: [
            "Questioned",
            "Questioned - expressed doubt or uncertainty about.",
            false,
          ],
        },
      },
      {
        question:
          "Strong wind <u>protection</u> will slow down a runner or biker.",
        answers: {
          firstChoice: [
            "Resistance",
            "Resistance- a force that stops something or slows it down.",
            true,
          ],
          secondChoice: ["Disarray", "Disarray -  a state of disorder", false],
          thirdChoice: [
            "Conflict",
            "Conflict - a serious disagreement or argument.",
            false,
          ],
          fourthChoice: [
            "Skepticism",
            "Skepticism - an attitude of doubt.",
            false,
          ],
        },
      },
      {
        question:
          "A goal of the International Olympic Committee is to  <u>provoke</u> interests in athletics.",
        answers: {
          firstChoice: [
            "Convoluted",
            "Convoluted: extremely complex and difficult to follow.",
            false,
          ],
          secondChoice: [
            "Stimulate",
            "Stimulate -  open to more than one interpretation.to encourage growth or development",
            true,
          ],
          thirdChoice: [
            "Concise",
            "Concise - giving a lot of information clearly and in a few words.",
            false,
          ],
          fourthChoice: [
            "Complex",
            "Complex -consisting of many different and connected parts.",
            false,
          ],
        },
      },
      {
        question:
          "Every four years, the World Cup <u>controls</u> the sport news. Other sports, barely get mentioned.",
        answers: {
          firstChoice: [
            "Ignored",
            "Ignored: not given attention or considered.",
            false,
          ],
          secondChoice: ["Repealed", "Repealed -  revoked or annulled.", false],
          thirdChoice: ["Postponed", "Postponed - delayed.", false],
          fourthChoice: [
            "Dominates",
            "Dominates -to be the most important or to control.",
            true,
          ],
        },
      },
    ],
  },
};
