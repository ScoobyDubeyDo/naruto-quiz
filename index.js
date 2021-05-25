var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
var score = 0;

console.log("-----------------------------------------")
console.log(`hello there ${userName}. Please answer each and every question and at the end of the quiz you will know that how much you know about naruto and his friends.`)
console.log("-----------------------------------------")
console.log("SEND ME THE SCORE THAT YOU HAVE EARNED.")

var questions = [
  {
    question: "Which is another word for ninja? ",
    answer: "SHINOBI", 
  },{
    question: "Naruto's favourite ramen shop – Ichiraku Ramen – was based on a real like noodle shop! True or false? ",
    answer: "TRUE",
  },{
    question: "How many tails does Kurama have? ",
    answer: ["9", "NINE"]
  },{
    question: "What team is Kakashi the leader of? ",
    answer: ["TEAM 7","TEAM SEVEN","7","SEVEN"]
  },{
    question: "Which Hokage sealed the nine-tailed fox inside Naruto? ",
    answer: ["FOURTH HOKAGE", "4TH HOKAGE","4TH","4","FOURTH"]
  },{
    question: "Naruto first shows his nine-tails chakra when he fights who? ",
    answer: "HAKU",
  },{
    question: "What does 'Chidori' mean? ",
    answer: ["ONE THOUSAND BIRDS","1000 BIRDS"]

  },{
    question: "How many ninja from Konoha went on to the third stage(after the preliminairies) of the Chunin Exams? ",
    answer: ["FIVE", "5"]

  },{
    question: "The Sharingan is what type of jutsu? ",
    answer: "DOJUTSU",
  },{
    question: "D-rank missions are usually given to what level of shinobi? ",
    answer: "GENIN",
  }
]


for(var i = 0;i < questions.length;i++){
  console.log("-----------------------------------------")
  console.log(" ")
  var que = readlineSync.question(questions[i].question);
  if(questions[i].answer.includes(que.toUpperCase())){
    console.log(`Great work ${userName}, you have answered correct.`);
    console.log("your current score is : ",score=score+1)
  }
  else{
   
      console.log("You answered wrong!!!")

    }
    
  
}

console.log(" ")
console.log("-----------------------------------------")
console.log(" ")
console.log(`YAY!!!!, you EARNED ${score} points. now send me the final scores.`)

