import React, { useEffect, useState,

} from 'react'
import '../../css/ThankYouPage.css'
import Navbar from '../../components/Navbar'
import { useNavigate,} from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { BASEURL } from '../../../utils/BASEURL'
function ThankYouPage() {
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
       
        // try {
        //   const result = await axios.post(
        //     `${BASEURL}/users/createUserAccount`,
        //     body
        //   );
        //   console.log(result);
        //   if (result.status === 200) {
        //     console.log("User created ");
        //     console.log(result.data.user);
        //     localStorage.setItem(
        //       "green_auth_tkn",
        //       JSON.stringify(result.data.user)
        //     );
        //     // setIsModalOpen(true);
        //     // navigate("/thank-you")
        //     // setloading(false);
        //     // navigate("/")
        //   }else{

        //   }
        // } catch (error) {
        //   // setloading(false);
        //   // toast.error("Server error.Please try again..")
        //   // toast.error(error.response.data.message);
        //   console.log(error);
        // }
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
        <Navbar />
        <div class="body">
          <div className='container'>
            <h1>Thanks for enrolling in this course!</h1>
            <p className='details'>The email credentials have been sent to the email address. <span> <a href="#" style={{ textDecoration: "underline" }} onClick={handleViewEmailCredentials} >
              Go to email
            </a></span></p>
            <div class="button-container">
              {/* <button class="button"  onClick={handleViewEmailCredentials}>View Email for Credentials</button> */}
              <button class="button" onClick={() => navigate("/user_portal")}>View Videos</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ThankYouPage