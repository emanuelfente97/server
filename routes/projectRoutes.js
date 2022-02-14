const express = require('express');
const app= express.Router();


//array for projects 
let projects = [
    {
      title: "e-commerce",
      TechStack: "HTML, CSS, VueJs",
      github: "https://github.com/emanuelfente97/myshop-final.git",
      netlifyLink: "https://infallible-yalow-32faf7.netlify.app",
      image: "https://i.postimg.cc/rwGMvk2X/ecom.png",
      netImg: "https://i.postimg.cc/pLJm4rjH/netlify-icon.png",
    },
    {
      title: "Cards",
      TechStack: "HTML, CSS",
      github: "https://github.com/emanuelfente97/card.git",
      netlifyLink: "https://peaceful-yalow-311cbb.netlify.app",
      image: "https://i.postimg.cc/BbrFSFhY/cards.png",
      netImg: "https://i.postimg.cc/pLJm4rjH/netlify-icon.png",
    },
    {
      title: "Porfolio",
      TechStack: "HTML, CSS, Bootstrap",
      github: "https://github.com/emanuelfente97/Bootstrap-Portfolio.git",
      netlifyLink: "https://nifty-newton-b97c57.netlify.app",
      image: "https://i.postimg.cc/VvWrjNm4/demo.png",
      netImg: "https://i.postimg.cc/pLJm4rjH/netlify-icon.png",
    },
    {
      title: "Calculator",
      TechStack: "HTML, CSS, Java script",
      github: "https://github.com/emanuelfente97/Calculator.git",
      netlifyLink: "https://jovial-gates-cdb9d8.netlify.app",
      image: "https://i.postimg.cc/DfP8p83P/calculator.png",
      netImg: "https://i.postimg.cc/pLJm4rjH/netlify-icon.png",
    },
    {
      title: "Crude Ops",
      TechStack: "HTML, CSS, VueJs",
      github: "https://github.com/emanuelfente97/CRUD-Operation.git",
      netlifyLink: "https://stoic-hugle-0f4bad.netlify.app",
      image: "https://i.postimg.cc/vZkBxn5b/CRUDE.png",
      netImg: "@/assets/netlify-icon.svg",
    },
    {
      title: "Timer",
      TechStack: "HTML, CSS, VueJs",
      github: "https://github.com/emanuelfente97/Reaction-Timer.git",
      netlifyLink: "https://epic-tesla-f05358.",
      image: "https://i.postimg.cc/fRnWwssR/Reation-Timer.png",
      netImg: "https://i.postimg.cc/pLJm4rjH/netlify-icon.png",
    },
  ];
  function fixArrayID(arr) {
    return arr.forEach((item, index)  => (item.id = index +1));
};

//route for projects 
app.get ('/',(req, res) => {
    res.send(projects);
});

//get one project
app.get('/:id', (req,res)=> {
    const project =projects.find (
        (project)=> project.id === parseInt(req.params.id)
    );
    if (!project)
    return res 
    .status(404)
    .send({ msg: "Project asisgened with that id not found "});
    res.send(project);
});

//Create
app.post ('/',(req, res) => {
    const {title, techStack, github, netlifyLink,netImg,}= req.body;
    if (!title || !techStack || !github || !netlifyLink || !netImg) 
    return  res.status(400).send({msg: "Not all data sent"});
const project = {
    id: projects.length+1,
    title,
    techStack,
    netlifyLink,
    github,
    netImg,

};
projects.push(project);
res.send (project);
});

app.get('/', (req, res,) =>{
    res.send(projects);
});

//Update 

app.put('/:id', (req, res)=> {
    const{title, techStack, github, netlifyLink, netImg} =req.body;
    const  project = projects.find(project => project.id === parseInt(req.params.id));
    if(!project) 
    res
    .status(404)
    .send({msg: "project not found"});

    if(title) project.title = title;
    if(techStack) project.techStack = techStack;
    if(github) project.github = github;
    if(netlifyLink) project.netlifyLink = netlifyLink;
    if(netImg) project.netImg = netImg;   
res.send(project)
});

//DELETE

app.delete('/id:', (req, res) => {
    project = projects.filter((project)=> project.id !== parseInt(req.params.id));
    fixArrayID(project);
    res.send({msg: "project deleted"});
    
});
 module.exports =app;