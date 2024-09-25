import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  styled,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box
} from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";
import MenuIcon from "@mui/icons-material/Menu";
import { InputBase } from '@mui/material';
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled("Box")(({ theme }) => ({
  display: "none",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: { display: "flex" },
  gap: "20px",
}));

const Userbox = styled("Box")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: { display: "none" },
  gap: "10px",
}));

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding:"0 10px",
  borderRadius:theme.shape.borderRadius,
  width:"40%"

}));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false); // State for InfoIcon menu
  const [drawerOpen, setDrawerOpen] = useState(false); // State for Drawer

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        {/* Hamburger Icon with Drawer opening logic */}
        {/* Container for Drawer (Hamburger Icon) and SkinCare Text */}
        <Box display="flex" alignItems="center">
          {/* Hamburger Icon with Drawer opening logic */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)} // Open the drawer on click
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h4" sx={{ display: { xs: "none", sm: "block" }, ml: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              SkinCare
            </Link>
          </Typography>
        </Box>
        <SpaIcon sx={{ display: { xs: "block", sm: "none" } }} />

          <Search><InputBase placeholder='Search...'/></Search>

        <Icons>
          <InfoIcon onClick={(e) => setInfoOpen(true)} />

          <Link to="/cart" style={{ color: "inherit" }}>
            <Badge badgeContent={4} color="error">
              <ShoppingCartIcon />
            </Badge>
          </Link>

          <Avatar
            sx={{ width: 30, height: 30 }}
            src=""
            onClick={(e) => setOpen(true)}
          />
        </Icons>

        <Userbox>
          <Badge badgeContent={4} color="error">
            <ShoppingCartIcon />
          </Badge>

          <Avatar
            sx={{ width: 30, height: 30 }}
            src=""
            onClick={(e) => setOpen(true)}
          />

          {/* <Typography>john</Typography> */}
        </Userbox>
      </StyledToolbar>

      {/* Drawer Component for Hamburger Menu */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setDrawerOpen(false)}>

              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="Pricing" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          {/* Add more items as needed */}
        </List>
      </Drawer>

      {/* Avatar Dropdown Menu */}
      <Menu
        id="avatar-menu"
        aria-labelledby="avatar-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>

      {/* InfoIcon Dropdown Menu */}
      <Menu
        id="info-menu"
        aria-labelledby="info-button"
        open={infoOpen}
        onClose={(e) => setInfoOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>About Us</MenuItem>
        <MenuItem>Help & Support</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
    </AppBar>
  );
}
