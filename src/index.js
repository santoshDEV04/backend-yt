// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import express from 'express'
const app = express()

dotenv.config({
    path: './env'
})


connectDB()
.then(() => {
    app.listen(process.nextTick.PORT || 8000, () => {
        console.log(`Server is running at PORT : ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("mongodb connection failed..!!!", error);
})

















/*
;( async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", () => {
            console.log("Our app isn't able to talk to database", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listning on the port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log('ERROR: ', error);
        throw error
    }
})()

*/