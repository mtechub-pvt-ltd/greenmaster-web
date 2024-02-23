
import React, { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Alert, Avatar, Container, ThemeProvider, createTheme } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { BASEURL } from "../../../utils/BASEURL";
import axios from "axios";
import { setUserInfo } from "../../redux/reducer/authReducer";
import { LoadingButton } from "@mui/lab";
import { toast } from "react-toastify";

const defaultTheme = createTheme();
export default function ResetPassword() {
    const navigate=useNavigate()
    const [loading, setloading] = useState(false)
    const {id,token}=useParams()
    const validationSchema = Yup.object({
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required'),
      });
      const [showPassword, setShowPassword] = useState(false);
      const [ApiError, setApiError] = useState("")
      const initialValues = {
        password: '',
        confirmPassword:'',
        role:"user",
        id,
        token
      };
      const formik = useFormik({
        initialValues,
        validationSchema ,
        onSubmit: async (values) => {
          setloading(true)
          try {
            // Replace with your login API endpoint
           setApiError('')
            const response = await axios.post(`${BASEURL}/users/reset_password/${id}/${token}`, values);
            if(response.status===200){
              setloading(false)
              setApiError("")
              toast.success("Password reset successfully..")
              navigate('/login', { replace: true });
            }
          } catch (error) {
            setloading(false)
              setApiError(error.response.data.message)
    
            // Handle login error, e.g., display an error message.
            console.error('Login failed:', error);
          }
        },
      });
      const { values, errors, touched, handleChange, handleBlur, handleSubmit } = formik;
    const validateLink=async()=>{
      console.log("--------");
      try {
          setloading(true)
       
          // Replace with your login API endpoint
          const values={
            id,
            token
          }
          const response = await axios.post(`${BASEURL}/users/validate_reset_password_link`, values);
          if(response.status===200){
              setloading(false)
           return
          
          }
        } catch (error) {
          console.log(error);
          setloading(false)
          toast.error("It looks like your url is invalid or link expire")
          navigate('/forget-password')
    }
  }
  useEffect(() => {
    validateLink()
  }, [])
  return (
    <>
    
      <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> */}
          <img src="/641f006d8d1ab_Frame2.png" alt="" />
          {/* </Avatar> */}
          <Typography component="h1" variant="h5">
           Reset Password
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
         
             <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="current-password"
              value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                    helperText={touched.confirmPassword && errors.confirmPassword}
            />
            {ApiError && (
                    <Alert severity="error" sx={{ mt: 2 }}>
                      {/* <AlertTitle>Error</AlertTitle> */}
                      {ApiError}
                    </Alert>
                  )}
            
             <LoadingButton
                    loading={loading}
                    fullWidth
                    sx={{
                      mt:2
                    }}
                    size="large"
                    // type="submit"
                    variant="contained"
                    onClick={handleSubmit}
                  >
                 Reset Password
                  </LoadingButton>
        
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
      
    </>
  );
}
