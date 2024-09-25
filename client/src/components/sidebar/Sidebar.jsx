import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import RepeatIcon from '@mui/icons-material/Repeat';
import FaceIcon from '@mui/icons-material/Face';
import MedicalServicesIcon from '@mui/icons-material/Store';

const navItems = [
  { text: 'Homepage', icon: <HomeIcon color="secondary" />, href: '#home' },
  { text: 'Skin diagnosis', icon: <FaceIcon color="secondary" />, href: '#diagnosis' },
  { text: 'Skin routine', icon: <RepeatIcon color="secondary" />, href: '#routine' },
  { text: 'Product store', icon: <MedicalServicesIcon color="secondary" />, href: '#store' },
];

export default function Sidebar() {
  return (
    <Box 
      flex={1} 
      p={2} 
      sx={{display: {xs: 'none', sm: 'block'}}}
    >
      <Box position="fixed">
        <List>
          {navItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton component="a" href={item.href}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}