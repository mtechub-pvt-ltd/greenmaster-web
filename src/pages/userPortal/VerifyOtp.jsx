import React from "react";
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// @mui
import {  Stack, Alert, Container, Typography, } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { MuiOtpInput } from 'mui-one-time-password-input'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BASEURL } from '../../../utils/BASEURL';
import { styled } from '@mui/material/styles';
const StyledContent = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
  }));
  
function VerifyOtp() {
    const {email}=useParams()
    console.log(email);
    const navigate = useNavigate();

  const [loading,setloading] = useState(false)
  console.log(loading);
  const [otp, setOtp] = useState('')
  console.log(otp);
  const [ApiError,setApiError] = useState("")
  const [disabled, setdisabled] = useState(true)
  const handleChange =async (newValue) => {
    console.log(newValue);
    setApiError('')
    setOtp(newValue)
    if(newValue.length<4){
      setdisabled(true)
    
      return
    }
    setdisabled(false)
      
}
const handleSubmit=async(e)=>{
  e.preventDefault()
  try {
    setloading(true)
 
    // Replace with your login API endpoint
    const values={
      email,
      code:otp
    }
    const response = await axios.post(`${BASEURL}/users/verifyOtp`, values);
    console.log(response);
    if(response.status===200){
      setloading(false)
      setApiError("")
       console.log(response.data);
       toast.success("Otp Code verify successfully")
        setloading(false)
      navigate(`/reset-password/${response.data.userId}/${response.data.token}`, { replace: true });
    }
  } catch (error) {
    console.log(error);
    setloading(false)
    if(error.response.status===401){
    setApiError(error.response.data.message)
    }
}
}
  return (
    <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h4" gutterBottom sx={{ mb: 5 }}>
              Verify Otp  
            </Typography>


            <form >
      <Stack spacing={3}>
      <MuiOtpInput value={otp} onChange={handleChange} />

       {ApiError && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {ApiError}
        </Alert>
      )}
        
      </Stack>

      

      <LoadingButton sx={{mt:5}} disabled={disabled} loading={loading} fullWidth size="large" type="submit" variant="contained" onClick={(e)=>handleSubmit(e)}  >
        Verify Otp
      </LoadingButton>
      </form>
          </StyledContent>
        </Container>
  )
}

export default VerifyOtp