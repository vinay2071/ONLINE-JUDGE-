const Problem = require("../models/problemModel");
// const {requireAuth} = require('../middleware/authMiddleware');

const getProblemById = async function (req,res){
    try{
        const id = await Problem.findById(req.params.id);
        return res.json(id);
       
    }
    catch (err){
        res.status(500).json()
    }

    
}

const getProblems = async function(req,res){
    const problems = await Problem.find();
    return res.json(problems);
}


module.exports = {
    getProblems,
    getProblemById,
}