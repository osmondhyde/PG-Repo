import React from "react";

type ProofCardProps = {
  developer: string;
  contribution: number;
  complexityScore: number;
  qualityScore: number;
};

export const ProofCard: React.FC<ProofCardProps> = ({
  developer,
  contribution,
  complexityScore,
  qualityScore,
}) => {
  return (
    <div className="proof-card">
      <h2>Developer ProofID</h2>
      <p>{developer}</p>
      <ul>
        <li>Contribution: {contribution}%</li>
        <li>Complexity score: {complexityScore.toFixed(1)}</li>
        <li>Quality score: {qualityScore.toFixed(1)}</li>
      </ul>
    </div>
  );
};
