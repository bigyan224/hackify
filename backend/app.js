const express = require("express")
const app=express();
const PORT = process.env.PORT || 3000;
const multer = require("multer");
const cors=require('cors');
const bodyParser = require('body-parser');
const bcrypt=require("bcrypt");
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const Users = require("./models/Usermodel")
const Hackathons = require("./models/Hackathon")
const Teams = require("./models/Teammodel")
const { upload } = require('./config/cloudinaryConfig');

require('dotenv').config();


app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());


app.get("/",(req,res,next)=>{
res.send("server is working");
    
})

app.post('/signup',async (req,res) => {
  let check = await Users.findOne({email:req.body.email})
  if (check) {
    return res.status(400).json({success:false,error:"existing user found with same email address"})
  }

  const user = new Users({
    username:req.body.username,
    email:req.body.email,
    password:req.body.password,
  })

  await user.save();

  const data = {
    user:{
      id:user.id
    }
  }

  const token = jwt.sign(data,'secret_ecom');
  res.json({success:true,token})
})



  //Creating Endpoint for user login

  app.post('/login',async (req,res) => {
    let user = await Users.findOne({email:req.body.email});
    if (user) {
      const passCompare = req.body.password === user.password;

      if (passCompare) {
        const data = {
          user:{
            id:user.id
          }
        }
        const token = jwt.sign(data,'secret_ecom')
        res.cookie(token);
        res.json({success:true,token});
      }
      else{
        res.json({success:false,errors:"Wrong Password"});
      }
    }
    else{
      res.json({success:false,errors:"Wrong Email ID"})
    }
  })

app.post('/upload_hackathon',upload.single('cover_image'),async (req,res) => {
  const hackathon = new Hackathons({
    name:req.body.name,
    cover_image:req.file ? req.file.path : "",
    about:req.body.about,
    email:req.body.email,
    themes:req.body.themes,
    themes:req.body.themes,
    min_team:req.body.min_team,
    max_team:req.body.max_team,
    venue:req.body.venue,
    website:req.body.website,
    application_open:req.body.application_open,
    application_close:req.body.application_close,
    hackathon_starts:req.body.hackathon_starts,
    hackathon_ends:req.body.hackathon_ends,
    prize_pool:req.body.prize_pool
  })

  await hackathon.save();

  res.json({success:true})

  })

  app.get("/hackathons",(req,res)=>{

    Hackathons.find().then((data)=>{
        res.send(data)
    })
  })

  app.get('/hackathons/:id', async (req, res) => {
    try {
      const hackathon = await Hackathons.findById(req.params.id);
      if (!hackathon) {
        return res.status(404).json({ error: 'Hackathon not found' });
      }
      res.json(hackathon);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

app.listen(3000,()=>{
    console.log("server started at port: ",PORT);
})