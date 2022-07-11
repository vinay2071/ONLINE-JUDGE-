const Problem = require("../models/problemModel");
// const mongoose = require("mongoose");

const getProblems = async function (req, res) {
  Problem.find()
    .then((result) => {
      res.render("questions", {
        prb: result
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getProblemById = async function (req, res) {
  try {
    // console.log("hiiii")
    const id = req.params.id;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      Problem.findById(req.params.id).then((result) => {
        res.render("question",{prb:result});
      });
    }
  } catch (err) {
    res.status(500).json();
  }
};

module.exports = {
  getProblems,
  getProblemById,
};

// const id = await Problem.findById(req.params.id);
// if(id.match(/^[0-9a-fA-F]{24}$/)){
// Problem.findById(req.params.id).then(res=>{
