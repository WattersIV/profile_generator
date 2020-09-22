const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//make array of all the questions to loop through 
// Make a function to call each question recursivly 
//once index at max len console log the profile and close readline

let questions = [
  "What's your name? Nicknames are also acceptable :) \n",//0
  "What's an activity you like doing?\n",               //1
  "What do you listen to while doing that?\n",          //2
  "Which meal is your favourite (eg: dinner, brunch, etc.)\n", //3
  "What's your favourite thing to eat for that meal?\n",    //4
  "Which sport is your absolute favourite?\n",              //5
  "What is your superpower? In a few words, tell us what you are amazing at!\n" //6
]; 
let answers = []

const makeProfile = (index, questions) => {
  rl.question((questions[index]), (response) => {
    answers.push(response) 
    makeProfile(index + 1, questions)
  }) 
  if (index === questions.length) {
    console.log(`Hi my name is ${answers[0]} I like to ${answers[1]} and listen to ${answers[2]}. My favourite meal of the day is ${answers[3]} and for ${answers[3]} 
    I like to eat ${answers[4]}. My favourite absoulte favourite sport is ${answers[5]}. I would say my superpower is ${answers[6]}. :D`)
    rl.close();
  }
}

makeProfile(0, questions)