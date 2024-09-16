// require('dotenv').config();
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { DB_name } from "./constants.js";

dotenv.config({
    path: './env'
});


connectDB();







//making a connection string with database -> 1st approach
/* 
import express from "express";
const app = express();
import mongoose from "mongoose";
async function connectDB() {
    try{
        await mongoose.connect(`${process.env.DB_URL}/${DB_name}`);
        app.on("error", (error) => {
            console.log("ERR: ", error);
            throw error;
        })
        //starting server
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    }
    catch((err) => {
            console.log(err);
            throw err;
        });
}*/