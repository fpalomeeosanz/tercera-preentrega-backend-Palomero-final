import mongoose from "mongoose";

const collection = "contacts";

const contactSchema = new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    telefono:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        unique:true
    },
});


const contactModel = mongoose.model(collection, contactSchema);

export default contactModel;