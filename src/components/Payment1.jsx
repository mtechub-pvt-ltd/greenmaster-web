import React, { useState } from "react";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
  CardNumberElement,
   CardCvcElement,
    CardExpiryElement,
} from "@stripe/react-stripe-js";

import { BASEURL } from "../../utils/BASEURL";
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import Modal from "./WellcomeModal";
function Payment1() {
  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            width: '100%',
            iconColor: "#c4f0ff",
            color: "black",
            fontWeight: 500,
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "black" },
            "::placeholder": { color: "lightgray" }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "black"
        }
    }
}
  const navigate = useNavigate()
  const validationSchema = Yup.object({
    first_name: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone_no: Yup.number().required("Phone number is required"),
    // street_address: Yup.string().required("Address is required"),
    // city: Yup.string().required("City is required"),
    // postcode: Yup.string().required("ZIP Code is required"),
  });

  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setpaymentError] = useState("");
  const [loading, setloading] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [emailPhoneUnique, setemailPhoneUnique] = useState("");

  const formik = useFormik({
    initialValues: {
      first_name: "",
      email: "",
      phone_no: "",
      // street_address: "",
      // city: "",
      // postcode: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values)
      // event.preventDefault();
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
      if (!stripe || !elements) {
        return;
      }
      setloading(true);
      setpaymentError("");
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardCvcElement, CardExpiryElement, CardNumberElement)
    })
    console.log("paymentMethod")
    console.log(paymentMethod)
    let paymentIntentData = paymentMethod
    try {
        const body = {
          email: values.email,
          phone_no: values.phone_no,
        };
        const result = await axios.post(
          `${BASEURL}/users/checkEmailPhone`,
          body
        );
        if (result.status === 200) {
          console.log("success")
          const body = {
                fullname: values.first_name,
                email: values.email,
                phone_no: values.phone_no,
                // city: values.city,
                // address: values.street_address,
                // zip_code: values.postcode,
                // payment_details: result.paymentIntent,
                payment_details: paymentIntentData,
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
                  // setIsModalOpen(true);
                  // navigate("/thank-you")
                  console.log("THNAK YOU ")
                  setloading(false);
                  // navigate("/")
                }
              } catch (error) {
                setloading(false);
                toast.error("Server error.Please try again..")
                toast.error(error.response.data.message);
                console.log(error);
              }
        }
      } catch (error) {
        setloading(false);
        setpaymentError(error.response.data.message);
        return;
      }

   
    
    },
  });
  return (
    <div size="6" className="sc-dKEPtC fEPozp">
      {/* {isModalOpen && <Modal email={formik.values.email} />} */}
      <form
      onSubmit={formik.handleSubmit}
      >
        <div className="sc-dBAPYN eAoujn">
          <div
            id="text-20ce44cd"
            fontSize="26"
            font-family="Inter"
            color="rgba(19, 25, 33, 1)"
            className="sc-cpmKsF bxZQhP"
          >
            <div>
              <p dir="ltr">
                <span style={{ color: "rgba(16, 50, 40, 1)" }}>
                  <strong>Contact information</strong>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="sc-dBAPYN kvJrQp">
          <div className="sc-eInJlc jIonjU">
            <input
              type="text"
              name="first_name"
              placeholder="Full name"
              value={formik.values.first_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="form-input-8183fc6a"
              className="sc-kasBVs hrJCwI strong_class"
            />
            {formik.touched.first_name && formik.errors.first_name ? (
              <div className="formikError">{formik.errors.first_name}</div>
            ) : null}
          </div>
        </div>
        <div className="sc-dBAPYN kvJrQp">
          <div className="sc-eInJlc jIonjU">
            <input
              type="email"
              name="email"
              placeholder="Email adress"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="form-input-396fa467"
              className="sc-kasBVs hrJCwI strong_class"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="formikError">{formik.errors.email}</div>
            ) : null}
          </div>
        </div>
        <div className="sc-dBAPYN kvJrQp">
          <div className="sc-eInJlc jIonjU">
            <input
              type="number"
              name="phone_no"
              placeholder="Phone number"
              value={formik.values.phone_no}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="form-input-396fa467"
              className="sc-kasBVs hrJCwI strong_class"
            />
            {formik.touched.phone_no && formik.errors.phone_no ? (
              <div className="formikError">{formik.errors.phone_no}</div>
            ) : null}
          </div>
        </div>
        <div class="sc-dBAPYN bpwvde"></div>
        <div className="sc-dBAPYN eAoujn">
          <div
            id="text-248c3217"
            fontSize="26"
            font-family="Inter"
            color="rgba(19, 25, 33, 1)"
            className="sc-cpmKsF bxZQhP strong_class"
          >
            <div>
              <p dir="ltr">
                <span style={{ color: "rgba(16, 50, 40, 1)" }}>
                  <strong>Payment information</strong>
                </span>
              </p>
            </div>

          </div>
        </div>
        <div >
          <fieldset className='FormGroup' style={{ marginBlock: '3%', border: '1px solid lightGray', borderRadius: '5px' }}>
            <label className='poppinsRegularBold' >Card Number</label>
            <div className="form-control-stripe" style={{
              marginBlock: '2%'
            }}>
              <CardNumberElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <fieldset className='FormGroup' style={{ marginBlock: '3%', width: '100%', border: '1px solid lightGray', borderRadius: '5px' }}>
            <label className='poppinsRegularBold'>Card Expiry</label>
            <div className="form-control-stripe" style={{
              marginBlock: '2%'
            }}>
              <CardExpiryElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <fieldset className='FormGroup' style={{ marginBlock: '3%', width: '100%', border: '1px solid lightGray', borderRadius: '5px' }}>
            <label className='poppinsRegularBold'>Cvc</label>
            <div className="form-control-stripe" style={{
              marginBlock: '2%'
            }}>
              <CardCvcElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
        </div>
        {paymentError && (
          <p className="FieldErrors__FieldErrorUi-sc-1t97nsl-0 error">
            *{paymentError}
          </p>
        )}
        <div className="sc-fgrSAo ecHVQM">
          <div id="offerprice-d6e7dc4b" data-test-element="offer-price">
            <div className="sc-hwcHae bYbclX">
              <div className="PricePlanUi-ooet9v-0 fwcFOY">
                <div className="PricePlanItemWithoutLeftOffsetUi-sc-1uuzj1l-0 rThNM">
                  <div
                    data-test-id="offer-price-381227"
                    className="PricePlanNameUi-sc-1yrysvu-0 geYaqk"
                  >
                    <label className="PricePlanLabelUi-j5zrey-0 dCQsrH">
                      <input type="radio" checked={true} />{" "}
                      <div>Green Masterclass Course</div>
                    </label>
                  </div>
                  <div class="PricePlanAmountUi-sc-1y55e5e-0 jyNGyi">
                    $49.00
                  </div>
                </div>
              </div>
            </div>
            <div className="sc-dEfkYy xpcpi"></div>
          </div>
        </div>
        <div className="sc-dBAPYN dvzmsU">
          <button
            id="payment-button-afe18ebf"
            font-family="ManropeSemiBold"
            className="sc-cvbbAY dGmaHt"
            type="submit"
            disabled={loading}
          >
            <div className="sc-jWBwVP gvUqdv">
              {" "}
              {loading ? <><CircularProgress  size={20} color="inherit" />  &nbsp;Validation</> : <>Submit order</>}
            </div>
          </button>
        </div>







        {/* <button disabled={loadingStripe} className="axil-btn btn-fill-primary btn-medium mt-3">Pay</button> */}

      </form>
      <div className="sc-fgrSAo fcjGeC">
        <div className="sc-exkUMo byxgdE">
          <picture className="sc-kcDeIU eRiUqm">
            <img
              id="image-b7fda61d"
              src="https://d1yei2z3i6k35z.cloudfront.net/161/63490451b5d0b_payments1.png"
              width="315"
              loading="lazy"
              className="sc-cBdUnI jJKbgS"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default Payment1;
