import {
  Box,
  Divider,
  Grid,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { ServiceCard } from "../components/service-card";
import { servicesData } from "../utils/data";

export const ImageStyle = styled("img")(({ theme }) => ({
  width: "320px",
  [theme.breakpoints.down("sm")]: {
    width: "250px",
  },
}));
export const ServicesSection = () => {
  return (
    <Paper sx={{ padding: "1rem" }}>
      <Grid container spacing={2} flexWrap="wrap-reverse">
        <Grid item md={8} xs={12}>
          <Box>
            <Typography
              variant="h2"
              fontWeight="500"
              paddingTop="1.2rem"
              paddingBottom="1rem"
            >
              What I Do
            </Typography>
            <Divider sx={{ width: "120px" }} />
            <Typography paddingY="1.5rem" variant="h4" color="primary.A100">
              I help ambitious companies and people like yours generate more
              profits by increasing awareness, increasing web traffic, and
              creating effective web services.
            </Typography>
            <Stack spacing={2}>
              {servicesData.map((service) => (
                <ServiceCard service={service} key={service.title} />
              ))}
            </Stack>
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box
            padding="2rem"
            paddingTop={{ md: "12rem", xs: "0" }}
            textAlign="center"
          >
            <ImageStyle src="/wow.png" alt="hasan+ahmad" />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
