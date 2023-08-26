const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const registrationmodel = require('./registration') 

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/userregistration', {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>console.log("mongodb has been started"))
.catch((err)=>{console.log(err)})

app.post('/api/reception/registration',(req,res)=>{
    registrationmodel.create(req.body)
    .then((registrations)=>{console.log("the data has been successfully saved")})
    .catch((err)=>{console.log(err)})
})

app.get('/api/reception/registrationfetch', async (req, res) => {
    try {
      const registration = await registrationmodel.find().sort({ _id: -1 });
      res.json(registration);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.post('/api/feedback',(req,res)=>{
    registrationmodel.create(req.body)
    .then((registrations)=>{console.log("the data has been successfully saved")})
    .catch((err)=>{console.log(err)})
})

app.get('/api/feebackfetchfetch', async (req, res) => {
    try {
      const registration = await registrationmodel.find().sort({ _id: -1 });
      res.json(registration);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  const port = process.env.port || 8081
    app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})