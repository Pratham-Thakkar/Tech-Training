import dotnev from "dotenv";
import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";

dotnev.config({ path: "src/.env" });

import userRoutes from "./route/user";
import adminRoutes from "./route/admin";

const app: Express = express();

app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.send({ status: "sucess", message: "Welcome to our home page" });
});

app.use(userRoutes);
app.use("/admin", adminRoutes);

const connectDB = async (uri: string): Promise<void> => {
  try {
    const result = await mongoose.connect(uri);
    if (!result) throw Error("Unable to connect to Database");
    console.log("Database Connected");
    app.listen(process.env.PORT || 3000);
  } catch (err) {
    err instanceof Error ? console.log(err.message) : console.log(err);
  }
};
connectDB(process.env.MONGO_URI!);
