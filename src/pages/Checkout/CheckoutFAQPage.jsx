import React, { useState } from 'react'

function CheckoutFAQPage() {
    const faqData = [
        {
          question: "Are you a Fiverr Freelancer Yourself?",
          answer: "Yes! My account is Softriver which I created in 20220. Now a top 10 selling account on Fiverr. For the past 3 years I’ve been mastering the strategies & techniques I used to go from $0 to $100k consistently every single month."
        },
        {
          question: "Can this be applied to every niche?",
          answer: "Absolutely! The strategies, tips and techniques I walk you through in Green Masterclass can be used for any niche. I help you create an irresistible gig, boost visibility, reach page 1 and attract regular clients all whilst maintaining high value. Plus I teach you how to master Fiverr’s algorithm so you know you’re creating an offer that will sell."
        },
        {
            question: "Can Anyone Reach 10K$/month?",
            answer: "100%. These are the exact methods I used &amp; put into place to reach not just $10k but $100k months! And I am constantly updating and improving the strategies &amp; tips I teach as Fiverr advances.So if you implement everything that you learn in Green Masterclass effectively, in no time at all, you’ll have clients begging to work with you."
          },
          {
            question: "​What Happens If I Am Not Happy With The Course?",
            answer: `Investing in a course to grow your Fiverr account is a big decision, and we understand that. But with the "Green Master Class," we're excited to share the potential benefits that await you. In the best-case scenario, over the next 30 days, you'll have access to expert guidance on optimizing your Fiverr account. You'll learn how to get more orders, increase your revenue, and establish systems that will enable you to continue making progress every month. In addition, you'll gain new skills and a ton of confidence that will help you succeed as a freelancer on Fiverr.We understand that this course might not be the perfect fit for everyone. That's why we offer a 100% refund within the first 14 days, no questions asked. You'll get to keep all the materials we covered, and you'll have learned something valuable that you can take with you even if the course isn't for you.We're confident that the "Green Master Class" will be a valuable investment in your future as a freelancer on Fiverr, but ultimately the decision is yours. If you're ready to take the first step towards optimizing your Fiverr account, we're here to guide and support you.`
          },
          {
            question: "Can These Tips Be Found On Youtube? ",
            answer: "Most of the advice people give on youtube about Fiverr is very surface level. They haven’t got much social proof that their methods work and that’s usually because they have no idea how the platform actually works.There’s no one out there who’s a top seller on Fiverr, that’s giving out any advice or teachings about how they did it &amp; what strategies they use. This was one of the reasons I wanted to create Green Masterclass in the first place!I went from nothing to earning over $100K in monthly revenue on Fiverr alone, and that figure is only going up. I spent hours of in depth research to understand exactly how the algorithm works, how you can trigger it, strategies to keep your gig on page 1, how to boost your visibility and attract regular clients every month. I can honestly say these are top level strategies that have made me millions. What’s more, I’ve seen these methods work for my students time and time again. So I know if you implement them and follow this coaching effectively, in no time at all, you’ll see these strategies and techniques making you an amazing income as well."
          },
        // Add more FAQ items here
      ];
    
      const [openQuestions, setOpenQuestions] = useState([]);
    
      const toggleQuestion = (index) => {
        if (openQuestions.includes(index)) {
          // If the question is open, close it
          setOpenQuestions(openQuestions.filter((i) => i !== index));
        } else {
          // If the question is closed, open it
          setOpenQuestions([...openQuestions, index]);
        }
      };
  return (
  
//     <div class="sc-dBAPYN kihsHm">
//     <section id="section-12b8e388" class="sc-jMMfwr kUMzrU">
//       <div width="medium" class="sc-jqIZGH IMzHD">
//         <div class="sc-dBAPYN fqypMR">
//           <div id="row-a7cb9b84" class="sc-ecaExY vVorD">
//             <div size="12" class="sc-dKEPtC feucMO">
//               <div class="sc-dBAPYN fqypMR">
//                 <div id="row-4dd4800e" class="sc-ecaExY iRwMpr">
//                   <div size="12" class="sc-dKEPtC feucMO">
//                     <div class="sc-fgrSAo dQZFgi">
//                       <div id="headline-11d854e0" font-size="58" color="rgba(19, 25, 33, 1)" font-family="Inter" font-style="normal" font-weight="700" class="sc-cpmKsF dCxSnK">
//                         <p dir="ltr">Still Have More Questions?</p>
//                       </div>
//                     </div>
//                     <div class="sc-dBAPYN bBniKk">
//                       <div id="text-6622a072" font-size="18" font-family="Inter" color="rgba(19, 25, 33, 1)" class="sc-cpmKsF kwFylw">
//                         <div>
//                           <p dir="ltr">Don't Worry If You Still Have Unanswered Questions. We've Put Together A List Of The Most Commonly Asked Questions By Students</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div class="sc-dBAPYN bUBICy">
//                 <div id="faq-38a2eddb" class="sc-lnmtFM kIPBAA">
//                   <div class="sc-kEmuub kjXtHL">
//                     <div font-size="19" color="rgba(24, 24, 24, 1)" font-family="Inter" font-style="normal" font-weight="700" class="sc-iuDHTM isoMfa">Are you a Fiverr Freelancer Yourself? <i class="sc-erNlkL fbqmBU far fa-plus"></i></div>
//                     <div class="sc-FQuPU fDKUlR">
//                       <div class="sc-dBAPYN kuqWjD">
//                         <div id="text-a14bb2f9" font-size="17" font-family="Inter" color="rgba(19, 25, 33, 1)" class="sc-cpmKsF wVosc">
//                           <div>
//                             <p dir="ltr">Yes! My account is Softriver which I created in 20220. Now a top 10 selling account on Fiverr. For the past 3 years I’ve been mastering the strategies &amp; techniques I used to go from $0 to $100k consistently every single month.</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div class="sc-dBAPYN bUBICy">
//                                                    <div id="faq-e804e9ce" class="sc-lnmtFM kIPBAA">
//                                                         <div class="sc-kEmuub kjXtHL">
//                                                             <div font-size="19" color="rgba(24, 24, 24, 1)" font-family="Inter" font-style="normal" font-weight="700" class="sc-iuDHTM isoMfa">Can this be applied to every niche? <i class="sc-erNlkL fbqmBU far fa-plus"></i>
//                                                             </div>
//                                                             <div class="sc-FQuPU fDKUlR">
//                                                                 <div class="sc-dBAPYN kuqWjD">
//                                                                     <div id="text-8c1aaf95" font-size="17" font-family="Inter" color="rgba(19, 25, 33, 1)" class="sc-cpmKsF wVosc">
//                                                                        <div>
//                                                                              <p dir="ltr">Absolutely! The strategies, tips and techniques I walk you through in Green Masterclass can be used for any niche. I help you create an irresistible gig, boost visibility, reach page 1 and attract regular clients all whilst maintaining high value. Plus I teach you how to master Fiverr’s algorithm so you know you’re creating an offer that will sell.</p>
//                                                                          </div>
//                                                                      </div>
//                                                                  </div>
//                                                              </div>
//                                                          </div>
//                                                      </div>
//                                                  </div>
//                                                  <div class="sc-dBAPYN bUBICy">
//                                                     <div id="faq-eb8c34ed" class="sc-lnmtFM kIPBAA">
//                                                          <div class="sc-kEmuub kjXtHL">
//                                                             <div font-size="19" color="rgba(24, 24, 24, 1)" font-family="Inter" font-style="normal" font-weight="700" class="sc-iuDHTM isoMfa">Can Anyone Reach 10K$/month? <i class="sc-erNlkL fbqmBU far fa-plus"></i>
//                                                              </div>
//                                                              <div class="sc-FQuPU fDKUlR">
//                                                                  <div class="sc-dBAPYN kuqWjD">
//                                                                      <div id="text-a7e6e8d2" font-size="17" font-family="Inter" color="rgba(19, 25, 33, 1)" class="sc-cpmKsF wVosc">
//                                                                         <div>
//                                                                              <p dir="ltr">100%. These are the exact methods I used &amp; put into place to reach not just $10k but $100k months! And I am constantly updating and improving the strategies &amp; tips I teach as Fiverr advances.</p>
//                                                                             <p dir="ltr">So if you implement everything that you learn in Green Masterclass effectively, in no time at all, you’ll have clients begging to work with you.</p>
//                                                                         </div>
//                                                                    </div>
//                                                                </div>
//                                                            </div>
//                                                       </div>
//                                                    </div>
//                                                </div>
//                                               <div class="sc-dBAPYN bPRvVi">
//                                               <div id="faq-eed9ec1b" class="sc-lnmtFM kIPBAA">
//   <div class="sc-kEmuub kjXtHL">
//     <div font-size="19" color="rgba(24, 24, 24, 1)" font-family="Inter" font-style="normal" font-weight="700" class="sc-iuDHTM isoMfa">What Happens If I Am Not Happy With The Course? <i class="sc-erNlkL fbqmBU far fa-plus"></i>
//     </div>
//     <div class="sc-FQuPU fDKUlR">
//       <div class="sc-dBAPYN kuqWjD">
//         <div id="text-132b040f" font-size="17" font-family="Inter" color="rgba(19, 25, 33, 1)" class="sc-cpmKsF wVosc">
//           <div>
//             {/* <p dir="ltr">Investing in a course to grow your Fiverr account is a big decision, and we understand that. But with the "Green Master Class," we're excited to share the potential benefits that await you. <br>
//               <br> In the best-case scenario, over the next 30 days, you'll have access to expert guidance on optimizing your Fiverr account. You'll learn how to get more orders, increase your revenue, and establish systems that will enable you to continue making progress every month. In addition, you'll gain new skills and a ton of confidence that will help you succeed as a freelancer on Fiverr. </br>
//               <br> We understand that this course might not be the perfect fit for everyone. That's why we offer a 100% refund within the first 14 days, no questions asked. You'll get to keep all the materials we covered, and you'll have learned something valuable that you can take with you even if the course isn't for you.
//             </p> */}
//             <p dir="ltr">We're confident that the "Green Master Class" will be a valuable investment in your future as a freelancer on Fiverr, but ultimately the decision is yours. If you're ready to take the first step towards optimizing your Fiverr account, we're here to guide and support you.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//                                              <div class="sc-dBAPYN cTejSX">
//                                                 <div id="faq-364ebbe1" class="sc-lnmtFM kIPBAA">
//                                                     <div class="sc-kEmuub kjXtHL">
//                                                         <div font-size="19" color="rgba(24, 24, 24, 1)" font-family="Inter" font-style="normal" font-weight="700" class="sc-iuDHTM isoMfa">Can These Tips Be Found On Youtube? <i class="sc-erNlkL fbqmBU far fa-plus"></i>
//                                                             </div>
//                                                            <div class="sc-FQuPU fDKUlR">
//                                                                <div class="sc-dBAPYN kuqWjD">
//                                                                   <div id="text-f6300d01" font-size="17" font-family="Inter" color="rgba(19, 25, 33, 1)" class="sc-cpmKsF wVosc">
//                                                                       <div>
//                                                                           <p dir="ltr">Most of the advice people give on youtube about Fiverr is very surface level. They haven’t got much social proof that their methods work and that’s usually because they have no idea how the platform actually works.</p>
//                                                                            <p dir="ltr">There’s no one out there who’s a top seller on Fiverr, that’s giving out any advice or teachings about how they did it &amp; what strategies they use. This was one of the reasons I wanted to create Green Masterclass in the first place!</p>
//                                                                             <p dir="ltr">I went from nothing to earning over $100K in monthly revenue on Fiverr alone, and that figure is only going up. I spent hours of in depth research to understand exactly how the algorithm works, how you can trigger it, strategies to keep your gig on page 1, how to boost your visibility and attract regular clients every month. I can honestly say these are top level strategies that have made me millions. What’s more, I’ve seen these methods work for my students time and time again. So I know if you implement them and follow this coaching effectively, in no time at all, you’ll see these strategies and techniques making you an amazing income as well.</p>
//                                                                          </div>
//                                                                      </div>
//                                                                  </div>
//                                                              </div>
//                                                          </div>
//                                                      </div>
//                                                  </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//     </section>
//   </div>
<div className="sc-dBAPYN kihsHm">
<section id="section-12b8e388" class="sc-jMMfwr kUMzrU">
       <div width="medium" class="sc-jqIZGH IMzHD">
        <div class="sc-dBAPYN fqypMR">
          <div id="row-a7cb9b84" class="sc-ecaExY vVorD">
            <div size="12" class="sc-dKEPtC feucMO">
              <div class="sc-dBAPYN fqypMR">
                <div id="row-4dd4800e" class="sc-ecaExY iRwMpr">
                  <div size="12" class="sc-dKEPtC feucMO">
                     <div class="sc-fgrSAo dQZFgi">
                     <div id="headline-11d854e0" font-size="58" color="rgba(19, 25, 33, 1)" font-family="Inter" font-style="normal" font-weight="700" class="sc-cpmKsF dCxSnK">
                         <p dir="ltr">Still Have More Questions?</p>
                       </div>
                    </div>
                    <div class="sc-dBAPYN bBniKk">
                     <div id="text-6622a072" font-size="18" font-family="Inter" color="rgba(19, 25, 33, 1)" class="sc-cpmKsF kwFylw">
                        <div>
                          <p dir="ltr">Don't Worry If You Still Have Unanswered Questions. We've Put Together A List Of The Most Commonly Asked Questions By Students</p>
                        </div>
                      </div>
                    </div>
                   </div>
                 </div>
             </div>
{faqData.map((faq, index) => (
  <div className="sc-dBAPYN bUBICy" key={index}>
    <div className="sc-lnmtFM kIPBAA" onClick={() => toggleQuestion(index)}>
      <div className="sc-kEmuub kjXtHL">
        <div className="sc-iuDHTM isoMfa">
          {faq.question}{' '}
          <i className={`sc-erNlkL fbqmBU far fa-${openQuestions.includes(index) ? 'minus' : 'plus'}`}></i>
        </div>
        {openQuestions.includes(index) && (
      <div className="sc-FQuPU fDKUlRs">
        <div className="sc-dBAPYN kuqWjD">
          <div className="sc-cpmKsF wVosc">
            <div>
              {faq.answer}
            </div>
          </div>
        </div>
      </div>
    )}
      </div>
     
    </div>
   
  </div>
))}
</div>
</div>
</div>
</div>
</section>
</div>
                 
  )
}

export default CheckoutFAQPage