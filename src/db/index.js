import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect
        (`${process.env.MONGODB_URL}`)

    }
    catch(error){
        console.error("MONGODB connection error")
    }
}