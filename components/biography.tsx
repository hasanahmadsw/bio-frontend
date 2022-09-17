import { Divider, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { IBiography } from "../types";

export interface BiographyProps {
  bio: IBiography;
}

export const Biography: React.FC<BiographyProps> = ({ bio }) => {
  return (
    <Paper>
      <Typography
        variant="h1"
        fontWeight="500"
        paddingTop="1.2rem"
        paddingBottom="1rem"
      >
        Biography.
      </Typography>
      <Divider sx={{ width: "120px" }} />
      <Typography paddingY="1.5rem" variant="body1">
        {bio.summary}
      </Typography>
      <Stack spacing={2}>
        <Stack direction="row" spacing={10}>
          <Typography variant="h4" color="primary.A100">
            NAME
          </Typography>
          <Typography variant="h4" fontWeight="normal">
            {bio.name}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={5}>
          <Typography variant="h4" color="primary.A100">
            BIRTHDAY
          </Typography>
          <Typography variant="h4" fontWeight="normal">
            {bio.birthday}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={6}>
          <Typography variant="h4" color="primary.A100">
            ADDRESS
          </Typography>
          <Typography variant="h4" fontWeight="normal">
            {bio.address}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={9}>
          <Typography variant="h4" color="primary.A100">
            PHONE
          </Typography>
          <Typography variant="h4" fontWeight="normal">
            {bio.phone}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={10}>
          <Typography variant="h4" color="primary.A100">
            EMAIL
          </Typography>
          <Typography variant="h4" fontWeight="normal">
            {bio.email}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};
