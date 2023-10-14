import express, { Express, Request, Response } from "express";
import userRoutes from "./routes/user";
import categoriesRoutes from "./routes/categories";
import blogsRoutes from "./routes/blogs";
import bodyParser from "body-parser";
import "dotenv/config";

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRoutes);
app.use(categoriesRoutes);
app.use(blogsRoutes);

app.listen(parseInt(process.env.PORT_NO!), "", () => {
  console.log("server is listening on port", parseInt(process.env.PORT_NO!));
});
