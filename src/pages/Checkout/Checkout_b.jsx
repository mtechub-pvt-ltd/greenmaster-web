import React from 'react'
import CheckOutPageNav from './CheckOutPageNav'
import '../../css/CheckoutPage.css'
import CheckoutLandingPage from './CheckoutLandingPage'
import SuccessWall from './SuccessWall'
import CheckoutFAQPage from './CheckoutFAQPage'
import FooterPage from '../FooterPage'
function Checkout_b() {
  return (
    <div>
      <CheckOutPageNav/>
      <CheckoutLandingPage/>
      <SuccessWall/>
      <CheckoutFAQPage/>
      <FooterPage/>
    </div>
  )
}

export default Checkout_b