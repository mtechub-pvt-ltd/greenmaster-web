import React, { useEffect, useState,

} from 'react'
import '../../css/ThankYouPage.css'
import Navbar from '../../components/Navbar'
import { useNavigate,} from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { BASEURL } from '../../../utils/BASEURL'
import img from './images.png'
function ThankYouPage() {
  const checkmarkContainerStyle = {
    display: 'inline-block',
    width: '22px',
    height: '22px',
    background: '#fff',
    position: 'relative',
    border: '1px solid #000',
    borderRadius: '4px', // Makes the check box rounded
  };

  // Inline styles for the checkmark itself
  const checkmarkStyle = {
    content: '""', // Note: `content` does not work with inline styles, used here for completeness
    position: 'absolute',
    left: '6px',
    top: '12px',
    width: '6px',
    height: '12px',
    borderTop: 'solid #000',
    borderRight: 'solid #000',
    borderWidth: '0 2px 2px 0',
    transform: 'rotate(45deg)',
  };
  const [userData] = useState(JSON.parse(localStorage.getItem("green_auth_tkn")))
  const navigate = useNavigate()
  const handleViewEmailCredentials = () => {
    // Construct the mailto link with the recipient email address
    const mailtoLink = `mailto:${userData.email}`;

    // Open the user's default email client
    window.location.href = mailtoLink;
  };
  const emailUser=async(userEmail)=>{
    const body = {
          // fullname: values.first_name,
          email: userEmail,
          // phone_no: values.phone_no,
          // city: values.city,
          // address: values.street_address,
          // zip_code: values.postcode,
          // payment_details: result.paymentIntent,
        };
       
        try {
          const result = await axios.post(
            `${BASEURL}/users/createUserAccount`,
            body
          );
          console.log(result);
          if (result.status === 200) {
            console.log("User created ");
            console.log(result.data.user);
            localStorage.setItem(
              "green_auth_tkn",
              JSON.stringify(result.data.user)
            );
            setIsModalOpen(true);
            navigate("/thank-you")
            setloading(false);
            navigate("/")
          }else{

          }
        } catch (error) {
          // setloading(false);
          // toast.error("Server error.Please try again..")
          // toast.error(error.response.data.message);
          console.log(error);
        }
      }
      
  useEffect(() => {
    setTimeout(() => {
      var userEmail = localStorage.getItem('email');
    console.log(userEmail);
    emailUser(userEmail)
    // alert(userEmail);
    // new one
    }, 1000);
  }, []);
  return (
    <>

      <div style={{ height: "100vh" }}>
        {/* <Navbar /> */}
        <div class="body">
          <div className='container'>
          <div 
          style={{
            padding: '20px',
          }}
          >
      <img src={img} alt="Thank you" style={{width: '10%', height: 'auto'}} />
    </div>
            <h1>Thanks for enrolling in this course!</h1>
            <p className='details'>The Login credentials have been sent to the email address. </p>
            <br></br>
            <span> <a
            style={{ textDecoration: "none",
            padding: "15px",
            backgroundColor: "darkgreen",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer"
          }}
            onClick={() => navigate("/")}
            >
              Go to Home
            </a></span>
            {/* <div class="button-container"> */}
              {/* <button class="button"  onClick={handleViewEmailCredentials}>View Email for Credentials</button> */}
              {/* <button class="button" onClick={() => navigate("/user_portal")}>View Videos</button> */}
            {/* </div> */}
          </div>
        </div>
        </div>
     
    </>
  )
}

export default ThankYouPage