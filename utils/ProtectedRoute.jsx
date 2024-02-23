import React from 'react';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASEURL } from './BASEURL';
import { Navigate, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../src/redux/reducer/authReducer';
export const ProtectedRoute = () => {
  const dispatch=useDispatch()
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const Authenticate = async () => {
    // Check for the presence of the JWT token in local storage
    const jwtToken = JSON.parse(localStorage.getItem('green_auth_tkn'));
    console.log(jwtToken);
    if (jwtToken) {
      // Make an Axios request to your server to check the validity of the token
      try {
        const response = await axios.get(`${BASEURL}/users/verifyToken`, {
          headers: {
            Authorization: `Bearer ${jwtToken.token}`,
          },
        });
        if (response.status === 200) {
          dispatch(setUserInfo(jwtToken))
          setIsAdminAuthenticated(true);
        } else {
          localStorage.removeItem('travel_auth_tkn'); // Remove invalid token
          setIsAdminAuthenticated(false);
        }
      } catch (error) {
        console.error('Error checking token:', error);
        setIsAdminAuthenticated(false);
      }
    } else {
      setIsAdminAuthenticated(false);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    Authenticate();
  }, []);
  if (isLoading) {
    // If still loading, return a loading indicator or null
    return null;
  }
  // let auth = localStorage.getItem("travel_auth_tkn");
  // console.log(auth);
  return isAdminAuthenticated ? <Outlet /> : <Navigate to={'/login'} />;
};
