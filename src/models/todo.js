const mongoose=require('mongoose');

const todoSchema=mongoose.Schema({
    todoData: {
        type: String,
        required: true,
        trim:true
    }
}, {timestamps:true})

module.exports=mongoose.model("todo", todoSchema);