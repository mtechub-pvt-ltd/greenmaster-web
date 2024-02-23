import React, { useState } from "react";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { BASEURL } from "../../utils/BASEURL";
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import Modal from "./WellcomeModal";
function Payment() {
  const navigate=useNavigate()
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
      // event.preventDefault();
console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
      // if (!stripe || !elements) {
      //   return;
      // }
      // setloading(true);
      // setpaymentError("");
      // // setemailPhoneUnique("");
      // try {
      //   const body = {
      //     email: values.email,
      //     phone_no: values.phone_no,
      //   };
      //   const result = await axios.post(
      //     `${BASEURL}/users/checkEmailPhone`,
      //     body
      //   );
      //   if (result.status === 200) {
      //   }
      // } catch (error) {
      //   setloading(false);
      //   setpaymentError(error.response.data.message);
      //   return;
      // }
      // const result = await stripe.confirmPayment({
      //   elements,
      //   redirect: "if_required",
      //   // confirmParams: {
      //   //   return_url: `http://localhost:3000/`,
      //   // },
      // });
      // if (result.error) {
      //   setloading(false);
      //   // Handle payment confirmation error
      //   console.error("Payment confirmation error:", result.error.message);
      //   setpaymentError(result.error.message);
      //   // You can show an error message to the user or take appropriate action
      // } else if (result.paymentIntent) {
      //   // Payment was successful
      //   const body = {
      //     fullname: values.first_name,
      //     email: values.email,
      //     phone_no: values.phone_no,
      //     // city: values.city,
      //     // address: values.street_address,
      //     // zip_code: values.postcode,
      //     payment_details: result.paymentIntent,
      //   };
      //   try {
      //     const result = await axios.post(
      //       `${BASEURL}/users/createUserAccount`,
      //       body
      //     );
      //     console.log(result);
      //     if (result.status === 200) {
      //       console.log("User created ");
      //       console.log(result.data.user);
      //       localStorage.setItem(
      //         "green_auth_tkn",
      //         JSON.stringify(result.data.user)
      //       );
      //       // setIsModalOpen(true);
      //       navigate("/thank-you")
      //       setloading(false);
      //       // navigate("/")
      //     }
      //   } catch (error) {
      //     setloading(false);
      //     toast.error("Server error.Please try again..")
      //     toast.error(error.response.data.message);
      //     console.log(error);
      //   }
      // }
      // Make an API call to create a user account
    },
  });
  return (
    <div size="6" className="sc-dKEPtC fEPozp">
      {/* {isModalOpen && <Modal email={formik.values.email} />} */}
      <form onSubmit={formik.handleSubmit}>
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
        {/* <div class="sc-dBAPYN eAoujn">
          <div
            id="text-8630609b"
            fontSize="26"
            font-family="Inter"
            color="rgba(19, 25, 33, 1)"
            class="sc-cpmKsF jhMHvZ strong_class"
          >
            <div>
              <p dir="ltr">
                <span style={{ color: "rgba(16, 50, 40, 1)" }}>
                  <strong>Billing information</strong>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="sc-dBAPYN kvJrQp">
          <div class="sc-eInJlc jIonjU">
            <input
              type="text"
              name="street_address"
              placeholder="Address"
              value={formik.values.street_address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="form-input-8abea4c7"
              class="sc-kasBVs hrJCwI strong_class"
            />
            {formik.touched.street_address && formik.errors.street_address ? (
              <div className="formikError">{formik.errors.street_address}</div>
            ) : null}
          </div>
        </div>
        <div class="sc-dBAPYN kvJrQp">
          <div class="sc-eInJlc jIonjU">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="form-input-01caf18d"
              class="sc-kasBVs hrJCwI strong_class"
            />
            {formik.touched.city && formik.errors.city ? (
              <div className="formikError">{formik.errors.city}</div>
            ) : null}
          </div>
        </div>
        <div class="sc-dBAPYN bpwvde">
          <div class="sc-eInJlc jIonjU">
            <input
              type="text"
              name="postcode"
              placeholder="ZIP Code"
              value={formik.values.postcode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="form-input-379de6d1"
              class="sc-kasBVs hrJCwI strong_class"
            />
            {formik.touched.postcode && formik.errors.postcode ? (
              <div className="formikError">{formik.errors.postcode}</div>
            ) : null}
          </div>
        </div> */}
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
        {/* <div class="sc-dBAPYN fqypMR">
          <div id="row-36d76432" class="sc-ecaExY vVorD">
            <div size="12" class="sc-dKEPtC feucMO">
              <div class="sc-dBAPYN fqypMR">
                <div
                  id="coupon-2b9b21a0"
                  class="CouponWrapperUi-pbfnn1-0 itTLCN"
                >
                  <div class="CouponUi-sc-16jpfz7-0 kLWpvQ">
                    <input
                      placeholder="Discount code"
                      class="CouponFieldUi-sc-4qw9bc-0 dOgWof"
                      value=""
                    />
                    <button class="CouponButtonUi-sc-156yf8v-0 cCdWl">
                      Apply Discount
                    </button>
                  </div>
                  <div class="CouponErrorUi-sc-145cunc-0 euSpIt">
                Coupon not found
              </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div >
          <PaymentElement className="StripeElement" />
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
        {/* <div class="sc-fgrSAo haxGgE">
      <div id="offerprice-d6e7dc4b">
        <div class="sc-hwcHae bYbclX"></div>
        <div class="sc-dEfkYy xpcpi"></div>
      </div>
    </div> */}
        {/* <div class="sc-dBAPYN gOKSQF">
      <div id="order-bump-f67626a8" class="sc-iNhVCk jihGHX">
        <label class="sc-fnwBNb bJZBhv">
          <div class="sc-cHSUfg jfBBxZ"></div>
          <input type="checkbox" class="sc-cTjmhe UCfAH" />
          <div class="sc-cugefK kOQcPF">
            Yes, give me my templates!
          </div>
        </label>
        <div class="sc-dBAPYN fqypMR">
          <div id="row-4b5a143e" class="sc-ecaExY vVorD">
            <div size="12" class="sc-dKEPtC feucMO">
              <div class="sc-dBAPYN dCnIzC">
                <div
                  fontSize="20px"
                  id="text-545cfe9f"
                  class="sc-eqPNPO iIjfIx"
                >
                  <div>
                    <p dir="ltr">
                      <strong>Full access</strong> to my proven{" "}
                      <strong>
                        plug n play Fiverr communication templates
                      </strong>{" "}
                      so you can build relationships &amp; reach
                      more clients with ease
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
        {/* <div class="sc-dBAPYN krDvgC">
      <div id="order-bump-79d15a89" class="sc-iNhVCk itITeu">
        <label class="sc-fnwBNb gmLpkK">
          <div class="sc-cHSUfg jfBBxZ"></div>
          <input type="checkbox" class="sc-cTjmhe UCfAH" />
          <div class="sc-cugefK kOQcPF">
            Yes, give me my templates!
          </div>
        </label>
        <div class="sc-dBAPYN fqypMR">
          <div id="row-e0bd60ec" class="sc-ecaExY vVorD">
            <div size="12" class="sc-dKEPtC feucMO">
              <div class="sc-dBAPYN dCnIzC">
                <div
                  fontSize="20px"
                  id="text-d957e45c"
                  class="sc-eqPNPO POfqg"
                >
                  <div>
                    <p dir="ltr">
                      <strong>Full access</strong> to my proven{" "}
                      <strong>
                        plug n play Fiverr communication templates
                      </strong>{" "}
                      so you can build relationships &amp; reach
                      more clients with ease
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
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

export default Payment;
