const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const questionsCompleted = document.getElementById("questions-completed");
const correctNumber = document.getElementById("correct-number");

let shuffledQuestions,
  currentQuestionIndex,
  num = 0,
  correctNum = 0;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("box__btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  if (correct) {
    correctNum++;
  }
  correctNumber.innerText = correctNum;
  setStatusClass(document.body, correct);
  num++;
  questionsCompleted.innerText = num;
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    questionsCompleted.innerText = 0;
    correctNumber.innerText = 0;
    correctNum = 0;
    num = 0;
    questionContainerElement.classList.add("hide");
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "A DOG'S LIFE",
    answers: [
      { text: "very stressful life", correct: false },
      { text: "very unhappy life", correct: true },
      { text: "very exciting life", correct: false },
      { text: "very happy life", correct: false },
    ],
  },
  {
    question: "ADD INSULT TO INJURY",
    answers: [
      { text: "speak about unnecessary things", correct: false },
      { text: "to experiment in a dangerous way", correct: false },
      { text: "make a situation worse", correct: true },
      { text: "do something badly or cheaply", correct: false },
    ],
  },
  {
    question: "AT A RATE OF KNOTS",
    answers: [
      { text: "very quickly", correct: true },
      { text: "very foxy", correct: false },
      { text: "very slowly but surely", correct: false },
      { text: "very positively", correct: false },
    ],
  },
  {
    question: "AT SEA",
    answers: [
      { text: "very confused", correct: true },
      { text: "very excited and mellow", correct: false },
      { text: "not correct", correct: false },
      {
        text: "when you are at sea, you are very apprehensive",
        correct: false,
      },
    ],
  },
  {
    question: "AT PEACE",
    answers: [
      { text: "vulgarism, refering to be quiet", correct: false },
      {
        text: "a gentle way of saying that someone is mentally il",
        correct: false,
      },
      { text: "to be spick-and-span", correct: false },
      { text: "a gentle way of saying that someone is dead", correct: true },
    ],
  },
  {
    question: "BE ON THE CARDS",
    answers: [
      { text: "to be likely to happen", correct: true },
      { text: "to be ready ", correct: false },
      { text: "to be well prepared for something dangerous", correct: false },
      { text: "to hate exigious things", correct: false },
    ],
  },
  {
    question: "BE ON CLOUD NINE",
    answers: [
      { text: "not having enough money", correct: false },
      { text: "to be destitute as hell", correct: false },
      { text: "to be extremely blissful and excited", correct: true },
      { text: "to feel depressed and sorrowful", correct: false },
    ],
  },
  {
    question: "BE KNEE-HIGH TO A GRASSHOPPER",
    answers: [
      { text: "to be quite indigent", correct: false },
      { text: "to be young", correct: true },
      { text: "the condition of being very old", correct: false },
      { text: "abhorrence of small people", correct: false },
    ],
  },
  {
    question: "BE PUSHING UP (THE) DAISIES",
    answers: [
      { text: "to be couch-potato", correct: false },
      { text: "to be dead", correct: true },
      { text: "to be arrogant and quite impertinent", correct: false },
      {
        text: "if you are pushing up daises you are farm-lover",
        correct: false,
      },
    ],
  },
  {
    question: "BE OF UNSOUND MIND",
    answers: [
      { text: "to be cherished", correct: false },
      { text: "to be mentally ill", correct: true },
      { text: "to not be mentally ill", correct: false },
      { text: "to not be cherished", correct: false },
    ],
  },
  {
    question: "BE THE BEE'S KNEES",
    answers: [
      { text: "to be very small and young", correct: false },
      { text: "to be very captivating", correct: false },
      { text: "to be excellent", correct: true },
      { text: "to be known for taking a risks", correct: false },
    ],
  },
  {
    question: "BITE THE DUST",
    answers: [
      { text: "to starve", correct: false },
      {
        text: "usually when elder people are not able to do certain things",
        correct: false,
      },
      { text: "to die", correct: true },
      {
        text: "if you are addicted to an alcohol you bite the dust",
        correct: false,
      },
    ],
  },
  {
    question: "LINE SB'S POCKETS",
    answers: [
      { text: "to provoke someone", correct: false },
      { text: "to make someone richer in illegal ways", correct: true },
      { text: "speak nicely about somebody", correct: false },
      { text: "to mug somebody", correct: false },
    ],
  },
  {
    question: "BONE IDLE",
    answers: [
      { text: "extremely lazy", correct: true },
      { text: "extremely active", correct: false },
      { text: "extremely timid", correct: false },
      { text: "extremely cold", correct: false },
    ],
  },
  {
    question: "BUY THE FARM",
    answers: [
      { text: "to resign from a job", correct: false },
      { text: "to die", correct: true },
      { text: "to say the truth to your enemy", correct: false },
      {
        text:
          "too obviously showing your power in an attempt to make other people notice and admire you",
        correct: false,
      },
    ],
  },
  {
    question: "CALL IT A DAY",
    answers: [
      { text: "to say the truth to your enemy", correct: false },
      { text: "to plan something succesfuly", correct: false },
      {
        text:
          "to stop what you are doing because you do not want to do any more or think you have done enough",
        correct: true,
      },
      { text: "to speak vulgarly", correct: false },
    ],
  },
  {
    question: "CHEW THE FAT",
    answers: [
      { text: "to be known for eating unhealthy foods", correct: false },
      {
        text: "to go to the gym every day in order to lose some weight",
        correct: false,
      },
      { text: "to sleep", correct: false },
      {
        text: "To talk with someone in an informal and friendly way",
        correct: true,
      },
    ],
  },
  {
    question: "DOWN THE ROAD",
    answers: [
      { text: "very easy and simple", correct: false },
      { text: "very quickly and rapidly", correct: false },
      { text: "in the future", correct: true },
      { text: "in the past", correct: false },
    ],
  },
  {
    question: "FEEL BLUE",
    answers: [
      { text: "feel very ashamed", correct: false },
      { text: "feel sad", correct: true },
      { text: "feel overjoyed", correct: false },
      {
        text: "to feel like you are a king of all kings,arrogant",
        correct: false,
      },
    ],
  },
  {
    question: "GET THE AXE",
    answers: [
      { text: "to lose a job", correct: true },
      { text: "to get an unexpected gift", correct: false },
      { text: "get a sale in a shop", correct: false },
      { text: "to start an argument between your parents", correct: false },
    ],
  },
  {
    question: "HAVE A LONG FACE",
    answers: [
      { text: "if you have a long face, you look sad", correct: true },
      { text: "to look hideous", correct: false },
      { text: "to feel embarrassed or ashamed", correct: false },
      { text: "if you have a long face, you are very nervous", correct: false },
    ],
  },
  {
    question: "HIT THE CEILING",
    answers: [
      { text: "to be very drunk", correct: false },
      { text: "to die", correct: false },
      { text: "to become extremely angry", correct: true },
      { text: "to become extremely excited", correct: false },
    ],
  },
  {
    question: "HIT THE SACK",
    answers: [
      { text: "to start to drink too much alcohol", correct: false },
      { text: "to start a big battle, used in wars", correct: false },
      { text: "to go sleep", correct: true },
      { text: "to earn money illegally", correct: false },
    ],
  },
  {
    question: "JAM TOMORROW",
    answers: [
      { text: "another opportunity to do something", correct: false },
      {
        text:
          "the part that has not been used or eaten when the other parts have been",
        correct: false,
      },
      {
        text: "something good that is promised but never happens",
        correct: true,
      },
      { text: "to look chubby", correct: false },
    ],
  },
  {
    question: "WOMAN OF MEANS",
    answers: [
      { text: "clever woman", correct: false },
      { text: "rich woman", correct: true },
      { text: "pretty woman", correct: false },
      { text: "pregnant woman", correct: false },
    ],
  },
  {
    question: "MAKE HEADWAY",
    answers: [
      { text: "to make progress", correct: true },
      { text: "to create or make a plan", correct: false },
      { text: "to make a strong decision", correct: false },
      {
        text: "to treat someone or something according to the usual rules",
        correct: false,
      },
    ],
  },
  {
    question: "MEET YOUR MAKER",
    answers: [
      {
        text:
          "to have a strong argument, especially with your parents or close friends",
        correct: false,
      },
      { text: "to see your doctor", correct: false },
      {
        text: "to look at someone directly while they are looking at you",
        correct: false,
      },
      { text: "to die", correct: true },
    ],
  },
  {
    question: "ON THE WAGON",
    answers: [
      { text: "to be nervous and hence to do many mistakes", correct: false },
      {
        text:
          "if you are on the wagon, you have decided not to drink any alcohol",
        correct: true,
      },
      { text: "to be on the wagon means to travel a lot", correct: false },
      { text: "to enjoy a life of money and comfort", correct: false },
    ],
  },
  {
    question: "SAY UNCLE",
    answers: [
      { text: "to give up", correct: false },
      { text: "to admit failure", correct: true },
      {
        text: "to speak too proudly about what you have done or what you own",
        correct: false,
      },
      { text: "to miss an appointment", correct: false },
    ],
  },
  {
    question: "SHOOT THE BREEZE",
    answers: [
      {
        text:
          "to eat a lot of food, especially without being able to control yourself",
        correct: false,
      },
      { text: "to start to drink too much alcohol", correct: false },
      { text: "to be very ravenous", correct: false },
      {
        text: "to spend time talking about things that are not important",
        correct: true,
      },
    ],
  },
  {
    question: "SICK AT HEART",
    answers: [
      { text: "if you are sick at heart, you are unbiased", correct: false },
      { text: "mentally ill", correct: false },
      { text: "extremely silly or stupid", correct: false },
      { text: "very unhappy", correct: true },
    ],
  },
  {
    question: "SPILL THE BEANS",
    answers: [
      { text: "to not be versed in something", correct: false },
      { text: "to kill or hurt people", correct: false },
      { text: "to tell people secret information", correct: true },
      {
        text: "to tell someone all about yourself, especially your problems",
        correct: false,
      },
    ],
  },
  {
    question: "SPLIT HAIRS",
    answers: [
      { text: "to argue about small details of something", correct: true },
      { text: "to have nothing to do;bored", correct: false },
      {
        text:
          "to precisely search for something , especially what is well hidden",
        correct: false,
      },
      { text: "to learn/know how to do a job or activity", correct: false },
    ],
  },
  {
    question: "TAKE A BATTERING",
    answers: [
      { text: "a man pretended to be someone else", correct: false },
      { text: "to step on the gas", correct: false },
      { text: "to be defeated heavily", correct: true },
      { text: "to give up", correct: false },
    ],
  },
];
