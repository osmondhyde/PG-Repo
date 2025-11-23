import express from "express";
import { router as reportRouter } from "./routes/reportRoutes";

const app = express();
app.use(express.json());

app.use("/api/reports", reportRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`[proofgraph] API listening on :${port}`);
});
