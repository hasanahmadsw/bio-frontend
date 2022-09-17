import { Button, Paper, Typography } from "@mui/material";

export const ContactSection = () => {
  return (
    <Paper sx={{ padding: "1rem" }}>
      <Typography variant="h2" fontWeight="600">
        Have Question ? Get in touch!
      </Typography>
      <Typography
        paddingTop="1rem"
        paddingBottom="1.5rem"
        color="primary.A100"
        variant="h4"
      >
        I am here to support you. I can help you with the technical side of your
        business and provide technology advice
      </Typography>
      <Button variant="contained" sx={{ paddingX: "2rem" }}>
        <Typography variant="body2" fontWeight="700">
          Contact Me
        </Typography>
      </Button>
    </Paper>
  );
};
