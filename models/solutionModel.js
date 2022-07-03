const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SolutionSchema = new Schema({
   language:{
    type:String,
    enum:["Cpp","Java"],
    required:true,
   },
   solution:{
    type:String,
    required:true,
   },
},{timestamps:true});

// const solution = mongoose.model('solution',SolutionSchema);
module.exports.SolutionSchema =SolutionSchema;
