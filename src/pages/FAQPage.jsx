import React, { useState } from "react";
import { Link } from "react-router-dom";
import GetStartedButton from "../components/GetStartedButton";
function FAQPage() {
  const faqData = [
    {
      question: "Are You A Fiverr Freelancer Yourself?",
      answer:
        "Yes, my account is Softriver, and I’m one of the top 10 selling accounts on Fiverr.",
    },
    {
      question: "Can These Tips Be Found Elsewhere?",
      answer:
        "Very few people reach my level on Fiverr, and those at the top don’t want to share what works for them. So you’re guaranteed to get tips you’ve never heard before. And actual top-level strategies.",
    },
    {
      question: "Can This Be Applied To Every Niche?",
      answer: "Yes, you can apply my strategies in any Fiverr Niche.",
    },
    {
      question: "Can Anyone Reach 10K$/month?",
      answer:
        "Yes, absolutely, if you implement my teachings effectively. And you master your offer, you will reach 10k$/month, Guaranteed.",
    },
    {
      question: "What Happens If I Am Not Happy With The Course?",
      answer:
        "Investing in a course to grow your Fiverr account is a big decision, and we understand that. But with the \"Green Master className,\" we're excited to share the potential benefits that await you. In the best-case scenario, over the next 30 days, you'll have access to expert guidance on optimizing your Fiverr account. You'll learn how to get more orders, increase your revenue, and establish systems that will enable you to continue making progress every month. In addition, you'll gain new skills and a ton of confidence that will help you succeed as a freelancer on Fiverr. We understand that this course might not be the perfect fit for everyone. That's why we offer a 100% refund within the first 14 days, you must have completed the course. You'll get to keep all the materials we covered, and you'll have learned something valuable that you can take with you even if the course isn't for you. We're confident that the \"Green Master className\" will be a valuable investment in your future as a freelancer on Fiverr, but ultimately the decision is yours. If you're ready to take the first step towards optimizing your Fiverr account, we're here to guide and support you.",
    },
  ];

  const [isOpen, setIsOpen] = useState(Array(faqData.length).fill(false));
  const toggleDropdown = (index) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = !updatedIsOpen[index];
    setIsOpen(updatedIsOpen);
  };
  return (
    <div className="sc-dBAPYN fxUrOW">
      <section id="section-b494c581" className="sc-jMMfwr eRMfaQ">
        <div width="medium" className="sc-jqIZGH IMzHD">
          <div className="sc-dBAPYN hLyXbM">
            <div id="row-067ceffc" className="sc-ecaExY vVorD">
              <div size="12" className="sc-dKEPtC feucMO">
                <div className="sc-dBAPYN bEbKta">
                  <div
                    id="text-67912382"
                    fontSize="63"
                    fontFamily="Inter"
                    color="rgba(0, 0, 0, 1)"
                    className="sc-cpmKsF irwRHU"
                  >
                    <div>
                      <p dir="ltr">
                        <span style={{ color: "rgba(255, 255, 255, 1)" }}>
                          <strong>Frequently Asked Questions</strong>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`sc-dBAPYN hLyXbM ${isOpen[index] ? "open" : ""}`}
            >
              <div
                id="row-23cdc900"
                className="sc-ecaExY dJXCCn"
                onClick={() => toggleDropdown(index)}
              >
                <div size="12" className="sc-dKEPtC feucMO">
                  <div className="sc-dBAPYN eBFyOD">
                    <div id={`faq-${index}`} className="sc-lnmtFM cpLXsY">
                      <div className="sc-kEmuub kxRkdS">
                        <div
                          fontSize="25"
                          color="rgba(255, 255, 255, 1)"
                          fontFamily="Inter"
                          fontStyle="normal"
                          fontWeight="700"
                          className="sc-iuDHTM grGVKm"
                        >
                          {item.question}
                          <i
                            className={`sc-erNlkL jVfFCS fas fa-chevron-circle-${
                              isOpen[index] ? "down" : "up"
                            }`}
                            onClick={() => toggleDropdown(index)}
                          ></i>
                        </div>
                        {isOpen[index] && (
                          <div className="sc-FQuPU fDKUlRs">
                            <div className="sc-dBAPYN eBFyOD">
                              <div
                                id={`text-${index}`}
                                fontSize="17"
                                fontFamily="Inter"
                                color="rgba(0, 0, 0, 1)"
                                className="sc-cpmKsF kUoOsQ"
                              >
                                <div>
                                  <p dir="ltr">
                                    <span
                                      style={{
                                        color: "rgba(224, 224, 224, 1)",
                                      }}
                                    >
                                      {item.answer}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="sc-dBAPYN hLyXbM">
            <div id="row-d264b41e" className="sc-ecaExY vVorD">
              <div size="12" className="sc-dKEPtC feucMO">
                {/* <div className="sc-dBAPYN ifMKoD faq_button">
                  <button
                    id="button-d2fdc22a"
                    fontFamily="Oswald"
                    className="sc-cvbbAY iqlUUc"
                  >
                    <div className="sc-jWBwVP gvUqdv ">
                      <Link to={"/checkout-b"} style={{ color: "white" }}>
                        GET STARTED ON FIVERR WITH $49
                      </Link>
                    </div>
                  </button>
                </div> */}
                <GetStartedButton/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQPage;
