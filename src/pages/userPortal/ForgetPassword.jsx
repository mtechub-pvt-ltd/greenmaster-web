
import React from "react";
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
import { useNavigate } from "react-router-dom";
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
export default function ForgetPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });
  const [loading, setloading] = useState(false);
  const [ApiError, setApiError] = useState("");
  const initialValues = {
    email: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        // Replace with your login API endpoint
        setApiError(""); 
        setloading(true);
        const response = await axios.post(`${BASEURL}/users/forgetPassword`, values);
        if (response.status === 200) {
          setApiError("");
          setloading(false);
          toast.success("Otp code send successfully!")
          navigate(`/verify_otp/${values.email}`);
        }
      } catch (error) { 
        setloading(false);
        console.log(error);
        setApiError(error.response.data.message);
        console.error("Login failed:", error);
      }
    },
  });
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    formik;
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
            {/* <LockOutlinedIcon /> */}
            <img src="/641f006d8d1ab_Frame2.png" alt="" />
          {/* </Avatar> */}
          <Typography component="h1" variant="h5">
          Forget Password
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
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
                   Forget Password
                  </LoadingButton>
            {/* <Grid container>
              <Grid item xs sx={{mt:1}}>
                <Link to={'/forget-password'} variant="body2"  style={{ cursor: "pointer" }}
                        onClick={()=>navigate("/forget-password")}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item sx={{mt:1}}>
                      <Link
                        to={"#"}
                        variant="body2"
                        style={{ cursor: "pointer" }}
                        onClick={()=>navigate("/")}
                      >
                        {"Already have ? Sign Up"}
                      </Link>
                    </Grid>
            </Grid> */}
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
      
    </>
  );
}
