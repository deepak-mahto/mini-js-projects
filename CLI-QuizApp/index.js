let readlineSync = require("readline-sync");
let kuler = require("kuler");
let score = 0;

let userName = readlineSync.question("What is your name? ");
console.log(kuler(`\nHello ${userName} welcome to quizApp.`, "#dc2626"));

const database = {
  data: [
    {
      question: `let a = {}, b = {}
  console.log(a == b)
  console.log(a === b)`,
      options: {
        a: "false false",
        b: "false true",
        c: "true false",
        d: "true true",
      },
      correctAnswer: "a",
    },
    {
      question: "Object.assign(targer, source) creates which type of copy?",
      options: {
        a: "Deep Copy",
        b: "Shallow Copy",
        c: "Nested Copy",
        d: "Creates a new reference",
      },
      correctAnswer: "b",
    },
    {
      question: "Is method chaining possible with forEach?",
      options: {
        a: "Yes",
        b: "No",
      },
      correctAnswer: "b",
    },
  ],
};

const leaderBoard = {
  data: [
    {
      name: "Ashish",
      score: 1,
    },
    {
      name: "Riya",
      score: 3,
    },
    {
      name: "Jay",
      score: 2,
    },
  ],
};

function playGame(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log(kuker("Correct Answer", "#059669"));
    score++;
  } else {
    console.log(kuler("Incorrect Answer", "#b91c1c"));
    console.log(`Correct Answer is ${correctAnswer}`);
  }
}

function showQuestionAndOptions(database) {
  for (let i = 0; i < database.data.length; i++) {
    console.log(`\nQ${i + 1} - ${database.data[i].question}\n`);
    for (let key in database.data[i].options) {
      console.log(`${key} - ${database.data[i].options[key]}`);
    }
    let userAnswer = readlineSync
      .question("Enter your answer - (a/b/c/d) - ")
      .toLowerCase();
    playGame(userAnswer, database.data[i].correctAnswer);
  }
}

function showHighScorer(leaderBoard) {
  leaderBoard.data.push({ name: userName, score: score });
  let sortedScoreList = leaderBoard.data.sort((a, b) => b.score - a.score);
  console.log(
    kuler("\nCheck your position on the Leader Board🎉🎉", "#fde047")
  );
  for (let leader of sortedScoreList) {
    console.log(kuler(`${leader.name} -  Score: ${leader.score}`, "#9333ea"));
  }
}

showQuestionAndOptions(database);
console.log(kuler(`Your Score is ${score}`, "#5eead4"));
showHighScorer(leaderBoard);
