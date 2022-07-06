const solution = require("../models/solutionModel");
const Questions = require("../models/problemModel");
const moment = require("moment");

const getQuestionsById = async function (req,res){
    const id = await Questions.findById(req.params.id);
    return res.json(id);
        
    }
    
    const getQuestions = async function(req,res){
        const problems = await Questions.find();
        return res.json(problems);
    }


    const newSubmission = async function (req,res){
     const solutions = new solution({
        language:req.body.language,
        solution :req.body.solution,
        timestap:req.body.timestamps
     })
     solutions.save({new:true},function(err,solutions){
        
        if(err) return err;
        res.status(200).send(solutions);
        // return res.json(newSubmission);
    })
    }

    const submission_readone = async function(req, res) {
        const idsol= await solution.findById(req.params.id)
                return res.json(idsol);
            
};

    module.exports ={
        getQuestionsById,
        getQuestions,
        newSubmission,
        submission_readone,
    }
    