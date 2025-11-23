import { Router } from "express";
import { generateReport } from "../services/reportService";

export const router = Router();

router.post("/", async (req, res) => {
  try {
    const report = await generateReport(req.body);
    res.json(report);
  } catch (err: any) {
    console.error("[proofgraph] failed to generate report", err);
    res.status(500).json({ error: "Failed to generate report" });
  }
});
