import { Stack } from "@mui/system";
import React from "react";
import { IEducation } from "../types";
import { EducationCard } from "./education-card";

export interface EducationsProps {
  educations: IEducation[];
}

export const Educations: React.FC<EducationsProps> = ({ educations }) => {
  return (
    <Stack spacing={2} direction="column">
      {educations.map((education) => (
        <EducationCard education={education} key={education.title} />
      ))}
    </Stack>
  );
};
