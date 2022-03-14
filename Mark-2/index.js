const read = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.yellow('****🏏 WELCOME TO CRICKET QUIZ 🏏****\n'));
const userName = read.question(chalk.blue('Enter your name : '))
console.log(chalk.bold.yellowBright(`\n🙏 Namastay ${userName} 🙏, Are you a Big Fan of Cricket 🏏 ? `));
let userScore =0;
console.log('-----------------------------------');
console.log(chalk.blueBright(`let's chek your knowlege on cricket`));
console.log('-----------------------------------');

console.log(chalk.greenBright('NOTE:- YOU HAVE TO ENTER CORRECT OPTION '));
console.log(chalk.yellow.bold(`let's begin...😁`));

// Leaderboard 
let scoreB = [
    {
        name:'Ankur',
        score: 6,
    },
    {
        name: 'sujal',
        score: 4,
    },
    {
        name: 'Rajesh',
        score: 8,
    }

]
// questions 
let questions = [
    {
        q: ' Who won the first ever Cricket World Cup in 1975?',
        A: ' Australia',
        B: 'England',
        C: 'India',
        D: 'West indies',
        ans: 'D',
    },
    {
        q:'Who is the only batsman to record 400 runs in an international Test match ?',
        A: "Steve Smith",
        B:"WG Grace",
        C:"Don Bradman",
        D:"Brian Lara",
        ans: 'D',  
    },
    {
        q:' Who bowled the fastest delivery ever of 100.2mph?',
        A: "Brett Lee",
        B:"Shoaib Akhtar",
        C:"Jeffrey Thompson",
        D:"Shaun Tait",
        ans: 'B',  
    },
    {
        q:' Who is the first batsman to cross 10,000 runs in tests?',
        A: "Sunil Gavaskar",
        B:"Sachin Tendulkar",
        C:"Allan Border",
        D:"Brian Lara",
        ans: 'A',  
    },
    {
        q:`India's first win in a World Cup match was against?`,
        A: "Sri Lanka",
        B:"West Indies",
        C:"South Africa",
        D:"England",
        ans: 'B',  
    },
    {
        q:`Which cricketer has made the highest individual score at the World Cup?`,
        A: "Rahul Dravid",
        B:"Sourav Ganguly",
        C:"Sachin Tendulkar",
        D:"Kapil Dev",
        ans: 'B',  
    },
    
];

// function
function play(ques,i){
    i=i+1;
    let userAns = read.question(`${i}.${ques.q}\nA.${ques.A}\nB.${ques.B}\nC.${ques.C}\nD.${ques.D}\n`);

    if(userAns.toUpperCase()==ques.ans.toUpperCase()){
        userScore++;
        console.log(chalk.green('Correct  ✅'));
    }else{
        userScore--;
        console.log(chalk.red('Wrong ❌ '));
    }
}

for(let i=0; i<questions.length; i++){
    play(questions[i],i);
}

var userObj = {
    name: userName,
    score: userScore,
};

scoreB.push(userObj);
 
scoreB.sort((a,b)=>{
    return b.score-a.score;
});
console.log(chalk.bold.yellow(`\nYour final score : ${userScore}`));
if(userScore>2){
    console.log(`~~🥳🥳🥳🥳🥳🥳🥳🥳~~`);
}
else{
    console.log(`~~😒😒😒😒😒😒😒😒~~`);
}
console.log(chalk.green(`-----------------------------`));
console.log(chalk.bold.blueBright(`🏆 🏏 🏏 LEADERBOARD 🏏 🏏🏆`));
console.log(chalk.green(`-----------------------------`));
for(let i=0; i<scoreB.length; i++){
    console.log(`${scoreB[i].name} : ${scoreB[i].score}`);
}