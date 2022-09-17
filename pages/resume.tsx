import { Chip, Container, Divider, Paper, Typography } from "@mui/material";
import { NextPage } from "next";
import { Biography } from "../components/biography";
import { Certificates } from "../components/certificates";
import { Educations } from "../components/educations";
import { Experiences } from "../components/experiences";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import Meta from "../helpers/Meta";
import { SkillsSection } from "../sections/skills.section";
import {
  bioData,
  certificatesData,
  educationsData,
  experiencesData,
} from "../utils/data";

const Resume: NextPage = () => {
  return (
    <>
      <Meta title="About Me | Hasan Ahmad" />
      <NavBar />
      <Container sx={{ marginTop: "2rem" }}>
        <Chip
          component="h1"
          label="About Me"
          sx={{
            background: "#410784",
            color: "white",
            padding: "0.8rem",
            fontSize: "1rem",
            fontWeight: "600",
          }}
        />
        <Biography bio={bioData} />
        <Divider sx={{ marginY: "2rem" }} />
        <Paper>
          <Chip
            component="h1"
            label="Experiences"
            sx={{
              background: "#410784",
              color: "white",
              padding: "0.8rem",
              fontSize: "1rem",
              fontWeight: "600",
            }}
          />
          <Typography
            variant="h1"
            fontWeight="500"
            paddingTop="1.2rem"
            paddingBottom="1rem"
          >
            My Professional Experiences.
          </Typography>
          <Divider sx={{ width: "120px" }} />
          <Experiences experiences={experiencesData} />
        </Paper>
        <Divider sx={{ marginY: "2rem" }} />
        <Paper>
          <Chip
            component="h1"
            label="Educations"
            sx={{
              background: "#410784",
              color: "white",
              padding: "0.8rem",
              fontSize: "1rem",
              fontWeight: "600",
            }}
          />
          <Typography
            variant="h1"
            fontWeight="500"
            paddingTop="1.2rem"
            paddingBottom="1rem"
          >
            My Educations.
          </Typography>
          <Divider sx={{ width: "120px" }} />
          <Educations educations={educationsData} />
        </Paper>
        <Divider sx={{ marginY: "2rem" }} />
        <Paper>
          <Chip
            component="h1"
            label="Certificates"
            sx={{
              background: "#410784",
              color: "white",
              padding: "0.8rem",
              fontSize: "1rem",
              fontWeight: "600",
            }}
          />
          <Typography
            variant="h1"
            fontWeight="500"
            paddingTop="1.2rem"
            paddingBottom="1rem"
          >
            My Certificates.
          </Typography>
          <Divider sx={{ width: "120px" }} />
          <Certificates certificates={certificatesData} />
        </Paper>
        <Divider sx={{ marginY: "2rem" }} />
        <Paper>
          <Chip
            component="h1"
            label="Skills"
            sx={{
              background: "#410784",
              color: "white",
              padding: "0.8rem",
              fontSize: "1rem",
              fontWeight: "600",
            }}
          />
          <SkillsSection />
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default Resume;
