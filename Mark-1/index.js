var read = require('readline-sync');
var chalk = require('chalk');
var score =0;
let userName = read.question('Please! Enter your Name : ');
console.log(`👋 Hii ${userName}`);

console.log('---------------------------------');
console.log(chalk.blue('😎 HOW WELL DO YOU KNOW GAUTAM 😎'));
console.log('---------------------------------');


// Questions
let questions = [
  {
    ques: 'Where do i live ? ',
    ans: 'Gaya',
  },
  
 {
   ques: 'What is my age ?',
   ans: '20',
  },
  
 {
   ques: 'which is my favorite movie ?',
   ans: 'iron man'
  },
  {
    ques: 'who is my favorite cricket player ?',
    ans : 'MS Dhoni',
  },
  {
    ques: 'Who is my favorite SuperHero ? ',
    ans: 'Spiderman',
  },
  {
    ques: 'Which is my favorite programming language ? ',
    ans: 'JavaScript',
  }
];
// leading score 
let scoreB =  [
  {
    name: 'Ankur',
    score: 6,
  },{
    name : 'Sujal',
    score: 4,
  },{
    name: 'atul',
    score: 2,
  }
]
console.log(chalk.bold.green('\nLet\'s Start with some Basic Questions !.....😁 '));

function func(q){
  let currQues = q.ques;
  let UserAns = read.question(`${currQues}\n`);
  if(UserAns.toUpperCase() === q.ans.toUpperCase()){
    score++;
    console.log(chalk.green('You are Correct ✅'));
  }
  else{
    score--;
    console.log(chalk.red('You are Wrong ❌ '));
  }
}

for(let i=0; i<questions.length; i++){
  func(questions[i]);
}

var obj = {
  name: userName,
  score: score,
};
console.log(`Your final score is : ${score}`);
if(score>2){
  console.log(`🥳🎉🥳🎉🥳🎉🥳🎉`)
}
else{
  console.log(`🤪😑🤪😑🤪😑`);
}
scoreB.push(obj);

// sorting the array scoreB
scoreB.sort((a,b) => {
 return b.score - a.score;
});

// final score
 
console.log(chalk.bold.yellow('***** Leading Score *****'));
 

scoreB.forEach(
   function fun(item){
     console.log(`${item.name} : ${item.score}`);
   }
);