const connectionString ='mongodb+srv://mukund720:1234@cluster0.tcnnh.mongodb.net/?retryWrites=true&w=majority'
const mongoose=require('mongoose')
mongoose.connect(connectionString,{
    useNewUrlParser:true
})
mongoose.connection.on("error",error=>{
    console.log('Connection error',error)
})
const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String
})
const userModel=mongoose.model('myUser',userSchema)
const Mukund=new userModel({
    name:'Mukund Kumar',
    age:22,
    email:'mukund720@gmail.com'
})
Mukund.save(err=>console.log(err))
userModel.findOne({
    email:'mukund720@gmail.com'
},
(err,result)=>{
    if(err) return console.log(err)
    console.log(result)
}
)