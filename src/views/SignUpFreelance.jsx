// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { TextField, Checkbox, Button, FormControlLabel, Typography } from '@mui/material';

const SignUpFreelance = () => {
  const history = useHistory();
  const [datosRegistro, setDatosRegistro] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    pais: '',
    suscripcion: false,
    terminos: false
  });

  const handleChange = (e) => {
    setDatosRegistro({
      ...datosRegistro,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (e) => {
    setDatosRegistro({
      ...datosRegistro,
      [e.target.name]: e.target.checked
    });
  };

  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const emailValidation = (email) => {
    // expresion regular para validar email
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación de términos y condiciones
    if (!datosRegistro.terminos) {
      alert('Debes aceptar los términos y condiciones para continuar.');
      return;
    }
    if (!emailValidation(email)) {
      setError({
        error: true,
        message: "El email no es valido",
      });
      return;
    }
    console.log(email);
    setError({
      error: false,
      message: "",
    });
    
    history.push('/exito');
  };

  return (
    <box>
      <Typography>Sign Up to hire talent</Typography>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="Nombre"
            variant="outlined"
            name="nombre"
            value={datosRegistro.nombre}
            onChange={handleChange}
            style={{ marginRight: 8 }}
          />
          <TextField
            label="Apellido"
            variant="outlined"
            name="apellido"
            value={datosRegistro.apellido}
            onChange={handleChange}
            style={{ marginLeft: 8 }}
          />
        </div>
        <TextField
          label="Correo"
          variant="outlined"
          name="correo"
          value={datosRegistro.correo}
          onChange={handleChange}
          fullWidth
          style={{ margin: '16px 0' }}
        />
        <TextField
          label="País"
          variant="outlined"
          name="pais"
          value={datosRegistro.pais}
          onChange={handleChange}
          fullWidth
          style={{ margin: '16px 0' }}
        />
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={datosRegistro.suscripcion}
                onChange={handleCheckboxChange}
                name="suscripcion"
              />
            }
          label="Deseo suscribirme al boletín de noticias."
        />
        </div>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={datosRegistro.terminos}
                onChange={handleCheckboxChange}
                name="terminos"
                required
              />
            }
            label="Acepto los términos y condiciones y la política de privacidad."
          />
        </div>
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: 16 }}>
          Registrarse
        </Button>
      </form>
      <Typography variant="body2">
        ¿Ya tienes una cuenta? <Link to="/Login">Login</Link>
      </Typography>
    </box>
  );
};

export default SignUpFreelance;
