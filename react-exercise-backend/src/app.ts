import express, { Express, Request, Response } from "express";
import "dotenv/config";

const app: Express = express();

app.listen(parseInt(process.env.PORT_NO!), "", () => {
  console.log("server is listening on port", parseInt(process.env.PORT_NO!));
});
