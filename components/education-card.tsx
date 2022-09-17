import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { IEducation } from "../types";

export interface EducationCardProps {
  education: IEducation;
}
export const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <Paper elevation={1} sx={{ padding: "2rem" }}>
      <Stack direction="row" spacing={2} paddingY="0.5rem">
        <Typography variant="h4" fontWeight="500">
          {education.university}
        </Typography>
        <Typography variant="h4" color="primary.A100" fontWeight="400">
          ( {education.date} )
        </Typography>
      </Stack>
      <Typography variant="h2" fontWeight="500" paddingBottom="1rem">
        {education.title}
      </Typography>
      <Typography variant="body2" fontWeight="400" color="primary.A100">
        {education.breif}
      </Typography>
    </Paper>
  );
};
