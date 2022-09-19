import { Box, Chip, Grid, Paper, styled, Typography } from "@mui/material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SocialContact } from "../components/social-contact";

export const ImageStyle = styled("img")(({ theme }) => ({
  height: "500px",
  [theme.breakpoints.down("sm")]: {
    height: "300px",
  },
}));

export const HeroSection = () => {
  const { resolvedTheme } = useTheme();
  const [imageSource, setImageSource] = useState("");
  useEffect(() => {
    resolvedTheme === "light"
      ? setImageSource("/signature-light.png")
      : setImageSource("/signature-dark.png");
  }, [resolvedTheme]);
  return (
    <Paper
      sx={{
        borderRadius: "0",
        padding: "1rem",
        paddingTop: "6rem",
      }}
    >
      <Grid container flexWrap="wrap-reverse" spacing={2}>
        <Grid item md={8} xs={12}>
          <Chip
            label="Hasan Ahmad"
            component="h2"
            sx={{
              padding: "0.8rem",
              fontSize: "1rem",
              fontWeight: "600",
            }}
          />
          <Typography
            variant="h2"
            fontSize="2.5rem"
            fontWeight="500"
            paddingTop="1.2rem"
          >
            Helping people make the world a better place through quality
            software.
          </Typography>
          <Typography variant="body1" paddingY="1.5rem" fontWeight="300">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, brand develop, modern websites,
            web services and online stores.
          </Typography>
          <img src={imageSource} alt="hasan-ahmad-signature" width="250px" />
          <Box paddingTop="2rem">
            <SocialContact />
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box textAlign="center">
            <ImageStyle src="/hasan-ahmad.png" alt="hasan+ahmad" />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
