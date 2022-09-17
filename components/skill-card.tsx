import { Paper, Typography } from "@mui/material";
import React from "react";

export interface SkillCardProps {
  skill: string;
}
export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <Paper elevation={1} sx={{ padding: "1rem", textAlign: "center" }}>
      <Typography variant="h4" fontWeight="500">
        {skill}
      </Typography>
    </Paper>
  );
};
