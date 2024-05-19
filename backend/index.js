const port = 4000;
const express = require("express")

// mongoose.connect

app.get("/", (req, res) => {
  res.send("Express App is running");
});

const Users= mongoose.model('Users',{
  name:{
    type:String,
  },
  email:{
    type:String,
    unique:true,
  },
  password:{
    type:String,
  },
  cartData:{
    type:Object,
  },
  date:{
    type:Date,
    default:Date.now,
  }
})

//Creating Endpoint for registering users

app.post('/signup',async (req,res) => {
  let check = await Users.findOne({email:req.body.email})
  if (check) {
    return res.status(400).json({success:false,error:"existing user found with same email address"})
  }

  const user = new Users({
    name:req.body.username,
    email:req.body.email,
    password:req.body.password,
    cartData:cart,
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

//middleware

const fetchUser = async (req,res,next) => {
  const token = req.header('auth-token');
  if (!token) {
    res.status(401).send({errors:"Please authenticate using valid token."})
  }
  else{
    try {
      const data = jwt.verify(token,'secret_ecom');
      req.user = data.user;
      next();
    } catch (error) {
      res.status(401).send({errors: "please authenticate using a valid token"})
    }
  }
}


app.listen(port, (error) => {
  if (!error) {
    console.log("Server running on port " + port);
  } else {
    console.log("Error: " + error);
  }
});