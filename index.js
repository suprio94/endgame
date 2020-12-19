var readlineSync= require("readline-sync");
var userName= readlineSync.question("What's your name? ");
var score=0;
console.log("Welcome "+ userName+" to Do you Know Suprio?");

function quiz(question,answer){
  var userAnswer= readlineSync.question(question);
  if(userAnswer=== answer){
    console.log("Correct!!!");
    score=score+1;
    
  }

  else
  {
    console.log("Wrong!!!")
  }

  console.log("Current Score is: "+ score);
  console.log("------------------------");

  
}

var play=[
  {
    question:"Where do I live? ",
    answer : "Kolkata"
  },

  {
    question:"What is my nickname? ",
    answer : "Subho"
  },

  {
    question:"Who is my favourite Superhero? ",
    answer : "Shaktimaan"
  }
]

for(var i=0;i<play.length;i++){
  var currentQuestion= play[i];
  quiz(currentQuestion.question,currentQuestion.answer);
}

console.log("Yay!! You have scored "+ score+ " points");
