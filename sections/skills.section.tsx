import { TabContext, TabList, TabPanel } from "@mui/lab/";
import { Box, Divider, Grid, Paper, Tab, Typography } from "@mui/material";
import { useState } from "react";
import { SkillCard } from "../components/skill-card";
import { skillsData } from "../utils/data";

export const SkillsSection = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Paper sx={{ padding: "1rem" }}>
      <Box>
        <Typography
          variant="h2"
          fontWeight="500"
          paddingTop="1rem"
          paddingBottom="1rem"
        >
          My Technical Skills
        </Typography>
        <Divider sx={{ width: "120px" }} />
        <Typography
          paddingY="1.5rem"
          variant="h4"
          // fontWeight="300"
          color="primary.A100"
        >
          I design and create web services for amazing people around the world.
          I like work with new people. New people are new experiences.
        </Typography>
      </Box>
      <TabContext value={value}>
        <Paper
          sx={{
            paddingBottom: "0.5rem",
          }}
        >
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            variant="scrollable"
          >
            <Tab label="Programming" value="1" />
            <Tab label="Database" value="2" />
            <Tab label="DevOps" value="3" />
            <Tab label="Cloud" value="4" />
            <Tab label="Tools" value="5" />
          </TabList>
        </Paper>
        <TabPanel value="1" sx={{ padding: "0", paddingTop: "1.5rem" }}>
          <Grid container spacing={3}>
            {skillsData.programming.map((skill) => (
              <Grid item key={skill} md={3} xs={6}>
                <SkillCard skill={skill} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value="2" sx={{ padding: "0", paddingTop: "1.5rem" }}>
          <Grid container spacing={3}>
            {skillsData.database.map((skill) => (
              <Grid item key={skill} md={3} xs={6}>
                <SkillCard skill={skill} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value="3" sx={{ padding: "0", paddingTop: "1.5rem" }}>
          <Grid container spacing={3}>
            {skillsData.devops.map((skill) => (
              <Grid item key={skill} md={3} xs={6}>
                <SkillCard skill={skill} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value="4" sx={{ padding: "0", paddingTop: "1.5rem" }}>
          <Grid container spacing={3}>
            {skillsData.cloud.map((skill) => (
              <Grid item key={skill} md={3} xs={6}>
                <SkillCard skill={skill} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value="5" sx={{ padding: "0", paddingTop: "1.5rem" }}>
          <Grid container spacing={3}>
            {skillsData.tools.map((skill) => (
              <Grid item key={skill} md={3} xs={6}>
                <SkillCard skill={skill} />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </TabContext>
    </Paper>
  );
};
