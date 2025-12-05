import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
        throw new Error("MONGODB_URI is not defined. Add it to your .env file.");
    }

    try {
        const connectionInstance = await mongoose.connect(mongoUri, {
            dbName: DB_NAME,
        });

        console.log(
            `MONGODB connected: ${connectionInstance.connection.host}/${connectionInstance.connection.name}`
        );

        return connectionInstance;
    } catch (error) {
        console.error("MONGODB connection error:", error.message);
        throw error;
    }
};

export default connectDB;