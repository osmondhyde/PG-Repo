import { calculateOwnership } from "../index";

type RepoInput = {
  name: string;
  commits: number;
  filesTouched: number;
};

type GenerateReportInput = {
  developer: string;
  repos: RepoInput[];
};

export async function generateReport(input: GenerateReportInput) {
  // Fake implementation just for structure
  const totalCommits = input.repos.reduce((sum, r) => sum + r.commits, 0);
  const totalFiles = input.repos.reduce((sum, r) => sum + r.filesTouched, 0);

  return {
    developer: input.developer,
    totalCommits,
    totalFiles,
    repos: input.repos,
    generatedAt: new Date().toISOString(),
  };
}
