const express=require("express");
const cors = require("cors");
require('dotenv').config();
const bcrypt=require("bcryptjs")
const User=require('./models/userSchema.js')
const connectDB=require("./db/index.js")
const salt = bcrypt.genSaltSync(10);
const app=express();
const jwt=require('jsonwebtoken');
const secret="flnkjsdfuy*&^%7yu43545"
app.use(cors({
  credentials:true,
  origin:'http://localhost:5173'
}))
app.use(express.json())


connectDB();

app.get('/',(req,res)=>{
  res.send('App is listening')
})

app.post('/register',async (req,res)=>{
    const {username, password}=req.body;
    try{
      const user=await User.create({username,
         password:bcrypt.hashSync(password,salt)
        })
      res.status(200).json(user)
    }
    catch(e){
      res.status(400).json(e);
    }
    
})

app.post('/login',async (req,res)=>{
  const {username, password}=req.body;
  console.log(req.body);
  const findUser=await User.findOne({username})
  const pass=bcrypt.compareSync(password,findUser.password);
  if(pass){
    //loggedin
    await jwt.sign({username,id:findUser._id},secret,(err,token)=>{
      if(err){
        throw err;
      }
      res.cookie('token', token).json('ok')
    })
  }
  else{
    res.status(400).json('wrong credentials');
  }

})



app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}/`);
});
