import { useForm } from '../../hooks/useForm'
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useMemo, useState } from 'react'
import { startCreatingUserWithEmailPassword } from '../../store/auth'
import { useDispatch, useSelector } from 'react-redux'

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setformSubmitted] = useState(false);

  const { status, errorMessage } = useSelector(state => state.auth);

  const isCheckingAuthentication = useMemo( () => status === 'checking', [status])

  const formData = {
    email: '',
    password: '',
    displayName: '',

  }

  const formValidations = {
    email: [(value) => value.includes('@'), 'El correo tiene que tener una @'],
    password: [(value) => value.length >= 6, 'El password debe tener al menos 6 letras'],
    displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],

  }



  const { displayName, email, onInputChange, password, formState,
    isFormValid, emailValid, passwordValid, displayNameValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!isFormValid) return;
    // console.log(formState)
    setformSubmitted(true);
    dispatch(startCreatingUserWithEmailPassword(formState));
  }

  return (
    <AuthLayout title="Crear Cuenta">
      <form className="animate__animated animate__fadeIn animate__faster" onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder='Nombre completo'
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder='mail@mail.com'
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>


          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField
              label="Contraseña"
              type="password"
              placeholder='Contraseña'
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

            <Grid
              item
              xs={12}
              display={!!errorMessage ? '' : 'none'}>
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12}>
              <Button
                disabled={isCheckingAuthentication}
                variant="contained"
                fullWidth
                type="submit"
              >
                Crear cuenta
              </Button>

            </Grid>


          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Inicia Sesion
            </Link>

          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
