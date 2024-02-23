import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import GetStartedButton from "../components/GetStartedButton";
function LandingPage() {
  useEffect(() => {
    // Load the Wistia scripts asynchronously
    const script1 = document.createElement("script");
    script1.src = "https://fast.wistia.com/embed/medias/cw55qne4sy.jsonp";
    script1.async = true;

    const script2 = document.createElement("script");
    script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script2.async = true;

    // Append the scripts to the document body
    document.body.appendChild(script1);
    document.body.appendChild(script2);

    // Clean up when the component unmounts
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);
  return (
    <div className="sc-dBAPYN ewndZE">
      <section id="section-3b44c8e0" className="sc-jMMfwr iyFAYq">
        <div width="medium" className="sc-jqIZGH IMzHD">
          <div className="sc-dBAPYN hLyXbM">
            <div id="row-63860de5" className="sc-ecaExY vVorD">
              <div size="12" className="sc-dKEPtC feucMO">
                <div className="sc-fgrSAo hoyOou">
                  <div className="sc-exkUMo byxgdE">
                    <picture className="sc-kcDeIU gZdYgC">
                      <img
                        id="image-430e1e9d"
                        src="https://d1yei2z3i6k35z.cloudfront.net/3611194/641ae3bddd2cf_c13392d5c32a0e32f1a78e1988b985fa1.png"
                        width="158"
                        loading="lazy"
                        className="sc-cBdUnI FRXuq"
                      />
                    </picture>
                  </div>
                </div>
                <div className="sc-fgrSAo ldOCQn">
                  <div
                    id="headline-3c814393"
                    fontSize="70"
                    fontFamily="Oswald"
                    fontStyle="normal"
                    fontWeight="400"
                    letterSpacing="-4"
                    className="sc-cpmKsF eXnyeP"
                  >
                    <p dir="ltr">
                      <span style={{ color: "rgba(255, 255, 255, 1)" }}>
                        <strong>
                          THE "FOOLPROOF" FORMULA TO MAKING $10K PER MONTH ON
                          FIVERR
                        </strong>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="sc-dBAPYN eXggVH">
                  <div
                    id="text-31a9eb58"
                    fontSize="24"
                    fontFamily="Inter"
                    color="rgba(0, 0, 0, 1)"
                    className="sc-cpmKsF iKudco"
                  >
                    <div>
                      <p dir="ltr">
                        <span style={{ color: "rgba(224, 222, 222, 1)" }}>
                          Master the methods I use to generate over{" "}
                        </span>
                        <span style={{ color: "rgba(224, 222, 222, 1)" }}>
                          <strong>100k$+ </strong>
                        </span>
                        <span style={{ color: "rgba(224, 222, 222, 1)" }}>
                          every month on Fiverr. And how you can too - In any
                          niche - even as a beginner
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="sc-dBAPYN XsYtG">
                  <div className="sc-hRmvpr fgUnlS">
                    <div
                      className="wistia_responsive_padding"
                      style={{ padding: "56.25% 0 0 0", position: "relative" }}
                    >
                      <div
                        className="wistia_responsive_wrapper"
                        style={{
                          height: "100%",
                          left: 0,
                          position: "absolute",
                          top: 0,
                          width: "100%",
                        }}
                      >
                        {/* <div
                          className="wistia_embed wistia_async_cw55qne4sy videoFoam=true"
                          style={{
                            height: "100%",
                            position: "relative",
                            width: "100%",
                          }}
                        > */}

                        {/* <div
                            className="wistia_swatch"
                            style={{
                              height: "100%",
                              left: 0,
                              opacity: 0,
                              overflow: "hidden",
                              position: "absolute",
                              top: 0,
                              transition: "opacity 200ms",
                              width: "100%",
                            }}
                          > */}
                        {/* <img
                              src="https://fast.wistia.com/embed/medias/cw55qne4sy/swatch"
                              style={{
                                filter: "blur(5px)",
                                height: "100%",
                                objectFit: "contain",
                                width: "100%",
                              }}
                              alt=""
                              aria-hidden="true"
                              onLoad={(e) => {
                                e.target.parentNode.style.opacity = 1;
                              }}
                            /> */}
                        {/* </div> */}
                        {/* </div> */}
                        <div
                          class="voomly-embed"
                          data-id="FBy_BYMFiR3E0hXUilg7R91Qu79qEIlOkdpYwzuHaqAM0MZ8R"
                          data-ratio="1.777778"
                          data-type="v"
                          data-skin-color="#008EFF"
                          style={{
                            width: "100%",
                            aspectRatio: "1.77778 / 1",
                            background:
                              "linear-gradient(45deg, rgb(142, 150, 164) 0%, rgb(201, 208, 222) 100%)",
                            borderRadius: "10px",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sc-dBAPYN hLyXbM">
            <div id="row-9f0e067f" className="sc-ecaExY vVorD">
              <div size="12" className="sc-dKEPtC feucMO">
                <GetStartedButton/>
                {/* <div className="sc-dBAPYN iTtzpD">
                  <div className="sc-eInJlc jIonjU" style={{
                    display:'flex',
                    justifyContent:'center',
                    

                  }}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email adress"
                      // value={formik.values.email}
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                      id="form-input-396fa467"
                      className="sc-kasBVs hrJCwI strong_class"
                    />

                  </div>
                </div>

                <div className="sc-dBAPYN iTtzpD">
                  <button
                    id="button-772cd149"
                    fontFamily="Oswald"
                    className="sc-cvbbAY iqlUUc"
                  >
                    <div className="sc-jWBwVP gvUqdv">
                      <Link to={"/checkout-b"} style={{ color: "white" }}>
                        GET STARTED ON FIVERR WITH $49
                      </Link>
                    </div>
                  </button>
                </div> */}
                <div className="sc-dBAPYN jbsGVC">
                  <div
                    id="text-6dcef752"
                    fontSize="26"
                    fontFamily="Inter"
                    color="rgba(0, 0, 0, 1)"
                    className="sc-cpmKsF jcMOnS"
                  >
                    <div>
                      <p dir="ltr">
                        <span style={{ color: "rgba(30, 210, 80, 1)" }}>
                          *ATTENTION* Just 10 Spots Left For $100 Off
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sc-dBAPYN hNsDyw">
                  <div className="sc-hRmvpr fgUnlS">
                   

                    {/* <style>
                    .attachment-full-size-full {
                      transform: translate(0px, 0px);
                      vertical-align: middle;
                    }
                  </style> */}
                  </div>
                </div>
                <div className="sc-dBAPYN brzuu">
                  <div className="sc-hRmvpr fgUnlS">
                    <img
                      width="250"
                      height="20"
                      src="https://images.selllikecrazybook.com/2019/10/stock-levels.gif"
                      className="attachment-full-size-full"
                      alt=""
                      loading="lazy"
                    />

                    {/* <style>
                    .attachment-full-size-full {
                      transform: translate(0px, 0px);
                      vertical-align: middle;
                    }
                  </style> */}
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

export default LandingPage;
