// eslint-disable-next-line no-unused-vars
import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Button, Box, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        {/* Logo y buton hamburguesa */}
        <Button>
        icon={<MenuIcon/>}
        </Button>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        
          <Link to="/">
            <img src="../assets/img/logo.jpg" alt="Logo" />
          </Link>
        </Typography>

        {/* Buscador */}
        <Container sx={{ flexGrow: 1 }}>
          <Box sx={{ position: 'relative', borderRadius: 2, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}>
            <SearchIcon sx={{ p: 1, position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
            <InputBase placeholder="Buscar..." sx={{ pl: 4, color: 'inherit' }} />
          </Box>
        </Container>

        {/* Botones de login y signup */}
        <Button color="inherit" component={Link} to="/Login">
          Login
        </Button>
        <Button color="inherit" component={Link} to="/SignUp">
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation
