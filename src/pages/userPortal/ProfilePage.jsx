import React, { useEffect } from "react";
import { Paper, Typography, Box, Button, Grid, Container } from "@mui/material";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/reducer/authReducer";
import Loader from "../../components/Loader";
import { formatDate } from "../../../utils/FormatDate";

const ProfilePage = () => {
  const { profileInfo, userInfo, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile({ id: userInfo.id }));
  }, []);

  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        {loading ? (
          <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "80vh",
          }}
        >
          <Loader />
          </div>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "80vh", // Center vertically on the page
            }}
          >
            <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
              <Typography
                variant="h4"
                style={{ color: "rgba(29, 191, 115, 1)", marginBottom: "20px" }}
              >
                User Profile
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Full Name</Typography>
                  <Typography>{profileInfo?.fullname}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Email</Typography>
                  <Typography>{profileInfo?.email}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Phone Number</Typography>
                  <Typography>{profileInfo?.phone_no}</Typography>
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Address</Typography>
                  <Typography>{profileInfo?.address}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">City</Typography>
                  <Typography>{profileInfo?.city}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Zip Code</Typography>
                  <Typography>{profileInfo?.zip_code}</Typography>
                </Grid> */}
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Course Amount</Typography>
                  <Typography>
                    {profileInfo?.payment_details?.amount}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6">Payment Created</Typography>
                  <Typography>
                    {formatDate(profileInfo?.payment_created)}
                    {}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        )}
      </Container>
    </>
  );
};

export default ProfilePage;
