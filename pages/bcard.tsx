import { QrCode2Rounded } from "@mui/icons-material/";
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { CustomLink } from "../components/custom-link";
import { QR } from "../components/qr";
import { SocialContact } from "../components/social-contact";
import ThemeToggle from "../components/theme-toggle";
import Meta from "../helpers/Meta";
import { SkillsSection } from "../sections/skills.section";
import { bioData, servicesData } from "../utils/data";
export interface BusinessCardProps {}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  textAlign: "center",
  p: 4,
};
export const BusinessCard: React.FC<BusinessCardProps> = () => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Meta title="Business Card | Hasan Ahmad" />
      <Container maxWidth="lg" sx={{ marginY: "2rem" }}>
        <Paper variant="outlined" sx={{ padding: "2rem", textAlign: "center" }}>
          <Box marginBottom="5rem">
            <IconButton
              onClick={handleOpen}
              color="primary"
              size="large"
              sx={{
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
                float: "left",
              }}
            >
              <QrCode2Rounded />
            </IconButton>
            <Modal open={open} onClose={handleClose}>
              <Paper sx={style} variant="outlined">
                <QR
                  url={`https://hasanahmad.net/${router.asPath.toString()}`}
                />
              </Paper>
            </Modal>
            <Box sx={{ float: "right" }}>
              <ThemeToggle />
            </Box>
          </Box>
          <Box>
            <img
              src="/hasan.png"
              alt="hasan-ahmad"
              width="180px"
              height="180px"
              style={{
                objectFit: "contain",
                borderRadius: "50%",
                border: "2px solid #ddd",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              }}
            />
          </Box>
          <Box>
            <Typography variant="h2" fontWeight="700">
              {bioData.name}
            </Typography>

            <Typography
              variant="h4"
              fontWeight="600"
              color="primary.A100"
              paddingTop="1rem"
            >
              {bioData.title}
            </Typography>
          </Box>
          <Box paddingTop="1rem">
            <Link href={`mailto:${bioData.email}`}>
              <Typography variant="h4" sx={{ cursor: "pointer" }}>
                {bioData.email}
              </Typography>
            </Link>
          </Box>
          <Box display="flex" justifyContent="center" marginTop="1rem">
            <SocialContact />
          </Box>
        </Paper>
        <Paper variant="outlined" sx={{ padding: "2rem", marginTop: "1rem" }}>
          <Typography variant="h3" fontWeight="700" paddingBottom="1rem">
            Bio
          </Typography>
          <Divider sx={{ width: "120px" }} />
          <Box paddingY="1rem">
            <Typography variant="body1">{bioData.summary}</Typography>
          </Box>
          <Box marginLeft="-1rem">
            <CustomLink
              href="/about"
              variant="h4"
              fontWeight="700"
              color="primary"
            >
              Learn More About Me.
            </CustomLink>
          </Box>
        </Paper>
        <Paper variant="outlined" sx={{ padding: "2rem", marginTop: "1rem" }}>
          <Typography variant="h3" fontWeight="700" paddingBottom="1rem">
            Services
          </Typography>
          <Divider sx={{ width: "120px" }} />
          <Box paddingY="1.3rem">
            <Grid container spacing={2}>
              {servicesData.map((service) => (
                <Grid item key={service.title} md={3} xs={12}>
                  <Link href="/services">
                    <Paper
                      elevation={1}
                      sx={{
                        padding: "1rem",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src="/technical-support.png"
                        alt={service.title}
                        // height="60px"
                        width="40px"
                      />
                      <Typography
                        variant="body2"
                        fontWeight="600"
                        paddingTop="0.6rem"
                      >
                        {service.title}
                      </Typography>
                    </Paper>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Paper>
        <Paper variant="outlined" sx={{ padding: "1rem", marginTop: "1rem" }}>
          <SkillsSection />
        </Paper>
        <Paper sx={{ padding: "2rem", textAlign: "center" }}>
          <Typography variant="body2" color="primary.A100">
            All rights reserved &copy; Hasan Ahmad {new Date().getFullYear()}
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default BusinessCard;
