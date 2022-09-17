import { Box, Grid, Paper, Typography } from "@mui/material";
import { CustomLink } from "../components/custom-link";
import { bioData } from "../utils/data";
export const AboutSection = () => {
  return (
    <Paper sx={{ padding: "1rem" }}>
      <Grid container spacing={1}>
        <Grid item md={4}>
          <Box padding="1rem" display={{ md: "block", xs: "none" }}>
            <img src="/about.png" alt="about-hasan-ahmad" height="500" />
          </Box>
        </Grid>
        <Grid item md={8}>
          <Typography
            variant="h1"
            fontSize="2.4rem"
            paddingTop={{ md: "6rem", xs: "none" }}
          >
            Hi, I'm Hasan Ahmad. I help people make the world better through
            quality software.
          </Typography>
          <Typography
            paddingY="1.5rem"
            variant="h3"
            fontWeight="400"
            color="primary.A100"
          >
            {bioData.summary}
          </Typography>

          <Box paddingTop="1rem" marginLeft="-1rem">
            <CustomLink
              href="/about"
              variant="h4"
              fontWeight="700"
              color="primary"
            >
              Learn More About Me.
            </CustomLink>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
