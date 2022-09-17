import { Stack } from "@mui/system";
import React from "react";
import { IExperience } from "../types";
import { ExperienceCard } from "./experience-card";

export interface ExperiencesProps {
  experiences: IExperience[];
}

export const Experiences: React.FC<ExperiencesProps> = ({ experiences }) => {
  return (
    <Stack spacing={2} direction="column-reverse" marginTop="1rem">
      {experiences.map((experience) => (
        <ExperienceCard experience={experience} key={experience.title} />
      ))}
    </Stack>
  );
};
