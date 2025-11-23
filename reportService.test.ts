import { generateReport } from "../src/services/reportService";

describe("generateReport", () => {
  it("aggregates commits and files from repos", async () => {
    const report = await generateReport({
      developer: "Sample Dev",
      repos: [
        { name: "repo-a", commits: 10, filesTouched: 4 },
        { name: "repo-b", commits: 5, filesTouched: 3 },
      ],
    });

    expect(report.totalCommits).toBe(15);
    expect(report.totalFiles).toBe(7);
  });
});
