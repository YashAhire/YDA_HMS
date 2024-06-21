import mongoose from "mongoose";
import validator from "validator";

const msgSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3, " First Name Must Contain At Least 3 Characters"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3, " Last Name Must Contain At Least 3 Characters"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Please provide valid Email"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[10, "Phone number must contains exact 10 Digits!"],
        maxLength:[10, "Phone number must contains exact 10 Digits!"]
    },
    message:{
        type:String,
        required:true,
        minLength:[10, "Message must contains at least 10 characters!"],
    },
});

export const Message = mongoose.model("Message",msgSchema);