var read = require('readline-sync');
var chalk = require('chalk');
var score =0;
let userName = read.question('Please! Enter your Name : ');
console.log(`ð Hii ${userName}`);

console.log('---------------------------------');
console.log(chalk.blue('ð HOW WELL DO YOU KNOW GAUTAM ð'));
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
console.log(chalk.bold.green('\nLet\'s Start with some Basic Questions !.....ð '));

function func(q){
  let currQues = q.ques;
  let UserAns = read.question(`${currQues}\n`);
  if(UserAns.toUpperCase() === q.ans.toUpperCase()){
    score++;
    console.log(chalk.green('You are Correct â'));
  }
  else{
    score--;
    console.log(chalk.red('You are Wrong â '));
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
  console.log(`ðĨģððĨģððĨģððĨģð`)
}
else{
  console.log(`ðĪŠððĪŠððĪŠð`);
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