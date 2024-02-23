import React from 'react'
import LandingPage from './LandingPage'
import StatsPage from './StatsPage'
import ReviewPage from './ReviewPage'
import FiverrEverestPage from './FiverrEverestPage'
import MasterpiecePage from './MasterpiecePage'
import TopSellingPage from './TopSellingPage'
import BonusPage from './BonusPage'
import SummaryPage from './SummaryPage'
import GuaranteePage from './GuaranteePage'
import CollectivePage from './CollectivePage'
import FAQPage from './FAQPage'
import FooterPage from './FooterPage'
import '../css/LandingPage.css'
function Home() {
  return (
    <>
     <LandingPage/>
      <StatsPage/>
      <ReviewPage/>
      <FiverrEverestPage/>
      <MasterpiecePage/>
      <TopSellingPage/>
      <BonusPage/>
      <SummaryPage/>
      <GuaranteePage/>
      <CollectivePage/>
      <FAQPage/>
      <FooterPage/>
      </>
  )
}

export default Home