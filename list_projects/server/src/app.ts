import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import projectRoutes from "./route/project";
import dotenv from "dotenv";
dotenv.config();

const app: Express = express();

app.use((req: Request, res: Response, next: Function) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.json());

app.use("/project", projectRoutes);

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log("Database connected");
    app.listen(parseInt(process.env.PORT_NO!));
  })
  .catch((err) => {
    if (err instanceof Error) console.error(err.message);
    else console.error(err);
  });
