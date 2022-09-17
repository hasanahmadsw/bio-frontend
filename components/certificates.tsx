import { Stack } from "@mui/system";
import React from "react";
import { ICertificate } from "../types";
import { CertificateCard } from "./certificate-card";

export interface CertificatesProps {
  certificates: ICertificate[];
}

export const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
  return (
    <Stack spacing={2} direction="column-reverse" marginTop="1rem">
      {certificates.map((certificate) => (
        <CertificateCard certificate={certificate} key={certificate.title} />
      ))}
    </Stack>
  );
};
