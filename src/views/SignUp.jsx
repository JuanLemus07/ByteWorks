/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Radio, RadioGroup, FormControlLabel, Container } from '@mui/material';

const SignUp = () => {
  const [userType, setUserType] = useState('freelancer'); // Default to freelancer

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const getSignupLink = () => {
    if (userType === 'freelancer') {
      return "/SignUpFreelance";
    } else {
      return "/SignUpCompany";
    }
  };

  return (
    <Container>
      <Typography variant="h6">Registrarse como:</Typography>
      <RadioGroup row aria-label="user-type" name="user-type" value={userType} onChange={handleUserTypeChange}>
        <FormControlLabel value="freelancer" control={<Radio />} label="Freelancer" />
        <FormControlLabel value="company" control={<Radio />} label="Company" />
      </RadioGroup>
      <Button component={Link} to={getSignupLink()} variant="contained" color="primary">
        Create Account
      </Button>
      <Typography variant="body2">
        ¿Ya tienes una cuenta? <Link to="/Login">Login</Link>
      </Typography>
    </Container>
  );
};

export default SignUp;

