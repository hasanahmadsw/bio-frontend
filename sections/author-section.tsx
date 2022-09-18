import { Box, Grid, Typography } from "@mui/material";
import { CustomLink } from "../components/custom-link";

export const AuthorSection = () => {
  return (
    <Grid container alignItems="center">
      <Grid item md={2} xs={12}>
        <Box width="130px">
          <img
            src="/hasan.png"
            alt="hasanahmad"
            width="100%"
            height="100%"
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        </Box>
      </Grid>
      <Grid item md={10} xs={12}>
        <Typography variant="h4" fontWeight="600" paddingBottom="0.5rem">
          Written by Hasan Ahmad
        </Typography>
        <Typography variant="body2" color="primary.A100">
          Hassan Ahmed is a software developer, entrepreneur, and content writer
          who continues to learn every day about makes the world a better place.
        </Typography>
        <Box marginLeft="-1rem">
          <CustomLink href="/about" fontWeight="700">
            Learn More About Hasan.
          </CustomLink>
        </Box>
      </Grid>
    </Grid>
  );
};
