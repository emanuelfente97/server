const express = require('express');
const app= express.Router();


//array for projects 
let Testimonials =[
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
        }
      ];
  function fixArrayID(arr) {
    return arr.forEach((item, index)  => (item.id = index +1));
};

//route for projects 
app.get ('/',(req, res) => {
    res.send(Testimonials);
});

//get one project
app.get('/:id', (req,res)=> {
    const project =Testimonials.find (
        (Testimonial)=> Testimonial.id === parseInt(req.params.id)
    );
    if (!Testimonial)
    return res 
    .status(404)
    .send({ msg: "Testimonial asisgened with that id not found "});
    res.send(project);
});

//Create
app.post ('/',(req, res) => {
    const {Name, title, image, quate,}= req.body;
    if (!Name || !title || !image || !quate) 
    return  res.status(400).send({msg: "Not all data sent"});
const Testimonial = {
    id: Testimonials.length+1,
    Name,
    title,
    image,
    quate,
};
Testimonials.push(Testimonial);
res.send (Testimonial);
});

app.get('/', (req, res,) =>{
    res.send(Testimonials);
});

//Update 

app.put('/:id', (req, res)=> {
    const{Name, title, image, quate, } =req.body;
    const  project = Testimonial.find(Testimonial => Testimonial.id === parseInt(req.params.id));
    if(!Testimonial) 
    res
    .status(404)
    .send({msg: "Testimonial not found"});

    if(Name) Testimonial.Name = Name;
    if(title) Testimonial.title = title;
    if(image) Testimonial.image = image;
    if(quate) Testimonial.quate = quate;
    res.send(Testimonial)
    });

//DELETE

app.delete('/id:', (req, res) => {
    Testimonial = Testimonials.filter((Testimonial)=> Testimonial.id !== parseInt(req.params.id));
    fixArrayID(Testimonial);
    res.send({msg: " Testimonial deleted"});
    
});
 module.exports =app;