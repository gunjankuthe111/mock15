const express = require("express");
const Question = require("../models/quetion.model");
const app = express.Router();

app.get("/", async(req, res) => {
  res.status(200).send({message: "Questions Route"});
});


app.post("/", async (req, res) => {
  const {category, difficulty, amount} = req.body;

  if(!category || !amount || !difficulty){
    res.status(400).send({message:"Missing Details"})
  }
  try {
    const questions = await Question.find({category,difficulty}).limit(amount)
    res.status(200).send(questions)
  } catch (e) {
    res.status(404).send({message: e.message});
  }
});
https: module.exports = app;
