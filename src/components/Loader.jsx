import React from 'react'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
function Loader() {
  return (
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="success" />
    </Stack>
  )
}

export default Loader