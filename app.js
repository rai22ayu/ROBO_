const express =require('express');
const app=express();
const path =require('path');
const mongoose = require('mongoose');
const contactDetails =require('./models/details');
const ejsMate=require('ejs-mate')
app.engine('ejs',ejsMate);
const joi=require('joi');
mongoose.connect('mongodb://localhost:27017/robo-club',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
});
const db=mongoose.connection;
db.on("error", console.error.bind(console,"connection error:"));
db.once("open",()=>{
    console.log("database connected");
});
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}))


app.get('/Home',(req,res)=>{

    res.render('Home/index')
})

app.get('/Home/contact',(req,res)=>{
    res.render('Home/contact')
})

app.post('/response',async(req,res)=>{
   const details= new contactDetails(req.body);
   await details.save();
   console.log(req.body);
   res.redirect('Home/response');
  // res.send(req.body);
  // res.send(details);
   
})
app.get('/Home/index',(req,res)=>{
    res.render('Home/index');
})
app.get('/Home/response',(req,res)=>{
    //const det= await Detail.findById(req.params.id)
    res.render('Home/response')
})
app.get('/Home/projects',(req,res)=>{
    //const det= await Detail.findById(req.params.id)
    res.render('Home/projects')
})
app.get('/Home/about',(req,res)=>{
    //const det= await Detail.findById(req.params.id)
    res.render('Home/about')
})
app.get('/Home/team',(req,res)=>{
    //const det= await Detail.findById(req.params.id)
    res.render('Home/team')
})

app.listen(2000,()=>{
    console.log("listening...");
})