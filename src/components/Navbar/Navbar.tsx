import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from './consts/navbarListItems';
import { navbarStyles } from './styles';
import {useParams, useNavigate} from 'react-router-dom';

const drawerWidth = 240;

export default function Navbar () {
    const navigate = useNavigate()
    return (
        <Drawer
        // sx={navbarStyles.drawer}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {mainNavbarItems.map((item, index) => (
            <ListItem key={item.id} button
                onClick={() => navigate(item.route)}>
              <ListItemButton>
                <ListItemIcon 
                // sx={navbarStyles.icons}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} 
                // sx={navbarStyles.text} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    )
}
