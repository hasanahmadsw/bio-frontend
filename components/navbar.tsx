import CloseIcon from "@mui/icons-material/Close";
import DehazeIcon from "@mui/icons-material/Dehaze";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import * as React from "react";
import ButtonToggle from "./button-toggle";
import { CustomLink } from "./custom-link";
import { SocialContact } from "./social-contact";
import ThemeToggle from "./theme-toggle";

const items = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Blog",
    url: "/blog",
  },

  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Resume",
    url: "/resume",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

interface Props {
  window?: () => Window;
}

export const NavBar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Box
        paddingY="2rem"
        paddingX="2rem"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h3" fontWeight="700">
          Hasan Ahmad
        </Typography>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            display: { md: "none" },
          }}
        >
          <CloseIcon fontSize="large" color="primary" />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {items.map((item) => (
          <Box key={item.name}>
            <ListItem disablePadding>
              <Link href={item.url}>
                <ListItemButton
                  sx={{ padding: "2rem" }}
                  onClick={handleDrawerToggle}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </Link>
            </ListItem>
            <Divider />
          </Box>
        ))}
      </List>
      <Box paddingY="2rem">
        <ButtonToggle />
      </Box>
      <Box display="flex" justifyContent="center" padding="1rem">
        <SocialContact />
      </Box>

      <Box paddingY="1rem">
        <Typography variant="h4" fontWeight="500">
          All rights reserved &copy; Hasan Ahmad {new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box
      component="header"
      marginX={{ md: "1.8rem", xs: "0" }}
      paddingTop="1rem"
    >
      <AppBar
        position="relative"
        component="nav"
        sx={{
          background: "transparent",
          display: "flex",
          height: "110px",
          justifyContent: "center",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Grid container justifyContent="space-between">
            <Grid item md={3} xs={6}>
              <CustomLink
                href="/"
                color="primary"
                variant="h3"
                fontWeight="700"
              >
                Hasan Ahmad
              </CustomLink>
            </Grid>
            <Grid md={5}>
              <Box
                sx={{
                  display: { xs: "none", sm: "none", md: "flex" },
                }}
                justifyContent="space-between"
              >
                <List sx={{ display: "flex" }}>
                  {items.map((item) => (
                    <CustomLink
                      key={item.name}
                      href={item.url}
                      fontWeight="700"
                    >
                      {item.name}
                    </CustomLink>
                  ))}
                </List>
              </Box>
            </Grid>
            <Grid md={2} xs={6}>
              <Box display={{ md: "block", xs: "none" }}>
                <ThemeToggle />
              </Box>
              <Box
                display={{ md: "none", xs: "flex" }}
                justifyContent="right"
                mr={2}
              >
                <IconButton
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                >
                  <DehazeIcon fontSize="large" color="primary" />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="top"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          transitionDuration={500}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            elevation: 2,
            sx: {
              boxSizing: "border-box",
              width: "100%",
              height: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
