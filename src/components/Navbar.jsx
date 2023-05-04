import React from 'react'
import Box from '@mui/material/Box';
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='primary'>
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EmployeeApp
          </Typography>
          <Button color="inherit" variant='outlined'>
            <Link to={'/'}>Home</Link>
        </Button>
          <Button color='inherit' variant='outlined'>
            <Link to={'/add'}>Add Employee</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
    
  )
}

export default Navbar
