import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import { Link } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';

const formValidationSchema = yup.object({
  email: yup
  .string()
  .min(5, "Need a longer email!")
  .required("Please fill the email")
  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Enter Valid email"),
  password: yup
  .string()
  .min(8, "Need a longer Password!")
  .max(12, "Too much Password")
  .required("Please fill the Password")
  
})




export function Login() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("onSubmit", values);
    }
  })

  const navigate = useNavigate();
  return (
    <div className='log'>
    <CssVarsProvider>
      <main>
        {/* <ModeToggle /> */}
        <Sheet
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign in to continue.</Typography>
          </div>
          <TextField
            // html input attribute
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            value={formik.values.email} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            // pass down to FormLabel as children
            label="Email"
          />
          {formik.touched.email && formik.errors.email? formik.errors.email : ''}
          <TextField
            name="password"
            type="password"
            value={formik.values.password} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            placeholder="password"
            label="Password"
          />
          {formik.touched.password && formik.errors.password? formik.errors.password : '' }
          <Button sx={{ mt: 1 /* margin top */ }} onClick={() => navigate("/Home")}>Log in</Button>
          <Typography
            endDecorator={<Link to="/Signup">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
    </div>
  );
}
