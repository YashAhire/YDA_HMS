import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/dbConnection.js";
import msgRouter from "./router/msgRouter.js";
import {errorMiddlewere} from "./middlewere/errorMiddlewere.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";

config("./config/.env");

const app = express();

app.use(cors({
    origin:[process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods:["GET", "PUT", "POST", "DELETE"],
    credentials:true
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/"
}));

app.use("/api/v1/message",msgRouter);
app.use("/api/v1/user",userRouter); 
app.use("/api/v1/appointment",appointmentRouter);

dbConnection();

app.use(errorMiddlewere);

export default app;