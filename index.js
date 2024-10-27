const express = require('express')
const mongoose = require('mongoose')
const app = express();
const Users = require('./models/users')
app.use(express.json())

mongoose
  .connect(
    "mongodb+srv://bilalmazouki2:KxvP9W87032bBNvG@cluster0.7qslt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.post('/students', async (req,res)=>{
    const newuser = new Users();
    const name = req.body.name;
    const age = req.body.age;
    const nurd = req.body.nurd;
    newuser.name = name;
    newuser.age = age;
    newuser.nurd = nurd;
    await newuser.save()
    res.json(newuser)
})
app.get('/students' , async (req , res)=>{
    const users =await Users.find()
    res.json(users)
}) 
app.delete('/students/:id' , async (req , res)=>{
    const id = req.params.id
    await Users.findByIdAndDelete(id)
    res.send(`${id} has been deleted`)
}) 
app.get('/clients', async (req,res)=>{
    const users = await Users.find()
    res.render('clients.ejs', {
        allusers : users
    })
})
app.listen(3000,()=>{console.log('app working!')})