const Problem = require("../models/problemModel");
const ApiError = require("../utils/ApiError");
// const { Problem } = require("../models/problem.model");
// const ApiError = require("../utils/ApiError");

async function getProblemById(id){
    let problem = null;
    let ObjectIdTest = /^[0-9a-fA-F]{24}$/;
    if(id.match(ObjectIdTest)){
        problem = await Problem.findById(id);
    }
     if(!problem) throw new ApiError(404,"Problem not found")
     return problem;
    
}


const ProblemId = async function(req,res){
    const  problemId = req.params
    const p = getProblemById(problemId);
    return res.json(p)
}



const getProblems = async function(req,res){
    const problems = await Problem.find();
    return res.json(problems);
}






module.exports = {
    getProblems,
    ProblemId,
}