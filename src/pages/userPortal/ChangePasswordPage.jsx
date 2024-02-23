import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  Alert,
} from "@mui/material";
import Navbar from "../../components/Navbar";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASEURL } from "../../../utils/BASEURL";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
function ChangePasswordPage() {
  const { userInfo } = useSelector((state) => state.user);
  const [ApiError, setApiError] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string().required("Current password is required"),
    newPassword: Yup.string()
      .required("New password is required")
      .min(6, "Password should be at least 6 characters long"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      role: "user",
      id: userInfo.id,
    },
    validationSchema,
    onSubmit: async (values) => {
      setApiError("");
      try {
        console.log(userInfo);
        setloading(true);
        const result = await axios.put(
          `${BASEURL}/users/change_password`,
          values, // Move the request body here
          {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          }
        );
        console.log(result);
        if (result.status === 200) {
          toast.success(result.data.message);
          navigate("/user_portal");
        }
        setloading(false);
      } catch (error) {
        setloading(false);
        console.log(error);
        if(error.response.data.statusCode===401){
          localStorage.removeItem("green_auth_tkn")
          navigate("/login")
        }
        if (error.response.status == 401) {
          setApiError(error.response.data.message);
        }
      }
    },
  });
  return (
    <>
      <Navbar />
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "80vh", // Center vertically on the page
          }}
        >
          <Box width="300px">
            <form onSubmit={formik.handleSubmit}>
              <Typography variant="h5" color="primary" align="center">
                Change Password
              </Typography>
              <Box mt={2}>
                <TextField
                  fullWidth
                  id="currentPassword"
                  name="currentPassword"
                  label="Current Password"
                  variant="outlined"
                  type="password"
                  {...formik.getFieldProps("currentPassword")}
                  error={
                    formik.touched.currentPassword &&
                    Boolean(formik.errors.currentPassword)
                  }
                  helperText={
                    formik.touched.currentPassword &&
                    formik.errors.currentPassword
                  }
                />
              </Box>
              <Box mt={2}>
                <TextField
                  fullWidth
                  id="newPassword"
                  name="newPassword"
                  label="New Password"
                  variant="outlined"
                  type="password"
                  {...formik.getFieldProps("newPassword")}
                  error={
                    formik.touched.newPassword &&
                    Boolean(formik.errors.newPassword)
                  }
                  helperText={
                    formik.touched.newPassword && formik.errors.newPassword
                  }
                />
              </Box>
              <Box mt={2}>
                <TextField
                  fullWidth
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  {...formik.getFieldProps("confirmPassword")}
                  error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                  }
                  helperText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                />
              </Box>
              {ApiError && (
                <Box mt={2}>
                  <Alert severity="error" sx={{ mt: 2 }}>
                    {ApiError}
                  </Alert>
                </Box>
              )}
              <Box mt={2}>
                <LoadingButton
                  loading={loading}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Change Password
                </LoadingButton>
              </Box>
            </form>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default ChangePasswordPage;
