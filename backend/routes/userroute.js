const express = require("express")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const {UserModel} = require("../models/usermodel")
const userRouter = express.Router()

userRouter.post("/register",async(req,res)=>{
    const {name,email,password} = req.body
    const search = await UserModel.find({email})
    if(search.length>0){
        res.send("you are already registered please login")
    }else{
        try {
            bcrypt.hash(password,5,async(err,hash)=>{
                const user = new UserModel({name,email,password:hash})
                await user.save()
                res.send("Registerd")
                console.log("Registered")  
      
            })
           
          } catch (error) {
            res.send("something went wrong")
            console.log(error)
          }
    
    }
       
    
    
})

userRouter.post("/login",async(req,res)=>{
  const {email,password} = req.body
  try {
      const user = await UserModel.find({email})
      if(user.length>0){
          bcrypt.compare(password,user[0].password,(err,result)=>{
              if(result){
                  const token = jwt.sign({"course":"backend"},"jyoti")
                  res.send({"msg":"loggin successful","token":token})
              }else{
                  res.send("please register first")
              }

              
          })
      }else{
          res.send("please register first")
      }
  } catch (error) {
      console.log(error)
  }
})
 module.exports = {userRouter}
