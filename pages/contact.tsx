import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import Meta from "../helpers/Meta";
import { ImageStyle } from "../sections/hero-section";
const ContactMe: NextPage = () => {
  return (
    <>
      <Meta title="Contact Me | Hasan Ahmad" />
      <NavBar />
      <Container sx={{ marginTop: "2rem" }}>
        <Grid container>
          <Grid item md={8} xs={12}>
            <Paper variant="outlined" sx={{ padding: "2rem" }}>
              <Typography
                variant="h1"
                fontWeight="700"
                paddingTop="1.2rem"
                paddingBottom="1rem"
                // color="#BA52BF"
              >
                Contact Me.
              </Typography>
              <Divider sx={{ width: "120px" }} />
              <Typography
                paddingTop="1rem"
                paddingBottom="1.5rem"
                color="primary.A200"
                variant="h4"
              >
                I am here to support you. I can help you with the technical side
                of your business and provide technology advice
              </Typography>
              <Stack spacing={2}>
                <Box display="flex" justifyContent="left" alignItems="center">
                  <PhoneIcon fontSize="large" />
                  <Link href="tel:+971508838637" target="_blank">
                    <Typography paddingX="1rem">(+971) 50 883 8637</Typography>
                  </Link>
                </Box>
                <Box display="flex" justifyContent="left" alignItems="center">
                  <MailOutlineIcon fontSize="large" />
                  <Link href="mailto:hasanahmadsw@gmail.com" target="_blank">
                    <Typography paddingX="1rem">
                      hasanahmadsw@gmail.com
                    </Typography>
                  </Link>
                </Box>
                <Box display="flex" justifyContent="left" alignItems="center">
                  <LocationOnIcon fontSize="large" />
                  <Typography paddingX="1rem">Dubai, Emirates</Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box textAlign="center" display={{ xs: "none", md: "block" }}>
              <ImageStyle src="/about.png" alt="hasan+ahmad" />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default ContactMe;
