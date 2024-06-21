import mongoose from "mongoose";

export const dbConnection = () => {
    if (!process.env.MONGO_URI) {
        console.error("MONGO_URI is not defined in the environment variables.");
        process.exit(1);
    }

    mongoose
        .connect(process.env.MONGO_URI, {
            dbName: "HOSPITAL_MANG_SYS_DEPLOYED",
        })
        .then(() => {
            console.log("Connected to database!");
        })
        .catch((err) => {
            console.log(`Some error occurred while connecting to the database: ${err}`);
        });
};
