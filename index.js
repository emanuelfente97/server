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


app.get('/', function(req, res){
  

    res.send(projects);
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});