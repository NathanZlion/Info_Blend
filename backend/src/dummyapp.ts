import { Request, Response, NextFunction, Express } from "express";
import express from "express";
import { config as configDotenv } from "dotenv";
import cors from "cors"
import userRouter from "./routes/user.routes";
import dummyNewsRouter from "./routes/dummy.news.routes";


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
app.use("/api/v1/news", dummyNewsRouter);

// any origin can access this server
app.use(cors({ origin: "*" }));

async function startListening() {
    try {
        console.log(`trying to open port ${process.env.PORT}...`);
        app.listen(process.env.PORT);
        console.log(`- listening through port ${process.env.PORT}`);
    } catch (error: any) {
        throw new Error(error.message);
    }
}

async function startServer() {
    try {
        await startListening();
        console.log("✔ Dummy Server Started ✔")
        console.warn(`!!! This is a dummy server and will not provide real data. For test purpose only---`);
    } catch (error: any) {
        console.log(error.message);
    }
}


startServer();
