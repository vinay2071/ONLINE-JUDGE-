const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProblemSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    difficulty:{
        type:String,
        required:true,
    },
},{timestamps:true});

const problem = mongoose.model('problem',ProblemSchema);
module.exports = problem;