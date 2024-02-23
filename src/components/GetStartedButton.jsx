import React, { useState } from "react";
import { Link } from "react-router-dom";

function GetStartedButton() {
    const [email, setEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [error, setError] = useState(false)
    return (
        <>
            <div className="sc-dBAPYN iTtzpD">
                <div className="sc-eInJlc jIonjU" style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email adress"
                        style={{
                            width: '80%',
                            // height: '40px',
                            borderRadius: '5px',
                            padding: '20px',
                            border: '3px solid grey',
                            fontSize: '26px',
                        }}
                        value={email}
                        onChange={(e) => {
                            if (e.target.value === "") {
                                setError(true)
                                setErrorMessage("Please Fill Email to continue!")
                            } else {
                                setError(false)
                            }
                            setEmail(e.target.value)
                        }}
                        // value={formik.values.email}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        
                        
                    />
                </div>
                {error ?
                    <p 
                    style={{
                        color: 'red',
                        fontSize: '26px',
                        textAlign: 'center',
                        marginTop: '10px',
                    }}
                    >
                        *{errorMessage}
                    </p>

                    : null}

            </div>
            <div
                className="sc-dBAPYN iTtzpD"
            >
                <span
                    // id="button-772cd149"
                    fontFamily="Oswald"
                    className="sc-cvbbAY iqlUUc"
                >
                    <div
                        //  className="sc-jWBwVP gvUqdv"
                        onClick={() => {
                            if (email === "" || email === null || email === undefined) {
                                setErrorMessage("Please Fill Email to continue!")
                                setError(true)
                            } 
                            // check if email is valid
                            else if (!email.includes('@')) {
                                setErrorMessage("Please enter a valid email address!")
                                setError(true)
                            }
                            else {
                                setError(false)
                                localStorage.setItem('email', email);
                                window.location.href = `https://buy.stripe.com/test_3cscP17M65YU1UcfZi?prefilled_email=${email}`
                            }
                        }}>
                        <span

                            //  to={"/checkout-b"}

                            style={{ color: "white" }}>
                            GET STARTED ON FIVERR WITH $49
                        </span>
                    </div>
                </span>
            </div>
        </>
    )
}
export default GetStartedButton;
