const express=require('express');
const todoRouter=express.Router();
const todo=require('../models/todo')

//Post data to Server
todoRouter.post("/todo", async(req,res)=>{
   try {
    const {todoData}=req.body;
    const newTodoData=new todo({
        todoData
    })
    await newTodoData.save();
    res.json({
        message: "Data Saved Successfully!",
        data:[newTodoData]
    })
   } catch (error) {
      res.status(400).send("Something Went Wrong!")
   }


})

//Get Data from server
todoRouter.get("/todo",async(req,res)=>{
   try {
    const allTodoData= await todo.find({});
    if(!allTodoData){
           res.status(400).json({message:"No Data Found"})
    }
    res.json({message:"Todo Data FOund", data:[allTodoData]})

   } catch (error) {
    res.status(400).send("Something Went Wrong!")
   }
})

// Delete Data from Server
todoRouter.delete("/todo/:id",async(req,res)=>{
    try {
        const userId=req.params.id;
        console.log(userId)
        const deletedtodoData=await todo.findByIdAndDelete({_id:userId});
        if(!deletedtodoData){
            throw new Error("No Todo Data Found to be deleted")
        }
        res.status(200).json({message:"Data Deleted Successfully!", data:[deletedtodoData]})
    } catch (error) {
        res.status(400).send("Something Went Wrong!")
    }
})

// Edit Data from Server
todoRouter.patch("/todo/:id", async(req,res)=>{
    const {todoData}=req.body;
    try {
        const todoId=req.params.id;
      
        const editTodoData= await todo.findByIdAndUpdate({_id:todoId}, 
            {
                todoData:todoData
            },
            { new: true }
        )
       
        if(!editTodoData){
            throw new Error("No Data Found to Edit!")
        }
        res.json({message:"Data Edited Successfully", data:[editTodoData]})
    } catch (error) {
        res.status(400).send("Something Went Wrong!")
    }
})

module.exports=todoRouter;