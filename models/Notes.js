const mongoose=require('mongoose')

const PostSchema=new mongoose.Schema({
    body:String,
    title:{
        type:String,
        unique:true
    },
},
{timestamps:true})




module.exports=mongoose.model('posts',PostSchema)