// LoginForm.js
import { TextField, Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  // Implement your login logic here
  return (
    <Box>
      <form>
      <TextField label="Usuario" variant="outlined" fullWidth />
      <TextField label="Contraseña" type="password" variant="outlined" fullWidth />
      <Button variant="contained" color="primary" fullWidth>
        Iniciar sesión
      </Button>
    </form>
    <Typography variant="body2">
        ¿No tienes una cuenta? <Link to="/SignUp"> Sign Up</Link>
    </Typography>
    </Box>
    
  );
};

export default Login;
