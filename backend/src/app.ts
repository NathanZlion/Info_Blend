import { Request, Response, NextFunction, Express } from "express";
import mongoose from "mongoose";
import express from "express";
import cors from "cors"
import { config as configDotenv } from "dotenv";


import userRouter from "./routes/user.routes";
import newsRouter from "./routes/news.routes";

configDotenv();

const app: Express = express();

// MIDDLEWARES, PARSERS TO USE JSON
app.use(express.json());

// SET HEADERS
app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
})

// ROUTES
app.use("/api/v1/user", userRouter);
app.use("/api/v1/news", newsRouter);

// any origin can access this server
app.use(cors({
    origin: "*",
}));

mongoose.set('strictQuery', false);

async function connectToDb() {
    try {
        console.log(`trying to Connect to database...`);
        await mongoose.connect(
            process.env.MONGODBURL!,
            { useNewUrlParser: true, useUnifiedTopology: true } as mongoose.ConnectOptions
        );
        console.log(`✔ Connected to database successfully`);
    } catch (error: any) {
        throw new Error(`Database Error: ${error.message}`);
    }
}

async function startListening() {
    try {
        console.log(`trying to open port ${process.env.PORT}...`);
        app.listen(process.env.PORT);
        console.log(`✔ Server listening through port ${process.env.PORT}`);
    } catch (error: any) {
        throw new Error(error.message);
    }
}

async function startServer() {
    try {
        await connectToDb();
        await startListening();
        console.warn(`-- ✔ Server started successfully ✔ --`);
    } catch (error: any) {
        console.log(error.message);
    }
}


startServer();
