import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { ICertificate } from "../types";

export interface CertificateCardProps {
  certificate: ICertificate;
}
export const CertificateCard: React.FC<CertificateCardProps> = ({
  certificate,
}) => {
  return (
    <Paper elevation={1} sx={{ padding: "2rem" }}>
      <Typography variant="h3" fontWeight="500">
        {certificate.title}
      </Typography>
      <Stack direction="row" spacing={2} paddingY="0.5rem">
        {certificate.source !== "" ? (
          <>
            <Typography variant="h4" fontWeight="500">
              {certificate.source}
            </Typography>
          </>
        ) : (
          <></>
        )}
        <Typography variant="h4" color="primary.A100" fontWeight="400">
          ( {certificate.date} )
        </Typography>
      </Stack>
      <Typography
        variant="body2"
        fontWeight="400"
        color="primary.A100"
        paddingTop="0.5rem"
      >
        {certificate.breif}
      </Typography>
    </Paper>
  );
};
