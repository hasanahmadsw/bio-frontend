import {
  Box,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import { ServiceCard } from "../components/service-card";
import Meta from "../helpers/Meta";
import { servicesData } from "../utils/data";

const Services: NextPage = () => {
  return (
    <>
      <Meta title="Services | Hasan Ahmad" />
      <NavBar />
      <Container sx={{ marginTop: "2rem" }}>
        <Paper>
          <Box>
            <Typography
              variant="h1"
              fontWeight="600"
              paddingTop="1.2rem"
              paddingBottom="1rem"
              color="#BA52BF"
            >
              What I Do
            </Typography>
            <Divider sx={{ width: "120px" }} />
            <Typography paddingY="1.5rem" variant="body1" fontWeight="300">
              I help ambitious companies and people like yours generate more
              profits by increasing awareness, increasing web traffic, and
              creating effective web services.
            </Typography>
          </Box>
        </Paper>
        <Stack spacing={2}>
          {servicesData.map((service) => (
            <ServiceCard service={service} key={service.title} />
          ))}
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default Services;
