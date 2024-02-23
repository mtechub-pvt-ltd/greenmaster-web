import React, { useState } from 'react'
import { Menu, MenuItem, Stack,Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import logo1 from '../assets/logo1.png'; // Import the image
import { removeUserInfo } from '../redux/reducer/authReducer';
import { useDispatch } from 'react-redux';
function Navbar() {
  const navigate = useNavigate();
  const dispatch=useDispatch()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleLogout=()=>{
      dispatch(removeUserInfo())
      navigate("/login")
    }
  return (
 <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0,  zIndex: 1000, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo1 }alt="logo" height={45} />
    </Link>
    {/* <SearchBar /> */}
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon style={{color:"rgba(29, 191, 115, 1)"}}/>
        {/* Dashboard */}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>navigate("/user_profile")}>View Profile</MenuItem>
        <MenuItem onClick={()=>navigate("/change_password")}>Change Password</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  </Stack>
  )
}

export default Navbar