import { Paper, Typography } from "@mui/material";
import React from "react";
import { IService } from "../types";

export interface ServiceCardProps {
  service: IService;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Paper elevation={1} sx={{ padding: "2rem" }}>
      <Typography variant="h3" fontWeight="500" paddingBottom="1rem">
        {service.title}
      </Typography>
      <Typography variant="body1" fontWeight="400" color="primary.A200">
        {service.breif}
      </Typography>
    </Paper>
  );
};
