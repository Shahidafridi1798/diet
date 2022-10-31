import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
    email: yup
    .string()
    .min(5, "Oops, need a longer email")
    .required("Please fill the email")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Enter Valid email"),
    password: yup
    .string()
    .min(8, "Oops, need a longer Password")
    // .max(12, "Too much Password")
    .required("Please fill the Password"),
    // .matches(/^[A-Z0-9._%+-]$/i, "Enter Valid password"),
    firstName: yup
    .string()
    .required("Please fill first name"),
    // .matches(/^[A-Z]$/i, "Enter Valid First Name"),
    lastName: yup
    .string()
    .required("Please fill last name")
    // .matches(/^[A-Z0]$/i, "Enter Valid Last Name")
  })


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Diet Sugegstions
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("onSubmit", values);
    }
  })

  return (
    // <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={formik.values.firstName} 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                  autoFocus
                />
                {formik.touched.firstName && formik.errors.firstName? formik.errors.firstName : ''}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={formik.values.lastName} 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                  autoComplete="family-name"
                />
                {formik.touched.lastName && formik.errors.lastName? formik.errors.lastName : ''}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={formik.values.email} 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                  name="email"
                  autoComplete="email"
                />
                {formik.touched.email && formik.errors.email? formik.errors.email : ''}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={formik.values.password} 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                  id="password"
                  autoComplete="new-password"
                />
                 {formik.touched.password && formik.errors.password? formik.errors.password : '' }
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I accept all the terms and conditions that are abided by Diet Suggestions App."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}

              onClick={() => navigate("/Home")}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={"/login"} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    // </ThemeProvider>
  );
}