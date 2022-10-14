
var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "ritesh",
    score: 2,
  },

  {
    name: "amit",
    score: 4,
  },
]

// array of objects
var questions = [
  {
    question: "what is my nick name ? ",
    answer: "Ashutosh"
  }, {
    question: "what is my dream ? ",
    answer: "astronaut"
  },
  {
    question: "where is my home town ? ",
    answer: "bihar"
  },
  {
    question: "who is my fav cricketer ? ",
    answer: "dhoni"
  },
  {
    question: "my fav movie ? ",
    answer: "doctor strange"
  },
  {
    question: "my fav place ",
    answer: "dubai"
  }];

function welcome() {
  var userName = readlineSync.question("may i have your name please : ");

  console.log("hey welcome  " + userName + " i have some question for you to how much you know me  you get +1 mark for every right ans");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");

  }

  console.log(" your current score is  : ", score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log(" You SCORED: ", score);

  console.log("have a look at the high score");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();

