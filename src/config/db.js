const mongoose=require('mongoose');

const dbConnect= async()=>{
    await mongoose.connect( "mongodb+srv://akatiyar403:123Tinder@cluster0.wcxym.mongodb.net/CRUD")
}

module.exports = dbConnect;