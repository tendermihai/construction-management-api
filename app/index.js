import { getConstruction } from "./repository.js";
import express, { json, request, response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/api/v1/constructions/all", async (request, response) => {
  let constructions = await getConstruction();
  response.status(200).json(constructions);
});

app.listen(9090, () => {
  console.log("express is listening on 9090");
});
