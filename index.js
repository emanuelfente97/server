let express = require('express');
let app = express();
var cors = require ('cors'); //cors
app.use(cors());// cors
let projects =[ {
    title: "e-commerce",
    TechStack: 'HTML, CSS, VueJs',
    github:"https://github.com/emanuelfente97/myshop-final.git",
    netlifyLink: "https://infallible-yalow-32faf7.netlify.app",
    image :"https://i.postimg.cc/rwGMvk2X/ecom.png",
    netImg: "https://i.postimg.cc/pLJm4rjH/netlify-icon.png"

},
{
  
  title: "Cards",
    TechStack: 'HTML, CSS',
    github:"https://github.com/emanuelfente97/card.git",
    netlifyLink: "https://peaceful-yalow-311cbb.netlify.app",
    image :"https://i.postimg.cc/BbrFSFhY/cards.png",
    netImg: "https://i.postimg.cc/pLJm4rjH/netlify-icon.png",
}, 
{
title: "Porfolio",
    TechStack: 'HTML, CSS, Bootstrap',
    github:"https://github.com/emanuelfente97/Bootstrap-Portfolio.git",
    netlifyLink: "https://nifty-newton-b97c57.netlify.app",
    image :"https://i.postimg.cc/VvWrjNm4/demo.png",
    netImg: "https://i.postimg.cc/pLJm4rjH/netlify-icon.png"
},
{
title: "Calculator",
    TechStack: 'HTML, CSS, Java script',
    github:"https://github.com/emanuelfente97/Calculator.git",
    netlifyLink: "https://jovial-gates-cdb9d8.netlify.app",
    image :"https://i.postimg.cc/DfP8p83P/calculator.png",
    netImg: "https://i.postimg.cc/pLJm4rjH/netlify-icon.png"

},
{

title: "Crude Ops",
    TechStack: 'HTML, CSS, VueJs',
    github:"https://github.com/emanuelfente97/CRUD-Operation.git",
    netlifyLink: "https://stoic-hugle-0f4bad.netlify.app",
    image :"https://i.postimg.cc/vZkBxn5b/CRUDE.png",
    netImg: "@/assets/netlify-icon.svg"
},
{
title: "Timer",
    TechStack: 'HTML, CSS, VueJs',
    github:"https://github.com/emanuelfente97/Reaction-Timer.git",
    netlifyLink: "https://epic-tesla-f05358.",
    image :"https://i.postimg.cc/fRnWwssR/Reation-Timer.png",
    netImg: "https://i.postimg.cc/pLJm4rjH/netlify-icon.png"
},
];

app.get('/projects', function(req, res){
    res.send(projects);
});


let Testimonials= [
    { 
    Name: "Godwin Dzaba",
    title : "Head of Curriculum and Learning",
    image:"https://i.postimg.cc/NfN9D8Nm/Godwin.jpg",
    quate :'"Emanuel has a very gentle personality. He is always willing to learn new concepts. I am confident that he will continue to be productive and grow rapidly."',},
{
    Name: "Jude Julius",
    title : "Collegue",
    image:"https://i.postimg.cc/Fs0jNCxv/Jude.jpg",
    quate :'"Emanuel is such an excellent collegue and a hard worker. He always brings logic to the table. I recommend him to any company for his perserverance and hard work"'
    },
{
    Name: "Reese Abraham",
    title : "Collegue",
    image:"https://i.postimg.cc/J4tzQsG2/Reese.jpg",
    quate :'"Emanuel Fente is very hard-working. He is always willing to assist in any way possible, and he works well with other people. I believe he will be an asset to any company."'
    },
{
    Name: "Seth Kleynhans",
    title : "Collegue",
    image:"https://i.postimg.cc/v80WBxJq/Seth.jpg",
    quate :'  "Emanuel has caring personality. He loves participating, when the teacher asks questions, he is always happy to answer with confidence. He will continue to improve rapidly."'
    },
{
    Name : " Nande Bija",
    title: "Collegue",
    image: "https://i.postimg.cc/JzZxG4cs/Nande.jpg",
    quate : '“Emanuel Fente works very well with other people, he respects other peoples time and is very punctual. I bealive that he will be a very discipled employee in the future"'
},
{
    Name : "Siyabonga Mkosana",
    title: "Collegue",
    image: "https://i.postimg.cc/hPrxwzrb/Mkosana.jpg",
    quate : '"Emanuel Fente has shown optimism for every task that the Academy has served his way, his workmanship shows high potential in a professional space. A very committed young man."'
},
  ]

  app.get('/testimonials', function(req, res){
    res.send(Testimonials);
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});