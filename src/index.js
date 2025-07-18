// require('dotenv').config()
// import mongoose from 'mongoose'
// import {DB_NAME} from './constants'


import dotenv from 'dotenv'
import connectDB from './db/index.js'
// import express from 'express'
// const app = express()

import { app } from './app.js'

dotenv.config({
    path: './.env'
})

connectDB()

    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`✅ Server is running at port : ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log("❌ MONGO db connection failed !!!", error)
    })






/*
import express from 'express'
const app = express()
// IIFE to have async await and better error handling using try catch
(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) // connecting database
        // listeners
        app.on("error", (error)=>{
            console.log("ERRR: ", error)
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.error("ERROR: ", error)
        throw error
    }
})()


*/