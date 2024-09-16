import mongoose from "mongoose";
import { DB_name } from "../constants.js";

const connectDB = async() =>{
    try{
        const conn = await mongoose.connect(`${process.env.DB_URL}/${DB_name}`);
        console.log(`\n MongoDB conected !! DB HOST: ${conn.connection.host}`);
    }catch(err){
        console.log("MONGODB connection Failed", err);
        process.exit(1);
    }
}

export default connectDB;