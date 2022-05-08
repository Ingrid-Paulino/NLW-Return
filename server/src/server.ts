import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();

app.use(cors()); // estou deixando aberto para todo mundo
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log("Server started on port 3333");
});