export type CommitSignal = {
  hash: string;
  author: string;
  message: string;
  additions: number;
  deletions: number;
  timestamp: string;
};

export type OwnershipRecord = {
  path: string;
  author: string;
  linesChanged: number;
};

export function calculateOwnership(records: OwnershipRecord[]) {
  const byPath: Record<string, Record<string, number>> = {};
  for (const record of records) {
    if (!byPath[record.path]) byPath[record.path] = {};
    byPath[record.path][record.author] =
      (byPath[record.path][record.author] || 0) + record.linesChanged;
  }
  return byPath;
}
