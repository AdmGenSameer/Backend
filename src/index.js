//require('dotenv').config({path: './.env'});
import dotenv from 'dotenv';
//import express from "express";
import connectDB from "./db/index.js";

dotenv.config({path: './.env'})

try {
    await connectDB();
    const app = (await import("./app.js")).default;

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`App is listening on the port ${PORT}`);
    });
} catch (error) {
    console.error("Failed to initialize application:", error.message);
    process.exit(1);
}












/*const app = express()

;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.error("ERROR:", error);
            throw error;
        });
        
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on the port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("ERROR:", error);
        throw error;
    }
})();*/

//First Approach
// import express from  "express"
// const app = express()

// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error",()=>{
//             console.error("ERROR:",error);
//             throw error
            
//         })

//         aap.listen(process.env.PORT,()=>{
//             console.log(`App islistening on the port $ {process.env.PORT}`)
//         })
        
//     } catch (error) {
//         console.error("ERROR:",error);
//         throw err;
        

        
//     }
// })()