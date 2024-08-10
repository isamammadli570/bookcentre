import React from 'react'
import Hero from '../../components/Hero'
import BestBooks from '../../components/BestBooks'
import Banner from '../../components/Banner'
import AllBooks from '../../components/AllBooks'
import Testimotional from '../../components/Testimotional'
import AppStoreBanner from '../../components/AppStoreBanner'

function Home({ handleOrderPopup, orderPopup }) {
  return (
    <div>
        <Hero handleOrderPopup={handleOrderPopup} />
      <BestBooks handleOrderPopup={handleOrderPopup} />
      <Banner />
      <AppStoreBanner />
      <AllBooks />
      <Testimotional />
    </div>
  )
}

export default Home