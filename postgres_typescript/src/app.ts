import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import "dotenv/config";

import talentRoutes from "./route/talent";
import projectRoutes from "./route/project";

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

app.use(talentRoutes);
app.use(projectRoutes);

app.listen(parseInt(process.env.PORT_NO!), "", () => {
  console.log("listening to port: ", process.env.PORT_NO!);
});
