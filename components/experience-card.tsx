import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { IExperience } from "../types";

export interface ExperienceCardProps {
  experience: IExperience;
}
export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
}) => {
  return (
    <Paper elevation={1} sx={{ padding: "2rem" }}>
      <Stack
        direction={{ md: "row", xs: "column" }}
        spacing={2}
        paddingY="0.5rem"
      >
        <Typography variant="h4" fontWeight="500">
          {experience.company}
        </Typography>
        <Typography variant="h4" color="primary.A100" fontWeight="400">
          ( {experience.date} )
        </Typography>
        <Typography variant="h4" color="primary.A100" fontWeight="400">
          {experience.location}
        </Typography>
      </Stack>
      <Typography variant="h2" fontWeight="500" paddingBottom="1rem">
        {experience.title}
      </Typography>
      <Typography variant="body2" fontWeight="400" color="primary.A100">
        {experience.breif}
      </Typography>
    </Paper>
  );
};
