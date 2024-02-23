import React, { useEffect, useState } from "react";
import Payment from "../../components/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { BASEURL } from "../../../utils/BASEURL";
import Payment1 from "../../components/Payment1";
const stripePromise = loadStripe(
  "pk_test_51Ml3wJGui44lwdb4K6apO4rnFrF2ckySwM1TfDcj0lVdSekGOVGrB1uHNlmaO7wZPxwHfRZani73KlHQKOiX4JmK00E0l7opJO"
);
function CheckoutLandingPage() {
  const [clientSecret, setclientSecret] = useState("");
  const [time, setTime] = useState(5 * 60); // 5 minutes in seconds
  const options = {
    // mode: 'payment',
    currency: "usd",
    amount: 79, //  49
  };
  const getPaymentIntent = async () => {
    try {
      const createIntent = await axios.post(
        `${BASEURL}/users/createPaymentIntent`,
        options
      );
      if (createIntent.status == 200) {
        console.log("-aaa");
        setclientSecret(createIntent.data.clientSecret);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   // getPaymentIntent();
  // }, []);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        clearInterval(timerInterval);
        // Timer has reached 0, you can perform an action here
      }
    }, 1000); // Update every second

    return () => clearInterval(timerInterval); // Cleanup on unmount
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const loader = 'auto';
  const appearance = {
    theme: 'stripe'
  };
  return (
    <div class="sc-dBAPYN iOGpId">
      <section id="section-3cb0803f" class="sc-jMMfwr ePcBri">
        <div width="wide" class="sc-jqIZGH hQaljP">
          <div class="sc-dBAPYN fqypMR">
            <div id="row-976ff0b5" class="sc-ecaExY aVsMn">
              <div size="12" class="sc-dKEPtC feucMO">
                <div class="sc-fgrSAo fmLriP">
                  <div
                    id="headline-922c6ae5"
                    fontSize="79"
                    color="rgba(19, 25, 33, 1)"
                    font-family="Oswald"
                    fontStyle="normal"
                    fontWeight="700"
                    letterSpacing="-1"
                    class="sc-cpmKsF hDlIoZ"
                  >
                    <p dir="ltr">
                      GET INSTANT ACCESS TO THE GREEN MASTERCLASS!
                    </p>
                  </div>
                </div>
                <div className="sc-dBAPYN fqypMR">
                  <div font-family="Oswald" className="sc-chbbiW fIFaMF">
                    <section class="sc-hzNEM iQnTRs">
                      <section class="sc-LKuAh eLHiKE">00</section>
                      <section class="sc-iBEsjs MSBWc">days</section>
                    </section>
                    <section class="sc-kaNhvL gGGfUR"></section>
                    <section class="sc-hzNEM iQnTRs">
                      <section class="sc-LKuAh eLHiKE">00</section>
                      <section class="sc-iBEsjs MSBWc">hours</section>
                    </section>
                    <section class="sc-kaNhvL gGGfUR">
                      {/* <!-- -->:
                                    <!-- --> */}
                    </section>
                    <section className="sc-hzNEM iQnTRs">
                      <section className="sc-LKuAh eLHiKE">
                        {String(minutes).padStart(2, "0")}
                      </section>
                      <section className="sc-iBEsjs MSBWc">minutes</section>
                    </section>
                    <section className="sc-kaNhvL gGGfUR">:</section>
                    <section className="sc-hzNEM iQnTRs">
                      <section className="sc-LKuAh eLHiKE">
                        {String(seconds).padStart(2, "0")}
                      </section>
                      <section className="sc-iBEsjs MSBWc">seconds</section>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sc-dBAPYN fqypMR">
            <div id="row-cff473c3" class="sc-ecaExY fqjBMg">
              {/* {clientSecret && ( */}
              <Elements
                stripe={stripePromise}
                options={{ appearance, loader }}
              // options={{ clientSecret: clientSecret }}
              >
                <Payment1 />
              </Elements>
              {/* )}  */}

              <div size="6" class="sc-dKEPtC kEImYM">
                <div class="sc-fgrSAo knnGbj">
                  <div class="sc-exkUMo bAJcVv">
                    <picture class="sc-kcDeIU cCTzKR">
                      <img
                        id="image-6b056b18"
                        src="https://d1yei2z3i6k35z.cloudfront.net/3611194/6437fd7f528a2_Group87.png"
                        width="505"
                        loading="lazy"
                        class="sc-cBdUnI gmgLvQ"
                      />
                    </picture>
                  </div>
                </div>
                <div class="sc-fgrSAo dCthLo">
                  <div class="sc-exkUMo bAJcVv">
                    <picture class="sc-kcDeIU hGuZce">
                      <img
                        id="image-090bf83d"
                        src="https://d1yei2z3i6k35z.cloudfront.net/161/634902091daf4_Group28.png"
                        width="420"
                        loading="lazy"
                        class="sc-cBdUnI hLjqmD"
                      />
                    </picture>
                  </div>
                </div>
                <div class="sc-dBAPYN kPLxAU">
                  <div
                    id="text-5777aac2"
                    fontSize="48"
                    font-family="Inter"
                    color="rgba(19, 25, 33, 1)"
                    fontStyle="normal"
                    fontWeight="400"
                    letterSpacing="0"
                    class="sc-cpmKsF ifmKKy"
                  >
                    <div>
                      <p dir="ltr">
                        <strong>Here’s what you get</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="sc-dBAPYN fqypMR">
                  <div id="row-556ca3d9" class="sc-ecaExY cafPcw">
                    <div size="12" class="sc-dKEPtC feucMO">
                      <div class="sc-dBAPYN dCnIzC">
                        <div
                          fontSize="20px"
                          id="bullet-list-42c4c05e"
                          class="sc-eqPNPO knUQhY"
                        >
                          <div>
                            <ul>
                              <li>
                                <i
                                  class="fas fa-badge-dollar"
                                  style={{
                                    fontSize: "25px",
                                    color: "rgba(5, 150, 56, 1)",
                                    marginLeft: "-25px",
                                    marginRight: "10px",
                                  }}
                                ></i>
                                <span>
                                  <strong>Offer Creation Mastery</strong>
                                  <span style={{ color: "rgba(253, 5, 5, 1)" }}>
                                    <strong>(Value $460)</strong>
                                  </span>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="sc-dBAPYN dCnIzC">
                        <div
                          fontSize="20px"
                          id="bullet-list-532c84d5"
                          class="sc-eqPNPO fLwtKp"
                        >
                          <div>
                            <ul>
                              <li>
                                <i
                                  class="fad fa-chevron-double-right"
                                  style={{
                                    fontSize: "16px",
                                    color: "rgba(248, 1, 1, 1)",
                                    marginLeft: "-25px",
                                    marginRight: "10px",
                                  }}
                                ></i>
                                <span>
                                  A-Z on how to create a gig that sells itself
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sc-dBAPYN fqypMR">
                  <div id="row-096c9011" class="sc-ecaExY cafPcw">
                    <div size="12" class="sc-dKEPtC feucMO">
                      <div class="sc-dBAPYN dCnIzC">
                        <div
                          fontSize="20px"
                          id="bullet-list-d9a7ce3d"
                          class="sc-eqPNPO knUQhY"
                        >
                          <div>
                            <ul>
                              <li>
                                <i
                                  class="fas fa-badge-dollar"
                                  style={{
                                    fontSize: "25px",
                                    color: "rgba(5, 150, 56, 1)",
                                    marginLeft: "-25px",
                                    marginRight: "10px",
                                  }}
                                ></i>
                                <span>
                                  <strong>Algorithm Mastery </strong>
                                  <span style={{ color: "rgba(253, 3, 3, 1)" }}>
                                    <strong>(Value $349)</strong>
                                  </span>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="sc-dBAPYN dCnIzC">
                        <div
                          fontSize="20px"
                          id="bullet-list-d56accb3"
                          class="sc-eqPNPO fLwtKp"
                        >
                          <div>
                            <ul>
                              <li>
                                <i
                                  class="fad fa-chevron-double-right"
                                  style={{
                                    fontSize: "16px",
                                    color: "rgba(248, 1, 1, 1)",
                                    marginLeft: "-25px",
                                    marginRight: "10px",
                                  }}
                                ></i>
                                <span>
                                  How to make the fiverr algorithm work for you
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sc-dBAPYN fqypMR">
                  <div id="row-0945824c" class="sc-ecaExY cafPcw">
                    <div size="12" class="sc-dKEPtC feucMO">
                      <div class="sc-dBAPYN dCnIzC">
                        <div
                          fontSize="20px"
                          id="bullet-list-e947e31b"
                          class="sc-eqPNPO knUQhY"
                        >
                          <div>
                            <ul>
                              <li>
                                <i
                                  class="fas fa-badge-dollar"
                                  style={{
                                    fontSize: "25px",
                                    color: "rgba(5, 150, 56, 1)",
                                    marginLeft: "-25px",
                                    marginRight: "10px",
                                  }}
                                ></i>
                                <span>
                                  <strong>Fiverr Growth Map </strong>
                                  <span
                                    style={{ color: "rgba(253, 22, 4, 1)" }}
                                  >
                                    <strong>(Value $599)</strong>
                                  </span>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="sc-dBAPYN dCnIzC">
                        <div
                          fontSize="20px"
                          id="bullet-list-b6845302"
                          class="sc-eqPNPO dkChsE"
                        >
                          <div>
                            <ul>
                              <li>
                                <i
                                  class="fad fa-chevron-double-right"
                                  style={{
                                    fontSize: "16px",
                                    color: "rgba(248, 1, 1, 1)",
                                    marginLeft: "-25px",
                                    marginRight: "10px",
                                  }}
                                ></i>
                                <span>
                                  No more guessing your way to success
                                  -actionable strategies from day 1
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="sc-dBAPYN zcrJS">
                        <div
                          id="text-684fba82"
                          fontSize="32"
                          font-family="Inter"
                          color="rgba(19, 25, 33, 1)"
                          fontStyle="normal"
                          fontWeight="400"
                          letterSpacing="0"
                          class="sc-cpmKsF lhfben"
                        >
                          <div>
                            <p dir="ltr">
                              <strong>Plus These Insane Bonuses👇🏼</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sc-dBAPYN fqypMR">
                  <div id="row-61cd4106" class="sc-ecaExY cafPcw">
                    <div size="12" class="sc-dKEPtC feucMO">
                      <div class="sc-dBAPYN dCnIzC">
                        <div
                          fontSize="20px"
                          id="bullet-list-7a02bc1d"
                          class="sc-eqPNPO iSsPyH"
                        >
                          <div>
                            <ul>
                              <li>
                                <i
                                  class="fas fa-badge-dollar"
                                  style={{
                                    fontSize: "25px",
                                    color: "rgba(5, 150, 56, 1)",
                                    marginLeft: "-25px",
                                    marginRight: "10px",
                                  }}
                                ></i>
                                <span>
                                  <strong>Bonus #1:</strong>
                                  <strong>
                                    Life Time Access To Green Masterclass
                                  </strong>
                                  <span style={{ color: "rgba(252, 4, 4, 1)" }}>
                                    <strong>(Value $2499)</strong>
                                  </span>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="sc-dBAPYN dCnIzC">
                        <div
                          fontSize="20px"
                          id="bullet-list-757fa94a"
                          class="sc-eqPNPO dkChsE"
                        >
                          <div>
                            <ul>
                              <li>
                                <i
                                  class="fad fa-chevron-double-right"
                                  style={{
                                    fontSize: "16px",
                                    color: "rgba(248, 1, 1, 1)",
                                    marginLeft: "-25px",
                                    marginRight: "10px",
                                  }}
                                ></i>
                                <span>
                                  You only pay once &amp; get access to all
                                  future updates of the Green Master class
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sc-dBAPYN fqypMR">
                  <div id="row-6baa00b4" class="sc-ecaExY cafPcw">
                    <div size="12" class="sc-dKEPtC feucMO">
                      <div class="sc-dBAPYN dCnIzC">
                        <div
                          fontSize="20px"
                          id="bullet-list-64e64ee1"
                          class="sc-eqPNPO knUQhY"
                        >
                          <div>
                            <ul>
                              <li>
                                <i
                                  class="fas fa-badge-dollar"
                                  style={{
                                    fontSize: "25px",
                                    color: "rgba(5, 150, 56, 1)",
                                    marginLeft: "-25px",
                                    marginRight: "10px",
                                  }}
                                ></i>
                                <span>
                                  <strong>Bonus #2:</strong>
                                  <strong>Weekly Masterminds</strong>
                                  <span style={{ color: "rgba(250, 2, 2, 1)" }}>
                                    <strong>(Value $997)</strong>
                                  </span>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="sc-dBAPYN dCnIzC">
                        <div
                          fontSize="20px"
                          id="bullet-list-44552541"
                          class="sc-eqPNPO kVLeXJ"
                        >
                          <div>
                            <ul>
                              <li>
                                <i
                                  class="fad fa-chevron-double-right"
                                  style={{
                                    fontSize: "16px",
                                    color: "rgba(248, 1, 1, 1)",
                                    marginLeft: "-25px",
                                    marginRight: "10px",
                                  }}
                                ></i>
                                <span>
                                  You will get a chance to get your burning
                                  questions answered each week so you don't have
                                  to wonder if you're 'doing it right'
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sc-dBAPYN gJcyJA">
                  <div
                    id="text-6ea590c2"
                    fontSize="53"
                    font-family="Inter"
                    color="rgba(19, 25, 33, 1)"
                    class="sc-cpmKsF ccQTjX"
                  >
                    <div >
                      <p dir="ltr">
                        <strong>Total value: <s>$4904</s></strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="sc-dBAPYN rWrqx">
                  <div
                    id="text-a99fd351"
                    fontSize="58"
                    font-family="Inter"
                    color="rgba(19, 25, 33, 1)"
                    class="sc-cpmKsF bAuBOt"
                  >
                    <div>
                      <p dir="ltr">
                        <span style={{ color: "rgba(29, 191, 115, 1)" }}>
                          <strong>Today just $49</strong>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="sc-dBAPYN hbeeed">
                  <div
                    id="text-ea36076b"
                    fontSize="18"
                    font-family="Inter"
                    color="rgba(19, 25, 33, 1)"
                    class="sc-cpmKsF jKtTsX"
                  >
                    <div>
                      <p dir="ltr">Prices increasing soon - act now!</p>
                    </div>
                  </div>
                </div>
                <div class="sc-dBAPYN fqypMR">
                  <div id="row-d4f57eb2" class="sc-ecaExY eyGHSi">
                    <div size="12" class="sc-dKEPtC feucMO"></div>
                  </div>
                </div>
                <div class="sc-dBAPYN fqypMR">
                  <div id="row-963cc22b" class="sc-ecaExY kkMdFg">
                    <div size="2" class="sc-dKEPtC gEkDEF">
                      <div class="sc-fgrSAo JPDBP">
                        <div class="sc-exkUMo bAJcVv">
                          <picture class="sc-kcDeIU zPRU">
                            <img
                              id="image-89ac1538"
                              src="https://d1yei2z3i6k35z.cloudfront.net/161/634fceed5d5e1_Group.png"
                              width="38"
                              loading="lazy"
                              class="sc-cBdUnI fqJofw"
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                    <div size="10" class="sc-dKEPtC TMfVx">
                      <div class="sc-dBAPYN cpEgFH">
                        <div
                          id="text-362e8c8d"
                          fontSize="20"
                          font-family="Inter"
                          color="rgba(19, 25, 33, 1)"
                          class="sc-cpmKsF cwFSNp"
                        >
                          <div>
                            <p dir="ltr">
                              <span style={{ color: "rgba(10, 35, 51, 1)" }}>
                                <strong>Secure checkout</strong>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sc-dBAPYN fqypMR">
                  <div id="row-d8a5833d" class="sc-ecaExY kCBCNj">
                    <div size="2" class="sc-dKEPtC gEkDEF">
                      <div class="sc-fgrSAo JPDBP">
                        <div class="sc-exkUMo bAJcVv">
                          <picture class="sc-kcDeIU cQYpoG">
                            <img
                              id="image-1a590e94"
                              src="https://d1yei2z3i6k35z.cloudfront.net/161/634fcefe0b2b3_Vector.png"
                              width="32"
                              loading="lazy"
                              class="sc-cBdUnI cgMhDR"
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                    <div size="10" class="sc-dKEPtC TMfVx">
                      <div class="sc-dBAPYN cpEgFH">
                        <div
                          id="text-1ddd1cbf"
                          fontSize="20"
                          font-family="Inter"
                          color="rgba(19, 25, 33, 1)"
                          class="sc-cpmKsF cwFSNp"
                        >
                          <div>
                            <p dir="ltr">
                              <span style={{ color: "rgba(10, 35, 51, 1)" }}>
                                <strong>100% money back guarantee</strong>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CheckoutLandingPage;
