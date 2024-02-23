import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout_b from "./pages/Checkout/Checkout_b";
import Privacy from "./pages/Privacy";
import TermsCondition from "./pages/TermsCondition/";
import Refund from "./pages/Refund/";
import UserPortal from "./pages/userPortal/Videos";
import ProfilePage from "./pages/userPortal/ProfilePage";
import LoginPage from "./pages/userPortal/LoginPage";
import { ProtectedRoute } from "../utils/ProtectedRoute";
import { UnProtectedRoute } from "../utils/UnProtectedRoute";
import ChangePasswordPage from "./pages/userPortal/ChangePasswordPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ThankYouPage from "./pages/Checkout/ThankYouPage";
import ThankYouPageNew from "./pages/Checkout/ThankYouPageNew";
import ForgetPassword from "./pages/userPortal/ForgetPassword";
import VerifyOtp from "./pages/userPortal/VerifyOtp";
import ResetPassword from "./pages/userPortal/ResetPassword";
function App() {
  return (
    <>
      <Router>
      <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout-b" element={<Checkout_b />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/thank-you-new" element={<ThankYouPageNew />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<TermsCondition />} />
          <Route path="/refund" element={<Refund />} />
          {/* <Route element={<UnProtectedRoute />}>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/forget-password" element={<ForgetPasswordPage />} />
              </Route> */}
              <Route element={<UnProtectedRoute />}>
               <Route path="/login" element={<LoginPage />} />
               <Route path="/forget-password" element={<ForgetPassword />} />
               <Route path="/verify_otp/:email" element={<VerifyOtp />} />
               <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
               </Route>
          <Route element={<ProtectedRoute />}>
         
            <Route path="/user_portal" element={<UserPortal />} />
            <Route path="/user_profile" element={<ProfilePage />} />
            <Route path="/change_password" element={<ChangePasswordPage />} />
          </Route>
          {/*              
                <Route path="*" element={<Page404 />} />
                <Route path="404" element={<Page404 />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
