import MenuIcon from "@mui/icons-material/Menu";
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
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";

import Link from "next/link";
import React, { PropsWithChildren } from "react";

const items = [
  {
    name: "Home",
    url: "/",
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
    name: "About",
    url: "/about",
  },
];
interface LayoutProps {
  window?: () => Window;
}

export const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
  children,
  window,
}) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Box paddingY="2rem">
        {/* <IconButton onClick={handleDrawerToggle}>
              <CloseIcon fontSize="large" />
            </IconButton> */}
        <Typography variant="h1" sx={{ my: 2 }}>
          Hasan Ahmad
        </Typography>
      </Box>
      <Divider />

      <List>
        {items.map((item) => (
          <ListItem key={item.name}>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={handleDrawerToggle}
            >
              <Link href={item.url}>
                <ListItemText primary={item.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const sidebar = (
    <Paper elevation={2} sx={{ padding: "0", height: "80vh" }}>
      <List>
        {items.map((item) => (
          <ListItem key={item.name}>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link href={item.url}>
                <ListItemText primary={item.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );

  return (
    <>
      <AppBar
        position="sticky"
        component="nav"
        sx={{
          background: "transparent",
          display: "flex",
          height: "80px",
          justifyContent: "space-around",
          boxShadow: "none",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Toolbar>
          <Box>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none", xs: "block" } }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>
          <Typography
            variant="h4"
            component="div"
            fontWeight="bold"
            sx={{ flexGrow: 1, display: { md: "none", xs: "block" } }}
          >
            Hasan Ahmad
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="left"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: { md: "300px", xs: "380px" },
              background: "#000",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Grid container>
        <Grid item md={2}>
          <Box display={{ md: "block", xs: "none" }}>{sidebar}</Box>
        </Grid>
        <Grid item md={10} xs={12}>
          <Box>{children}</Box>
        </Grid>
      </Grid>
    </>
  );
};
