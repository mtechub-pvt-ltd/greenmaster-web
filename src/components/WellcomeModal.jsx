import  React from 'react';
// import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Box, Divider, IconButton, Typography } from '@mui/material';
function WellcomeModal({email}) {
  
  const navigate=useNavigate()
  const handleViewEmailCredentials = () => {
    // Construct the mailto link with the recipient email address
    const mailtoLink = `mailto:${email}`;
  
    // Open the user's default email client
    window.location.href = mailtoLink;
  };
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px',
    // maxWidth: '3600px',
    width:"40%"
  };
  const modalContent = (
    <Box sx={{ ...style }}>
      {/* <IconButton
        sx={{ position: 'absolute', top: '10px', right: '10px' }}
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton> */}
      <Typography variant="h5" align="center" gutterBottom>
        Choose an Option
      </Typography>
      <Divider />
      <Box mt={2} mb={2}>
        <Button
          fullWidth
          variant='contained'
          color="primary"
          style={{backgroundColor:"rgb(29, 191, 115)"}}
          onClick={handleViewEmailCredentials}
        >
          View Email Credentials
        </Button>
      </Box>
      <Divider />
      <Box mt={2}>
        <Button
          fullWidth
          variant='contained'
          color="primary"
          style={{backgroundColor:"rgb(29, 191, 115)"}}
          onClick={() => navigate("/user_portal")}
        >
          View Videos
        </Button>
      </Box>
    </Box>
  );

  return (

  <Modal
  open={open}
  // onClose={handleClose}
  aria-labelledby="child-modal-title"
  aria-describedby="child-modal-description"
>
  {modalContent}
</Modal>
  )
}

export default WellcomeModal