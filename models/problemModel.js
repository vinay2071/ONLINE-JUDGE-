const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const {solution} = require("./solutionModel")

const ProblemSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    // solutions:[{type:solution}],
    problemStatement:{
        type:String,
        required:true
    },
    // testcases:{
    //        type:String,
    //        required:true
    // },
    difficulty:{
        type:String,
        enum:["easy","medium","hard"],
        required:true,
    },
},{timestamps:true});

const problem = mongoose.model('problem',ProblemSchema);
module.exports = problem;