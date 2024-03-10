//IMPORTS
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToDB from "./db/connectToDB.js";
import path from "path";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import { app, server } from "./socket/socket.js";


//CONFIGS
dotenv.config()
const PORT = process.env.PORT || 5000
const __dirname = path.resolve();

//MIDDLEWARES
app.use(express.json())     //to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "/frontend/dist")));

//ROUTES
app.use('/api/auth', authRoutes)
app.use('/api/messages/', messageRoutes)
app.use('/api/users/', userRoutes)

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

//SERVER PART
server.listen(PORT, () => {
    connectToDB()
    console.log(`Server Running at Port ${PORT}`)
})


// app.get('/',(req,res)=>{
//     res.send("Server is Running")
// })