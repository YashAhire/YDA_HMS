import { catchAsyncError } from "../middlewere/catchAsynError.js";
import { Message } from "../models/msgScema.js";
import ErrorHandler from "../middlewere/errorMiddlewere.js";

export const sendMessage = catchAsyncError(async function(req,res,next){
    const {firstName, lastName, email, phone, message} = req.body;
    console.log('Received data:', req.body);
    if(!firstName || !lastName || !email || !phone || !message){
        return next(new ErrorHandler("Please Fill Full Form",400));
    }
    await Message.create({firstName, lastName, email, phone, message}); 
    // Message.save();
    return res.status(200).json({
        success:true,
        message:"Message Send Successfully!"
    });
    // next();
})

export const getAllMessages = catchAsyncError(async(req,res,next)=>{
    const messages = await Message.find();
    res.status(200).json({
        success:true,
        messages,
    });
});

