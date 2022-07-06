const Problem = require("../models/problemModel");

const getProblemById = async function (req,res){
const id = await Problem.findById(req.params.id);
return res.json(id);
    
}

const getProblems = async function(req,res){
    const problems = await Problem.find();
    return res.json(problems);
}


module.exports = {
    getProblems,
    getProblemById,
}