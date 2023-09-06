import express, { Express } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config({ path: "src/.env" });

import talentRoutes from "./route/talent";

const app: Express = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(talentRoutes);

app.listen(parseInt(process.env.PORT_NO!), "", () => {
  console.log("listening to port: ", process.env.PORT_NO!);
});
