const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dataModel=require('./model/dataModel')
const app= express()
mongoose.connect('mongodb+srv://sorngsiyou:rHwz2e4vphZhqyQx@cluster0.6tyefgy.mongodb.net/dictionarydb?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err))
app.use(cors())

app.get('/',async(req,res)=>{
    try {
         const allData= await dataModel.find()
        res.json(allData)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
   

})
app.listen('3000',(req,res)=>{
    console.log('Your Server is Running')
})