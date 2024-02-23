import React, { useEffect, useState,

} from 'react'
import '../../css/ThankYouPage.css'
import Navbar from '../../components/Navbar'
import { useNavigate,} from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { BASEURL } from '../../../utils/BASEURL'
function ThankYouPageNew() {
  
  const navigate = useNavigate()
  
      
  useEffect(() => {
    const userEmail = localStorage.getItem('email');
    alert(userEmail);
  }, [navigate]);
  return (
    <>

      <div style={{ height: "100vh" }}>
        <Navbar />
      
      </div>
    </>
  )
}

export default ThankYouPageNew