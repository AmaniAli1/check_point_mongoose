//requite mongoose
const mongoose=require("mongoose");
//Connected with DataBase
const connectDB=async()=>{
    try {
       await mongoose.connect('mongodb://localhost:27017/check_point_mongose',
       {
           useNewUrlParser:true,
           useUnifiedTopology: true
       })
       console.log("data base is Connected")
    } catch (error) {
        console.log("data base can not Connected")
    }
    
    module.exports=connectDB;
}