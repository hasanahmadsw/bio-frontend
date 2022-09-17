import { TabContext, TabList, TabPanel } from "@mui/lab/";
import { Box, Chip, Divider, Paper, Tab, Typography } from "@mui/material";
import { useState } from "react";
import { Certificates } from "../components/certificates";
import { Educations } from "../components/educations";
import { Experiences } from "../components/experiences";
import {
  certificatesData,
  educationsData,
  experiencesData,
} from "../utils/data";

export const ResumeSection = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Paper>
      <Box>
        <Chip
          label="Resume"
          component="h1"
          sx={{
            background: "#590E80",
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
          My Qualifications and Experience
        </Typography>
        <Divider sx={{ width: "120px" }} />
        <Typography paddingY="1.5rem" variant="body1" fontWeight="300">
          I'm a Software Engineer with over 4 years of experience. I'm from
          Syria. I design and create web services for amazing people around the
          world. I like work with new people. New people are new experiences.
        </Typography>
      </Box>
      <TabContext value={value}>
        <Paper
          sx={{
            paddingBottom: "0.5rem",
          }}
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Experiences" value="1" />
            <Tab label="Education" value="2" />
            <Tab label="Certificates" value="3" />
          </TabList>
        </Paper>
        <TabPanel value="1" sx={{ padding: "0", paddingTop: "1rem" }}>
          <Experiences experiences={experiencesData} />
        </TabPanel>
        <TabPanel value="2" sx={{ padding: "0", paddingTop: "1rem" }}>
          <Educations educations={educationsData} />
        </TabPanel>
        <TabPanel value="3" sx={{ padding: "0", paddingTop: "1rem" }}>
          <Certificates certificates={certificatesData} />
        </TabPanel>
      </TabContext>
    </Paper>
  );
};
