import React from 'react'
import Navbar from './components/Navbar/Navbar'
import MiniDrawer from './components/Navbar/NavbarVariant'
import {Outlet} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { AppBar } from '@mui/material';

function App() {

  return (
    <Grid container>
      {/* <Navbar /> */}
      <MiniDrawer />
      <div style={{margin: '30px'}}>
        
        <Outlet />
      </div>
    </Grid>
  )
}

export default App
